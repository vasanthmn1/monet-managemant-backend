const mongoose = require('mongoose')

const personalSchema = mongoose.Schema({
    task: {
        type: String,
    },
    money: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: Date,
        // required: true
        // type: "string"
    },
    total: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("personal", personalSchema)