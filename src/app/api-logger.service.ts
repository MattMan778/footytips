import { Injectable } from '@angular/core';
import { 
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

const LOGGING: boolean = false ;

@Injectable({
  providedIn: 'root'
})

export class ApiLoggerService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(response => this.log(request, response),
          error => this.log(request, error))
    )
  }

  log(request: HttpRequest<any>, response: HttpEvent<any>) {
    if (LOGGING) {
      console.log("HTTP request is " + JSON.stringify(request));
      console.log("HTTP response is " + JSON.stringify(response));
    }
  }

    constructor() { }
}
