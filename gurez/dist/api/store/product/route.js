"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = void 0;
var GET = exports.GET = function GET(req, res) {
  var data = {
    products: [{
      id: 1,
      name: 'Product 1'
    }, {
      id: 2,
      name: 'Product 2'
    }]
  };
  res.json(data);
};