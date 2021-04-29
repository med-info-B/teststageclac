/** 
     This Module is responsible for managing requests and responses
     of the entity "Chicken"
 */
// ****************   Libraries **************** //
const express = require("express");
const { createChicken, allChichen, showChicken, deleteChicken, updateChickenAllAttribut, updateChicken } = require('../controllers/chickenController');
const { chickenValidator, chickenByID } = require('../middlewares/chickenMiddleware')
/// ********************************* ///

const router = express.Router();
// Requête Get :  
router.get('/', allChichen);
router.get('/:chickenID', showChicken);
// Requête POST : validation of entries before persistence 
router.post('/create', chickenValidator, createChicken);

// Requête Delete
router.delete('/:chickenID', deleteChicken);

//Requête Put
router.put('/:chickenID', updateChickenAllAttribut)
router.patch('/:chickenID', updateChicken)


router.param('chickenID', chickenByID);


// // PUT request: Validation of inputs before update
// router.put('/:farmyardID',farmyardSignValidator);
module.exports = router;