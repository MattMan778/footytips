import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Tip } from './tip';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(private httpClient : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private tipUrl: string = 'https://aqueous-stream-65471.herokuapp.com/tips';


  addTip(tip: Tip): Observable<Tip> {
    return this.httpClient.post<Tip>(this.tipUrl, tip, this.httpOptions)
  }
  
}
