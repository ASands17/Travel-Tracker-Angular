import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TripComponent } from './dashboard/trip/trip.component';
import { TravelersService } from './shared/services/travelers.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TripComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TravelersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
