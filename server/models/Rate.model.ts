import mongoose from "mongoose";

const RateSchema: mongoose.Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    }
)

export default mongoose.model("Rate", RateSchema)
