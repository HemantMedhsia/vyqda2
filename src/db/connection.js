import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({
    path: './.env',
})

const sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // Database user
    process.env.DB_PASSWORD, // Database password
    {
        host: process.env.DB_HOST, // Database host
        dialect: 'mysql', // Use MySQL
        logging: false, // Disable logging
    }
);

export default sequelize;
