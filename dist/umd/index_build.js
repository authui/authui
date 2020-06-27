"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components/LoginBox/LoginBox"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components/LoginBox/LoginBox"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.LoginBox);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "LoginBox", {
    enumerable: true,
    get: function () {
      return _LoginBox.default;
    }
  });

  var _LoginBox = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});
//# sourceMappingURL=index_build.js.map