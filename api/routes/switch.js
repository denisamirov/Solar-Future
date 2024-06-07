const switchRouter = require('express').Router();
const { sendDigitalWrite } = require('../controllers');
const { digitalWrite } = require('../middlewares')

switchRouter.post('/switch',
    digitalWrite,
    sendDigitalWrite
);

module.exports = switchRouter;