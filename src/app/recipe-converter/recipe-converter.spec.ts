import { IngredientConverter, Recipe, IngredientType, Measurement, RecipeConverter, Ingredient } from "./recipe-converter";
var unroll = require('unroll');
unroll.use(it);

describe('should convert a recipe', () => {

  describe('should convert flour', () => {
    const converter: IngredientConverter = new IngredientConverter(IngredientType.FLOUR, 120);

    unroll(`should convert #rawIngredient to #expectedQuantity grams`, (done, args) => {
      const ingredient: Ingredient = converter.convert(args['rawIngredient']);
      expect(ingredient.type).toEqual(IngredientType.FLOUR);
      expect(ingredient.quantity).toEqual(args["expectedQuantity"].toString());
      expect(ingredient.measurement).toEqual(Measurement.GRAM);
      done();
    }, [
      ["rawIngredient", "expectedQuantity"],
      ['1 C flour', '120'],
      ['1 1/2 c flour', '180'],
      ['1 1/2 c whole wheat flour', '180'],
      ['1 1/2 cup flour', '180'],
      ['1 1/2 cups flour', '180'],
      ['1/2 C all purpose flour', '60']
    ]);
  })

  describe('should convert sugar', () => {
    const converter: IngredientConverter = new IngredientConverter(IngredientType.SUGAR, 198);

    unroll(`should convert #rawIngredient to #expectedQuantity grams`, (done, args) => {
      const ingredient: Ingredient = converter.convert(args['rawIngredient']);
      expect(ingredient.type).toEqual(IngredientType.SUGAR);
      expect(ingredient.quantity).toEqual(args["expectedQuantity"].toString());
      expect(ingredient.measurement).toEqual(Measurement.GRAM);
      done();
    }, [
      ["rawIngredient", "expectedQuantity"],
      ['1 C sugar', '198'],
      ['1 1/2 c SugaR', '297'],
      ['1/2 C sugar', '99'],
      ['1/2 C granulated sugar', '99']
    ]);
  })

  it('should convert a recipe with both flour and sugar', () => {
    const converter = new RecipeConverter();
    const rawRecipe = "1 C flour \n 1 C sugar";
    const result: Recipe = converter.convert(rawRecipe);

    expect(result.ingredients[0]).toEqual({
      type: IngredientType.FLOUR,
      quantity: '120',
      measurement: Measurement.GRAM
    });
    expect(result.ingredients[1]).toEqual({
      type: IngredientType.SUGAR,
      quantity: '198',
      measurement: Measurement.GRAM
    });
  });
});
