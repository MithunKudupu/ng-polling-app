import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHolderComponent } from './page-holder/page-holder.component';
import { PollItemComponent } from './poll-item/poll-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHolderComponent,
    PollItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
