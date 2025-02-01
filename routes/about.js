const express = require('express');
const { getAboutHandler } = require('../controllers/about');

const router = express.Router();

router.get('/', getAboutHandler);

module.exports = getAboutHandler;
