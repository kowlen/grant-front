import OrderModel from "~/server/models/Order.model"
import { OrderSchema } from "~~/server/validation";

export default defineEventHandler(async (event) => {
    // Get data form body
    const body = await readBody(event);
    // get id from params
    // @ts-ignore
    const id = event.context.params.id;

    // validate
    let { error } = OrderSchema.validate(body, { abortEarly: true, allowUnknown: true });
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }

    // Update book
    try {
        await OrderModel.findByIdAndUpdate(id, body);
        return { message: "Author updated" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});
