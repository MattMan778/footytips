import { Component, OnInit } from '@angular/core';
import { FixtureService } from '../fixture.service';
import { Fixture } from '../fixture';

@Component({
  selector: 'app-round-results',
  templateUrl: './round-results.component.html',
  styleUrls: ['./round-results.component.css']
})
export class RoundResultsComponent implements OnInit {

  constructor(private fixtureService: FixtureService) { }
  fixtures: Fixture[];
  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.fixtureService.getRoundFixtures('1998',1).subscribe(fixtures => {
      this.fixtures = fixtures; 
      this.loading = false;
    })
    
  }

  getResult(fixture: Fixture): string {
    let result = "";
    if (fixture.home_team_points > fixture.away_team_points) {
      result="Defeated";
    }
    else if (fixture.home_team_points < fixture.away_team_points) {
      result="Lost to";
    }
    else {
      result="Drew with";
    }
    return result;
  }

  boldWinner(fixture: Fixture, team: string): string {
    let result = "";
    if (fixture.home_team_points > fixture.away_team_points) {
      result = team === 'home' ? "bold": "normal";
    }
    else if (fixture.home_team_points < fixture.away_team_points) {
      result = team === 'home' ? "normal": "bold";
    }
    else {
      result="normal";
    }
    return result;
  }

}
