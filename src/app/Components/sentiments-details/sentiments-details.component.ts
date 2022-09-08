import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataArrayClass, DateTimeDataClass, MonthEnum, SentimentDetailsClass } from 'src/app/Classes/model';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-sentiments-details',
  templateUrl: './sentiments-details.component.html',
  styleUrls: ['./sentiments-details.component.css']
})
export class SentimentsDetailsComponent implements OnInit {

  sentimentsDetails: SentimentDetailsClass = new SentimentDetailsClass();

  dataArray: DataArrayClass[] = new Array();
  sentimentsDetailsArray = new Array<number>(3);
  symbolName: string = '';

  constructor(private appService: AppService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.symbolName = params.get('symbol')!;
    })

    this.appService.getSentimentDetails(this.symbolName, this.appService.dateTimeData.fromDate,  this.appService.dateTimeData.toDate,  this.appService.dateTimeData.fromMonth,  this.appService.dateTimeData.toMonth,  this.appService.dateTimeData.fromYear,  this.appService.dateTimeData.toYear).subscribe((data) => {
      this.displayData(data);
    })
   
  }
  
  displayData(sentimentData: SentimentDetailsClass)
  {
    sentimentData.data.forEach(element => {
      let obj = new DataArrayClass();
      obj.change = element.change;
      obj.month = element.month;
      obj.mspr = element.mspr;
      obj.year = element.year;
      obj.symbol = element.symbol;
      this.dataArray.push(obj);
    });
    
    this.sentimentsDetails.data = this.dataArray;
    this.sentimentsDetails.symbol= this.symbolName;
  }

  getMonthName(monthNumber: number)
  {
    return MonthEnum[monthNumber];
  }

  setNoMonthData(index: number)
  {
    let month = '';
    let year = 0;
    if(this.sentimentsDetails.data.length > 0 && index > 0)
    {
      let prevMonth = this.sentimentsDetails.data[index-1].month;
      let prevYear = this.sentimentsDetails.data[index - 1].year;
      year = prevYear;
      let _nxtMonth: number = 0;
      console.log('prevMonth = ', prevMonth)
      if(prevMonth == 12)
      {
        _nxtMonth = 0o1;
        year = prevYear++;
      }
      else
      {
        _nxtMonth = prevMonth = prevMonth + 1;
      }
      month = MonthEnum[_nxtMonth];
    }
    else
    {
      let _month = this.appService.dateTimeData.toMonth+ index;
      year = this.appService.dateTimeData.toYear;
      if(_month > 12)
      {
        _month = 0o1;
        year = year + 1;
      }
      month = MonthEnum[_month];
    }
    return month + ' '+ year;
  }

}
