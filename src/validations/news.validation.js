const Joi = require('joi');


const getNews = {
  query: Joi.object().keys({
    search: Joi.string().required(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};


module.exports = {
  getNews
};
