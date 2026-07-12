// const healthCheck = (req, res) => {
//     res.status(200).json({
//         success: true,
//         status: "UP",
//         service: "GatewayX",
//         version: "1.0.0",
//         requestId: req.requestId,
//         timestamp: new Date().toISOString()
//     });
// };

// module.exports = { healthCheck };

const healthCheck = (req, res) => {
    // throw new Error("Health endpoint failed");
    const ApiError = require('../utils/ApiError');
    throw new ApiError(503, "Service is not available");
};

module.exports = {
    healthCheck,
};