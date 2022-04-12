// const http = require("http");
const express = require("express");
const app = express();

app.use("/add-product", (req, res, next) => {
  res.send("<h2> Hello Add product </h2>");
});

app.use("/", (req, res, next) => {
  console.log("In the middleware");
  res.send("<h1>Hello World</h1>");
});

// app.use((req, res, next) => {
//   console.log("In another middleware");
//   res.send("<h1>Hello from App.js check</h1>");
// });

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
