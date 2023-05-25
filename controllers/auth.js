const User = require('../models/user');
const HttpError = require('../helpers/httperrors');
const bcrypt = require('bcrypt');

const signup = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const check = await User.findOne({email});
        if(check) throw HttpError(409, 'Such email is already used');
        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await User.create({...req.body, password:hashedPass });
        res.status(201).json(newUser);
    } catch(err) {
        next(err);
    }
}

module.exports = {
    signup
}