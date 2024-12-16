import app from "./app.js";
import dotenv from "dotenv";
import sequelize from "./db/connection.js";

const PORT = process.env.PORT || 3000;

dotenv.config({
    path: './.env',
});

(async () => {
    try {
      await sequelize.authenticate();
      console.log("Database connected successfully.");
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    } catch (err) {
      console.error("Unable to connect to the database:", err);
    }
  })();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

