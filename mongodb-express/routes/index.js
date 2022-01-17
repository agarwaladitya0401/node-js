var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("index", {
        title: "Express-Mongodb",
    });
});

router.get("/insert", function (req, res, next) {});

module.exports = router;

// const { validationResult, check } = require("express-validator");

// router.get("/", function (req, res, next) {
//     res.render("index", {
//         title: "Express-Validator",
//         success: req.session.success,
//         errors: req.session.errors,
//     });
//     req.session.errors = null;
// });

// router.post(
//     "/submit",
//     check("email", "Invalid Email Address").isEmail(),
//     check("password", "Invalid Password")
//         .isLength({ min: 4 })
//         .custom((value, { req }) => {
//             if (value != req.body.confirmPassword) {
//                 throw new Error("confirmation failed");
//             }
//             return true;
//         }),
//     function (req, res, next) {
//         // .equals(req.body.confirmPassword);

//         const errors = validationResult(req).array();
//         console.log(errors);
//         if (errors) {
//             req.session.success = false;
//             req.session.errors = errors;
//         } else {
//             req.session.success = true;
//         }
//         console.log(req.session.success);
//         res.redirect("/");
//     }
// );
