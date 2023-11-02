const dotenv = require("dotenv");
dotenv.config();

const config = require("./config");

const express = require("express");
const morgan = require("morgan");

const { notfound } = require("./middlewares/notfound.middleware");
const { errorHandler } = require("./middlewares/errorhandler.middleware");

const movieRouter = require("./routes/movie.routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// movie routes
app.use("/movies", movieRouter);

// 404 handler
app.use(notfound);

// error handler middleware
app.use(errorHandler);

app.listen(config.appPort, () => {
  console.log(`Server running on ${config.appPort}`);
});
