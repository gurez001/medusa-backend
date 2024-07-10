"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _route = require("../custom/route");
// Adjust the path as necessary

var router = (0, _express.Router)();
router.get('/product', _route.GET);
var _default = exports["default"] = router;