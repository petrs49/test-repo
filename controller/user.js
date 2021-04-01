const asyncHandler = require("../middleware/async");
const user = require("../models/user");
const Customer = require("../models/Customer");


exports.getUsers = asyncHandler(async (req, res, next) => {
    
    res.status(200).json({
        success: true,
        data: "Gets all customer in the DB"
    })
})


exports.createUser = asyncHandler(async(req, res, next) => {
    
    res.status(201).json({
        success: true,
        data: "Create user"
    })
})