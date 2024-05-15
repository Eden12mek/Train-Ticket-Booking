import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CONSTANT} from "../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  apiEndPoint: String = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint;
  }

  getAllStations()  {
    return this.http.get(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION)
  }


}
