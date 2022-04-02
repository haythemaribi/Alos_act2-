const express = require("express");
const route = express().Router();
const recipes = require("../../recipes");

// GET all recipe
route.get("/", (req, res) => {
  res.json(recipes);
});
// GET single recipe
route.get("/:id", (req, res) => {
  const found = recipes.some((recipe) => recipe.id === parseInt(req.params.id));
  if (found) {
    res.json(recipes.filter((recipe) => recipe.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ message: "Recipe not found" });
  }
});

module.exports = router;
