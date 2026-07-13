const express = require("express");

const loggerMiddleware = require("./middleware/logger.middleware");
const requestIdMiddleware = require("./middleware/requestId.middleware");
const requestTimeMiddleware = require("./middleware/requestTime.middleware");
const errorMiddleware = require("./middleware/error.middleware");
const healthRoutes = require("./routes/health.routes");
const echoRoutes = require("./routes/echo.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(loggerMiddleware);
app.use(requestIdMiddleware);
app.use(requestTimeMiddleware);
app.use("/", healthRoutes);
app.use("/", echoRoutes);
app.use(errorMiddleware);

module.exports = app;


