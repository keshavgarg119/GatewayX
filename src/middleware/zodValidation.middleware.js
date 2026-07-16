const validate = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const formattedErrors = result.error.issues.map((issue) => {
                return {
                    field: issue.path.join("."),
                    message: issue.message
                };
            });

            return res.status(400).json({
                success: false,
                message: "Validation Failed",
                errors: formattedErrors
            });
        }

        req.body = result.data;
        next();
    };
};

module.exports = validate;