import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public constructor(private titleService: Title) {

  }

  ngOnInit() {
    this.titleService.setTitle("Kerrie's tipping");
  }

  title = "Kerrie's footy tipping";
  
}
