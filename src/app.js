const express = require("express");

const loggerMiddleware = require("./middleware/logger.middleware");
const requestIdMiddleware = require("./middleware/requestId.middleware");
const healthRoutes = require("./routes/health.routes");
const requestTimeMiddleware = require("./middleware/requestTime.middleware");

const app = express();


app.use(loggerMiddleware);
app.use(requestIdMiddleware);
app.use(requestTimeMiddleware);
app.use("/", healthRoutes);

module.exports = app;


