const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Customer = require("../models/Customer")

//method       GET /api/v1/customer
//desc         Gets all customer
//access       Private
exports.getCustomer = asyncHandler(async (req, res, next) => {
    let dates = new Date();
    const year = dates.getFullYear().toString().substr(2);
    let month = dates.getMonth().toString().length > 1 ? dates.getMonth().toString() : `0${dates.getMonth().toString()}`;
    const bCode = 1605;
    const acc = Math.ceil(Math.random() * 900) + 100;
    const SPN = `${year}${month}${bCode}${acc}`
        res.status(200).json({
            success: true,
            data: "Gets all customer in the DB",
            msg: SPN
        })
})

//method       POST /api/v1/customer
//desc         Creates customer
//access       Private
exports.createCustomer = asyncHandler(async (req, res, next) => {
    const customer = await Customer.create(req.body)
    res.status(201).json({
        success: true,
        data: customer
    })
})