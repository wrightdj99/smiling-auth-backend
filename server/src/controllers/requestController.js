const Request = require("../models/requestModel");
const User = require("../models/userModel");

const createRequest = async (req, res) => {
    try {
        const { username, title, content } = req.body; 
        const user = await User.findOne({ username });
        if (!user) {
            res.status(404).json({message: `No user was found with that username`});
        }

        const newRequest = new Request({
            author: user._id,
            title,
            content,
        });

        await newRequest.save();

        res.status(201).json({message: `Successfully created a request`});
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
};

const editRequest = async (req, res) => {
    try {
        const { username, title, content } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({message: `No user was found with that username`});
        }
        Request.updateOne(
            {author: user._id, title: title}, 
            {title: title, content: content}
        ).then(() => {
            res.status(200).json({message: `A request was updated`});
        })
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
};

const getAllRequests = async (req, res) => {
    try {
        const { username } = req.query;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({message: `No user was found with that username`});
        }
        Request.find({ author: user._id }).then(result => {
            res.status(200).json({data: result});
        });
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
}
/* For admin only */
const deleteRequest = async (req, res) => {
    try {
        const { username, title } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({message: `No user was found with that username`});
        }
        Request.findOneAndDelete({ author: user._id, title: title}).then(result => {
            res.status(201).json({message: "Delete was successful"});
        });
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
};
/* For admin only */
const assignRequest = async (req, res) => {
    try {
        const { username, assigneeUsername, title } = req.body;
        const user = await User.findOne({ username });
        const assignee = await User.findOne({ username: assigneeUsername, $or: [{role: "manager" }, {role: "admin"}]});
        if (!user) {
            return res.status(404).json({message: `No user was found with that username`});
        }
        if (!assignee) {
            return res.status(404).json({message: `No assignee was found with that username`});
        }
        Request.updateOne(
            {author: user._id, title: title}, 
            {assignee: assignee._id}
        ).then(() => {
            res.status(200).json({message: `A request was assigned`});
        });
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
};

module.exports = {
    createRequest,
    editRequest,
    assignRequest,
    deleteRequest,
    getAllRequests
};