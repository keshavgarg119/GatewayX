const express = require("express");

const router = express.Router();

const { echoData } = require("../controllers/echo.controller");

router.post("/echo", echoData);

module.exports = router;