export enum Measurement {
  CUP = "CUP",
  GRAM = "GRAM"
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
    const flourRegEx = new RegExp('(\\d\\s)?((\\d+)\\/(\\d*))?\\s*C\\s*flour');
    const groups: RegExpExecArray = flourRegEx.exec(rawRecipe);
    const quantity: string = groups[1];
    const flourIngredient: Ingredient = {
      quantity: quantity,
      measurement: Measurement.CUP,
      type: IngredientType.FLOUR,
    };
    return {
      ingredients: [this.convertCupToGrams(groups, flourIngredient)]
    };
  }

  private convertCupToGrams(groups: RegExpExecArray, flourIngredient: Ingredient): Ingredient {
    let wholeCups: number = getValue(groups[1]);
    let fractionNumerator: number = getValue(groups[3]);
    let fractionDenom: number = groups[4] ? Number(groups[4]) : 1;
    let quantityInGrams: number = 120 * (wholeCups + fractionNumerator/fractionDenom);

    return {
      quantity: quantityInGrams.toString(),
      measurement: Measurement.GRAM,
      type: IngredientType.FLOUR,
    }
  }
}
function getValue(value: string): number {
  return value ? Number(value) : 0;
}

