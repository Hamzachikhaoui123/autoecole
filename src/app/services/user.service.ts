import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})

export class UserService {
 
  private loginUserUrl = "http://localhost:3000/user/login"
  constructor(private http:HttpClient) { }
  Login(user:any){
    return this.http.post<any>(this.loginUserUrl, user);

  }
  isLoggedIn() {
    let token = localStorage.getItem("myToken");
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }
  isLoggedAdmin() {
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == "admin") {
        return true
      }
      else {
        return false
      }

    }
    else {
      return false;
    }
  }
}
