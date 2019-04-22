var express = require("express");
var app = express();
var morgan = require("morgan");
var debug = require("debug");
var cookieParser = require("cookie-parser");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");

app.use(morgan("dev"));
app.use(cookieParser());
app.use("/", indexRouter);
app.use("/users", userRouter);

var server = app.listen(3000, "127.0.0.1", function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
