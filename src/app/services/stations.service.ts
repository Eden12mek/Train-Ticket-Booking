import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CONSTANT} from "../constant/constant";
import {IStation, ResponseModel} from "../models/Station";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  apiEndPoint: String = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint;
  }

  getAllStations(): Observable<ResponseModel>  {
    return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION);
  }


}
