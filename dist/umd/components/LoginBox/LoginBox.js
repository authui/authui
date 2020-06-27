"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react-hook-form", "./LoginBoxUtils", "es5-html-elements", "react", "tailwind-rn", "react-native-web/dist/cjs/exports/Text", "react-native-web/dist/cjs/exports/View", "react-native-web/dist/cjs/exports/Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react-hook-form"), require("./LoginBoxUtils"), require("es5-html-elements"), require("react"), require("tailwind-rn"), require("react-native-web/dist/cjs/exports/Text"), require("react-native-web/dist/cjs/exports/View"), require("react-native-web/dist/cjs/exports/Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactHookForm, global.LoginBoxUtils, global.es5HtmlElements, global.react, global.tailwindRn, global.Text, global.View, global.Button);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactHookForm, _LoginBoxUtils, _es5HtmlElements) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var React = _interopRequireWildcard();

  var _tailwindRn = _interopRequireDefault();

  var _Text = _interopRequireDefault();

  var _View = _interopRequireDefault();

  var _Button = _interopRequireDefault();

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var _default = () => {
    const [errorText, setErrorText] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [mode, setMode] = React.useState(_LoginBoxUtils.ModeType.SignUp);
    const {
      control,
      handleSubmit,
      errors
    } = (0, _reactHookForm.useForm)();
    return /*#__PURE__*/React.createElement(_LoginBoxUtils.Container, null, /*#__PURE__*/React.createElement(_es5HtmlElements.H3, {
      style: (0, _tailwindRn.default)('text-2xl')
    }, mode), mode === _LoginBoxUtils.ModeType.SignUp ? /*#__PURE__*/React.createElement(_Text.default, null, "Already a user? ", /*#__PURE__*/React.createElement(_LoginBoxUtils.TouchableText, {
      onPress: () => setMode(_LoginBoxUtils.ModeType.Login)
    }, "Login")) : /*#__PURE__*/React.createElement(_Text.default, null, "New user? ", /*#__PURE__*/React.createElement(_LoginBoxUtils.TouchableText, {
      onPress: () => setMode(_LoginBoxUtils.ModeType.SignUp)
    }, "Sign Up")), /*#__PURE__*/React.createElement(_View.default, {
      style: (0, _tailwindRn.default)('mt-2 mb-2')
    }, /*#__PURE__*/React.createElement(_LoginBoxUtils.UserIconBox, null, /*#__PURE__*/React.createElement(_LoginBoxUtils.UserIcon, null)), /*#__PURE__*/React.createElement(_reactHookForm.Controller, {
      as: props => /*#__PURE__*/React.createElement(_LoginBoxUtils.TextField, _extends({
        placeholder: _LoginBoxUtils.idField,
        testID: "userId"
      }, props)),
      control: control,
      name: "userId",
      onChange: args => args[0].nativeEvent.text,
      defaultValue: ""
    }), /*#__PURE__*/React.createElement(_LoginBoxUtils.PasswordIconBox, null, /*#__PURE__*/React.createElement(_LoginBoxUtils.PasswordIcon, null)), /*#__PURE__*/React.createElement(_reactHookForm.Controller, {
      as: props => /*#__PURE__*/React.createElement(_LoginBoxUtils.TextField, _extends({
        placeholder: "Password",
        secureTextEntry: true,
        testID: "password"
      }, props)),
      control: control,
      name: "password",
      onChange: args => args[0].nativeEvent.text,
      defaultValue: ""
    }), /*#__PURE__*/React.createElement(_View.default, {
      style: (0, _tailwindRn.default)('flex flex-row items-center justify-between mt-2')
    }, /*#__PURE__*/React.createElement(_View.default, {
      style: {
        width: '40%'
      }
    }, /*#__PURE__*/React.createElement(_Button.default, {
      testID: "submitBtn",
      title: isSubmitting ? 'Submitting...' : mode === _LoginBoxUtils.ModeType.SignUp ? 'Sign Up' : 'Log In',
      onPress: handleSubmit(async formData => {
        const jwtData = await (0, _LoginBoxUtils.onSubmit)(formData, mode, setIsSubmitting, setErrorText);

        if (jwtData && jwtData.userId) {
          alert(`Log in successfully! UserId: ${jwtData.userId}`);
        }
      })
    })))), /*#__PURE__*/React.createElement(_Text.default, {
      style: (0, _tailwindRn.default)('text-red-600 mt-2')
    }, errorText || ' '));
  };

  exports.default = _default;
});
//# sourceMappingURL=LoginBox.js.map