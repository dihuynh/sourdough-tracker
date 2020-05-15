import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import { RecipeConverter, Recipe, IngredientType } from './recipe-converter';

@Component({
  selector: 'app-recipe-converter',
  templateUrl: './recipe-converter.component.html',
  styleUrls: ['./recipe-converter.component.sass']
})
export class RecipeConverterComponent implements OnInit {
  public rawRecipe: FormControl = new FormControl('', {updateOn: 'blur'});
  public convertedRecipe: Recipe;

  constructor() {
  }

  ngOnInit(): void {
    this.rawRecipe.valueChanges.subscribe((value: string) => this.convert(value));
  }

  private convert(rawRecipe: string) {
    const converter = new RecipeConverter(IngredientType.FLOUR, 120);
    this.convertedRecipe = converter.convert(rawRecipe);
  }
}
