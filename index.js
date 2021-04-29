// *********************** import Libraries **************** //
    //***  standard
const express = require('express');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
require('dotenv').config();

  
const rootHome = require('./routes/rootHome');
const rootChicken = require('./routes/rootChicken');
const rootFarmyard = require('./routes/rootFarmyards');

/// *****************************************************************/

const app = express();


//******     Middleware   ***********//
  /*Compilation of data into JSON format between the [request, response]*/
app.use(express.json());
  /* Validation of incoming data in particular for the POST, PUT request*/
app.use(expressValidator());
/// ***********************************************//




/**
 * Routes 
 */
app.use('/', rootHome);
app.use('/api/chickens', rootChicken)
app.use('/api/farmyards', rootFarmyard)


/**
 *  DATABASE 
 */
mongoose.connect(process.env.DATABASE,  {
    useNewUrlParser : true,
    useCreateIndex :true,
    useUnifiedTopology:true
}) 
 .then( () => console.log(" database connected ...."))
 .catch(err => console.log("error : ", err))

/**
 *  Server
 */
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`the server is started and it listens in port n° ${port}`));




