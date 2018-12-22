import { Component, OnInit } from '@angular/core';
import { Fixture } from '../fixture';
import { FixtureService } from '../fixture.service';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {

  constructor(private fixtureService: FixtureService) { }

  fixtures: Fixture[] = [];
  team1: string;
  team2: string;
  teams: string[] = [
    ''
    ,'Adelaide'
    ,'Brisbane Lions'
    ,'Carlton'
    ,'Collingwood'
    ,'Essendon'
    ,'Fremantle'
    ,'Geelong'
    ,'Gold Coast'
    ,'Greater Western Sydney'
    ,'Hawthorn'
    ,'Melbourne'
    ,'North Melbourne'
    ,'Port Adelaide'
    ,'Richmond'
    ,'St Kilda'
    ,'Sydney'
    ,'West Coast'
    ,'Western Bulldogs'
  ]

  ngOnInit() {
  }

  selectChange() {
    if (this.team1 === undefined|| this.team2 === undefined) {return}
    this.fixtureService.getHead2Head(this.team1,this.team2).subscribe((fixtures) => {
      this.fixtures = fixtures;
    }
  )}

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
