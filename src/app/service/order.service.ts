import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Client} from "../models/client";
import {Observable} from "rxjs";
import {Order} from "../models/order";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl = 'http://localhost:3000/new-order';
  constructor(private http: HttpClient) { }


  orderCreate(order: Order): Observable<Order> {
    return this.http.post<Order>(this.orderUrl, order, httpOptions);
  }
}
