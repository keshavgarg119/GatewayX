const express = require("express");

const router = express.Router();

const {
   echoData,
   getUser,
   getProducts,
   getHeaders,
   getRequestInfo,
   validateUser
} = require("../controllers/request.controller");

/* ==========================================================
   Body
========================================================== */

router.post("/echo", echoData);

/* ==========================================================
   Route Parameters
========================================================== */

router.get("/users/:id", getUser);

/* ==========================================================
   Query Parameters
========================================================== */

router.get("/products", getProducts);

/* ==========================================================
   Headers
========================================================== */

router.get("/headers", getHeaders);

/* ==========================================================
   Request Inspector
========================================================== */

router.all("/inspect", getRequestInfo);
router.all("/inspect/:id", getRequestInfo);
/* ==========================================================
   Validation
========================================================== */
router.post("/validate", validateUser);

module.exports = router;