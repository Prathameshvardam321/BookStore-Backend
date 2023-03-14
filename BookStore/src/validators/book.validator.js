import Joi from '@hapi/joi';

export const newBookValidator = (req, res, next) => {
  const schema = Joi.object({
    // FirstName: Joi.string().min(4).required(),
    // LastName : Joi.string().min(4).required(),
    // Email:Joi.string().min(4).required().email(),
    // Password :Joi.string().min(8).max(12).required(),
    // ConfirmPassword : Joi.string().min(8).max(12).required()
    description:Joi.string().min(4).required(),
    discountPrice : Joi.number(),
    bookImage:Joi.string().min(4),
    admin_user_id:Joi.string(),
    bookName:Joi.string().min(4).required(),
    author:Joi.string().min(4).required(),
    quantity:Joi.number().min(0).required(),
    price:Joi.number().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
