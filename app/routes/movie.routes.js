const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.middleware");
const { movieSchema } = require("../validations/movie.schema");

const {
  getAllMoviesController,
  addMovieController,
  updateMovieController,
  deleteMovieController,
  getOneMovieController,
} = require("../controllers/movie.controller");

// READ
router.get("/", getAllMoviesController);

//Get 1 movie
router.get("/:id", getOneMovieController);

// CREATE
router.post("/", validate(movieSchema), addMovieController);

// UPDATE
router.put("/:id", validate(movieSchema), updateMovieController);

// DELETE
router.delete("/:id", deleteMovieController);

module.exports = router;
