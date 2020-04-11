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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      autolyse: [],
      levainMix: [],
      saltMix: [],
      folds: this.fb.array([])
    });
  }

  public get folds(): FormArray {
    return this.formGroup.get('folds') as FormArray;
  }

  public addFold() {
    const foldIndex = this.folds.controls.length;
    this.folds.insert(foldIndex, new FormControl(this.DEFAULT_FOLD_TIME, []));
  }

  public get recipe(): string {
    return JSON.stringify(this.formGroup.value);
  }
}
