import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  _apiUrl = environment.url + "/api/order";
  
  constructor(private _http: HttpClient) { }

  async getCompletedOrders(){
    return await this._http.get<any>(this._apiUrl+'/completed').toPromise();
  }

  async getPendingOrders(){
    return await this._http.get<any>(this._apiUrl+'/pending').toPromise();
  }

  getSingleOrder(id:any){
    return this._http.get<any>(this._apiUrl+'/getSingle/'+id);
  }

  finishOrder(id:any){
    return this._http.put(this._apiUrl+'/finishOrder/'+id,'');
  }

}
