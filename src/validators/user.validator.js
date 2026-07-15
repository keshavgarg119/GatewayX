const { z } = require("zod");

const validateUserSchema = z.object({
    name: z.string("Name must be a string").trim().min(2, "Name must be at least 2 characters long").max(50, "Name must be less than 50 characters"),
    email: z.string("Email must be a string").trim().email("Invalid email address"),
    age: z.number("Age must be a number").min(18, "Age must be at least 18 years old").max(100, "Age must be less than 100 years old")
});

module.exports = {
    validateUserSchema
};