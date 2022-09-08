import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, window } from 'rxjs';
import { StockDataClass, SymbolDataClass } from 'src/app/Classes/model';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-search-symbol',
  templateUrl: './search-symbol.component.html',
  styleUrls: ['./search-symbol.component.css']
})
export class SearchSymbolComponent implements OnInit {

  symbolArray = new Array();
  selectedSymbol = '';
  symbolObj: SymbolDataClass = new SymbolDataClass();

  symbolForm!: FormGroup;
  constructor(public appService: AppService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if(localStorage.getItem('stocks_data'))
    {
      let jsonString = localStorage.getItem('stocks_data')
      this.appService.stockDataList = JSON.parse(jsonString || '{}' );
    }

    this.symbolForm = new FormGroup({
      symbol: new FormControl('')
    });

    this.symbolForm.get('symbol')?.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((_symbol) => {
      if(_symbol != '')
      {
        this.symbolArray = new Array();
        this.appService.getSymbolName(_symbol).subscribe((data) => {
          if(data)
          {
            data.result.forEach(element => {
              this.symbolArray.push(element.displaySymbol);
            });
          }
          else
          {
            alert('No Data, please enter some other value')
          }
        })
      }
    })
  }

  onSymbolClicked()
  {
    this.appService.loading = true;
    this.appService.getSymbolData(this.selectedSymbol).subscribe((data) => {
     if(data)
     {
      this.appService.symbolDataList.push(data);
      let obj = new StockDataClass();
      obj.name = this.selectedSymbol;
      obj.changePrice = data.c;
      obj.currentPrice = data.d;
      obj.highPrice = data.h;
      obj.openingPrice = data.o;
      obj.changePercentage = this.calculateChangePercentage(data.c, data.pc);
      this.appService.stockDataList.push(obj);
      this.resetData();
    }
    else
    {
      alert('No Data');
    }
  },
  (error) => {
    alert('No access, please contact admin!');
    this.resetData();
    })
  }

  calculateChangePercentage(currentValue: number, previousCloseValue: number)
  {
    return (currentValue - previousCloseValue) / previousCloseValue * 100;
  }
  
  removeStockFromList(symbol: string)
  {
    let index = this.appService.stockDataList.findIndex(obj => obj.name == symbol);
    this.appService.stockDataList.splice(index, 1);
    this.appService.symbolDataList.splice(index, 1);
    localStorage.setItem('stocks_data', JSON.stringify(this.appService.stockDataList));
  }

  resetData()
  {
    this.selectedSymbol = '';
    this.symbolForm.reset();
    this.symbolArray = new Array();
  }
}