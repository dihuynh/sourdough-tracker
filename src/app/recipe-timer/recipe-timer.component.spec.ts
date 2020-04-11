import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTimerComponent } from './recipe-timer.component';

describe('RecipeTimerComponent', () => {
  let component: RecipeTimerComponent;
  let fixture: ComponentFixture<RecipeTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
