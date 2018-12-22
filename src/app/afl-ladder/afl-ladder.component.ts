import { Component, OnInit } from '@angular/core';
import { AflLadderService } from '../afl-ladder.service';
import { AflLadder} from '../afl-ladder';

@Component({
  selector: 'app-afl-ladder',
  templateUrl: './afl-ladder.component.html',
  styleUrls: ['./afl-ladder.component.css']
})
export class AflLadderComponent implements OnInit {

  constructor(private ladderService: AflLadderService) { }

  ladder: AflLadder[];

  ngOnInit() {
    this.ladderService.getLadder('2018',23).subscribe(ladder => {
      this.ladder = ladder;
    })
  }

}
