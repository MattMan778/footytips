import { Injectable } from '@angular/core';
import { Fixture } from './fixture';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  private fixtureUrl: string = 'https://aqueous-stream-65471.herokuapp.com/fixtures/';
  private head2HeadUrl: string = 'https://aqueous-stream-65471.herokuapp.com/head';

  getRoundFixtures(season: string, round: number): Observable<Fixture[]> {
    return this.httpClient.get<Fixture[]>(`${this.fixtureUrl}/${season}/${round}`);
  }

  getHead2Head(team1: string, team2: string): Observable<Fixture[]> {
    return this.httpClient.get<Fixture[]>(`${this.head2HeadUrl}/${team1}/${team2}`);
  }

}
