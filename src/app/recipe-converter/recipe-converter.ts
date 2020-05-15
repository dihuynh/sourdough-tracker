export enum Measurement {
  CUP = "CUP"
}

export enum IngredientType {
  FLOUR = "FLOUR"
}

export interface Ingredient {
  quantity: string; // can be 1/4, 1/2
  measurement: Measurement;
  type: IngredientType;
}

export interface Recipe {
  ingredients: Ingredient[]
}

export class RecipeConverter {
  public convert(rawRecipe: string): Recipe {
    const flourRegEx = new RegExp('(\\d+)\\s*C\\s*flour');
    const groups: RegExpExecArray = flourRegEx.exec(rawRecipe);
    const quantity: string = groups[1];
    return {
      ingredients: [{
        quantity: quantity,
        measurement: Measurement.CUP,
        type: IngredientType.FLOUR,
      }]
    };
  }
}
