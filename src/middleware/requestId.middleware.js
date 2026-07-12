let requestCounter = 0;

const requestIdMiddleware = (req, res, next) => {
    requestCounter++;

    req.requestId = `REQ-${requestCounter.toString().padStart(6, "0")}`;

    next();
};

module.exports = requestIdMiddleware;