const express = require("express");

const loggerMiddleware = require("./middleware/logger.middleware");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(loggerMiddleware);
app.use("/", healthRoutes);

module.exports = app;


