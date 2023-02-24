import mongoose from "mongoose";
import PostSchema from "~/server/models/Post.model";
var Schema = mongoose.Schema;


const EmployeeSchema: mongoose.Schema = new mongoose.Schema (
    {
        surname: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
        },
        postId: [
            {type: Schema.Types.ObjectId, ref: 'Post'}
        ],
        dateHired: Date,
        dateFired: Date,
    }
)

export default mongoose.model("Employee", EmployeeSchema)
