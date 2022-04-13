const express = require("express");
const router = express.Router();
const recipes = require("../../../recipes");
const recipeSchema = require("../validator/recipeValidation");
const validator = require("../validator/validator");
const {
  readRecipes,
  readRecipe,
  createRecipe,
  updateRecipe,
} = require("../controllers/RecipeController");

// GET all recipes
router.get("/", readRecipes);
// GET single recipe by id
router.get("/:id", readRecipe);

// POST recipe (create)
router.post("/", validator(recipeSchema.createRecipe, "body"), createRecipe);

// PUT recipe (update)
router.put(
  "/:id",
  /* validator(recipeSchema.updateRecipe, "body"), */ updateRecipe
);

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
