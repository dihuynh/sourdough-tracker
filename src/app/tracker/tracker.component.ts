import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.sass']
})
export class TrackerComponent implements OnInit {

  @ViewChild('cd', { static: false })
  private countdown: CountdownComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public startTimer() {
    this.countdown.begin();
  }

  public stopTimer() {
    this.countdown.stop();
  }
}
