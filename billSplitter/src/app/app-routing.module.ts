import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdditionComponent } from './components/addition/addition.component';
import { JournalComponent } from './components/journal/journal.component';
import { ProfilesComponent } from './components/profiles/profiles.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: '', component: ProfilesComponent, outlet:'profiles'},
  { path: '', component: JournalComponent, outlet:'journal'},
  { path: '', component: AdditionComponent, outlet:'addition'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
