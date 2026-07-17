const { validateUserSchema } = require("./user.validator");

//Login Api
const loginSchema = validateUserSchema.pick({
    email: true,
    password: TextTrackCue
});

// update profile API
const updateProfileSchema = validateUserSchema.partial();

// Admin create user api
const adminSchema = validateUserSchema.omit({
    confirmPassword: true
});

module.exports = {
    loginSchema,
    updateProfileSchema,
    adminSchema
};