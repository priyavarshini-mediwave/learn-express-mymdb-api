const { getAllMovies, addMovie, updateMovie, deleteMovie } = require("../db");

const getAllMoviesController = (req, res) => {
  console.log("get");
  const movies = getAllMovies();
  res.send(movies);
};

const addMovieController = (req, res) => {
  const movie = addMovie(req.xop);
  res.send(movie);
};

const updateMovieController = (req, res, next) => {
  const movie = updateMovie({ payload: req.xop, id: req.params.id });
  if (!movie) {
    return next({
      status: 400,
      message: "Movie not updated",
    });
  }
  res.send(movie);
};

const deleteMovieController = (req, res, next) => {
  const movie = deleteMovie({ id: req.params.id });
  if (!movie) {
    return next({
      status: 400,
      message: "Movie not found",
    });
  }
  res.send(movie);
};

module.exports = {
  getAllMoviesController,
  addMovieController,
  updateMovieController,
  deleteMovieController,
};
