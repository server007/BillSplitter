import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { AdditionComponent } from './components/addition/addition.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { JournalComponent } from './components/journal/journal.component';
@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    ProfilesComponent,
    JournalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
