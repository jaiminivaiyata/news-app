const express = require('express');
const newsRoute = require('./news.route');

const docsRoute = require('./docs.route');

const config = require('../../general-resources/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/news',
    route: newsRoute,
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
