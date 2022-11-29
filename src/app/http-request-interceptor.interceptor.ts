import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptorInterceptor implements HttpInterceptor {
  public token = 'ODUwMjU0ZmYtNTIyYS00ZTYyLThlMzQtM2FkZmQ1NTcyOWNh';
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Interceptor called ');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    });
    return next.handle(request);
  }
}
