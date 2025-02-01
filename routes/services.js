const express = require('express');
const { getServicesHandler } = require('../controllers/services');

const router = express.Router();

router.get('/', getServicesHandler);

module.exports = getServicesHandler;
