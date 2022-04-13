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
  deleteRecipe,
} = require("../controllers/RecipeController");

// GET all recipes
router.get("/", readRecipes);
// GET single recipe by id
router.get("/:id", readRecipe);

// POST recipe (create)
router.post("/", validator(recipeSchema.createRecipe, "body"), createRecipe);

// PUT recipe (update)
router.put("/:id", updateRecipe);

// DELETE recipe (delete)
router.delete("/:id", deleteRecipe);

module.exports = router;
