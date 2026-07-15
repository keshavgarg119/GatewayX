const { validateUserSchema } = require("../validators/user.validator");

const echoData = (req, res) => {
    console.log(req.body)
    res.status(200).json({
        success: true,
        data: req.body
    });
};

const getUser = (req, res) => {
    console.log(req.params);

    res.status(200).json({
        success: true,
        params: req.params
    });
};

const getProducts = (req, res) => {
    console.log(req.query);

    res.status(200).json({
        success: true,
        query: req.query
    });
};

const getHeaders = (req, res) => {
    console.log(req.headers);

    res.status(200).json({
        success: true,
        headers: req.headers
    });
};

const getRequestInfo = (req, res) => {
    res.status(200).json({
        success: true,
        request: {
            method: req.method,
            originalUrl: req.originalUrl,
            path: req.path,
            protocol: req.protocol,
            hostname: req.hostname,
            ip: req.ip,
            httpVersion: req.httpVersion,
            query: req.query,
            body: req.body,
            params: req.params
        }
    });
};

// const validateUser = (req, res) => {
//     return res.status(200).json({
//         success: true,
//         message: "Validation Passed",
//         data: req.body
//     });
// };
const validateUser = (req, res) => {
    const result = validateUserSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: result.error.issues
        });
    }

    return res.status(200).json({
        success: true,
        message: "User validated successfully",
        data: result.data
    });
}
function signUp(req, res) {
    const {
        firstName, lastName, userName, email, password, confirmPassword, phone, age, gender, city, state, country, pincode
    } = req.body;

    if (!firstName) {
        return res.status(400).json({
            success: false,
            message: "First name if required"
        });
    }

    if (!lastName) {
        return res.status(400).json({
            success: false,
            message: "Last name is required"
        });
    }

    if (!userName) {
        return res.status(400).json({
            success: false,
            message: "Username is required"
        });
    }

    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email is required"
        });
    }

    if (!password) {
        return res.status(400).json({
            success: false,
            message: "Password is required"
        });
    }

    if (!confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Confirm password is required"
        });
    }

    if (!phone) {
        return res.status(400).json({
            success: false,
            message: "Phone number is required"
        });
    }

    if (!age) {
        return res.status(400).json({
            success: false,
            message: "Age is required"
        });
    }

    if (!gender) {
        return res.status(400).json({
            success: false,
            message: "Gender is required"
        });
    }

    if (!city) {
        return res.status(400).json({
            success: false,
            message: "City is required"
        });
    }

    if (!state) {
        return res.status(400).json({
            success: false,
            message: "State is required"
        });
    }

    if (!country) {
        return res.status(400).json({
            success: false,
            message: "Country is required"
        });
    }

    if (!pincode) {
        return res.status(400).json({
            success: false,
            message: "Pincode is required"
        });
    }

    if (!email.includes("@")) {
        return res.status(400).json({
            success: false,
            message: "Email is invalid"
        });
    }

    if (password.length < 8) {
        return res.status(400).json({
            success: false,
            message: "Password must contain at least 8 characters"
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Passwords do not match"
        });
    }

    if (phone.length !== 10) {
        return res.status(400).json({
            success: false,
            message: "Phone number must be 10 digits"
        });
    }

    if (age < 18 || age > 100) {
        return res.status(400).json({
            success: false,
            message: "Age must be between 18 and 100"
        });
    }

    if (pincode.length !== 6) {
        return res.status(400).json({
            success: false,
            message: "Pincode must be 6 digits"
        });
    }

    return res.status(201).json({
        success: true,
        message: "Signup validation successful",
        data: req.body
    });

}
module.exports = { echoData, getUser, getProducts, getHeaders, getRequestInfo, validateUser, signUp };