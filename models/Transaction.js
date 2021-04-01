const mongoose = require("mongoose");


const TransactionSchema = mongoose.Schema({
    reciept: String,
    spn: String,
    amount: Number,
    customerId: String,
    customer: {
        type: mongoose.Schema.ObjectId,
        required: true
    },

    billing: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
})


module.exports = mongoose.model("transaction", TransactionSchema)