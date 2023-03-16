import Joi from '@hapi/joi';

export const newProfileValidator = (req, res, next) => {
    const schema = Joi.object({
        userID: Joi.string().min(4).required(),
        addresses:[{
            name :  Joi.string().min(3).required(),
            phoneNumber: Joi.string().min(10).max(12).required(),
            addressType :Joi.string().min(4).required(),
            fullAddress : Joi.string().min(6).required(),
            city : Joi.string().min(4).required(),
            landmark : Joi.string().min(4).required(),
            state : Joi.string().min(4).required(),
            pinCode : Joi.string().min(4).required()
        }]
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      next(error);
    } else {
      req.validatedBody = value;
      next();
    }
  };
  




