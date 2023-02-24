import mongoose from "mongoose";
var Schema = mongoose.Schema;

const OrderHistorySchema: mongoose.Schema = new mongoose.Schema(
    {
        customerId: [ {type: Schema.Types.ObjectId, ref: 'Customer'} ],
        authorId: [ {type: Schema.Types.ObjectId, ref: 'User'} ],
        executorId: [ {type: Schema.Types.ObjectId, ref: 'User'} ],
        rateId: [ {type: Schema.Types.ObjectId, ref: 'Rate'} ],
        statusId: [ {type: Schema.Types.ObjectId, ref: 'OrderStatus'} ],
        needRouter: Boolean,
        number: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        dateExecution: {
            type: Date,
            required: true,
        },
        reason: String,
        dateChange:{
            type: Date,
            required: true,
            default: new Date(),
        } ,
    }
)

export default mongoose.model("OrderHistory", OrderHistorySchema)
