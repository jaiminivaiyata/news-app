const httpStatus = require('http-status');

const { newsService } = require('../services');
const { sendCommonResponse } = require("../general-components/response");
const commonFunctions = require('../general-components/common-functions');

const getNews = async (request, response) => {
    const filter = commonFunctions.pick(request.query, ['search', 'user']);
    const options = commonFunctions.pick(request.query, ['sortBy', 'limit', 'page']);
    const result = await newsService.getNews(filter, options);
    const responseObject = {
        code: httpStatus.OK,
        data: result,
        message: ""
    }
    sendCommonResponse(response, httpStatus.OK, responseObject)
};



module.exports = {
    getNews
};
