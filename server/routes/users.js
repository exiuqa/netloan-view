var express = require("express");
var router = express.Router();

router.get("/userInfo", function(req, res, next) {
  console.log(req.cookies);
  res.send("liuqiang");
});
module.exports = router;
