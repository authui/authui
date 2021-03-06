"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react-hook-form", "./LoginBoxUtils", "react", "tailwind-rn", "react-native-web/dist/cjs/exports/Text", "react-native-web/dist/cjs/exports/View", "react-native-web/dist/cjs/exports/Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react-hook-form"), require("./LoginBoxUtils"), require("react"), require("tailwind-rn"), require("react-native-web/dist/cjs/exports/Text"), require("react-native-web/dist/cjs/exports/View"), require("react-native-web/dist/cjs/exports/Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactHookForm, global.LoginBoxUtils, global.react, global.tailwindRn, global.Text, global.View, global.Button);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactHookForm, _LoginBoxUtils) {
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

  function LoginBox(props) {
    const [errorText, setErrorText] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [mode, setMode] = React.useState(_LoginBoxUtils.ModeType.SignUp);
    const {
      control,
      setValue,
      handleSubmit,
      errors
    } = (0, _reactHookForm.useForm)();
    return /*#__PURE__*/React.createElement(_LoginBoxUtils.Container, {
      nativeID: "authui-container",
      style: props.style
    }, /*#__PURE__*/React.createElement(_Text.default, {
      style: (0, _tailwindRn.default)('text-2xl mb-3')
    }, mode), mode === _LoginBoxUtils.ModeType.SignUp ? /*#__PURE__*/React.createElement(_Text.default, null, "Already a user? ", /*#__PURE__*/React.createElement(_LoginBoxUtils.TouchableText, {
      onPress: () => setMode(_LoginBoxUtils.ModeType.Login)
    }, "Log In")) : /*#__PURE__*/React.createElement(_Text.default, null, "New user? ", /*#__PURE__*/React.createElement(_LoginBoxUtils.TouchableText, {
      onPress: () => setMode(_LoginBoxUtils.ModeType.SignUp)
    }, "Sign Up")), /*#__PURE__*/React.createElement(_View.default, {
      style: (0, _tailwindRn.default)('mt-2 mb-2'),
      nativeID: "authui-form"
    }, /*#__PURE__*/React.createElement(_LoginBoxUtils.UserIconBox, null, /*#__PURE__*/React.createElement(_LoginBoxUtils.UserIcon, null)), /*#__PURE__*/React.createElement(_reactHookForm.Controller, {
      as: props => /*#__PURE__*/React.createElement(_LoginBoxUtils.TextField, _extends({
        placeholder: _LoginBoxUtils.idField,
        nativeID: "userId"
      }, props)),
      control: control,
      name: "userId",
      onChange: args => args[0].nativeEvent.text,
      defaultValue: ""
    }), /*#__PURE__*/React.createElement(_LoginBoxUtils.LightTextLink, {
      accessible: false,
      testID: "clear-user-id",
      style: {
        position: 'absolute',
        top: 16,
        right: 10
      },
      onPress: () => setValue([{
        userId: ''
      }])
    }, "\u2A09"), mode !== _LoginBoxUtils.ModeType.Forgot && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_LoginBoxUtils.PasswordIconBox, null, /*#__PURE__*/React.createElement(_LoginBoxUtils.PasswordIcon, null)), /*#__PURE__*/React.createElement(_reactHookForm.Controller, {
      as: props => /*#__PURE__*/React.createElement(_LoginBoxUtils.TextField, _extends({
        placeholder: "Password",
        secureTextEntry: true,
        nativeID: "password"
      }, props)),
      control: control,
      name: "password",
      onChange: args => args[0].nativeEvent.text,
      defaultValue: ""
    }), /*#__PURE__*/React.createElement(_LoginBoxUtils.LightTextLink, {
      accessible: false,
      testID: "clear-password",
      style: {
        position: 'absolute',
        top: 66,
        right: 10
      },
      onPress: () => setValue([{
        password: ''
      }])
    }, "\u2A09")), /*#__PURE__*/React.createElement(_View.default, {
      style: (0, _tailwindRn.default)('flex flex-row items-center justify-between mt-2'),
      nativeID: "authui-footer"
    }, /*#__PURE__*/React.createElement(_View.default, {
      style: {
        width: '60%'
      },
      nativeID: "authui-footer-buttons"
    }, /*#__PURE__*/React.createElement(_Button.default, {
      testID: "authui-submit",
      title: isSubmitting ? 'Submitting...' : mode,
      onPress: handleSubmit(async formData => {
        const jwtData = await (0, _LoginBoxUtils.onSubmit)(props.accountId, formData, mode, setIsSubmitting, setErrorText);

        if (props.afterSubmit) {
          props.afterSubmit(jwtData);
        }
      })
    })), mode === _LoginBoxUtils.ModeType.Login && /*#__PURE__*/React.createElement(_LoginBoxUtils.TouchableText, {
      onPress: () => setMode(_LoginBoxUtils.ModeType.Forgot)
    }, "Forgot Password?"))), /*#__PURE__*/React.createElement(_Text.default, {
      testID: "authui-error",
      style: (0, _tailwindRn.default)('text-red-600 mt-2')
    }, errorText || ' '));
  }

  ;
  var _default = LoginBox;
  exports.default = _default;
});
//# sourceMappingURL=LoginBox.js.map