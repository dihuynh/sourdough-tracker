export enum Measurement {
  CUP = "CUP",
  GRAM = "GRAM"
}

export enum IngredientType {
  FLOUR = "FLOUR",
  SUGAR = "SUGAR"
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

  constructor(private ingredientType: IngredientType,
              private cupToGramConversionFactor: number) {
  }

  public convert(rawRecipe: string): Recipe {
    const ingredientRegEx = new RegExp('(\\d\\s)?((\\d+)\\/(\\d*))?\\s*C\\s*' + this.ingredientType.toString().toLowerCase());
    const groups: RegExpExecArray = ingredientRegEx.exec(rawRecipe);
    return {
      ingredients: [this.convertCupToGrams(groups)]
    };
  }

  private convertCupToGrams(groups: RegExpExecArray): Ingredient {
    let wholeCups: number = this.getValue(groups[1]);
    let fractionNumerator: number = this.getValue(groups[3]);
    let fractionDenom: number = groups[4] ? Number(groups[4]) : 1;
    let quantityInGrams: number = this.cupToGramConversionFactor * (wholeCups + fractionNumerator / fractionDenom);

    return {
      quantity: quantityInGrams.toString(),
      measurement: Measurement.GRAM,
      type: this.ingredientType
    }
  }

  public getValue(value: string): number {
    return value ? Number(value) : 0;
  }
}
