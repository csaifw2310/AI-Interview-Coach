require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session")
const passport = require("passport")

const authRoutes = require("./routes/authRoutes");
const interviewRouter = require("./routes/interviewRoute")

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);
 
app.use(
  passport.initialize()
);

 
app.use("/api/auth", authRoutes);
app.use("/api/interview", interviewRouter)

module.exports = app;