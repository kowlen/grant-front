import mongoose from "mongoose";
var Schema = mongoose.Schema;
const CustomerNumbersSchema: mongoose.Schema = new mongoose.Schema(
    {
        customerId: [ {type: Schema.Types.ObjectId, ref: 'Customer'} ],
        city: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        current: Boolean,
        dateCreate: {
            type: Date,
            default: Date.now(),
        },
    }
)

export default mongoose.model("CustomerNumbers", CustomerNumbersSchema)
