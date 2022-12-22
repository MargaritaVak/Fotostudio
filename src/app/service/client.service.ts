import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientsUrl = 'http://localhost:3000/client';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.clientsUrl);
  }

  getClient(id:number):Observable<Client>{
    const url =`${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url);
  }

  addClient (client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl, client, httpOptions);
  }

  deleteClient (client: Client | number): Observable<Client> {
    const id = typeof client === 'number' ? client: client.id;
    const url = `${this.clientsUrl}/${id}`;

    return this.http.delete<Client>(url, httpOptions);
  }
  updateClient (client: Client): Observable<any> {
    return this.http.put(this.clientsUrl, client, httpOptions);
  }
}
