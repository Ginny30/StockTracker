import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DateTimeDataClass, LookUpClass, SentimentDetailsClass, StockDataClass, SymbolDataClass } from '../Classes/model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  symbolDataList: SymbolDataClass[] = new Array();
  stockDataList: StockDataClass[] = new Array();
  dateTimeData: DateTimeDataClass = new DateTimeDataClass();
  loading: boolean = false;

  constructor(private httpClient: HttpClient) {
    this.GetCurrentDate();
   }

   getSymbolName(symbol: string)
   {
    return this.httpClient.get<LookUpClass>(`${environment.lookUpSymbolUrl}${symbol}&token=${environment.key}`);
   }

   getSymbolData(symbol: string)
   {
    return this.httpClient.get<SymbolDataClass>(`${environment.symbolUrl}symbol=${symbol}&token=${environment.key}`)
   }

   getSentimentDetails(symbol: string, fromDate: number, toDate: number, fromMonth: number, toMonth: number, fromYear: number, toYear: number)
   {
    return this.httpClient.get<SentimentDetailsClass>(`${environment.sentimentDetailsUrl}symbol=${symbol}&from=${fromYear}-${fromMonth}-${fromDate}&to=${toYear}-${toMonth}-${toDate}&token=${environment.key}`)
   }
   
   GetCurrentDate()
   {
    let currentTime = new Date();
    let fromMonth = currentTime.getMonth() + 1;
    let fromYear = currentTime.getFullYear();
    let toYear = fromYear;

    let toMonth = fromMonth - 2;
    if(toMonth < 1)
    {
      toMonth = 12 + toMonth;
      toYear = fromYear--;
    }

    this.dateTimeData.fromDate = +String(currentTime.getDate()).padStart(2, '0;');
    this.dateTimeData.toDate = this.dateTimeData.fromDate;
    this.dateTimeData.fromMonth = +String(fromMonth).padStart(2, '0;');
    this.dateTimeData.toMonth = +String(toMonth).padStart(2, '0;');
    this.dateTimeData.fromYear = fromYear;
    this.dateTimeData.toYear = toYear;

    // this.dateTimeData.fromDate = 10;
    // this.dateTimeData.toDate = 10;
    // this.dateTimeData.fromMonth = 10;
    // this.dateTimeData.toMonth = 12;
    // this.dateTimeData.fromYear = 2021;
    // this.dateTimeData.toYear = 2021;

   } 
}
