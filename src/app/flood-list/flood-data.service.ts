import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { floodStationListItem } from './flood-station-list-item.modal';
import { stationList } from './flood-station-list.modal';
import { FloodListStationDetailComponent } from './flood-list-station/flood-list-station-detail/flood-list-station-detail.component';
import { StationDetail } from './stationDetail.modal';


@Injectable({
  providedIn: 'root'
})
export class FloodDataService {


  private listOfFloodStations: stationList;
  private stationDetail: StationDetail;
  public stationListSubject = new Subject<stationList>();
  public stationDetailSubject = new Subject<StationDetail>();

  constructor(private http: HttpClient) { }

  public setStationList(list: stationList){
    console.log("Got: " + list.items.length);
    this.listOfFloodStations=list;

    this.stationListSubject.next(); //raise an event on the stationList;

  }
  public getStationList(){
    return this.listOfFloodStations;
  }
  public getStationDetail(){
    return this.stationDetail;
  }

  public setStationDetail(stationDetail: StationDetail){
    this.stationDetail=stationDetail;
    this.stationDetailSubject.next(); //raise an event on the stationList;
  }

  public fetchStationList(){
    console.log("getStationList: Fetching results");
      return this.http
            .get<stationList>(
              'https://environment.data.gov.uk/flood-monitoring/id/stations?type=TideGauge&unitName=mAOD'
            )
            .pipe(
                catchError(this.handleError),
                tap(thisList =>{
                  this.setStationList(thisList);
                })
            );

  }

  public fetchSearchStationList(strSearch: string){
    console.log("getStationList: Fetching Search results: " + 'https://environment.data.gov.uk/flood-monitoring/id/stations?search=' + strSearch + '&unitName=mAOD');
      return this.http
            .get<stationList>(
              'https://environment.data.gov.uk/flood-monitoring/id/stations?search='  + strSearch + '&unitName=mAOD'
            )
            .pipe(
                catchError(this.handleError),
                tap(thisList =>{
                  this.setStationList(thisList);
                })
            );

  }

  public fetchStationDetail(stationid: string){
    console.log("getStationDetail: Fetching results");

    return this.http
    .get<StationDetail>(
      'https://environment.data.gov.uk/flood-monitoring/id/stations/' + stationid + ".json"
    )
    .pipe(
        catchError(this.handleError),
        tap(thisStationDetail =>{
          console.log(thisStationDetail);
          this.setStationDetail(thisStationDetail);
        })
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.log("Error");
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
