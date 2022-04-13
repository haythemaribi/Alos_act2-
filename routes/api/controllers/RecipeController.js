const recipes = require("../../../recipes.json");

const readRecipes = (req, res) => {
  res.status(200).json(recipes);
};

const readRecipe = (req, res) => {
  const foundRecipe = recipes.some(
    (recipe) => recipe.id === parseInt(req.params.id)
  ); // returns true or false
  if (foundRecipe) {
    return res
      .status(200)
      .json(recipes.filter((recipe) => recipe.id === parseInt(req.params.id)));
  } else {
    return res.status(404).json({ message: "Recipe not found" });
  }
};

const createRecipe = async (req, res) => {
  const {
    title,
    readyInMinutes,
    servings,
    cuisines,
    occasions,
    instructions,
    ingredients,
  } = req.body;

  const newRecipe = await recipes.push({
    id: recipes.length + 1,
    title: title,
    readyInMinutes: readyInMinutes,
    servings: servings,
    cuisines: cuisines,
    occasions: occasions,
    instructions: instructions,
    ingredients: ingredients,
    aggregateLikes: 0,
  });
  return res.status(201).json(recipes);
};

const updateRecipe = (req, res) => {
  const foundRecipe = recipes.some(
    (recipe) => recipe.id === parseInt(req.params.id)
  );
  if (foundRecipe) {
    const updRecipe = req.body;
    recipes.forEach((recipe) => {
      if (recipe.id === parseInt(req.params.id)) {
        recipe.title = updRecipe.title ? updRecipe.title : recipe.title;
        recipe.readyInMinutes = updRecipe.readyInMinutes
          ? updRecipe.readyInMinutes
          : recipe.readyInMinutes;
        recipe.servings = updRecipe.servings
          ? updRecipe.servings
          : recipe.servings;
        recipe.cuisines = updRecipe.cuisines
          ? updRecipe.cuisines
          : recipe.cuisines;
        recipe.occasions = updRecipe.occasions
          ? updRecipe.occasions
          : recipe.occasions;
        recipe.instructions = updRecipe.instructions
          ? updRecipe.instructions
          : recipe.instructions;
        recipe.ingredients = updRecipe.ingredients
          ? updRecipe.ingredients
          : recipe.ingredients;
        recipe.aggregateLikes = updRecipe.aggregateLikes
          ? updRecipe.aggregateLikes
          : recipe.aggregateLikes;
        res.json({ message: "Recipe updated", recipe });
      }
    });
    res.status(201).json(recipes);
  } else {
    res.status(400).json({ message: "Recipe not found" });
  }
};

module.exports = {
  readRecipes,
  readRecipe,
  createRecipe,
  updateRecipe,
};
