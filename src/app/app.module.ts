import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
