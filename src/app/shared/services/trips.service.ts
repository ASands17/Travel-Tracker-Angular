import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip.model';
import { TripsResponse } from '../models/trips-response.model';


@Injectable({
    providedIn: 'root'
})
export class TripsService {
    
    constructor(private http: HttpClient) { }

    public getTrips(): Observable<TripsResponse> {
        return this.http.get<TripsResponse>('http://localhost:3001/api/v1/trips');
    }
}