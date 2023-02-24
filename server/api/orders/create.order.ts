import OrderModel from "~/server/models/Order.model"
import { OrderSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
    // Get data form body
    const body = await readBody(event);

    // validate
    let { error } = OrderSchema.validate(body);
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }

    // create book
    try {
        await OrderModel.create(body);
        return { message: "Book created" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});
