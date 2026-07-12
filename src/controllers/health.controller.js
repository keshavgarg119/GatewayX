const healthCheck = (req, res) => {
    res.status(200).json({
        success: true,
        status: "UP",
        service: "GatewayX",
        version: "1.0.0",
        requestId: req.requestId,
        timestamp: new Date().toISOString()
    });
};

module.exports = { healthCheck };