import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  _apiUrl = environment.url + "/api/util/image";

  constructor(private _http: HttpClient) { }

  postImage(imageData: any){
    return this._http.post<any>(this._apiUrl, imageData)
  }

  getImage(id:any){
    return this._http.get<any>(`${this._apiUrl}/${id}`)
  }

}
