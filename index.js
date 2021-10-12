const assert = require('assert');
const send = require('kelp-send');
const Response = require('./response');
const Controller = require('./controller');

/**
 * controller
 * @param {*} ctrl 
 * @returns 
 */
const controller = ctrl => {
  assert.ok(ctrl);
  assert.strictEqual(typeof ctrl, 'function');
  return [
    send,
    async (req, res, next) => {
      const response = await ctrl(req);
      res.send(response);
      return next();
    }
  ];
};

controller.Response = Response;
controller.Controller = Controller;

module.exports = controller;