
const { DataTypes, Model } = require('sequelize');
const connection = require("../server");

export class Recipes extends Model { }

Recipes.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    aggregateLikes :{
                    type:DataTypes.INTEGER },
    title:{type: DataTypes.STRING},
    readyInMinutes:{type: DataTypes.INTEGER},
     servings:{
                     type: DataTypes.INTEGER},
    cuisines:{type: DataTypes.ARRAY(DataTypes.STRING)},
     occasions:{type: DataTypes.ARRAY(DataTypes.STRING)},
     instructions:{
                     type: DataTypes.STRING},
    
    
},{
    connection,
    modelName='Recipes'
},
Recipes.associations=models=>{Recipes.BelbelongsTo(models.User,{
    onDelete="cascade"
  })},
  Recipes.associations=models=>{Recipes.BelbelongsTo(models.Ingredients,{
    onDelete="cascade"
  })} 
  );