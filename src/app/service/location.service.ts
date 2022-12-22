import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Location} from "../models/location";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locationUrl = 'http://localhost:3000/location';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getLocations(): Observable<Location[]>{
    return this.http.get<Location[]>(this.locationUrl);
  }

  getLocation(id:string):Observable<Location>{
    const url =`${this.locationUrl}/${id}`;
    return this.http.get<Location>(url);
  }
}
