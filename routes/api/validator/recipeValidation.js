const joi = require("joi");

const recipeSchema = {
  aggregateLikes: joi.number().messages({
    "number.base": "aggregateLikes must be a number",
    "number.min": "aggregateLikes must be greater than 0",
  }),
  id: joi.number(),
  ingredients: joi.array().items(joi.string()).required().messages({
    "array.base": "Ingredients must be an array",
    "array.empty": "Ingredients cannot be empty",
    "any.required": "Ingredients is required",
  }),
  title: joi.string().required().messages({
    "string.base": "Title must be a string",
    "string.empty": "Title cannot be empty",
    "any.required": "Title is required",
  }),
  readyInMinutes: joi.number().min(10).max(60).required().messages({
    "number.base": "Ready in minutes must be a number",
    "number.empty": "Ready in minutes cannot be empty",
    "any.required": "Ready in minutes is required",
    "number.min": "Ready in minutes must be at least 10 minutes",
    "number.max": "Ready in minutes must be at most 60 minutes",
  }),
  servings: joi.number().min(1).max(10).required().messages({
    "number.base": "Servings must be a number",
    "number.empty": "Servings cannot be empty",
    "any.required": "Servings is required",
    "number.min": "Servings must be at least 1",
    "number.max": "Servings must be at most 10",
  }),
  cuisines: joi.array().items(joi.string()).required().messages({
    "array.base": "Cuisines must be an array",
    "array.empty": "Cuisines cannot be empty",
    "any.required": "Cuisines is required",
  }),
  occasions: joi.array().items(joi.string()).required().messages({
    "array.base": "Occasions must be an array",
    "array.empty": "Occasions cannot be empty",
    "any.required": "Occasions is required",
  }),
  instructions: joi.string().required().messages({
    "string.base": "Instructions must be a string",
    "string.empty": "Instructions cannot be empty",
    "any.required": "Instructions is required",
  }),
};

const createRecipe = joi.object().keys({
  aggregateLikes: recipeSchema.aggregateLikes,
  ingredients: recipeSchema.ingredients,
  id: recipeSchema.id,
  title: recipeSchema.title,
  readyInMinutes: recipeSchema.readyInMinutes,
  servings: recipeSchema.servings,
  cuisines: recipeSchema.cuisines,
  occasions: recipeSchema.occasions,
  instructions: recipeSchema.instructions,
});

const updateRecipe = joi.object().keys({
  aggregateLikes: recipeSchema.aggregateLikes,
  ingredients: recipeSchema.ingredients,
  id: recipeSchema.id,
  title: recipeSchema.title,
  readyInMinutes: recipeSchema.readyInMinutes,
  servings: recipeSchema.servings,
  cuisines: recipeSchema.cuisines,
  occasions: recipeSchema.occasions,
  instructions: recipeSchema.instructions,
});

module.exports = {
  createRecipe,
  updateRecipe,
};
