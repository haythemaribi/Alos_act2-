
const { DataTypes, Model } = require('sequelize');
const connection = require("../server");

export class Ingredients extends Model { }

Ingredients.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    name:{type: DataTypes.STRING },
    amount:{type:DataTypes.INTEGER},
    unit:{type:DataTypes.STRING},
    
   
},{
  connection,
},
Ingredients.associations=models=>{Ingredients.hasMany(models.Recipes,{
  onDelete="cascade"
})});
