const { body } = require("express-validator");

exports.validationCheck = [
  body("email", "Please enter a valid email form !!").isEmail(),
  body("password", "Password must be 5 characters long")
    .optional()
    .isLength({ min: 5 }),
  body("phoneNumber", "Phone Number must have exactly 8 numbers")
    .optional()
    .isLength({
      min: 8,
      max: 8,
    }),
  body("cinNumber", "Cin Number must have exactly 8 numbers")
    .optional()
    .isLength({
      min: 8,
      max: 8,
    }),
];
