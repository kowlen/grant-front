import mongoose from "mongoose";

const CustomerSchema: mongoose.Schema = new mongoose.Schema(
    {
        surname: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        lastName: String,
        dateCreate: {
            type: Date,
            default: new Date()
        }
    }
)

export default mongoose.model("Customer", CustomerSchema)
