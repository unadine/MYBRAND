const Joi = require("joi");
class baseValidator {
  static queryvalidation(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().email().lowercase().required(),
        message: Joi.string().min(10).required()
    });
    const { error } = schema.validate(req.body);
    if (error)
    res.send(error); 
      else{  
          next();
    }
  }
  static blogvalidation(req, res, next) {
    const schema = Joi.object({
      title: Joi.string().min(5).max(40).required(),
      author: Joi.string().min(5).max(40).required(),
      body: Joi.string().min(10).required(),
    });

     const {error} = schema.validate(req.body);
    if(error){
        res.send(error); 
    }
    else {
        next();
    }
  }
}

module.exports = baseValidator;