import { Component, Input, OnInit } from '@angular/core';
import { floodStationListItem } from '../flood-station-list-item.modal';

@Component({
  selector: 'app-flood-list-station',
  templateUrl: './flood-list-station.component.html',
  styleUrls: ['./flood-list-station.component.css']
})
export class FloodListStationComponent implements OnInit {
  @Input() station: floodStationListItem;

  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
