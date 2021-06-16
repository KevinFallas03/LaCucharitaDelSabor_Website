import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  _apiUrl = environment.url + "/api/dashboard";
  
  constructor(private _http: HttpClient) { }

  getHigherSell(){
    return this._http.get<any>(this._apiUrl+'/higherSell');
  }

  getPendingAmount(){
    return this._http.get<any>(this._apiUrl+'/pendingAmount');
  }

  getCompletedAmount(){
    return this._http.get<any>(this._apiUrl+'/completedAmount');
  }

  getOrdersAmount(){
    return this._http.get<any>(this._apiUrl+'/ordersAmount');
  }

  async getTop5Customers(){
    return await this._http.get<any>(this._apiUrl+'/topCostumers').toPromise();
  }

  async getTop5Products(){
    return await this._http.get<any>(this._apiUrl+'/topProducts').toPromise();
  }

  async getUserName(customer: any){
    return await this._http.get<any>(this._apiUrl+'/getUser/'+customer.email).toPromise();
  }

}
