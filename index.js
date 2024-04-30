const jsonServer = require("json-server"); // importing json-server library
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

console.log(port);

server.listen(port);