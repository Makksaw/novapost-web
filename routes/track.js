const express = require('express');
const { getTrackHandler } = require('../controllers/track');

const router = express.Router();

router.get('/', getTrackHandler);

module.exports = getTrackHandler;
