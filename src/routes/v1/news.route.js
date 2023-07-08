const express = require('express');
const validate = require('../../middlewares/validate');
const { newsValidation } = require('../../validations');
const { newsController } = require('../../controllers');
const asyncHandler = require('../../middlewares/asyncHandler');
const apicache = require("apicache").middleware;

const router = express.Router();


router
  .route('/')
  .get(apicache('5 minutes'), validate(newsValidation.getNews), asyncHandler(newsController.getNews));

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: News
 *   description: News list
 */

/**
 * @swagger
 * /news:
 *   get:
 *     summary: Get News List
 *     description: Get a list of news based on the search keyword
 *     tags: [News]
 *     parameters:
 *       - in: query
 *         name: search
 *         required: true
 *         schema:
 *           type: string
 *         description: Search news by title, author or any other keyword
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalArticles:
 *                    type: integer
 *                 articles:
 *                    type: array
 *                    $ref: '#/components/schemas/Article'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
