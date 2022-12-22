import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Specialist} from "../models/specialist";

@Injectable({
  providedIn: 'root'
})
export class SpecialistService {
  private specialistsUrl = 'http://localhost:3000/specialist';  // URL to web api

  constructor(private http: HttpClient) { }

  getSpecialist(): Observable<Specialist[]>{
    return this.http.get<Specialist[]>(this.specialistsUrl);
  }
}
