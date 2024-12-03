// server/server.js
const app = require("./app");
const { connectDB } = require("./config/db");
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
