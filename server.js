const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error")
const customer = require("./routes/customer")
const connectDB = require("./config/db")
const user = require("./routes/user");
const cors = require("cors")

dotenv.config({ path: "./config/.env"});

//Connect to DB
connectDB()

//Accept request from client
app.use(express.json({ extended: false }))

//Load middleware
app.use(logger)
app.use(cors())

app.use("/api/v1/customer", customer)
app.use("/api/v1/user", user)

app.use(errorHandler)



const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`Server starts and running on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold));





