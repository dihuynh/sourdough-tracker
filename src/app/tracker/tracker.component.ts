import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.sass']
})
export class TrackerComponent implements OnInit {
  private DEFAULT_FOLD_TIME = 30;

  @ViewChild('autolyseTimer', { static: false })
  private countdown: CountdownComponent;

  public formGroup: FormGroup;
  public buttonClickedText = 'Copied!';
  public buttonText = 'Copy';
  public timerValue: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      autolyse: [],
      levainMix: [],
      saltMix: [],
      folds: this.fb.array([])
    });
    this.subscribeToValueChangesAndSetTimerValue();
  }

  private subscribeToValueChangesAndSetTimerValue() {
    this.formGroup.get('autolyse').valueChanges.subscribe((minuteValue: number) => {
      this.timerValue = minuteValue;
    });
    this.formGroup.get('levainMix').valueChanges.subscribe((minuteValue: number) => {
      this.timerValue = minuteValue;
    });
    this.formGroup.get('saltMix').valueChanges.subscribe((minuteValue: number) => {
      this.timerValue = minuteValue;
    });
    this.foldsFormGroup.valueChanges.subscribe((formGroupValue) => {
      Object.keys(this.foldsFormGroup.controls).forEach(control => {
        if (this.foldsFormGroup.get(control).dirty) {
          this.timerValue = this.foldsFormGroup.get(control).value;
        }
      });
    });
  }

  public get foldsFormGroup(): FormArray {
    return this.formGroup.get('folds') as FormArray;
  }

  public addFold() {
    const foldIndex = this.foldsFormGroup.controls.length;
    this.foldsFormGroup.insert(foldIndex, new FormControl(null, []));
  }

  public get recipe(): string {
    return JSON.stringify(this.formGroup.value);
  }
}
