import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FloodDataService } from '../../flood-data.service';
import { StationDetail } from '../../stationDetail.modal';

@Component({
  selector: 'app-flood-list-station-detail',
  templateUrl: './flood-list-station-detail.component.html',
  styleUrls: ['./flood-list-station-detail.component.css']
})
export class FloodListStationDetailComponent implements OnInit {

  public loading: boolean = true;

  public stationDetail: StationDetail;

  constructor(private floodDataService: FloodDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  recipe: FloodListStationDetailComponent;
  id: string;

  ngOnInit(): void {
    console.log("Into station detail");
    this.route.params.subscribe(
      (params: Params) => {
        this.id= params['id'] ;
        console.log("Fetching ID " + this.id);

        //fetch the detail for this Station (another fetch request & subject)
        //this.recipe=this.recipeService.getRecipe(this.id);

        this.floodDataService.fetchStationDetail(this.id).subscribe();

      }
    );

    this.floodDataService.stationDetailSubject.subscribe( () => {
      this.stationDetail=this.floodDataService.getStationDetail();
      console.log("Got Station " + this.stationDetail);
      this.loading=false;
    })
  }

}
