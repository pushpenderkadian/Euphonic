var express = require("express");
const { response } = require("../app");
var router = express.Router();
var url=require("url");
var database = require("../dbconn");

router.get("/", function (req, res, next) {
    var adr=url.parse(req.url,true);
    var q = url.parse(adr, true);
    var qdata = q.query;
    var query = `SELECT * FROM music where id=${qdata.id} ; `;
    database.query(query, function (err, rows) {
        if (err) throw err;
        else{
            console.log(rows);
            res.render('final', { title: 'Final',action:'final', final: rows });
        }
    }
    );
});

module.exports = router;