const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const axios = require('axios');
const config = require("../general-resources/config");

/**
 * Query for todos
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const getNews = async (filter, options) => {
    const response = await axios.get(`https://gnews.io/api/v4/search?apikey=${config.gnews_api_key}&q=${filter.search}`);
    return response.data;
};
module.exports = {
    getNews
};
