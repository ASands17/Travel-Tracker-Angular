import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DestinationResponse } from "../models/destination-response.model";


@Injectable({
    providedIn: 'root'
})

export class DestinationsService {
    constructor(private http: HttpClient) {}

    public getDestinations(): Observable<DestinationResponse> {
        return this.http.get<DestinationResponse>('http://localhost:3001/api/v1/destinations');
    }
}