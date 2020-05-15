import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-recipe-converter',
  templateUrl: './recipe-converter.component.html',
  styleUrls: ['./recipe-converter.component.sass']
})
export class RecipeConverterComponent implements OnInit {
  public rawRecipe: FormControl = new FormControl();
  public convertedRecipe: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.rawRecipe.valueChanges.subscribe((value: string) => this.convert(value));
  }

  private convert(rawRecipe: string) {
    this.convertedRecipe = rawRecipe + ' converted';
  }
}
