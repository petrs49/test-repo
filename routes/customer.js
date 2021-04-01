const express = require("express")
const router = express.Router();
const { getCustomer, createCustomer } = require("../controller/customer");

router.route("/").get(getCustomer).post(createCustomer)


module.exports = router;