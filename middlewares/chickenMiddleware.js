/**
 * This module is responsible for validating incoming data 
 */

const Chicken = require('../models/chicken');


exports.chickenValidator = (req, res, next) => {
    req.check('name', 'name is required !')
        .notEmpty()
        .isString()
        .withMessage('name field must be a string');
    req.check('birthday', ' birthday is not empty')
        .notEmpty()
        .isISO8601()
        .withMessage('birthday field must be respect the name iso 8601 ');

    req.check('weight', 'weight field is required ! ')
        .notEmpty()
        .isNumeric()
        .withMessage(' weight field must be a numeric value')
    
    const errors = req.validationErrors();
    if(errors){
        return res.status(400).json(errors[0].msg);
    }
    next();
}



exports.chickenByID = (req, res, next, id) => {
    Chicken.findById(id).exec((err, chicken) => {
        if(err || !chicken){
            res.status(400).send("Chicken not found")
        }
        req.chicken = chicken;
        next()
    })
}