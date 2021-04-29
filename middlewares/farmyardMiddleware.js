const Farmyard = require('../models/farmyard');


exports.farmyardValidator = (req, res, next) => {
    req.check('name', 'name is required !')
        .notEmpty()
        .isString()
        .withMessage('name field must be a string');

        const errors = req.validationErrors();
        if(errors){
            return res.status(400).json(errors[0].msg);
        }
        next();
}



