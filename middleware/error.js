const ErrorResponse = require("../utils/errorResponse")

const errorHandler = (err, req, res, next) => {
    let error = {...err}
    error.message = err.message;

    // ValidationError
    if(err.name === "ValidationError"){
        let message = Object.values(err.errors).map(val => val.message)
        error = new ErrorResponse(message, 400)
    }

    console.log(err.name)


    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message
    })
}


module.exports = errorHandler