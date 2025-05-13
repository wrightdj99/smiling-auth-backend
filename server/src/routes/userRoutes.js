const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const userModel = require("../models/userModel");
const router = express.Router();
const { viewProfile } = require("../controllers/profileController");
//For admin only
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({message: "Welcome admin!"})
});
//For admin and manager
router.get("/manager", verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
    res.json({message: "Welcome manager!"})
});
//All can access
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
    res.json({message: "Welcome user!"})
});

router.post("/viewProfile", viewProfile);

module.exports = router;