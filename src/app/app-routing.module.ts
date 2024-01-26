import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './views/teams/teams.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
