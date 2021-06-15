import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  _apiUrl = environment.url + "/api/delivery";

  constructor(private _http: HttpClient) { }

  getAllDeliveries(){
    return this._http.get<any>(this._apiUrl);
  }

  getDelivery(id: any){
    return this._http.get<any>(
      `${this._apiUrl}/${id}`
    );
  }

  postDelivery(delivery: any){
    return this._http.post<any>(this._apiUrl, delivery)
  }

  findByIdAndUpdate(id: any, updatedDelivery: any){
    return this._http.put(this._apiUrl+'/'+id, updatedDelivery);
  }

  deleteById(id: any){
    return this._http.delete(this._apiUrl+'/'+id);
  }
  
}
