const express = require("express");
const requestModel = require("../models/requestModel");
const { createRequest, editRequest, deleteRequest, assignRequest, getAllRequests } = require("../controllers/requestController");
const router = express.Router();

//Create Request
router.post("/createRequest", createRequest);
router.post("/deleteRequest", deleteRequest);
router.post("/editRequest", editRequest);
router.post("/assignRequest", assignRequest);
router.get("/viewRequests", getAllRequests);

module.exports = router;
