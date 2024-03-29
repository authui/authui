"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./LoginBox"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./LoginBox"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.LoginBox);
    global.undefined = mod.exports;
  }
})(void 0, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mobileWidth = exports.fullWidth = exports.doc = exports.default = void 0;

  var React = _interopRequireWildcard();

  var _LoginBox = _interopRequireDefault();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var _default = {
    title: 'Components|LoginBox',
    component: _LoginBox.default
  };
  exports.default = _default;

  const doc = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Docs:"), /*#__PURE__*/React.createElement("p", null, "- Link to Designs, Wiki, Playground, etc."));

  exports.doc = doc;

  const afterSubmit = jwtData => {
    if (jwtData && jwtData.email) {
      console.log("jwtData: " + JSON.stringify(jwtData));
      return {
        success: 'Logged in successfully.'
      };
    } else {
      return {
        error: 'Failed to login'
      };
    }
  };

  const fullWidth = () => /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: '#eee'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Fullscreen:"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100vw'
    }
  }, /*#__PURE__*/React.createElement(_LoginBox.default, {
    accountId: "MyProductName",
    afterSubmit: afterSubmit
  })), /*#__PURE__*/React.createElement("p", null, "Fullscreen End"));

  exports.fullWidth = fullWidth;

  const mobileWidth = () => /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: '#eee'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Mobile 375px:"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '375px'
    }
  }, /*#__PURE__*/React.createElement(_LoginBox.default, {
    accountId: "MyProductName",
    afterSubmit: afterSubmit,
    style: {
      margin: 10
    }
  })), /*#__PURE__*/React.createElement("p", null, "Mobile End"));

  exports.mobileWidth = mobileWidth;
});
//# sourceMappingURL=LoginBox.stories.js.map