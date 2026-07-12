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
    throw new Error("Health endpoint failed");
};

module.exports = {
    healthCheck,
};