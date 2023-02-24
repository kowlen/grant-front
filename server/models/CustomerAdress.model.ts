import mongoose from "mongoose";
var Schema = mongoose.Schema;
const CustomerAddressSchema: mongoose.Schema = new mongoose.Schema(
    {
        customerId: [ {type: Schema.Types.ObjectId, ref: 'Customer'} ],
        city: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        houseNumber: {
            type: String,
            required: true,
        },
        entranceNumber: {
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

export default mongoose.model("CustomerAddress", CustomerAddressSchema)
