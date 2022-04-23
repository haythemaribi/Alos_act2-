
const { DataTypes, Model } = require('sequelize');
const connection = require("../server");

export class User extends Model { }

User.init({
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}
, {
    connection,
    modelName='User'
},
User.associations=models=>{User.hasMany(models.Recipes,{
    onDelete="cascade"
})});