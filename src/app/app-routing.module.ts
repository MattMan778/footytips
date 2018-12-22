import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipsComponent } from './tips/tips.component';
import { AflLadderComponent } from './afl-ladder/afl-ladder.component';
import { TipLadderComponent } from './tip-ladder/tip-ladder.component';
import { AflResultsComponent } from './afl-results/afl-results.component';
import { RoundResultsComponent } from './round-results/round-results.component';
import { TeamResultsComponent } from './team-results/team-results.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { AdminComponent } from './admin/admin.component';
import { ProxyComponent } from './proxy/proxy.component';
import { EnterResultsComponent } from './enter-results/enter-results.component';

const routes: Routes = [
  {path: "tips", component: TipsComponent },
  {path: "aflLadder", component: AflLadderComponent },
  {path: "tipLadder", component: TipLadderComponent },
  {path: "aflResults", component: AflResultsComponent,
    children: [
      {path: "round", component: RoundResultsComponent },
      {path: "team", component: TeamResultsComponent },
      {path: "head", component: HeadToHeadComponent }
    ]
  },
  {path: "admin", component: AdminComponent,
    children: [
      {path: 'proxy', component: ProxyComponent},
      {path: 'enterResults', component: EnterResultsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
