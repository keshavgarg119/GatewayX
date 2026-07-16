const express = require("express");

const router = express.Router();

const {
   echoData,
   getUser,
   getProducts,
   getHeaders,
   getRequestInfo,
   validateUser,
   signUp
} = require("../controllers/request.controller");

const {
   validateRequiredFields
} = require("../middleware/validation.middleware");

const validate = require("../middleware/zodValidation.middleware");

const { validateUserSchema } = require("../validators/user.validator");

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


// router.post("/validate", validateUser);

// router.post(
//    "/validate",
//    validateRequiredFields(["name", "email", "age"]),
//    validateUser
// )
router.post(
   "/validate",
   validate(validateUserSchema),
   validateUser
)

router.post("/signup", signUp);

module.exports = router;