const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`Connection secured to ${conn.connection.host} DB`.blue.underline.bold)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB;