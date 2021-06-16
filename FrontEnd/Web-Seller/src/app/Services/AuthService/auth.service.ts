import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { UserAuth } from '../../Models/userAuth';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //ATRIBUTOS
  private isAuthenticated: boolean;
  private currentUser: UserAuth;
  private token: any;
  private jwtHelper: JwtHelperService;
  private _apiUrl = environment.url + "/api/userAuth";

  constructor(private httpClient: HttpClient) {
    this.isAuthenticated = false;
    this.token = null;
    this.currentUser = {
      _id: '',
      email: '',
      password: '',
      isAdmin: false,
    };
    this.jwtHelper = new JwtHelperService();
   }

   //FUNCIONES

   /**
   * Sets the authentication token and user information
   * @param token JWT token for authentication
   */
  public setAuthenticationToken(token: string): void {
    // Save token in app & localStorage
    this.token = token;
    localStorage.setItem('authToken', token);
    // Get user data
    this.currentUser = this.jwtHelper.decodeToken(token).user;
    this.isAuthenticated = true;
  }

  /**
   * Loads authentication token and user information
   */
  public loadAuthenticationToken(): void {
    // Check for token
    const token: any = localStorage.getItem('authToken');
    if (token) {
      // Check if token is expired
      if (this.jwtHelper.isTokenExpired(token)) {
        localStorage.removeItem('authToken');
        return;
      }
      // Authenticate user and load user information
      this.setAuthenticationToken(token);
    }
  }

  /**
   * Removes user and token from localStorage
   */
  public logout(): void {
    this.token = null;
    this.isAuthenticated = false;
    this.currentUser = {
      _id: '',
      email: '',
      password: '',
      isAdmin: false,
    };
    // Remove token from localStorage
    localStorage.removeItem('authToken');
  }

  public getCurrentUser(): UserAuth {
    return this.currentUser;
  }

  public getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  public getToken(): string {
    return this.token;
  }

  public authenticateUser(userInfo: UserAuth): Observable<any> {
    return this.httpClient.post(`${this._apiUrl}/login`, userInfo, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public createUser(userInfo: UserAuth){
    return this.httpClient.post<any>(this._apiUrl, userInfo);
  }

  public updateUserAuth(userInfo: any){
    return this.httpClient.put(this._apiUrl+'/'+userInfo.email, userInfo);
  }

  public deleteUser(userEmail: any){
    return this.httpClient.delete(this._apiUrl+'/'+userEmail);
  }

}
