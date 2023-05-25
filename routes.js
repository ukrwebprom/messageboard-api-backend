const express = require("express");
const router = express.Router();
const mainController = require('./controllers/main');
const auth = require('./controllers/auth');
const validateBody = require('./middleware/validate');
const Schemas = require('./middleware/validateSchemas');


router.get('/', mainController);

router.post('/signup', validateBody(Schemas.signup), auth.signup);

module.exports = router;