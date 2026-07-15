const { z } = require("zod");

const validateUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    age: z.number()
});

module.exports = {
    validateUserSchema
};