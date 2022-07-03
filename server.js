const api = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(api);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4050;

server.use(middlewares);
server.use(router);

server.listen(port);