import sequelize from "../db/connection";
import User from "./user.model.js";
import Post from "./post.model.js";

// Add associations if needed
// User.hasMany(Post, { foreignKey: 'userId' });
// Post.belongsTo(User, { foreignKey: 'userId' });

export default {
  User,
  Post,
  sequelize,
};
