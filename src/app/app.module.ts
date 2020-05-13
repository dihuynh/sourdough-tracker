import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdTimerModule } from 'angular-cd-timer';
import { CountdownModule } from 'ngx-countdown';
import { AppComponent } from './app.component';
import { CopyToClipboardComponent } from './tracker/copy-to-clipboard/copy-to-clipboard.component';
import { TrackerComponent } from './tracker/tracker.component';
import { RecipeTimerComponent } from './tracker/recipe-timer/recipe-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    CopyToClipboardComponent,
    RecipeTimerComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule,
    ClipboardModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CdTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
