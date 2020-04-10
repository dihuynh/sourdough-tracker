import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountdownModule, CountdownTimer } from 'ngx-countdown';

import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [TrackerComponent]
})
export class AppModule { }
