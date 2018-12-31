import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

  onDomChange($event: Event): void {
    //console.log($event);
    //console.log(document.body.scrollHeight);
    window.scrollTo(0,window.document.body.scrollHeight);  
  }

}
