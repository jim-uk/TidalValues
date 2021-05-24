export class StationDetail{
  public context: string;
  public items: stationDetailItems;
  public meta: stationDetailMeta;
}
export class stationDetailItems{
  public id: string;
  public RLOIid: string;
  public catchmentName: string;
  public dateOpened: string;
  public easting: number;
  public gridReference: string;
  public label: string;
  public lat: number;
  public long: number;
  public measures: stationDetailMeasures;
  public northing: number
  public notation: string;
  public riverName: string;
  public stageScale: string;
  public stationReference: string;
  public status: string;
  public town: string
}
export class stationDetailMeasures{
  public id: string;
  public datumType: string;
  public label: string;
  public latestReading: stationDetailMeasuresLatestReading;
  public localDatumMeasure: string;
  public notation: string;
  public parameter: string;
  public parameterName: string;
  public period: number;
  public qualifer: string;
  public station: string;
  public stationReference: string;
  public unit: string;
  public unitName: string;
  public valueType: string;
}
export class stationDetailMeasuresLatestReading{
  public id: string;
  public date: string;
  public dateTime: string;
  public measure: string;
  public value: number;
}
export class stationDetailMeta{
  public comment: string;
  public documentation: string;
  public license: string;
  public publisher: string;
  public version: string;
}
