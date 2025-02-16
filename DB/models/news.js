import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import UserModel from "./user.js";

const newsModel =sequelize.define('news',
    {
        title:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true,
    },

    description:{
        type:DataTypes.TEXT(),
        allowNull:false,
    }




    },
  
);
UserModel.hasMany(newsModel);
newsModel.belongsTo(UserModel);

export default blogModel;