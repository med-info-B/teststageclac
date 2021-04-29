const Chicken = require('../models/chicken');
/**
 * method persists the chichen object in the database 
 * @param {*} req 
 * @param {*} res 
 */
exports.createChicken = (req , res ) => {
    const chicken = new Chicken(checkIsRunning(req.body));
    chicken.save((err, data ) => {
        if(err){
            return res.status(400).send({
                error : 'bad request !'
            })
        }
        res.send({
            chicken : data
        })
    } )
}
/**
 * method get all the chickens objects and possibly sorted according to the variables passed in the url
 * @param {*} req 
 * @param {*} res 
 */
exports.allChichen = (req, res)  => {
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let ordre = req.query.ordre ? req.query.ordre : "asc";
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Chicken.find()
            .sort([[sortBy, ordre]])
            .limit(limit)
            .exec((err, chickens) => {
                if(err){
                    res.status(400).send(" Chickens not found")
                }
                res.send(chickens)
            })
}




/**
 * 
  private method updates the steps attribute according to the value of isRunning 
  and returns an updated chicken object
 * @param {*} body 
 * @returns 
 */
const checkIsRunning = (body) => {
    if(body.isRunning === true ) {
        return {
            name : body.name,
            birthday : body.birthday,
            weight : body.weight,
            steps : 1,
            isRunning : true
        }
    }
    return body
}

/**
 * method get a chicken object according to the id
 * @param {*} req 
 * @param {*} res 
 */
exports.showChicken = (req, res) => {
    
    res.send({
        chicken : req.chicken
    })
}



exports.deleteChicken = (req, res) => {
    let chicken = req.chicken;
    chicken.remove((err, chicken) => {
        if(err){
            return res.status(400).send(" Chicken not found ! ")
        }
        res.status(204).send(" Chichen deleted ")
    })
}

/**
 * method updated all attributes of the object
 * @param {*} req 
 * @param {*} res 
 */
exports.updateChickenAllAttribut = (req, res) => {
    let chicken = req.chicken;
    chicken.name = req.body.name;
    chicken.birthday = req.body.birthday;
    chicken.weight = req.body.weight;
    chicken.isRunning = req.body.isRunning;
    chicken.updateSteps();
    chicken.save((err, chicken) => {
        if(err){
            return res.status(404).send(" bad requeste ! ")
        }
        res.send(chicken)
    })

}

/**
 * method updated some element the object

 * @param {*} req 
 * @param {*} res 
 */
exports.updateChicken = (req, res) => {
    Chicken.update( 
        {_id : req.chicken._id},
        {$set : {status: req.body.status}},
        (err, data) => {
            if(err)
            return res.status(400).send({ error :  err.message})
            res.send(data);
        }
    )   
}