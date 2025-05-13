const User = require("../models/userModel");

const editProfile = async (req, res) => {
    
}

const viewProfile = async (req, res) => {
    User.findOne({ username: req.body.username }).then(function (data) {
        res.json({data: data})
    });
}

module.exports = {
    viewProfile,
}