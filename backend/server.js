const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cookieParsar = require("cookie-parser");

const authRoutes = require("./routes/auth_routes");
const messageRoutes = require("./routes/message_routes");
const userRoutes = require("./routes/user_routes");

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParsar());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error Connecting to MongoDB", error.message);
  });

app.use(authRoutes);
app.use(messageRoutes);
app.use(userRoutes);
