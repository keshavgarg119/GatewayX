
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

const validateUser = (req, res) => {
    const { name, email, age } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }

    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email is required"
        });
    }

    if (!age) {
        return res.status(400).json({
            success: false,
            message: "Age is required"
        });
    }

    res.status(200).json({
        success: true,
        message: "Validation Passed",
        data: req.body
    });
};

module.exports = { echoData, getUser, getProducts, getHeaders, getRequestInfo, validateUser };