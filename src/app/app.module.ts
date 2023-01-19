import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetnewsComponent } from './getnews/getnews.component';
import { ApphelpComponent } from './apphelp/apphelp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsFilterComponent } from './news-filter/news-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    GetnewsComponent,
    ApphelpComponent,
    NavbarComponent,
    NewsFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
