const http = require("http");
const routes = require("./routes");

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);

// const fs = require("fs");
// function rqListener(params) {}
// const app = http.createServer(rqListener)
// const app = http.createServer(function(req,res) {
// })
//   console.log("request listener", req);
//   process.exit();
