const helpers = require("./helpers");
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("From node bro");
});

server.listen("3000");
global.open("http://localhost:3000");

// function sum(a, b) {
//   return a + b;
// }

const total = helpers.sum(10, 200);
console.log("Helpers : total 10 + 200 =  ", total);
