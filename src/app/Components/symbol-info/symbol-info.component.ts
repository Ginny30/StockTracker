import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { StockDataClass } from 'src/app/Classes/model';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-symbol-info',
  templateUrl: './symbol-info.component.html',
  styleUrls: ['./symbol-info.component.css']
})
export class SymbolInfoComponent implements OnInit,  AfterViewInit{

  constructor(private appService: AppService) { }

  ngAfterViewInit(): void {
    Promise.resolve().then(() =>this.appService.loading = false );
  } 

  @Input()
  symbolObj:StockDataClass =new StockDataClass();

  @Output()
  OnRemoveStockEvent = new EventEmitter();

  ngOnInit(): void {
    localStorage.setItem('stocks_data', JSON.stringify(this.appService.stockDataList));
  }

  onRemoveStockClick(symbolName: string)
  {
    this.OnRemoveStockEvent.emit(symbolName);
  }

}
