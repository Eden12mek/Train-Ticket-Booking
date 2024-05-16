import {Component, OnInit} from '@angular/core';
import {StationsService} from "../../services/stations.service";
import {IStation, ResponseModel} from "../../models/Station";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  stationList: IStation[] = [];

  constructor(private stationSrv:StationsService) {
  }

  ngOnInit() {
    this.loadStations();
  }
  loadStations() {
    this.stationSrv.getAllStations().subscribe((res:ResponseModel)=>{
      this.stationList = res.data;
    }, error=>{
      alert("Error Occurred" + JSON.stringify(error))

    })
  }

}
