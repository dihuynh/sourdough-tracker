import { RecipeConverter, Recipe, IngredientType, Measurement } from "./recipe-converter";
var unroll = require('unroll');
unroll.use(it);

describe('should convert a recipe', () => {

  describe('should convert flour', () => {
    const converter: RecipeConverter = new RecipeConverter(IngredientType.FLOUR, 120);

    unroll(`should convert #cupQuantity cup to #expectedQuantity grams`, (done, args) => {
      const rawRecipe = args["cupQuantity"] + " C flour";
      const result: Recipe = converter.convert(rawRecipe);
      expect(result.ingredients[0].type).toEqual(IngredientType.FLOUR);
      expect(result.ingredients[0].quantity).toEqual(args["expectedQuantity"].toString());
      expect(result.ingredients[0].measurement).toEqual(Measurement.GRAM);
      done();
    }, [
      ["cupQuantity", "expectedQuantity"],
      ['1', '120'],
      ['1 1/2', '180'],
      ['1/2', '60']
    ]);
  })

  describe('should convert sugar', () => {
    const converter: RecipeConverter = new RecipeConverter(IngredientType.SUGAR, 198);

    unroll(`should convert #cupQuantity cup to #expectedQuantity grams`, (done, args) => {
      const rawRecipe = args["cupQuantity"] + " C sugar";
      const result: Recipe = converter.convert(rawRecipe);
      expect(result.ingredients[0].type).toEqual(IngredientType.SUGAR);
      expect(result.ingredients[0].quantity).toEqual(args["expectedQuantity"].toString());
      expect(result.ingredients[0].measurement).toEqual(Measurement.GRAM);
      done();
    }, [
      ["cupQuantity", "expectedQuantity"],
      ['1', '198'],
      ['1 1/2', '297'],
      ['1/2', '99']
    ]);
  })
});
