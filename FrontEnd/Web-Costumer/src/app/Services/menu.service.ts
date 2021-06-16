import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  _apiUrl = environment.url + "/api/product";

  constructor(private _http: HttpClient) { }

  async getAllProducts(){
    const data = await this._http.get<any>(this._apiUrl).toPromise();
    return data;
  }
 
}
