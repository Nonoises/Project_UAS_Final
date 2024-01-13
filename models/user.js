import { sequelize, DataTypes } from "./model.js";

const User = sequelize.define('user', {
    email: DataTypes.STRING, 
    username: DataTypes.STRING, 
    password: DataTypes.STRING, 
    active: DataTypes.TINYINT,
    isAdmin: DataTypes.TINYINT,
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
});

export default User;