import { Component, OnInit } from '@angular/core';
import { Fixture } from '../fixture';
import { Tip } from '../tip';
import { FixtureService } from '../fixture.service';
import { TipsService } from '../tips.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor(private fixtureService: FixtureService, private tipsService: TipsService, private messageService: MessageService) { }

  fixtures: Fixture[];
  tip: Tip;
  message: string;
  error: boolean = false;
  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.fixtureService.getRoundFixtures('2018',1).subscribe(fixtures => {
      this.fixtures = fixtures; 
      this.loading = false;
    })
  }

  addTips() {
    this.messageService.clear();
    this.loading = true;
    this.fixtures.forEach((fixture) => {
      if (typeof fixture.pick === 'undefined') {
        this.messageService.add(`Please make a selection for ${fixture.home_team} vs ${fixture.away_team}`)
        this.error = true ;
        this.loading = false;
      }
    })
    if (!this.error) {
      this.fixtures.forEach((fixture) => {
        let tip = new Tip(fixture.season,fixture.round,fixture.game,"Matthew",new Date(),fixture.pick,'N');
        this.tipsService.addTip(tip).subscribe((tip) => this.tip = tip);
      })
      this.messageService.add("Tips added");
      this.loading = false;
    }
  }
}
