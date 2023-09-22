function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Blur, Image, useImage } from '@shopify/react-native-skia';
import React from 'react';
export function SkImage(_ref) {
  let {
    loader,
    image,
    blur,
    fit = 'cover',
    ...rest
  } = _ref;
  const imageSrc = useImage(image);
  if (!image && loader) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, loader);
  }
  return /*#__PURE__*/React.createElement(Image, _extends({}, rest, {
    fit: fit,
    image: imageSrc
  }), blur && /*#__PURE__*/React.createElement(Blur, {
    blur: blur
  }));
}
//# sourceMappingURL=index.js.map