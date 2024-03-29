"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSubmit = exports.validateEmail = exports.PasswordIcon = exports.UserIcon = exports.PasswordIconBox = exports.UserIconBox = exports.TextField = exports.LightTextLink = exports.TouchableText = exports.Container = exports.idField = exports.IdFieldType = exports.ModeType = exports.API_BASE = void 0;

var React = _interopRequireWildcard(require("react"));

var _native = _interopRequireDefault(require("styled-components/native"));

var _Text = _interopRequireDefault(require("react-native-web/dist/cjs/exports/Text"));

var _TouchableHighlight = _interopRequireDefault(require("react-native-web/dist/cjs/exports/TouchableHighlight"));

var _graphqlRequest = require("graphql-request");

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const API_BASE = 'https://api.authui.com/'; // export const API_BASE = 'http://localhost:4001/';

exports.API_BASE = API_BASE;
let ModeType;
exports.ModeType = ModeType;

(function (ModeType) {
  ModeType["SignUp"] = "Sign Up";
  ModeType["Login"] = "Log In";
  ModeType["Forgot"] = "Reset Password";
})(ModeType || (exports.ModeType = ModeType = {}));

let IdFieldType;
exports.IdFieldType = IdFieldType;

(function (IdFieldType) {
  IdFieldType["Username"] = "Username";
  IdFieldType["Email"] = "Email";
})(IdFieldType || (exports.IdFieldType = IdFieldType = {}));

const idField = IdFieldType.Email;
exports.idField = idField;
const Container = _native.default.View`
  padding: 20px 20px;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #efefef;
  border-radius: 6px;
  background-color: #fff;

  @media (max-width: 768px) {
    max-width: inherit;
  }
`;
exports.Container = Container;

const TouchableText = props => /*#__PURE__*/React.createElement(_TouchableHighlight.default, props, /*#__PURE__*/React.createElement(_Text.default, {
  style: {
    color: 'darkblue'
  }
}, props.children));

exports.TouchableText = TouchableText;

const LightTextLink = props => /*#__PURE__*/React.createElement(_TouchableHighlight.default, props, /*#__PURE__*/React.createElement(_Text.default, {
  style: {
    color: 'lightgray'
  }
}, props.children));

exports.LightTextLink = LightTextLink;
const TextField = _native.default.TextInput`
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 6px;
  padding-left: 35px;
  margin: 10px 0;
`;
exports.TextField = TextField;
const UserIconBox = _native.default.View`
  position: absolute;
  left: 9px;
  top: 16px;
`;
exports.UserIconBox = UserIconBox;
const PasswordIconBox = _native.default.View`
  position: absolute;
  left: 9px;
  top: 66px;
`;
exports.PasswordIconBox = PasswordIconBox;

const UserIcon = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  style: {
    width: 20
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M 25.875 3.40625 C 21.203125 3.492188 18.21875 5.378906 16.9375 8.3125 C 15.714844 11.105469 15.988281 14.632813 16.875 18.28125 C 16.398438 18.839844 16.019531 19.589844 16.15625 20.71875 C 16.304688 21.949219 16.644531 22.824219 17.125 23.4375 C 17.390625 23.773438 17.738281 23.804688 18.0625 23.96875 C 18.238281 25.015625 18.53125 26.0625 18.96875 26.9375 C 19.21875 27.441406 19.503906 27.90625 19.78125 28.28125 C 19.90625 28.449219 20.085938 28.546875 20.21875 28.6875 C 20.226563 29.921875 20.230469 30.949219 20.125 32.25 C 19.800781 33.035156 19.042969 33.667969 17.8125 34.28125 C 16.542969 34.914063 14.890625 35.5 13.21875 36.21875 C 11.546875 36.9375 9.828125 37.8125 8.46875 39.1875 C 7.109375 40.5625 6.148438 42.449219 6 44.9375 L 5.9375 46 L 46.0625 46 L 46 44.9375 C 45.851563 42.449219 44.886719 40.5625 43.53125 39.1875 C 42.175781 37.8125 40.476563 36.9375 38.8125 36.21875 C 37.148438 35.5 35.515625 34.914063 34.25 34.28125 C 33.035156 33.671875 32.269531 33.054688 31.9375 32.28125 C 31.828125 30.964844 31.835938 29.933594 31.84375 28.6875 C 31.976563 28.542969 32.15625 28.449219 32.28125 28.28125 C 32.554688 27.902344 32.816406 27.4375 33.0625 26.9375 C 33.488281 26.0625 33.796875 25.011719 33.96875 23.96875 C 34.28125 23.804688 34.617188 23.765625 34.875 23.4375 C 35.355469 22.824219 35.695313 21.949219 35.84375 20.71875 C 35.976563 19.625 35.609375 18.902344 35.15625 18.34375 C 35.644531 16.757813 36.269531 14.195313 36.0625 11.5625 C 35.949219 10.125 35.582031 8.691406 34.71875 7.5 C 33.929688 6.40625 32.648438 5.609375 31.03125 5.28125 C 29.980469 3.917969 28.089844 3.40625 25.90625 3.40625 Z M 25.90625 5.40625 C 25.917969 5.40625 25.925781 5.40625 25.9375 5.40625 C 27.949219 5.414063 29.253906 6.003906 29.625 6.65625 L 29.875 7.0625 L 30.34375 7.125 C 31.734375 7.316406 32.53125 7.878906 33.09375 8.65625 C 33.65625 9.433594 33.96875 10.519531 34.0625 11.71875 C 34.25 14.117188 33.558594 16.910156 33.125 18.21875 L 32.875 19 L 33.5625 19.40625 C 33.519531 19.378906 33.945313 19.667969 33.84375 20.5 C 33.726563 21.480469 33.492188 21.988281 33.3125 22.21875 C 33.132813 22.449219 33.039063 22.4375 33.03125 22.4375 L 32.1875 22.5 L 32.09375 23.3125 C 32 24.175781 31.652344 25.234375 31.25 26.0625 C 31.046875 26.476563 30.839844 26.839844 30.65625 27.09375 C 30.472656 27.347656 30.28125 27.488281 30.375 27.4375 L 29.84375 27.71875 L 29.84375 28.3125 C 29.84375 29.761719 29.785156 30.949219 29.9375 32.625 L 29.9375 32.75 L 30 32.875 C 30.570313 34.410156 31.890625 35.367188 33.34375 36.09375 C 34.796875 36.820313 36.464844 37.355469 38.03125 38.03125 C 39.597656 38.707031 41.03125 39.515625 42.09375 40.59375 C 42.9375 41.449219 43.46875 42.582031 43.75 44 L 8.25 44 C 8.53125 42.585938 9.058594 41.449219 9.90625 40.59375 C 10.972656 39.515625 12.425781 38.707031 14 38.03125 C 15.574219 37.355469 17.230469 36.820313 18.6875 36.09375 C 20.144531 35.367188 21.492188 34.410156 22.0625 32.875 L 22.125 32.625 C 22.277344 30.949219 22.21875 29.761719 22.21875 28.3125 L 22.21875 27.71875 L 21.6875 27.4375 C 21.777344 27.484375 21.5625 27.347656 21.375 27.09375 C 21.1875 26.839844 20.957031 26.476563 20.75 26.0625 C 20.335938 25.234375 19.996094 24.167969 19.90625 23.3125 L 19.8125 22.5 L 18.96875 22.4375 C 18.960938 22.4375 18.867188 22.449219 18.6875 22.21875 C 18.507813 21.988281 18.273438 21.480469 18.15625 20.5 C 18.058594 19.667969 18.480469 19.378906 18.4375 19.40625 L 19.09375 19 L 18.90625 18.28125 C 17.964844 14.65625 17.800781 11.363281 18.78125 9.125 C 19.757813 6.894531 21.75 5.492188 25.90625 5.40625 Z"
}));

exports.UserIcon = UserIcon;

const PasswordIcon = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  style: {
    width: 20
  }
}, ' ', /*#__PURE__*/React.createElement("path", {
  d: "M 25 2 C 17.832484 2 12 7.8324839 12 15 L 12 21 L 8 21 C 6.3550302 21 5 22.35503 5 24 L 5 47 C 5 48.64497 6.3550302 50 8 50 L 42 50 C 43.64497 50 45 48.64497 45 47 L 45 24 C 45 22.35503 43.64497 21 42 21 L 38 21 L 38 15 C 38 7.8324839 32.167516 2 25 2 z M 25 4 C 31.086484 4 36 8.9135161 36 15 L 36 21 L 14 21 L 14 15 C 14 8.9135161 18.913516 4 25 4 z M 8 23 L 42 23 C 42.56503 23 43 23.43497 43 24 L 43 47 C 43 47.56503 42.56503 48 42 48 L 8 48 C 7.4349698 48 7 47.56503 7 47 L 7 24 C 7 23.43497 7.4349698 23 8 23 z M 13 34 A 2 2 0 0 0 11 36 A 2 2 0 0 0 13 38 A 2 2 0 0 0 15 36 A 2 2 0 0 0 13 34 z M 21 34 A 2 2 0 0 0 19 36 A 2 2 0 0 0 21 38 A 2 2 0 0 0 23 36 A 2 2 0 0 0 21 34 z M 29 34 A 2 2 0 0 0 27 36 A 2 2 0 0 0 29 38 A 2 2 0 0 0 31 36 A 2 2 0 0 0 29 34 z M 37 34 A 2 2 0 0 0 35 36 A 2 2 0 0 0 37 38 A 2 2 0 0 0 39 36 A 2 2 0 0 0 37 34 z"
}));

exports.PasswordIcon = PasswordIcon;

const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

exports.validateEmail = validateEmail;

const onSubmit = async (accountId, formData, mode, setIsSubmitting) => {
  const {
    userId,
    password
  } = formData;
  let error = '';

  if (mode === ModeType.Forgot) {
    if (!userId) {
      return {
        error: `${idField} is required.`
      };
    }
  } else {
    if (!userId || !password) {
      return {
        error: `${idField} and Password are required.`
      };
    }
  }

  if (idField === IdFieldType.Email && !validateEmail(formData.userId)) {
    return {
      error: 'Invalid email address.'
    };
  }

  if (password && password.length < 6) {
    return {
      error: `Password must be 6 characters or more.`
    };
  }

  if (mode === ModeType.Login) {
    const query = `mutation {
      login(accountId: "${accountId}", email: "${userId}", password: "${password}") {
        token
      }
    }`;

    try {
      setIsSubmitting(true);
      const {
        login
      } = await (0, _graphqlRequest.request)(API_BASE, query);
      error = '';
      const jwtData = (0, _jwtDecode.default)(login.token);
      setIsSubmitting(false);
      return {
        jwtData
      }; // logged in successfully!
    } catch (e) {
      let err = 'Unknown error.';

      if (`${e}`.indexOf('Invalid') >= 0 || `${e}`.indexOf('No user found') >= 0) {
        err = `Invalid ${idField} or Password.`;
      }

      error = `Failed to login. ${err}`;
    }
  } else if (mode === ModeType.SignUp) {
    const query = `mutation {
      signup(accountId: "${accountId}", name: "Full Name", email: "${userId}", password: "${password}") {
        token
      }
    }`;

    try {
      setIsSubmitting(true);
      const {
        signup
      } = await (0, _graphqlRequest.request)(API_BASE, query);
      error = '';
      const jwtData = (0, _jwtDecode.default)(signup.token);
      setIsSubmitting(false);
      return {
        jwtData
      }; // signed up successfully!
    } catch (e) {
      const err = `${e}`.indexOf('Unique constraint failed') >= 0 ? 'User already existed.' : 'Unknown error.';
      error = `Failed to sign up. ` + err;
    }
  } else if (mode === ModeType.Forgot) {
    const query = `mutation {
      resetPassword(accountId: "${accountId}", email: "${userId}") {
        token
      }
    }`;

    try {
      setIsSubmitting(true);
      await (0, _graphqlRequest.request)(API_BASE, query);
      error = '';
      setIsSubmitting(false);
      return null;
    } catch (e) {
      error = `Failed to sign up. ` + e;
    }
  }

  setIsSubmitting(false);

  if (error) {
    return {
      error
    };
  }

  return null;
};

exports.onSubmit = onSubmit;
//# sourceMappingURL=LoginBoxUtils.js.map