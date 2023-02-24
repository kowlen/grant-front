import mongoose from "mongoose";

const UserRoleSchema: mongoose.Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    }
)

export default mongoose.model("UserRole", UserRoleSchema)
