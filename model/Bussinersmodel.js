const mongoose = require('mongoose')

const businessSchema = mongoose.Schema({
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
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("business", businessSchema)