import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    FirstName: Joi.string().min(4).required(),
    LastName : Joi.string().min(4).required(),
    Email:Joi.string().min(4).required().email(),
    Password :Joi.string().min(8).max(12).required(),
    ConfirmPassword : Joi.string().min(8).max(12).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
