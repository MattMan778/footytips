import { Injectable } from '@angular/core';
import { AflLadder } from './afl-ladder';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AflLadderService {

  constructor(private httpClient: HttpClient) { }

  private ladderUrl: string = 'https://aqueous-stream-65471.herokuapp.com/ladder';

  getLadder(season: string, round: number): Observable<AflLadder[]> {
    return this.httpClient.get<AflLadder[]>(`${this.ladderUrl}/${season}/${round}`)
  }
}
