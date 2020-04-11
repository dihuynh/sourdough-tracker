import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CdTimerComponent } from 'angular-cd-timer';

@Component({
  selector: 'recipe-timer',
  templateUrl: './recipe-timer.component.html',
  styleUrls: ['./recipe-timer.component.sass']
})
export class RecipeTimerComponent implements OnInit {
  @ViewChild('timer')
  private timerComponent: CdTimerComponent;

  @Input()
  public set numMinutes(value: number) {
    this._numMinutes = value;
    if (this.numMinutes) {
      this.timerComponent.startTime = this.numMinutes * 60;
      this.timerComponent.start();
    }
  }

  public get numMinutes(): number {
    return this._numMinutes;
  }

  private _numMinutes: number;
  startTime: number;

  constructor() { }

  ngOnInit(): void {
  }

}
