import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloodListStationDetailComponent } from './flood-list/flood-list-station/flood-list-station-detail/flood-list-station-detail.component';
import { FloodListComponent } from './flood-list/flood-list.component';

const appRoutes: Routes=[
    { path: '', component: FloodListComponent},
    { path: 'station', component: FloodListStationDetailComponent},
    { path: ':id', component: FloodListStationDetailComponent},
    { path: 'search/:search', component: FloodListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
