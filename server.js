/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

var app = express();
var compiler = webpack(config);

var serverPort = process.env.PORT || 3007;

const ip =  process.env.IP || '0.0.0.0';

if (process.env.NODE_ENV === 'development') {

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(compiler));
} else {
  app.use('/dist', express.static(__dirname + '/dist'));

}

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(serverPort, ip, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});
