const express = require("express");

const accountsRoute = require("./routes/accounts");

const server = express();

server.use(express.json());
server.use("/api/accounts", accountsRoute);

module.exports = server;
