var express = require("express");
const { response } = require("../app");
var router = express.Router();
var database = require("../dbconn");

router.get("/", function (req, res, next) {
    var query = "SELECT * FROM `bands`";
    database.query(query, function (err, rows) {
        if (err) throw err;
        else{
            res.render('main', { title: 'Main',action:'list', main: rows });
        }
    }
    );
});
router.get("/edit", function (req, res, next) {
    response.render("main",{title:"Edit",action:'edit'});
});

module.exports = router;
