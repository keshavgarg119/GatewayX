const { z } = require("zod");

const validateUserSchema = z.object({
    name: z.string("Name must be a string").trim().min(2, "Name must be at least 2 characters long").max(50, "Name must be less than 50 characters"),

    email: z.string("Email must be a string").trim().email("Invalid email address"),

    age: z.coerce.number("Age must be a number").min(18, "Age must be at least 18 years old").max(100, "Age must be less than 100 years old"),

    gender: z.enum(
        ["Male", "Female", "Others"],
        {
            message: "Gender must be Male, Female or Other"
        }
    ),

    skills: z.array(z.string().trim().min(2, "Skill name is too short").max(20, "Skill name is too long")).min(1, "At least one skill is required").max(10, "Maximum 10 skills are allowed"),

    address: z.object({
        city: z.string().trim().min(2, "City name is too short"),
        state: z.string().trim().min(2, "State name is too short"),
        country: z.string().trim().min(2, "Country name is too short"),
        pincode: z.string().regex(/^[0-9]{6}$/, "Pincode must contain exactly 6 digits")
    }),

    projects: z.array(
        z.object({
            name: z.string(),
            tech: z.string()
        })
    )

});

module.exports = {
    validateUserSchema
};