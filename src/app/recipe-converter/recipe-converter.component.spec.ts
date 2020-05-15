import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeConverterComponent } from './recipe-converter.component';

describe('RecipeConverterComponent', () => {
  let component: RecipeConverterComponent;
  let fixture: ComponentFixture<RecipeConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeConverterComponent);
    component = fixture.componentInstance;
  });

});
