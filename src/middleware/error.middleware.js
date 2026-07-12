const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    res.status(err.statusCode || 500).json({
        success: false,
        statusCode: err.statusCode || 500,
        error: err.name,
        message: err.message,
        requestId: req.requestId,
        timestamp: new Date().toISOString()
    });
};

module.exports = errorMiddleware;