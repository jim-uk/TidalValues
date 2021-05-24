import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FloodDataService } from '../../flood-data.service';
import { StationDetail } from '../../stationDetail.modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flood-list-station-detail',
  templateUrl: './flood-list-station-detail.component.html',
  styleUrls: ['./flood-list-station-detail.component.css']
})
export class FloodListStationDetailComponent implements OnInit, OnDestroy {

  public loading: boolean = true;

  public stationDetail: StationDetail;
  public getDetailSubject: Subscription;
  id: string;

  constructor(private floodDataService: FloodDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log("Into station detail");
    this.route.params.subscribe(
      (params: Params) => {
        this.id= params['id'] ;
        console.log("Fetching ID " + this.id);

        //fetch the detail for this Station (another fetch request & subject)
        //this.recipe=this.recipeService.getRecipe(this.id);

        this.getDetailSubject=this.floodDataService.fetchStationDetail(this.id).subscribe();

        }
    );

    this.floodDataService.stationDetailSubject.subscribe( () => {
      this.stationDetail=this.floodDataService.getStationDetail();
      console.log("Got Station " + this.stationDetail);
      this.loading=false;
    })
  }

  ngOnDestroy(){
    this.getDetailSubject.unsubscribe();
  }

}
