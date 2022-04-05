const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const recipes = require("../../recipes");

// GET all recipes
router.get("/", (req, res) => {
  res.json(recipes);
});
// GET single recipe by id
router.get("/:id", (req, res) => {
  const found = recipes.some((recipe) => recipe.id === parseInt(req.params.id));
  if (found) {
    res.json(recipes.filter((recipe) => recipe.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ message: "Recipe not found" });
  }
});

// POST recipe (create)
router.post("/", (req, res) => {
  const newRecipe = {
    id: uuid.v4(),
    title: req.body.title,
    readyInMinutes: req.body.readyInMinutes,
    servings: req.body.servings,
    cuisines: req.body.cuisines,
    occasions: req.body.occasions,
    instructions: req.body.instructions,
    extendedIngredients: req.body.extendedIngredients,
    aggregateLikes: 0,
  };
  if (!newRecipe.title) {
    return res.status(400).json({ message: "Recipe title is required" });
  }
  recipes.push(newRecipe);
  res.json(recipes);
});

// PUT recipe (update)
router.put("/:id", (req, res) => {
  const found = recipes.some((recipe) => recipe.id === parseInt(req.params.id));
  if (found) {
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
        recipe.extendedIngredients = updRecipe.extendedIngredients
          ? updRecipe.extendedIngredients
          : recipe.extendedIngredients;
        recipe.aggregateLikes = updRecipe.aggregateLikes
          ? updRecipe.aggregateLikes
          : recipe.aggregateLikes;
        res.json({ message: "Recipe updated", recipe });
      }
    });
    res.json(recipes);
  } else {
    res.status(400).json({ message: "Recipe not found" });
  }
});

// DELETE recipe (delete)
router.delete("/:id", (req, res) => {
  const found = recipes.some((recipe) => recipe.id === parseInt(req.params.id));
  if (found) {
    res.json({
      message: "Recipe deleted",
      recipes: recipes.filter(
        (recipe) => recipe.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ message: "Recipe not found" });
  }
});

module.exports = router;
