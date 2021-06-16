import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from 'src/app/Models/Order';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  _apiUrl = environment.url + "/api/order";

  constructor(private _http: HttpClient) { }

  postOrder(order:Order){
    return this._http.post<any>(this._apiUrl, order)
  }
}
