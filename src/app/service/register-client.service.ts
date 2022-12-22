import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Client} from "../models/client";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {
  private registerClientUrl = 'http://localhost:3000/register-client';
  private loginClientUrl ='http://localhost:3000/login-client';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor( private http: HttpClient,  public router: Router) { }


  registerСlient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.registerClientUrl, client, httpOptions);
  }

  loginClient(email: string, password: string): Observable<any> {
    return this.http.post(this.loginClientUrl, {
      email,
      password
    }, httpOptions);
  }


}
