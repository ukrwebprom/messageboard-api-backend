const Joi = require('joi');

const signup = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
});

module.exports = {
    signup,
}