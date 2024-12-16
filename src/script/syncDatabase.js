import sequelize from "../db/connection.js";

(async () => {
    try {
        // Sync all defined models to the database
        await sequelize.sync({ force: false }); // Change force to true if you want to drop and recreate tables
        console.log('Database synced successfully!');
        process.exit(0); // Exit the script
    } catch (err) {
        console.error('Error syncing database:', err);
        process.exit(1); // Exit with an error
    }
})();
