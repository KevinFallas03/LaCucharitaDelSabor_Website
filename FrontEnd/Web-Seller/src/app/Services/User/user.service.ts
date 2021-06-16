import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _apiUrl = environment.url + "/api/user";

  constructor(private _http: HttpClient) { }

  getAllUsers(){
    return this._http.get<any>(this._apiUrl);
  }

  getUser(email: any){
    return this._http.get<any>(
      `${this._apiUrl}/${email}`
    );
  }

  postUser(user: any){
    return this._http.post<any>(this._apiUrl, user)
  }

  findByIdAndUpdate(id: any, updatedUser: any){
    return this._http.put(this._apiUrl+'/'+id, updatedUser);
  }

  deleteById(id: any){
    return this._http.delete(this._apiUrl+'/'+id);
  }
}
