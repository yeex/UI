'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.use('/api/v1', _routes2.default);
};
// export default middleware;