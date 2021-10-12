## kelp-controller

> controller middleware for @kelpjs


###

```sh
~$ npm i kelp-controller --save
```

### example

```js
const http = require('http');
const kelp = require('kelp');
const controller = require('kelp-controller');

const app = kelp();

app.use(controller(() => {
  return "hello world";
}));

http.createServer(app).listen(3000);
```

Use `Response` class for action result:

```js
const controller = require('kelp-controller');
const { Response } = controller;

// or const Response = require('kelp-controller/response');

app.use(controller(req => {
  return Response
    .create()
    .status(200)
    .text("hello world")
    .json({ name: "kelp" })
}));
```
