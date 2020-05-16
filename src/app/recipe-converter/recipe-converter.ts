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
  public convert(rawRecipe: string): Recipe {
    const lines: string[] = rawRecipe.split('\n');
    const ingredients: Ingredient[] = [];

    lines.forEach((line: string) => {
      const ingredientConverter: IngredientConverter = this.findConverter(line);
      ingredients.push(ingredientConverter.convert(line));
    });
    return {
      ingredients: ingredients
    };
  }

  private findConverter(line: string): IngredientConverter {
    if (line.includes('flour')) {
      return new IngredientConverter(IngredientType.FLOUR, 120);
    }
    if (line.includes('sugar')) {
      return new IngredientConverter(IngredientType.SUGAR, 198);
    }
  }
}

export class IngredientConverter {

  constructor(private ingredientType: IngredientType,
              private cupToGramConversionFactor: number) {
  }

  public convert(recipeLine: string): Ingredient {
    const ingredientRegEx = new RegExp('(\\d\\s)?((\\d+)\\/(\\d*))?\\s*C\\s*.*' + this.ingredientType.toString().toLowerCase(), "i");
    const groups: RegExpExecArray = ingredientRegEx.exec(recipeLine);
    return this.convertCupToGrams(groups);
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

export const ingredientConverterMap: Map<string, IngredientConverter> = new Map([
  ['flour', new IngredientConverter(IngredientType.FLOUR, 120)],
  ['sugar', new IngredientConverter(IngredientType.SUGAR, 198)]
]);
