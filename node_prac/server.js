const http = require("http");
// const fs = require("fs");
// const module1 = require("./module1");
// const module2 = require("./module2");

// function userRes(request, response) {
// response.writeHead(200, { "content-type": "text/HTML" });
// response.write("hello world");
// response.write(module1.testFunction());
// module1.testFunction();
// module2.myFun();
// response.write(module2.str);

// fs.readFile("./index.html", null, function (error, data) {
//     if (error) {
//         response.writeHead(404);
//         response.write("file not found");
//     } else {
//         response.write(data);
//     }
//     response.end();
// });
// response.end();
// }

const app = require("./app.js");

http.createServer(app.handleRequest).listen(8000);
