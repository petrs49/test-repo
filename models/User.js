const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    email: {
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    designation: String,
    serviceOrders: Array,
    complaints: Array,
    anomalies: Array,
    dashboard: Array,
    userName: String,
    serviceCenter: {
        type: String,
        required: [true, "Service Center name is required"]
    },
    office: {
        type: String,
        required: [true, "Office name is required"]
    },
    region: {
        type: String,
        required: [true, "Region name is required"]
    } 
})


module.exports = mongoose.model("user", UserSchema)