import OrderModel from "~/server/models/Order.model"

export default defineEventHandler(async (event) => {
    // Get id from params
    // @ts-ignore
    const id = event.context.params.id;

    // Remove book
    try {
        await OrderModel.findByIdAndDelete(id);
        return { message: "Book removed" };
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});
