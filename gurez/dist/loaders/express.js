"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _routes = _interopRequireDefault(require("../api/store/custom-route-path/routes"));
var _default = exports["default"] = function _default(_ref) {
  var app = _ref.app;
  // Apply routes
  _routes["default"].forEach(function (route) {
    app.use(route.path, route.handler);
  });

  // other middleware and configurations
};