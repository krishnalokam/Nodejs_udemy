const path = require("path");
const rootDir = require("../util/path");

exports.get404Page = (req, res, next) => {
  console.log("response from get404");
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
};
