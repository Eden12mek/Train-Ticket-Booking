import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import your components



// Import the AppRoutingModule
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";
import {SearchComponent} from "./pages/search/search.component";
import {BookingsComponent} from "./pages/bookings/bookings.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    BookingsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
