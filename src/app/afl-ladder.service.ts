import { Injectable } from '@angular/core';
import { AflLadder } from './afl-ladder';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AflLadderService {

  sleep(duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration));
  }

  constructor(private httpClient: HttpClient) { }

  //private ladderUrl: string = 'http://localhost:3000/ladder';
  private ladderUrl: string = 'https://aqueous-stream-65471.herokuapp.com/ladder';

  getLadder(season: string, round: number): Observable<AflLadder[]> {
    return this.httpClient.get<AflLadder[]>(`${this.ladderUrl}/${season}/${round}`)
  }
}
