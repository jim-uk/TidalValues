import { measures } from "./flood-station-list-item-measures.modal";

export class floodStationListItem{
  public id: string;
  public RLOIid: string;
  public catchmentName: string;
  public dateOpened: string;
  public easting: number;
  public gridReference: string;
  public label: string;
  public lat: number;
  public long: number;
  public measures: measures[];
  public northing: number
  public notation: string;
  public riverName: string;
  public stageScale: string;
  public stationReference: string;
  public status: string;
  public town: string
}
