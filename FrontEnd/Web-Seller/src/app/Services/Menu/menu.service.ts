import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  _apiUrl = environment.url + "/api/product";

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get<any>(this._apiUrl);
  }

  getProduct(id: any){
    return this._http.get<any>(
      `${this._apiUrl}/${id}`
    );
  }

  findByIdAndUpdate(id: any, updatedTemplate: any){
    return this._http.put(this._apiUrl+'/'+id, updatedTemplate);
  }

  deleteById(id: any){
    return this._http.delete(this._apiUrl+'/'+id);
  }
  

}
