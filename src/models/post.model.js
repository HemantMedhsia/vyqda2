import { DataTypes } from 'sequelize';
import sequelize from '../db/connection.js';

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'posts',
    timestamps: true,
});

export default Post;
