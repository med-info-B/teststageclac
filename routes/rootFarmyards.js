/** 
     This Module is responsible for managing requests and responses
     of the entity "Farmyard"
 */
// ****************   Libraries **************** //
const express = require("express");
const { createFarmyard } = require('../controllers/farmyardController');
const { farmyardValidator } = require('../middlewares/farmyardMiddleware')
/// ********************************* ///

const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        message : "farmyard  heloo "
    })
})
// Requête POST : validation of entries before persistence 
router.post('/create',farmyardValidator, createFarmyard);

// Requête PUT : Validation of entries before updating
router.put('/:farmyardID',farmyardValidator);
module.exports = router;