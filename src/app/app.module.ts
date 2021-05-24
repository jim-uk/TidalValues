import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloodListComponent } from './flood-list/flood-list.component';
import { FloodListStationComponent } from './flood-list/flood-list-station/flood-list-station.component';
import { FloodListStationDetailComponent } from './flood-list/flood-list-station/flood-list-station-detail/flood-list-station-detail.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    FloodListStationComponent,
    FloodListStationDetailComponent,
    FloodListComponent,
    SpinnerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
