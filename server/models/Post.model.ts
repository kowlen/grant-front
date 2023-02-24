import mongoose from "mongoose";

const PostSchema: mongoose.Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    }
)

export default mongoose.model("Post", PostSchema)
