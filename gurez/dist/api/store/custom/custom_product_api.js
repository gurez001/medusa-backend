"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = void 0;
var POST = exports.POST = function POST(req, res) {
  res.json({
    message: "[POST] Hello world!"
  });
};