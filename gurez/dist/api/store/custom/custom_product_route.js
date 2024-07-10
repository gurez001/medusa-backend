"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var router = (0, _express.Router)();
router.post('/product', function (req, res) {
  // Process the received data here
  console.log("Data received: ".concat(JSON.stringify(req.body)));

  // Respond with some data
  res.json({
    message: "Data received successfully",
    data: req.body
  });
});
var _default = exports["default"] = router;