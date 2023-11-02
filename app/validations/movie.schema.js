const Joi = require("joi");

const movieSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
});

module.exports = {
  movieSchema,
};
