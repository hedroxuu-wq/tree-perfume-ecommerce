// errorMiddleware.js

const errorHandler = (err, req, res, next) => {
    // Log the error (could be a logger instead of console)
    console.error(err.stack);
    
    // Respond with a 500 status code and error message
    res.status(500).send({
        status: 'error',
        message: 'An internal error occurred.',
    });
};

module.exports = errorHandler;