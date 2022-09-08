export class Model {
}

export class SymbolDataClass
{
    c = 0;
    d = 0;
    dp = 0;
    h = 0;
    l = 0;
    o = 0;;
    pc = 0;
    t = 0;
}

export class StockDataClass
{
    name: string = '';
    changePrice: number = 0;
    currentPrice: number = 0;
    openingPrice: number = 0;
    highPrice: number = 0;
    changePercentage: number = 0;
}

export class SentimentDetailsClass
{
    data: DataArrayClass[] = new Array();
    symbol: string = '';
}

export class DataArrayClass
{
    symbol: string = '';
    year: number = 0;
    month: number = 0;
    change: number = 0;
    mspr: number = 0;
}

export class DateTimeDataClass
{
    fromDate: number = 0;
    toDate: number = 0;
    fromMonth: number = 0;
    toMonth: number = 0;
    fromYear: number = 0;
    toYear: number = 0;
}

export enum MonthEnum
{
    Jan = 0o1,
    Feb = 0o2,
    April = 0o4,
    May = 0o5,
    June = 0o6,
    July = 0o7,
    Aug = 08,
    Sep = 09,
    Oct = 10,
    Nov = 11,
    Dec = 12
}

export class LookUpClass
{
    count: number = 0;
    result: ResultClass[] = new Array();
}

export class ResultClass
{
    description: string = '';
    displaySymbol: string = '';
    symbol: string = '';
    type: string = '';
}
