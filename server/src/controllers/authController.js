const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const {username, password, firstName, lastName, role} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = new User({
            username,
            firstName,
            lastName,
            password: hashedPassword,
            role,
        });

        await newUser.save();

        res.status(201).json({message: `User registered with username: ${username}`});
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({message: `No user was found with that username.`});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials"});
        }

        const token = jwt.sign({
            id:user._id,
            role:user.role
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });

        res.status(200).json({token});
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
};

module.exports = {
    register,
    login,
};