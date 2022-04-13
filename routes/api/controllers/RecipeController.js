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
    aggregateLikes: 0,
    ingredients: ingredients,
    id: recipes.length + 1,
    title: title,
    readyInMinutes: readyInMinutes,
    servings: servings,
    cuisines: cuisines,
    occasions: occasions,
    instructions: instructions,
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
        if (updRecipe.title) {
          recipe.title = updRecipe.title ? updRecipe.title : recipe.title;
        } else {
          return res.status(400).json({ message: "Recipe title is required" });
        }
        if (updRecipe.readyInMinutes || recipe.readyInMinutes) {
          recipe.readyInMinutes = updRecipe.readyInMinutes
            ? updRecipe.readyInMinutes
            : recipe.readyInMinutes;
        } else {
          return res
            .status(400)
            .json({ message: "Recipe readyInMinutes is required" });
        }
        if (updRecipe.servings || recipe.servings) {
          recipe.servings = updRecipe.servings
            ? updRecipe.servings
            : recipe.servings;
        } else {
          return res
            .status(400)
            .json({ message: "Recipe servings is required" });
        }
        if (updRecipe.cuisines || recipe.cuisines) {
          recipe.cuisines = updRecipe.cuisines
            ? updRecipe.cuisines
            : recipe.cuisines;
        } else {
          return res
            .status(400)
            .json({ message: "Recipe cuisines is required" });
        }
        if (updRecipe.occasions || recipe.occasions) {
          recipe.occasions = updRecipe.occasions
            ? updRecipe.occasions
            : recipe.occasions;
        } else {
          return res
            .status(400)
            .json({ message: "Recipe occasions is required" });
        }
        if (updRecipe.instructions || recipe.instructions) {
          recipe.instructions = updRecipe.instructions
            ? updRecipe.instructions
            : recipe.instructions;
        } else {
          return res
            .status(400)
            .json({ message: "Recipe instructions is required" });
        }
        if (updRecipe.ingredients || recipe.ingredients) {
          recipe.ingredients = updRecipe.ingredients
            ? updRecipe.ingredients
            : recipe.ingredients;
        } else {
          return res
            .status(400)
            .json({ message: "Recipe ingredients is required" });
        }
        recipe.aggregateLikes = updRecipe.aggregateLikes
          ? updRecipe.aggregateLikes
          : recipe.aggregateLikes;
        return res.status(201).json({ message: "Recipe updated", recipe });
      }
    });
  } else {
    return res.status(400).json({ message: "Recipe not found" });
  }
};

const deleteRecipe = (req, res) => {
  const foundRecipe = recipes.some((recipe) => recipe.id === parseInt(req.params.id));
  if (foundRecipe) {
    res.json({
      message: "Recipe deleted",
      recipes: recipes.filter(
        (recipe) => recipe.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ message: "Recipe not found" });
  }
};

module.exports = {
  readRecipes,
  readRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
