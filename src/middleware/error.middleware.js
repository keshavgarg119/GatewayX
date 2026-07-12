const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        success: false,
        statusCode: 500,
        error: "Internal Serever Error",
        message: err.message,
        requestId: req.requestId,
        timestamp: new Date().toISOString()
    });
};

module.exports = errorMiddleware;