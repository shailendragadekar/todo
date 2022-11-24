import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../shared/models/common';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  post(api: string, parameters: any) {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ODUwMjU0ZmYtNTIyYS00ZTYyLThlMzQtM2FkZmQ1NTcyOWNh'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
      observe: 'response' as 'body'
    };
    return this.http.post<Response>(api, parameters, requestOptions).pipe(tap((data) => {
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
        return throwError(data);
      })
    );
  }
}
