const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    assignee: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    title: {
        type: String,
        required: true,
    },
    content: String,
}, 
{
    timestamps: true
});

module.exports = mongoose.model("Request", requestSchema);