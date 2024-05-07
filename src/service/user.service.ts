import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = "http://localhost:8803/";
  constructor(
    private httpClient: HttpClient
  ) { }
  
  public registerUser(requestBody: any) {
    return this.httpClient.post<any>(this.path + `user`,requestBody);
  }
  
  public userLogin(requestBody: any) {
    return this.httpClient.post<any>(this.path + `login`, requestBody);
  }
}
