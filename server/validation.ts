import Joi from "joi"


export const OrderSchema = Joi.object({
    customerId: Joi.required(),
    authorId: Joi.required(),
    executorId: Joi.required(),
    rateId: Joi.required(),
    statusId: Joi.required(),
    needRouter: Joi.required(),
    number: Joi.required(),
    address: Joi.required(),
    dateExecution: Joi.required(),
    dateCreate: Joi.required(),
    reason: Joi.required()
})
