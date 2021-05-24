import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { FloodDataService } from './flood-data.service';
import { floodStationListItem } from './flood-station-list-item.modal';
import { stationList } from './flood-station-list.modal';

@Component({
  selector: 'app-flood-list',
  templateUrl: './flood-list.component.html',
  styleUrls: ['./flood-list.component.css']
})
export class FloodListComponent implements OnInit, OnDestroy{
  public listOfStations: stationList;
  public listOfStationsArray: floodStationListItem[];
  constructor(private flooddata: FloodDataService,     private route: ActivatedRoute,
    private router: Router) { }

  public loading: boolean =true;

  public fetchSub: Subscription;
  public stationListSub: Subscription;

  public strSearch: string;

  ngOnInit(): void {
    console.log("OnInit");

    this.route.params.subscribe(
      (params: Params) => {
        this.strSearch= params['search'] ;
        console.log("Search: " + this.strSearch);



          this.stationListSub=this.flooddata.stationListSubject.subscribe( () =>{

            this.listOfStations=this.flooddata.getStationList();
            this.listOfStationsArray=this.listOfStations.items;

            this.loading=false;

            console.log ("New Station List result - applying mapping " + this.listOfStations.items.length);

          })
          console.log("creating Fetch Request");
          if (this.strSearch==null){
            this.fetchSub=this.flooddata.fetchStationList().subscribe(); //Make the fetch request
          }else{
            this.fetchSub=this.flooddata.fetchSearchStationList(this.strSearch).subscribe(); //Make the fetch request
          }
      }
    );

    //if (this.strSearch==null){

  }

  ngOnDestroy(){
    console.log("NgOnDestroy");
    this.stationListSub.unsubscribe();
    this.fetchSub.unsubscribe();

  }


}
