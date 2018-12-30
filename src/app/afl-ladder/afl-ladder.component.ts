import { Component, OnInit, HostListener } from '@angular/core';
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
  loading: boolean = false;
  largeScreen: boolean;

  @HostListener('window:resize',['$event'])
  onResize(event) {
    this.largeScreen = event.target.innerWidth > 900 ? true : false;
  }

  ngOnInit() {
    this.largeScreen = window.innerWidth > 900 ? true : false;  
    this.loading = true ;
    this.ladderService.getLadder('2018',23).subscribe(ladder => {
      this.ladder = ladder;
      this.loading = false;
    })
  }

}
