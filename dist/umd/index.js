"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "react-dom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("react-dom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactDom);
    global.undefined = mod.exports;
  }
})(void 0, function () {
  "use strict";

  var React = _interopRequireWildcard();

  var ReactDOM = _interopRequireWildcard();

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  const App = () => /*#__PURE__*/React.createElement("h1", null, "Hello React with Typescript");

  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
});
//# sourceMappingURL=index.js.map