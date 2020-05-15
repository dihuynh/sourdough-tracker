import { RecipeConverter, Recipe, IngredientType, Measurement } from "./recipe-converter";

describe('should convert a recipe', () => {
  const converter: RecipeConverter = new RecipeConverter();

  it('should convert flour ingredient', () => {
    const rawRecipe = "1 C flour";
    const result: Recipe = converter.convert(rawRecipe);
    expect(result.ingredients[0].type).toEqual(IngredientType.FLOUR);
    expect(result.ingredients[0].quantity).toEqual('1');
    expect(result.ingredients[0].measurement).toEqual(Measurement.CUP);
  });
});
