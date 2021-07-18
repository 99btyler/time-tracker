const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        descriptions: {
            type: [String],
            required: true
        },
        timeRanges: {
            type: [String],
            required: true
        },
        totalTimes: {
            type: [String],
            required: true
        }
    }
)

module.exports = mongoose.model("UserSchema", UserSchema)