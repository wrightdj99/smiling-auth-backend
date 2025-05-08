const Request = require("../models/requestModel");

const createRequest = async (req, res) => {
    try {
        res.status(201).json({message: `Successfully created a request`});
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
};

const editRequest = async (req, res) => {
    try {
        res.status(201).json({message: `Successfully edited a request`});
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
};

const getAllRequests = async (req, res) => {
    try {
        res.status(201).json({message: `Getting every request`});
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
}
/* For admin only */
const deleteRequest = async (req, res) => {
    try {
        res.status(201).json({message: `Admin successfully deleted a request`});
    } catch (error) {
        res.status(500).json({message: "An error occurred."});
    }
};
/* For admin only */
const assignRequest = async (req, res) => {
    try {
        res.status(201).json({message: `Admin successfully assigned a request`});
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