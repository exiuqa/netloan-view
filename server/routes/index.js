var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  console.log(req.cookies);
  res.send("Hello World");
});

router.post("/login", function(req, res, next) {
  res.status("200").send({ code: 200, msg: "success", date: {} });
});
module.exports = router;
