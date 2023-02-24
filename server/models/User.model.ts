import mongoose from "mongoose";
var Schema = mongoose.Schema;

const UserSchema: mongoose.Schema = new mongoose.Schema(
    {
        login: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        employeeId: [
            {type: Schema.Types.ObjectId, ref: 'Employee'}
        ],
        roleId: [
            {type: Schema.Types.ObjectId, ref: 'UserRole'}
        ],
        dateCreate: Date,
        dateDelete: Date,
        dateBan: Date,
        isDelete: Boolean,
        isBan: Boolean,
    }
)

export default mongoose.model("User", UserSchema)
