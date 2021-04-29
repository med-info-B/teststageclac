const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.send({
        message: 'hello !! Welcome to the chicken farm'
    })
})



module.exports = router;