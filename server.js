/* eslint-disable */

const path = require("path");
const express = require("express");
const webpack = require("webpack");
const config = require("./webpack.config");

const app = express();
const compiler = webpack(config);

const serverPort = process.env.PORT || 3007;
const ip =  process.env.IP || '0.0.0.0';

if (process.env.NODE_ENV === 'development' || typeof process.env.NODE_ENV === 'undefined') {
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
