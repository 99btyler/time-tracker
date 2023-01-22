const mongoose = require("mongoose");

const EntriesSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        },
        timeBetween: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("EntriesSchema", EntriesSchema);