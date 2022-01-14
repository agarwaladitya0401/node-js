var express = require("express");
var router = express.Router();

// const isAuth = (req, res, next) => {
//     const {userId} = req;

//     /// .. authentication logic

//     if(authenticated){
//         next();
//     } else {
//         // next(new Error())
//         req.errors = "";
//         next();
//     }
// }

/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({ id: "1" });
    res.render("index", { title: "Express" });
    // res.send("respond with a resource");
    // res.end();
});

// this router gets the id page
router.get("/test/:id", function (req, res, next) {
    res.render("test", { output: req.params.id });
});

// this router handles the post request, so writes the data where it wants and redirect users to another page

router.post("/test/submit", function (req, res, next) {
    // res.write(req.body.id);
    // const { id } = req.body;
    // console.log(req.body.id);
    res.redirect("/test/" + req.body.id);
    // res.end();
});

module.exports = router;
