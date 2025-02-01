const express = require('express');
const rootRouter = require('./root');
const trackRouter = require('./track');
const aboutRouter = require('./about');
const servicesRouter = require('./services');

const router = express.Router();

router.use('/services', servicesRouter);
router.use('/about', aboutRouter);
router.use('/track', trackRouter);
router.use('/', rootRouter);

module.exports = router;
