import express from "express";
import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import { fileURLToPath } from "url";

import indexRouter from "./routes/index.mjs";
import usersRouter from "./routes/users.mjs";
import skinConditionRouter from "./routes/skinCondition.mjs";
import resourcesRouter from "./routes/resources.mjs";

const app = express();
//create the route for the build directory using path

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");
console.log("directory-name 👉️", __dirname);

// view engine setup
// tell express app that your using the reac build path
app.use(express.static(REACT_BUILD_DIR));
app.use(cors());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));

//path to database
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/skinCondition", skinConditionRouter);
app.use("/resources", resourcesRouter);

//app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
