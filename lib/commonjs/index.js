"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkImage = SkImage;
var _reactNativeSkia = require("@shopify/react-native-skia");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SkImage(_ref) {
  let {
    loader,
    image,
    blur,
    fit = 'cover',
    ...rest
  } = _ref;
  const imageSrc = (0, _reactNativeSkia.useImage)(image);
  if (!image && loader) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loader);
  }
  return /*#__PURE__*/_react.default.createElement(_reactNativeSkia.Image, _extends({}, rest, {
    fit: fit,
    image: imageSrc
  }), blur && /*#__PURE__*/_react.default.createElement(_reactNativeSkia.Blur, {
    blur: blur
  }));
}
//# sourceMappingURL=index.js.map