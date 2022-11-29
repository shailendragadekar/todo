import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../shared/models/common';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  post(api: string, parameters: any) {
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Authorization': 'Bearer ODUwMjU0ZmYtNTIyYS00ZTYyLThlMzQtM2FkZmQ1NTcyOWNh'
    // };

    const requestOptions = {
      // headers: new HttpHeaders(headerDict),
      observe: 'response' as 'body'
    };
    return this.http.post<Response>(api, parameters, requestOptions).pipe(map((data) => {
      switch (data.status) {
        case 200:
          return data.body;
        case 403:
          // expire the session
          break;
        default:
          console.error('Something went wrong!!');
      }
    }),
      catchError(data => {
        console.error('Something went wrong!!');
        return throwError(data);
      })
    );
  }

  setAccessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  clearLogin() {
    localStorage.clear();
  }
}
