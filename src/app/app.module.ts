import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ClassProvider } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipsComponent } from './tips/tips.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiLoggerService } from './api-logger.service';
import { AflLadderComponent } from './afl-ladder/afl-ladder.component';
import { TipLadderComponent } from './tip-ladder/tip-ladder.component';
import { AflResultsComponent } from './afl-results/afl-results.component';
import { MessagesComponent } from './messages/messages.component';
import { RoundResultsComponent } from './round-results/round-results.component';
import { TeamResultsComponent } from './team-results/team-results.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { AdminComponent } from './admin/admin.component';
import { ProxyComponent } from './proxy/proxy.component';
import { EnterResultsComponent } from './enter-results/enter-results.component';
import { DomChangeDirective } from './dom-change.directive';

const LOGGING_INTERCEPTOR_PROVIDER: ClassProvider = {
  provide: HTTP_INTERCEPTORS ,
  useClass: ApiLoggerService,
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    TipsComponent,
    AflLadderComponent,
    TipLadderComponent,
    AflResultsComponent,
    MessagesComponent,
    RoundResultsComponent,
    TeamResultsComponent,
    HeadToHeadComponent,
    AdminComponent,
    ProxyComponent,
    EnterResultsComponent,
    DomChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [LOGGING_INTERCEPTOR_PROVIDER, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
