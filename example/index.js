const http = require('http');
const kelp = require('kelp');
const body = require('kelp-body');
const controller = require('..');

const { Response } = controller;

const app = kelp();

app.use(body);

app.use(controller(req => {
  return Response
    .create()
    .status(200)
    .text("hello world")
    .json({ name: "kelp" })
}));

http.createServer(app).listen(4999);