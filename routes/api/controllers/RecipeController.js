const recipes = require("../../../recipes.json");
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
  return res.redirect("recipes");
};

module.exports = { createRecipe };
