import OrderModel from "~/server/models/Order.model"

export default defineEventHandler(async (event)=> {
    return await OrderModel.find({})
})
