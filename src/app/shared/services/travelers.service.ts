import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Traveler } from '../models/traveler.model';
import { TravelersResponse } from '../models/travelers-response.model';


@Injectable({
  providedIn: 'root'
})
export class TravelersService {

  constructor(private http: HttpClient) { }

  public getTravelers(): Observable<TravelersResponse> {
    return this.http.get<TravelersResponse>('http://localhost:3001/api/v1/travelers');
  }
}
