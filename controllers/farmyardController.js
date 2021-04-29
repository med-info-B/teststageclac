const Farmyard = require('../models/farmyard');

exports.createFarmyard = (req, res ) => {
    const farmyard = new Farmyard(req.body);
    farmyard.save((err, data ) => {
        if(err){
            return res.status(400).send({
                error : 'bad request !'
            })
        }
        res.send({
            farmyard : data
        })
    } )
}


