import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  _apiUrl = environment.url + "/api/delivery";

  constructor(private _http: HttpClient) { }

  async getAllDeliveries(){
    const data = await this._http.get<any>(this._apiUrl).toPromise();
    return data;
  }

}
