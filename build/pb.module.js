import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import clone from 'clone';
import ReactSelect from 'react-select';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* stylelint-disable selector-pseudo-class-no-unknown */\n@font-face {\n  font-family: \"MSFont\";\n  src: url(\"data:application/octet-stream;base64,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\") format(\"woff2\"); }\n\n@font-face {\n  font-family: \"MSFont11\";\n  src: url(\"./fonts/ms98s11a10d02.ttf\") format(\"woff2\"); }\n\nhtml {\n  font-size: 11px; }\n  html button {\n    font-size: 11px; }\n  html menu {\n    padding: 0px;\n    margin: 0px; }\n  html body {\n    font-family: \"MSFont\", \"MSFont11\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    min-width: 200px;\n    margin: 0px; }\n  html .disabled {\n    color: #808088; }\n\n.w98 {\n  font-family: \"MSFont\", \"MSFont11\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  width: 100%;\n  height: 100%;\n  image-rendering: pixelated;\n  position: relative;\n  transform: scale(1);\n  /* stylelint-disable selector-max-specificity */ }\n  .w98 *, .w98 {\n    font-family: \"MSFont\", \"MSFont11\", \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    cursor: url(\"data:image/gif;base64,R0lGODlhCwATAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAALABMAAAIrhI4JlhrcBAgvSlrbxPBs7mAU9IlMaV7mwo6jY2zk+Xphh8iWint1tDgUAAA7\"), default; }\n  .w98.x2 {\n    transform: scale(2); }\n    .w98.x2 *, .w98.x2 {\n      cursor: url(\"data:image/gif;base64,R0lGODlhFgAmAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAWACYAAAJzBISpu8b/jINUHgpNCBMrzV1eAm6dV4YjkppiBWyyisazfDIt/ur2zcv8gDQf8ZYT7IDJJfHkZL6izwtVyhpKLVwtssudpZJZ8ZCstE3GvbSrHGxIPue2hW72CfOkNvy9wrbiFjcoGFhnmIjIp4iGcZdQAAA7\"), default; }\n  .w98 ::-webkit-scrollbar {\n    width: 16px;\n    height: 16px;\n    background-color: #ffffff;\n    background-image: url(\"data:image/gif;base64,R0lGODlhAgACAJEAAAAAAP///8zMzP///yH5BAEAAAMALAAAAAACAAIAAAID1CYFADs=\"); }\n    .w98 ::-webkit-scrollbar-track {\n      position: relative; }\n    .w98 ::-webkit-scrollbar-thumb {\n      background: #bbc3c4;\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px 0px #ffffff;\n      border: 1px solid #0c0c0c;\n      border-top: 1px solid #bbc3c4;\n      border-left: 1px solid #bbc3c4; }\n    .w98 ::-webkit-scrollbar-button {\n      background: #bbc3c4;\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px 0px #ffffff;\n      border: 1px solid #0c0c0c;\n      border-top: 1px solid #bbc3c4;\n      border-left: 1px solid #bbc3c4; }\n      .w98 ::-webkit-scrollbar-button:start:decrement, .w98 ::-webkit-scrollbar-button:end:increment {\n        height: 16px;\n        width: 16px;\n        display: block;\n        background-repeat: no-repeat;\n        background-color: #bbc3c4; }\n        .w98 ::-webkit-scrollbar-button:start:decrement:active, .w98 ::-webkit-scrollbar-button:end:increment:active {\n          border: 1px solid #808088;\n          box-shadow: none;\n          background-color: #bbc3c4; }\n      .w98 ::-webkit-scrollbar-button:horizontal:decrement {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIlHEIy7ppBCgAOw==\");\n        background-position: 4px 3px; }\n        .w98 ::-webkit-scrollbar-button:horizontal:decrement:active {\n          background-position: 5px 4px; }\n      .w98 ::-webkit-scrollbar-button:horizontal:increment {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIhA4maeyrlCgAOw==\");\n        background-position: 5px 3px; }\n        .w98 ::-webkit-scrollbar-button:horizontal:increment:active {\n          background-position: 6px 4px; }\n      .w98 ::-webkit-scrollbar-button:vertical:decrement {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIHlGEJq8sOCwA7\");\n        background-position: 3px 5px; }\n        .w98 ::-webkit-scrollbar-button:vertical:decrement:active {\n          background-position: 4px 6px; }\n      .w98 ::-webkit-scrollbar-button:vertical:increment {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIIhA+CKWoNmSgAOw==\");\n        background-position: 3px 5px; }\n        .w98 ::-webkit-scrollbar-button:vertical:increment:active {\n          background-position: 4px 6px; }\n    .w98 ::-webkit-scrollbar-corner {\n      /*\n      background-image: url(resources/corner.png);\n      background-repeat: no-repeat;\n      */\n      background-color: #bbc3c4; }\n";
styleInject(css);

var Theme = function Theme(props) {
  return React.createElement("div", {
    className: cx('w98', props.className),
    style: props.style
  }, props.children);
};

Theme.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape()
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var css$1 = ".btn {\n  border: 0px solid transparent;\n  background-color: #bbc3c4;\n  position: relative;\n  user-select: none; }\n  .btn:disabled, .btn.disabled {\n    pointer-events: none; }\n  .btn:active, .btn:focus, .btn:active:focus, .btn.active, .btn.clicked {\n    outline: none;\n    color: inherit; }\n  .btn:before {\n    position: absolute;\n    display: block;\n    top: 1px;\n    left: 1px;\n    width: calc(100% - 2px);\n    height: calc(100% - 2px); }\n";
styleInject(css$1);

var AbstractButton =
/*#__PURE__*/
function (_Component) {
  _inherits(AbstractButton, _Component);

  function AbstractButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AbstractButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AbstractButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      mouseDown: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouse", function (func, mouseDown) {
      _this.setState({
        mouseDown: mouseDown
      });

      if (func) {
        func();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      _this.button.focus();

      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (e) {
      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this.button.focus();

      if (_this.props.onContextMenu) {
        _this.props.onContextMenu(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoubleClick", function (e) {
      if (_this.props.onDoubleClick) {
        _this.props.onDoubleClick(e);
      }
    });

    return _this;
  }

  _createClass(AbstractButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return React.createElement("button", {
        ref: function ref(btn) {
          _this2.button = btn;
        },
        className: cx('btn', props.className, {
          clicked: this.state.mouseDown,
          'btn--active': props.isActive,
          'btn--disabled': props.isDisabled
        }),
        onClick: function onClick(e) {
          return _this2.handleClick(e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return _this2.handleDoubleClick(e);
        },
        onMouseDown: function onMouseDown() {
          return _this2.handleMouse(props.onMouseDown, true);
        },
        onMouseUp: function onMouseUp() {
          return _this2.handleMouse(props.onMouseUp, false);
        },
        onBlur: function onBlur(e) {
          return _this2.handleBlur(e);
        },
        onContextMenu: this.props.onContextMenu && function (e) {
          return _this2.handleContextMenu(e);
        },
        disabled: props.isDisabled,
        style: props.style
      }, props.children);
    }
  }]);

  return AbstractButton;
}(Component);

var commonButtonPropTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func
};
AbstractButton.propTypes = _objectSpread({}, commonButtonPropTypes, {
  onDoubleClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  style: PropTypes.shape() // Todo: Needs custom prop

});

var css$2 = ".btn.ButtonForm {\n  min-width: 48px;\n  outline-width: 1px;\n  outline-offset: -5px;\n  padding: 5px 1px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn.ButtonForm:focus {\n    outline: #0c0c0c;\n    outline-style: dotted;\n    outline-width: 1px;\n    box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #0c0c0c, inset 2px 2px 0px #ffffff; }\n  .btn.ButtonForm:active:focus, .btn.ButtonForm:active, .btn.ButtonForm.active, .btn.ButtonForm.clicked {\n    padding: 6px 0px 4px 2px;\n    box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #808088, inset 2px 2px 0px #808088; }\n";
styleInject(css$2);

var ButtonForm = function ButtonForm(props) {
  return React.createElement(AbstractButton, {
    className: cx('ButtonForm', props.className),
    onClick: props.onClick,
    isActive: props.isActive,
    isDisabled: props.isDisabled
  }, props.children);
};

AbstractButton.propTypes = _objectSpread({}, commonButtonPropTypes);

var css$3 = ".btn.ButtonNav {\n  padding: 0px;\n  min-width: initial;\n  width: 16px;\n  height: 14px;\n  margin-left: 1px;\n  margin-top: 1px;\n  margin-bottom: 2px;\n  image-rendering: pixelated;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn.ButtonNav img {\n    height: 14px;\n    width: 14px; }\n  .btn.ButtonNav:focus {\n    outline: none;\n    border: none; }\n  .btn.ButtonNav:active:focus, .btn.ButtonNav.clicked {\n    padding-top: 2px;\n    padding-bottom: 1px;\n    padding-left: 4px;\n    padding-right: 8px;\n    box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088; }\n  .btn.ButtonNav.window__close, .btn.ButtonNav.Window__close {\n    margin-left: 2px; }\n";
styleInject(css$3);

var ButtonNav = function ButtonNav(props) {
  return React.createElement(AbstractButton, {
    className: cx('ButtonNav', props.className),
    onClick: props.onClick,
    isActive: props.isActive,
    isDisabled: props.isDisabled
  });
};

ButtonNav.propTypes = commonButtonPropTypes;

var css$4 = ".btn.ButtonProgram {\n  flex: 1;\n  margin: 0px 1px;\n  height: 22px;\n  max-width: 140px;\n  min-width: 40px;\n  display: inline-block;\n  width: 100%;\n  padding-top: 1px;\n  padding-left: 22px;\n  padding-right: 3px;\n  text-align: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background-size: 16px;\n  background-repeat: no-repeat;\n  background-position: 4px 4px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn.ButtonProgram:active:focus, .btn.ButtonProgram.btn--active, .btn.ButtonProgram.clicked {\n    background-position: 5px 5px;\n    box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088;\n    padding-top: 3px;\n    padding-left: 23px;\n    padding-right: 2px; }\n    .btn.ButtonProgram:active:focus:before, .btn.ButtonProgram.btn--active:before, .btn.ButtonProgram.clicked:before {\n      content: \"\";\n      background-size: 2px;\n      z-index: -1;\n      box-shadow: none; }\n  .btn.ButtonProgram.btn--active {\n    background-color: transparent;\n    font-weight: bold; }\n    .btn.ButtonProgram.btn--active:before {\n      content: \"\";\n      background-color: #ffffff;\n      background-image: url(\"data:image/gif;base64,R0lGODlhAgACAJEAAAAAAP///8zMzP///yH5BAEAAAMALAAAAAACAAIAAAID1CYFADs=\"); }\n";
styleInject(css$4);

var ButtonProgram = function ButtonProgram(props) {
  return React.createElement(AbstractButton, {
    className: cx('ButtonProgram', props.className),
    onClick: props.onClick,
    isActive: props.isActive,
    style: _objectSpread({
      backgroundImage: "url(".concat(props.icon, ")")
    }, props.style)
  }, props.children);
};

ButtonProgram.propTypes = _objectSpread({}, commonButtonPropTypes, {
  icon: PropTypes.any
});

var css$5 = ".btn.StartButton {\n  height: 22px;\n  display: flex;\n  align-content: center;\n  width: 54px;\n  padding-right: 6px;\n  background-image: url(\"data:image/gif;base64,R0lGODlhNAATAKIAAAAAAP///wAA/wD/AP//AP8AAP///wAAACH5BAEAAAYALAAAAAA0ABMAAAOPaLrc/jDKSaudIIPLu95dKH2fGIKLVmSDxpTms83qCgwtmik7j46/BglQsOF6BuQrCFEuCkLiJ5diJnswl6sB7dqGSpjPscNaFcWiRpAhbKPVqhbkVAiiAjaA4LYizWOADneEenltfXFXioCCD3mHAHptYW9jV3OKL1FgZzEySZiVnp8yYkKlFyRNqa2uEgkAOw==\");\n  background-size: auto 18px;\n  background-repeat: no-repeat;\n  background-position: 2px 1px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn.StartButton__text {\n    font-size: 1rem;\n    font-weight: bold; }\n  .btn.StartButton.active, .btn.StartButton.clicked {\n    box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c, inset 0px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088, 0px -1px 0px #0c0c0c;\n    background-position: 3px 2px;\n    outline: 1px dotted #0c0c0c;\n    outline-offset: -4px; }\n";
styleInject(css$5);

var StartButton = function StartButton(props) {
  return React.createElement(AbstractButton, {
    className: cx('StartButton', props.className),
    onClick: props.onClick,
    onBlur: props.onBlur,
    isActive: props.isActive
  });
};

StartButton.propTypes = commonButtonPropTypes;

var css$6 = ".btn.ButtonIconLarge {\n  padding: 2px;\n  width: 48px;\n  min-width: 48px; }\n  .btn.ButtonIconLarge img {\n    display: block;\n    margin: 0 auto;\n    filter: grayscale(1);\n    height: 20px;\n    max-width: 20px; }\n  .btn.ButtonIconLarge:disabled, .btn.ButtonIconLarge.disabled {\n    color: #808088; }\n    .btn.ButtonIconLarge:disabled:hover, .btn.ButtonIconLarge.disabled:hover {\n      box-shadow: none; }\n      .btn.ButtonIconLarge:disabled:hover img, .btn.ButtonIconLarge.disabled:hover img {\n        filter: grayscale(1); }\n  .btn.ButtonIconLarge:hover {\n    box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff; }\n    .btn.ButtonIconLarge:hover img {\n      filter: grayscale(0); }\n  .btn.ButtonIconLarge:active:focus {\n    box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c;\n    padding: 3px 1px 1px 3px; }\n";
styleInject(css$6);

var ButtonIconLarge = function ButtonIconLarge(props) {
  return React.createElement(AbstractButton, {
    className: cx('ButtonIconLarge', props.className),
    onClick: props.onClick,
    isDisabled: props.isDisabled
  }, React.createElement("img", {
    src: props.icon
  }), props.title);
};

ButtonIconLarge.propTypes = _objectSpread({}, commonButtonPropTypes, {
  icon: PropTypes.string,
  title: PropTypes.string
});

var css$7 = ".btn.ButtonIconSmall {\n  height: 22px;\n  width: 22px;\n  padding: 0px; }\n  .btn.ButtonIconSmall img {\n    margin: 3px;\n    max-height: 16px;\n    max-width: 16px; }\n  .btn.ButtonIconSmall:hover {\n    box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px #ffffff; }\n  .btn.ButtonIconSmall:hover:focus:active, .btn.ButtonIconSmall:hover:active, .btn.ButtonIconSmall.active, .btn.ButtonIconSmall.clicked {\n    box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808088; }\n    .btn.ButtonIconSmall:hover:focus:active img, .btn.ButtonIconSmall:hover:active img, .btn.ButtonIconSmall.active img, .btn.ButtonIconSmall.clicked img {\n      margin: 4px 2px 2px 4px; }\n  .btn.ButtonIconSmall.btn--disabled img {\n    filter: grayscale(1); }\n";
styleInject(css$7);

var ButtonIconSmall = function ButtonIconSmall(props) {
  return React.createElement(AbstractButton, {
    className: cx('ButtonIconSmall', props.className),
    onClick: props.onClick,
    isDisabled: props.isDisabled,
    isActive: props.isActive
  }, React.createElement("img", {
    src: props.icon
  }));
};

ButtonIconSmall.propTypes = _objectSpread({}, commonButtonPropTypes, {
  icon: PropTypes.string
});

var css$8 = ".Frame {\n  position: relative;\n  background-color: #bbc3c4;\n  padding: 3px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #bbc3c4, inset -2px -2px 0px #808088, inset 2px 2px 0px #ffffff;\n  display: inline-block; }\n";
styleInject(css$8);

var WindowFrame = function WindowFrame(props) {
  return React.createElement("div", {
    className: cx('Frame', props.className)
  }, props.children);
};

WindowFrame.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var StandardMenuItem = function StandardMenuItem(props) {
  return React.createElement("div", {
    className: cx('StandardMenuItem', props.className, props.type, {
      'StandardMenuItem--has-options': props.options,
      active: props.isActive
    }),
    onMouseEnter: props.mouseEnterItem,
    onTouchStart: props.mouseEnterItem
  }, React.createElement("button", {
    className: cx('StandardMenuItem__button', {
      disabled: props.isDisabled
    }),
    onClick: !props.options && !props.isDisabled ? props.closeOnClick(props.onClick) : undefined,
    style: props.icon ? {
      backgroundImage: "url('".concat(props.icon, "')")
    } : undefined,
    value: props.value
  }, props.title), props.options && React.createElement(StandardMenu, {
    className: "StandardMenuItem__child",
    options: props.options,
    value: props.value,
    mouseEnterItem: props.mouseEnterItem,
    closeOnClick: props.closeOnClick
  }));
};

StandardMenuItem.defaultProps = {
  onClick: function onClick() {},
  closeOnClick: function closeOnClick() {
    console.error('Menus require a closeOnClick prop to function correctly'); // eslint-disable-line
  },
  value: []
};
StandardMenuItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string),
  mouseEnterItem: PropTypes.func,
  options: PropTypes.any,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
};

var css$9 = ".StandardMenu {\n  display: inline-flex;\n  flex-direction: column;\n  word-wrap: none;\n  white-space: nowrap;\n  text-overflow: clip; }\n  .StandardMenu > div {\n    position: relative; }\n    .StandardMenu > div > button {\n      user-select: none;\n      position: relative;\n      display: block;\n      width: 100%;\n      padding: 0px 20px;\n      text-align: left;\n      background-repeat: no-repeat;\n      background-size: 16px;\n      background-position: 3px center;\n      background-color: rgba(0, 0, 0, 0);\n      border: none;\n      outline: none;\n      height: 20px; }\n      .StandardMenu > div > button:before {\n        content: \"\";\n        position: absolute;\n        left: 0px;\n        top: 0px;\n        height: 16px;\n        width: 16px;\n        background-repeat: no-repeat;\n        background-position: center; }\n      .StandardMenu > div > button .StandardMenu__item__text {\n        padding: 0px 20px 0px 0px; }\n      .StandardMenu > div > button:disabled, .StandardMenu > div > button.disabled {\n        color: #808088; }\n      .StandardMenu > div > button:not(:only-child):after {\n        content: \"\";\n        position: absolute;\n        background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIhA4maeyrlCgAOw==\");\n        top: 0px;\n        left: 0px;\n        height: 100%;\n        width: calc(100% - 8px);\n        background-position: right center;\n        background-repeat: no-repeat; }\n    .StandardMenu > div.radio-selected > button:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBgAGAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAGAAYAAAIIFA6Gy816RAEAOw==\"); }\n    .StandardMenu > div.checked > button:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAcAAAIMlA9nwMj9xGuLIlUAADs=\"); }\n    .StandardMenu > div.checked.disabled > button:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAHAAcAAAIMnC9nwsj9xmuLIlUAADs=\"); }\n    .StandardMenu > div.active, .StandardMenu > div.clicked {\n      color: #ffffff; }\n      .StandardMenu > div.active > button:not(.disabled), .StandardMenu > div.clicked > button:not(.disabled) {\n        color: #ffffff;\n        background-color: #0000a2; }\n        .StandardMenu > div.active > button:not(.disabled):not(:only-child):after, .StandardMenu > div.clicked > button:not(.disabled):not(:only-child):after {\n          background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIjB4maeyrlCgAOw==\"); }\n    .StandardMenu > div > .window,\n    .StandardMenu > div > .Frame {\n      position: absolute;\n      visibility: hidden;\n      width: auto; }\n      @media (min-height: 720px) and (min-width: 960px) {\n        .StandardMenu > div > .window,\n        .StandardMenu > div > .Frame {\n          transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; } }\n    .StandardMenu > div.active > .window,\n    .StandardMenu > div.active > .Frame {\n      width: auto;\n      visibility: visible; }\n    .StandardMenu > div > .window,\n    .StandardMenu > div > .Frame {\n      left: calc(100% - 3px);\n      top: -3px;\n      max-width: 0%; }\n    .StandardMenu > div:hover > .window,\n    .StandardMenu > div:hover > .Frame, .StandardMenu > div.active > .window,\n    .StandardMenu > div.active > .Frame {\n      max-width: 400%; }\n  .StandardMenu > div:empty:not(:only-child) {\n    position: relative;\n    width: 95%;\n    margin: 2px auto;\n    border-top: 1px solid #808088;\n    border-bottom: 1px solid #ffffff;\n    display: none; }\n  .StandardMenu > div:not(:empty) + div:empty:not(:last-child):not(:first-child) {\n    display: block; }\n  .StandardMenu.css div__sub-menu--top > .window,\n  .StandardMenu.css div__sub-menu--top > .Frame {\n    position: absolute;\n    visibility: hidden;\n    width: auto; }\n    @media (min-height: 720px) and (min-width: 960px) {\n      .StandardMenu.css div__sub-menu--top > .window,\n      .StandardMenu.css div__sub-menu--top > .Frame {\n        transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; } }\n  .StandardMenu.css div__sub-menu--top.active > .window,\n  .StandardMenu.css div__sub-menu--top.active > .Frame {\n    width: auto;\n    visibility: visible; }\n  .StandardMenu.css div__sub-menu--top > .window,\n  .StandardMenu.css div__sub-menu--top > .Frame {\n    bottom: calc(100% + $windowPadding);\n    left: 0px;\n    height: 0px;\n    max-height: 0%;\n    max-width: 100%; }\n  .StandardMenu.css div__sub-menu--top:hover > .window,\n  .StandardMenu.css div__sub-menu--top:hover > .Frame, .StandardMenu.css div__sub-menu--top.active > .window,\n  .StandardMenu.css div__sub-menu--top.active > .Frame {\n    height: initial;\n    max-height: 100%; }\n  .StandardMenu.css div__sub-menu--bottom > .window,\n  .StandardMenu.css div__sub-menu--bottom > .Frame {\n    position: absolute;\n    visibility: hidden;\n    width: auto; }\n    @media (min-height: 720px) and (min-width: 960px) {\n      .StandardMenu.css div__sub-menu--bottom > .window,\n      .StandardMenu.css div__sub-menu--bottom > .Frame {\n        transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; } }\n  .StandardMenu.css div__sub-menu--bottom.active > .window,\n  .StandardMenu.css div__sub-menu--bottom.active > .Frame {\n    width: auto;\n    visibility: visible; }\n  .StandardMenu.css div__sub-menu--bottom > .window,\n  .StandardMenu.css div__sub-menu--bottom > .Frame {\n    top: calc(100% + $windowPadding);\n    left: 0px;\n    max-height: 0%;\n    max-width: 100%; }\n  .StandardMenu.css div__sub-menu--bottom:hover > .window,\n  .StandardMenu.css div__sub-menu--bottom:hover > .Frame, .StandardMenu.css div__sub-menu--bottom.active > .window,\n  .StandardMenu.css div__sub-menu--bottom.active > .Frame {\n    height: initial;\n    max-height: 100%; }\n  .StandardMenu.css div__sub-menu--left > .window,\n  .StandardMenu.css div__sub-menu--left > .Frame {\n    position: absolute;\n    visibility: hidden;\n    width: auto; }\n    @media (min-height: 720px) and (min-width: 960px) {\n      .StandardMenu.css div__sub-menu--left > .window,\n      .StandardMenu.css div__sub-menu--left > .Frame {\n        transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; } }\n  .StandardMenu.css div__sub-menu--left.active > .window,\n  .StandardMenu.css div__sub-menu--left.active > .Frame {\n    width: auto;\n    visibility: visible; }\n  .StandardMenu.css div__sub-menu--left > .window,\n  .StandardMenu.css div__sub-menu--left > .Frame {\n    left: -100%;\n    top: -3px;\n    max-width: 0%; }\n  .StandardMenu.css div__sub-menu--left:hover > .window,\n  .StandardMenu.css div__sub-menu--left:hover > .Frame, .StandardMenu.css div__sub-menu--left.active > .window,\n  .StandardMenu.css div__sub-menu--left.active > .Frame {\n    max-width: 100%; }\n  .StandardMenu.css div:active,\n  .StandardMenu.css div .active {\n    display: none; }\n  .StandardMenu.css div:hover > .window,\n  .StandardMenu.css div:hover > .Frame {\n    width: auto;\n    visibility: visible;\n    display: block; }\n\n.StandardMenuItem--empty .StandardMenuItem__button {\n  text-shadow: 1px 1px #ffffff;\n  text-align: center; }\n";
styleInject(css$9);

var DIVIDER = 'divider';

var flattenWithDividers = function flattenWithDividers(options) {
  return options.reduce(function (acc, val, idx) {
    if (!Array.isArray(val)) {
      acc.push(val);
    } else {
      acc = acc.concat(["".concat(DIVIDER, "--group-").concat(idx, "-start")].concat(_toConsumableArray(val), ["".concat(DIVIDER, "--group-").concat(idx, "-end")]));
    }

    return acc;
  }, []);
};

var StandardMenu = function StandardMenu(props) {
  var options = flattenWithDividers(props.options);
  var hasOptions = Array.isArray(options);
  return React.createElement(WindowFrame, {
    className: cx('StandardMenu', props.className, props.direction, {
      'StandardMenu--visible': props.isVisible
    })
  }, hasOptions && options.length > 0 ? options.map(function (option) {
    if (typeof option === 'string' && option.includes(DIVIDER)) {
      return React.createElement("div", {
        key: option.toString(),
        className: "".concat(DIVIDER, " ").concat(option)
      });
    }

    return React.createElement(StandardMenuItem, _extends({
      key: "StandardMenu-item-".concat(option.title)
    }, option, {
      value: [].concat(_toConsumableArray(props.value), [option.title]),
      closeOnClick: props.closeOnClick,
      mouseEnterItem: props.mouseEnterItem
    }));
  }) : React.createElement(StandardMenuItem, {
    title: "(Empty)",
    className: 'StandardMenuItem--empty',
    mouseEnterItem: props.mouseEnterItem,
    closeOnClick: props.closeOnClick,
    isDisabled: true
  }));
};

StandardMenu.defaultProps = {
  value: []
};
var standardMenuProps = {
  value: PropTypes.arrayOf(PropTypes.string),
  mouseEnterItem: PropTypes.func,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  options: PropTypes.any,
  isVisible: PropTypes.bool
};
StandardMenu.propTypes = standardMenuProps;

var withContextLogic = function withContextLogic(ContextButton) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(StandardMenuSimple, _Component);

    function StandardMenuSimple() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, StandardMenuSimple);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StandardMenuSimple)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        options: _this.props.options,
        isActive: _this.props.isActive,
        isOpen: false
      });

      _defineProperty(_assertThisInitialized(_this), "mouseEnterItem", function (e) {
        if (e.target.value) {
          var newOptions = _this.updateActive(e.target.value.split(','), clone(_this.props.options), 0);

          _this.setState({
            options: newOptions
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "addBlurListener", function () {
        document.body.addEventListener('click', _this.handleBlur);
        document.body.addEventListener('mousedown', _this.handleBlur);
      });

      _defineProperty(_assertThisInitialized(_this), "removeBlurListener", function () {
        document.body.removeEventListener('click', _this.handleBlur);
        document.body.removeEventListener('mousedown', _this.handleBlur);
      });

      _defineProperty(_assertThisInitialized(_this), "buttonClick", function () {
        if (_this.state.isOpen) {
          _this.removeBlurListener();

          _this.setState({
            isOpen: false,
            options: _this.props.options
          });
        } else {
          _this.addBlurListener();

          _this.setState({
            isOpen: true,
            options: _this.props.options
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleEvent", function (newState) {
        return function (onEvent) {
          return function (e) {
            if (onEvent) {
              onEvent(e);
            }

            if (newState) {
              _this.setState(newState);
            }
          };
        };
      });

      _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (e) {
        return _this.handleEvent({
          isOpen: true
        })(_this.props.onContextMenu)(e);
      });

      _defineProperty(_assertThisInitialized(_this), "handleBlur", function (e) {
        if (_this.el && !_this.el.contains(e.target)) {
          _this.handleEvent({
            isOpen: false,
            options: _this.props.options
          })(_this.props.onBlur)(e);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleSelectionClose", _this.handleEvent({
        isOpen: false,
        options: _this.props.options
      }));

      return _this;
    }

    _createClass(StandardMenuSimple, [{
      key: "updateActive",
      value: function updateActive(activeFields, newOptions) {
        var _this2 = this;

        var idx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (activeFields.length <= idx) {
          return newOptions;
        }

        var changeIdx = newOptions.findIndex(function (option, optIdx) {
          if (Array.isArray(option)) {
            var subIdx = option.findIndex(function (opt) {
              return opt.title === activeFields[idx];
            });

            if (subIdx !== -1) {
              newOptions[optIdx][subIdx].isActive = true;

              if (newOptions[optIdx][subIdx].options) {
                newOptions[optIdx][subIdx].options = _this2.updateActive(activeFields, newOptions[optIdx][subIdx].options, idx + 1);
              }

              return;
            }
          }

          return option.title === activeFields[idx];
        });

        if (changeIdx !== -1) {
          newOptions[changeIdx].isActive = true;
          newOptions[changeIdx].options = this.updateActive(activeFields, newOptions[changeIdx].options, idx + 1);
        }

        return newOptions;
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var renderedMenu = React.createElement(StandardMenu, {
          options: this.state.options,
          className: "renderedMenu",
          mouseEnterItem: function mouseEnterItem(e) {
            return _this3.mouseEnterItem(e);
          },
          closeOnClick: this.handleSelectionClose
        });

        if (ContextButton) {
          var _this$props = this.props,
              className = _this$props.className,
              props = _objectWithoutProperties(_this$props, ["className"]);

          return React.createElement("div", {
            ref: function ref(el) {
              _this3.el = el;
            },
            className: cx('StandardMenuWrapper', className, {
              active: this.state.isOpen
            })
          }, React.createElement(ContextButton, _extends({}, props, {
            onClick: this.buttonClick,
            className: this.state.isOpen ? 'active' : '',
            onContextMenu: this.props.onContextMenu && function (e) {
              return _this3.handleContextMenu(e);
            }
          }), props.children), renderedMenu);
        }

        return renderedMenu;
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isActive !== prevState.isActive) {
          return {
            options: nextProps.options,
            isActive: nextProps.isActive
          };
        } else return null;
      }
    }]);

    return StandardMenuSimple;
  }(Component), _defineProperty(_class, "defaultProps", {
    value: []
  }), _defineProperty(_class, "propTypes", _objectSpread({}, standardMenuProps, {
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onContextMenu: PropTypes.func
  })), _temp;
};

var AbstractIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(AbstractIcon, _Component);

  function AbstractIcon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AbstractIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AbstractIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      doubleReady: false
    });

    _defineProperty(_assertThisInitialized(_this), "disableAction", function () {
      _this.setState({
        doubleReady: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "checkDoubleClick", function () {
      if (_this.props.onClick) {
        _this.props.onClick();
      }

      if (!_this.props.onDoubleClick) {
        return;
      }

      if (_this.state.doubleReady) {
        _this.props.onDoubleClick();

        _this.disableAction();
      } else {
        _this.setState({
          doubleReady: true
        });

        setTimeout(_this.disableAction, 700);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.icon.focus();

      if (_this.props.onClick) {
        _this.props.onClick();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (e) {
      e.preventDefault();

      _this.icon.focus();

      if (_this.props.onContextMenu) {
        _this.props.onContextMenu(e);
      } //return false;

    });

    return _this;
  }

  _createClass(AbstractIcon, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var Comp = props.href ? 'a' : 'button';
      var iconProps = {
        onDoubleClick: props.onDoubleClick,
        onClick: this.handleClick,
        onContextMenu: this.props.onContextMenu && this.handleContextMenu,
        className: cx('icon', props.className),
        title: props.alt,
        value: props.value,
        ref: function ref(icon) {
          _this2.icon = icon;
        },
        href: props.href
      };
      var contents = React.createElement(React.Fragment, null, React.createElement("div", {
        className: "icon__icon",
        style: {
          backgroundImage: "url('".concat(props.icon, "')")
        }
      }), React.createElement("div", {
        className: "icon__text"
      }, props.title));

      if (this.props.onClick || this.props.onDoubleClick) {
        return React.createElement(Comp, _extends({
          ref: function ref(icon) {
            _this2.icon = icon;
          }
        }, iconProps), contents);
      }

      return React.createElement("div", iconProps, contents);
    }
  }]);

  return AbstractIcon;
}(Component);

var iconProps = {
  title: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  alt: PropTypes.string,
  value: PropTypes.any,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  href: PropTypes.string
};
AbstractIcon.propTypes = iconProps;

var css$a = ".icon.ExplorerIcon {\n  position: relative;\n  display: block;\n  outline: none;\n  background: none;\n  border: none;\n  color: initial;\n  text-decoration: none;\n  padding: 1px 7px 2px;\n  width: 58px;\n  height: 70px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .icon.ExplorerIcon .icon__icon {\n    display: block;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; }\n  .icon.ExplorerIcon:focus, .icon.ExplorerIcon:active, .icon.ExplorerIcon:active:focus, .icon.ExplorerIcon.is-active {\n    outline: none; }\n    .icon.ExplorerIcon:focus .icon__icon, .icon.ExplorerIcon:active .icon__icon, .icon.ExplorerIcon:active:focus .icon__icon, .icon.ExplorerIcon.is-active .icon__icon {\n      filter: hue-rotate(70deg) contrast(0.3) saturate(2); }\n    .icon.ExplorerIcon:focus .icon__text, .icon.ExplorerIcon:active .icon__text, .icon.ExplorerIcon:active:focus .icon__text, .icon.ExplorerIcon.is-active .icon__text {\n      background-color: #0000a2;\n      color: #ffffff;\n      outline: 1px dotted #ffffff;\n      outline-offset: -1px; }\n  .icon.ExplorerIcon .icon__icon {\n    width: 42px;\n    height: 42px;\n    margin: 0 3px; }\n  .icon.ExplorerIcon .icon__text {\n    position: absolute;\n    top: 45px;\n    padding: 2px 6px 0px;\n    max-height: 22px;\n    max-width: 100%;\n    overflow-y: hidden;\n    display: inline-block; }\n  .icon.ExplorerIcon:focus .icon__text, .icon.ExplorerIcon:active .icon__text, .icon.ExplorerIcon:active:focus .icon__text, .icon.ExplorerIcon.active .icon__text, .icon.ExplorerIcon.clicked .icon__text {\n    padding: 2px 6px;\n    max-height: initial;\n    z-index: 1; }\n";
styleInject(css$a);

var ExplorerIcon = function ExplorerIcon(props) {
  return React.createElement(AbstractIcon, {
    onClick: props.onClick,
    onDoubleClick: props.onDoubleClick,
    onContextMenu: props.onContextMenu,
    alt: props.alt,
    className: cx('ExplorerIcon', props.className),
    icon: props.icon,
    title: props.title,
    href: props.href
  });
};

ExplorerIcon.propTypes = iconProps;

var css$b = ".icon.ListIcon {\n  position: relative;\n  display: block;\n  outline: none;\n  background: none;\n  border: none;\n  color: initial;\n  text-decoration: none;\n  padding: 1px 7px 2px;\n  height: 18px;\n  margin: 2px;\n  text-align: left;\n  display: flex;\n  align-items: center; }\n  .icon.ListIcon .icon__icon {\n    display: block;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; }\n  .icon.ListIcon:focus, .icon.ListIcon:active, .icon.ListIcon:active:focus, .icon.ListIcon.is-active {\n    outline: none; }\n    .icon.ListIcon:focus .icon__icon, .icon.ListIcon:active .icon__icon, .icon.ListIcon:active:focus .icon__icon, .icon.ListIcon.is-active .icon__icon {\n      filter: hue-rotate(70deg) contrast(0.3) saturate(2); }\n    .icon.ListIcon:focus .icon__text, .icon.ListIcon:active .icon__text, .icon.ListIcon:active:focus .icon__text, .icon.ListIcon.is-active .icon__text {\n      background-color: #0000a2;\n      color: #ffffff;\n      outline: 1px dotted #ffffff;\n      outline-offset: -1px; }\n  .icon.ListIcon .icon__icon {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    margin-right: 2px; }\n  .icon.ListIcon .icon__text {\n    position: relative;\n    padding: 2px;\n    display: inline-block;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: calc(100% - 20px);\n    padding-bottom: 3px; }\n  .icon.ListIcon:focus .icon__text, .icon.ListIcon:active .icon__text, .icon.ListIcon:active:focus .icon__text, .icon.ListIcon.active .icon__text, .icon.ListIcon.clicked .icon__text {\n    max-height: initial; }\n";
styleInject(css$b);

var ListIcon = function ListIcon(props) {
  return React.createElement(AbstractIcon, {
    onClick: props.onClick,
    onDoubleClick: props.onDoubleClick,
    onContextMenu: props.onContextMenu,
    alt: props.alt,
    className: cx('ListIcon', props.className),
    icon: props.icon,
    title: props.title,
    value: props.value,
    href: props.href
  });
};

ListIcon.propTypes = iconProps;

var css$c = ".ExplorerView {\n  display: flex;\n  flex-flow: column wrap;\n  height: 100%;\n  width: 100%;\n  align-content: flex-start; }\n  .ExplorerView--fixed-width {\n    overflow-y: scroll;\n    height: initial; }\n  .ExplorerView--fixed-height {\n    overflow-x: scroll;\n    width: initial; }\n";
styleInject(css$c);

var ExplorerView = function ExplorerView(props) {
  return React.createElement("div", {
    className: cx('ExplorerView', props.className, {
      'ExplorerView--fixed-width': props.fixedWidth,
      'ExplorerView--fixed-height': props.fixedHeight
    }),
    style: {
      backgroundColor: props.style.backgroundColor,
      backgroundImage: props.style.backgroundImage,
      backgroundSize: props.style.backgroundSize,
      backgroundRepeat: props.style.backgroundRepeat,
      backgroundPosition: props.style.backgroundPosition
    }
  }, props.children);
};

ExplorerView.defaultProps = {
  style: {}
};
ExplorerView.propTypes = {
  children: PropTypes.node,
  fixedHeight: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  className: PropTypes.string
};

var Toggle = function Toggle(props) {
  return React.createElement("div", {
    className: cx('Toggle', props.className)
  }, React.createElement("input", {
    type: props.type,
    id: props.id,
    disabled: props.isDisabled,
    value: props.value,
    checked: props.checked,
    onChange: props.onChange,
    name: props.name
  }), React.createElement("label", {
    htmlFor: props.id
  }, React.createElement("span", null, props.label)));
};

var toggleProps = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool
};
Toggle.propTypes = toggleProps;

var css$d = ".Checkbox {\n  display: inline-block; }\n  .Checkbox input[type=\"checkbox\"] {\n    opacity: 0;\n    display: none;\n    cursor: pointer; }\n    .Checkbox input[type=\"checkbox\"] + label {\n      position: relative;\n      padding: 1px 0px;\n      padding-left: 16px; }\n      .Checkbox input[type=\"checkbox\"] + label > span,\n      .Checkbox input[type=\"checkbox\"] + label > div {\n        display: inline-block;\n        border: 1px solid rgba(0, 0, 0, 0); }\n      .Checkbox input[type=\"checkbox\"] + label:before {\n        content: \"\";\n        position: absolute;\n        left: 0px;\n        top: 1px;\n        width: 20px;\n        height: 12px;\n        background-repeat: no-repeat; }\n    .Checkbox input[type=\"checkbox\"]:checked + label {\n      border-bottom-left-radius: 2px;\n      border-bottom-right-radius: 2px; }\n    .Checkbox input[type=\"checkbox\"]:checked:active + label > span,\n    .Checkbox input[type=\"checkbox\"]:checked:active + label > div, .Checkbox input[type=\"checkbox\"]:checked:focus + label > span,\n    .Checkbox input[type=\"checkbox\"]:checked:focus + label > div, .Checkbox input[type=\"checkbox\"]:checked:active:focus + label > span,\n    .Checkbox input[type=\"checkbox\"]:checked:active:focus + label > div, .Checkbox input[type=\"checkbox\"]:checked.active + label > span,\n    .Checkbox input[type=\"checkbox\"]:checked.active + label > div, .Checkbox input[type=\"checkbox\"]:checked.clicked + label > span,\n    .Checkbox input[type=\"checkbox\"]:checked.clicked + label > div {\n      border: 1px dotted #0c0c0c; }\n    .Checkbox input[type=\"checkbox\"]:disabled + label, .Checkbox input[type=\"checkbox\"].disabled + label {\n      color: #808088; }\n    .Checkbox input[type=\"checkbox\"] + label:before {\n      width: 13px;\n      height: 13px;\n      background-color: #ffffff;\n      box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n    .Checkbox input[type=\"checkbox\"]:checked + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAcAAAIMlA9nwMj9xGuLIlUAADs=\");\n      background-position: center;\n      background-size: 8px; }\n    .Checkbox input[type=\"checkbox\"]:disabled + label:before, .Checkbox input[type=\"checkbox\"].disabled + label:before {\n      background-color: #bbc3c4; }\n    .Checkbox input[type=\"checkbox\"]:disabled:checked + label:before, .Checkbox input[type=\"checkbox\"].disabled:checked + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAHAAcAAAIMnC9nwsj9xmuLIlUAADs=\"); }\n";
styleInject(css$d);

var Checkbox = function Checkbox(props) {
  return React.createElement(Toggle, _extends({}, props, {
    className: cx('Checkbox', props.className),
    type: "checkbox"
  }));
};

Checkbox.propTypes = Toggle.propTypes;

var css$e = ".Radio {\n  display: inline-block; }\n  .Radio input[type=\"radio\"] {\n    opacity: 0;\n    display: none;\n    cursor: pointer; }\n    .Radio input[type=\"radio\"] + label {\n      position: relative;\n      padding: 1px 0px;\n      padding-left: 16px; }\n      .Radio input[type=\"radio\"] + label > span,\n      .Radio input[type=\"radio\"] + label > div {\n        display: inline-block;\n        border: 1px solid rgba(0, 0, 0, 0); }\n      .Radio input[type=\"radio\"] + label:before {\n        content: \"\";\n        position: absolute;\n        left: 0px;\n        top: 1px;\n        width: 20px;\n        height: 12px;\n        background-repeat: no-repeat; }\n    .Radio input[type=\"radio\"]:checked + label {\n      border-bottom-left-radius: 2px;\n      border-bottom-right-radius: 2px; }\n    .Radio input[type=\"radio\"]:checked:active + label > span,\n    .Radio input[type=\"radio\"]:checked:active + label > div, .Radio input[type=\"radio\"]:checked:focus + label > span,\n    .Radio input[type=\"radio\"]:checked:focus + label > div, .Radio input[type=\"radio\"]:checked:active:focus + label > span,\n    .Radio input[type=\"radio\"]:checked:active:focus + label > div, .Radio input[type=\"radio\"]:checked.active + label > span,\n    .Radio input[type=\"radio\"]:checked.active + label > div, .Radio input[type=\"radio\"]:checked.clicked + label > span,\n    .Radio input[type=\"radio\"]:checked.clicked + label > div {\n      border: 1px dotted #0c0c0c; }\n    .Radio input[type=\"radio\"]:disabled + label, .Radio input[type=\"radio\"].disabled + label {\n      color: #808088; }\n    .Radio input[type=\"radio\"] + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMqSErTs6uBCVqcIQesBtCaEDAfGAaeeaZqILKqyLQyI4hhTWT3nUEKECQBADs=\"); }\n    .Radio input[type=\"radio\"]:checked + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMtSErTs6uBCVqcIQesBtCaEDBfhmWiZ1JooG5skJZwOA6g3QliKC4oXg+iAEESADs=\"); }\n    .Radio input[type=\"radio\"]:disabled + label:before, .Radio input[type=\"radio\"].disabled + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMpSErTs6uBCVqccAY1AFTC1n1LOJKE6aEqmorsxggCRMtEENA3vug6SAIAOw==\"); }\n    .Radio input[type=\"radio\"]:disabled:checked + label:before, .Radio input[type=\"radio\"].disabled:checked + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMtSErTs6uBCVqccAY1AFTC1i0YGIwE5REhqppourLiZ3KCAOWbEgQ5Xg/y+0ESADs=\"); }\n";
styleInject(css$e);

var Radio = function Radio(props) {
  return React.createElement(Toggle, _extends({}, props, {
    className: "Radio",
    type: "radio"
  }));
};

Radio.propTypes = Toggle.propTypes;

var css$f = ".InputText {\n  position: relative;\n  padding: 3px 3px 6px;\n  font-size: 11px;\n  border: none;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n  .InputText:active, .InputText:focus, .InputText:active:focus, .InputText.clicked {\n    outline: none; }\n  .InputText:disabled, .InputText.disabled {\n    background-color: #bbc3c4; }\n";
styleInject(css$f);

var InputText =
/*#__PURE__*/
function (_Component) {
  _inherits(InputText, _Component);

  function InputText() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputText)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.initialValue
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      if (_this.props.initialValue) {
        _this.setState({
          value: e.target.value
        });
      }

      _this.props.onChange(e.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.props.onBlur(_this.state.value);
    });

    return _this;
  }

  _createClass(InputText, [{
    key: "render",
    value: function render() {
      return React.createElement("input", {
        type: "text",
        className: cx('InputText', this.props.className),
        value: this.props.initialValue ? this.state.value : this.props.value,
        id: this.props.id,
        disabled: this.props.isDisabled,
        name: this.props.name || this.props.id,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onKeyDown: this.props.onKeyDown,
        onFocus: this.props.onFocus
      });
    }
  }]);

  return InputText;
}(Component);

_defineProperty(InputText, "defaultProps", {
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
});

InputText.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  initialValue: PropTypes.string,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired
};

var css$g = ".w98 {\n  /* stylelint-disable */ }\n  .w98 .Select {\n    position: relative; }\n    .w98 .Select .Select-control {\n      width: 100%; }\n      .w98 .Select .Select-control .Select-multi-value-wrapper .Select-input,\n      .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder,\n      .w98 .Select .Select-control .Select-multi-value-wrapper .Select-value {\n        width: calc(100% - 4px); }\n      .w98 .Select .Select-control .Select-multi-value-wrapper .Select-input {\n        display: none !important; }\n      .w98 .Select .Select-control .Select-multi-value-wrapper .Select-value,\n      .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder {\n        height: 16px;\n        background-color: #ffffff;\n        border: none;\n        box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n        padding: 2px; }\n        .w98 .Select .Select-control .Select-multi-value-wrapper .Select-value .Select-value-label > div,\n        .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder .Select-value-label > div {\n          margin: 1px;\n          margin-right: 17px;\n          padding-left: 1px;\n          outline: 1px dotted rgba(0, 0, 0, 0); }\n        .w98 .Select .Select-control .Select-multi-value-wrapper .Select-value:active .Select-value-label > div, .w98 .Select .Select-control .Select-multi-value-wrapper .Select-value:focus .Select-value-label > div,\n        .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder:active .Select-value-label > div,\n        .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder:focus .Select-value-label > div {\n          outline: 1px dotted #ffffff;\n          outline-offset: -1px;\n          background-color: #0000a2;\n          color: #ffffff; }\n      .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder {\n        display: flex;\n        align-items: center;\n        padding: 2px 0px 2px 4px; }\n      .w98 .Select .Select-control .Select-arrow-zone {\n        position: absolute;\n        box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #bbc3c4, inset -2px -2px 0px #808088, inset 2px 2px 0px #ffffff;\n        height: 16px;\n        width: 16px;\n        left: calc(100% - 18px);\n        top: 2px;\n        background-color: #bbc3c4;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIIhA+CKWoNmSgAOw==\"); }\n      .w98 .Select .Select-control .Select-clear-zone {\n        display: none; }\n    .w98 .Select .Select-menu-outer {\n      border: 1px solid #0c0c0c;\n      background-color: #ffffff; }\n      .w98 .Select .Select-menu-outer .Select-menu .Select-option {\n        padding: 1px; }\n        .w98 .Select .Select-menu-outer .Select-menu .Select-option:hover {\n          outline: 1px dotted #ffffff;\n          outline-offset: -1px;\n          background-color: #0000a2;\n          color: #ffffff; }\n    .w98 .Select.is-disabled {\n      pointer-events: none; }\n      .w98 .Select.is-disabled .Select-control .Select-multi-value-wrapper .Select-value,\n      .w98 .Select.is-disabled .Select-control .Select-multi-value-wrapper .Select-placeholder {\n        background-color: #bbc3c4; }\n      .w98 .Select.is-disabled .Select-control .Select-arrow-zone:after {\n        background-image: url(\"data:image/gif;base64,R0lGODlhCAAFAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAIAAUAAAIMlC8zKBF6nIJyqqcKADs=\"); }\n";
styleInject(css$g);

var DefaultOptionComponent = function DefaultOptionComponent(props) {
  return React.createElement("div", props);
}; // copied straight from react select demos with slight changes


var menuRenderer = function menuRenderer(_ref) {
  var focusedOption = _ref.focusedOption,
      focusOption = _ref.focusOption,
      inputValue = _ref.inputValue,
      instancePrefix = _ref.instancePrefix,
      onFocus = _ref.onFocus,
      onOptionRef = _ref.onOptionRef,
      onSelect = _ref.onSelect,
      optionClassName = _ref.optionClassName,
      optionComponent = _ref.optionComponent,
      options = _ref.options,
      removeValue = _ref.removeValue,
      selectValue = _ref.selectValue,
      valueArray = _ref.valueArray,
      valueKey = _ref.valueKey;
  var Option = optionComponent || DefaultOptionComponent;
  return options.map(function (option, i) {
    var isSelected = valueArray && valueArray.some(function (x) {
      return x[valueKey] === option[valueKey];
    });
    var isFocused = option === focusedOption;
    var optionClass = cx(optionClassName, {
      'Select-option': true,
      'Select-option--icon': true,
      'is-selected': isSelected,
      'is-focused': isFocused,
      'is-disabled': option.disabled
    });
    return React.createElement(Option, {
      className: optionClass,
      focusOption: focusOption,
      inputValue: inputValue,
      instancePrefix: instancePrefix,
      isDisabled: option.disabled,
      isFocused: isFocused,
      isSelected: isSelected,
      key: "option-".concat(i, "-").concat(option[valueKey]),
      onFocus: onFocus,
      onSelect: onSelect,
      option: option,
      optionIndex: i,
      ref: function ref(_ref2) {
        onOptionRef(_ref2, isFocused);
      },
      removeValue: removeValue,
      selectValue: selectValue,
      backgroundImage: option.icon
    }, React.createElement("span", null, option.label));
  });
};
menuRenderer.propTypes = {
  focusedOption: PropTypes.object,
  inputValue: PropTypes.string,
  instancePrefix: PropTypes.string,
  optionClassName: PropTypes.string,
  options: PropTypes.array,
  valueArray: PropTypes.array,
  valueKey: PropTypes.string,
  focusOption: PropTypes.func,
  onFocus: PropTypes.func,
  onOptionRef: PropTypes.func,
  onSelect: PropTypes.func,
  optionComponent: PropTypes.func,
  optionRenderer: PropTypes.func,
  removeValue: PropTypes.func,
  selectValue: PropTypes.func
};

var ValueRenderer = function ValueRenderer(props) {
  return React.createElement("div", {
    style: {
      backgroundImage: props.icon ? "url('".concat(props.icon, "')") : 'none'
    }
  }, props.label);
};

ValueRenderer.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string
};

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      if (_this.props.onChange) {
        _this.setState({
          value: e.value
        });
      } else {
        _this.props.onChange(e);
      }
    });

    _this.state = {
      value: _this.props.onChange ? null : _this.props.value
    };
    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement(ReactSelect, _extends({}, props, {
        className: "Select",
        placeholder: props.placeholder,
        onChange: this.handleChange,
        disabled: props.isDisabled,
        searchable: props.searchable,
        menuRenderer: props.useIcons ? menuRenderer : undefined,
        valueRenderer: ValueRenderer,
        value: this.props.onChange ? this.props.value : this.state.value
      }));
    }
  }]);

  return Select;
}(Component);

_defineProperty(Select, "defaultProps", {
  placeholder: '',
  searchable: false
});

Select.propTypes = {
  placeholder: PropTypes.any,
  isDisabled: PropTypes.bool,
  searchable: PropTypes.bool,
  useIcons: PropTypes.bool
};

var css$h = ".SelectBox {\n  position: relative;\n  width: 100%;\n  background-color: #ffffff;\n  padding: 2px; }\n  .SelectBox:disabled, .SelectBox.disabled {\n    pointer-events: none;\n    background-color: #bbc3c4; }\n    .SelectBox:disabled > div, .SelectBox.disabled > div {\n      overflow: hidden; }\n    .SelectBox:disabled button, .SelectBox.disabled button {\n      color: #808088 !important; }\n    .SelectBox:disabled .icon, .SelectBox.disabled .icon {\n      filter: grayscale(1); }\n  .SelectBox > div {\n    position: relative;\n    overflow: auto; }\n  .SelectBox:after {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n    pointer-events: none;\n    content: \"\"; }\n  .SelectBox button:not(.icon) {\n    display: block;\n    outline: none;\n    background: transparent;\n    border: none;\n    white-space: nowrap;\n    overflow: hidden;\n    color: #0c0c0c;\n    width: 100%;\n    text-align: left; }\n    .SelectBox button:not(.icon):after {\n      content: attr(title);\n      position: initial; }\n    .SelectBox button:not(.icon).is-active {\n      background-color: #0000a2;\n      color: #ffffff;\n      outline-offset: -1px;\n      outline: 1px dotted #ffffff; }\n  .SelectBox--ExplorerIcon > div {\n    display: flex;\n    flex-direction: row;\n    overflow-y: hidden;\n    padding-bottom: 20px; }\n    .SelectBox--ExplorerIcon > div .explorer-icon {\n      margin: 2px 8px; }\n  .SelectBox .icon--list {\n    margin: 0px;\n    padding: 1px; }\n    .SelectBox .icon--list .icon__text {\n      width: initial; }\n    .SelectBox .icon--list:focus:not(.is-active) .icon__text, .SelectBox .icon--list:active:not(.is-active) .icon__text {\n      background-color: transparent;\n      color: #0c0c0c;\n      outline: none;\n      outline-offset: -1px; }\n";
styleInject(css$h);

var isSelected = function isSelected(selected, val) {
  return Array.isArray(selected) ? selected.some(function (selectedEntry) {
    return selectedEntry === val;
  }) : selected === val;
};

var SelectBox = function SelectBox(props) {
  var Comp = props.component ? props.component : 'button';
  return React.createElement("div", {
    className: cx('SelectBox', props.component ? "SelectBox--".concat(props.component.name) : 'SelectBox--simple', {
      disabled: props.isDisabled
    })
  }, React.createElement("div", null, props.options.map(function (option) {
    return React.createElement(Comp, {
      key: option.value,
      onClick: function onClick() {
        return props.onClick(option.value);
      },
      alt: props.component ? option.alt : undefined,
      className: cx(option.className, {
        'is-active': isSelected(props.selected, option.value)
      }),
      icon: props.component ? option.icon : undefined,
      title: option.title || (typeof option.value === 'string' ? option.value : ''),
      value: option.value
    });
  })));
};

SelectBox.propTypes = {
  component: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isDisabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    title: PropTypes.string,
    icon: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
  }))
};

var css$i = ".SelectMultipleSimple select[multiple] {\n  position: relative;\n  border: none;\n  background-color: #ffffff;\n  border-radius: 0px;\n  outline: none;\n  padding: 2px;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n  .SelectMultipleSimple select[multiple]:active, .SelectMultipleSimple select[multiple]:focus, .SelectMultipleSimple select[multiple]:active:focus, .SelectMultipleSimple select[multiple].active, .SelectMultipleSimple select[multiple].clicked {\n    outline: none; }\n  .SelectMultipleSimple select[multiple] option:active, .SelectMultipleSimple select[multiple] option:focus, .SelectMultipleSimple select[multiple] option:checked, .SelectMultipleSimple select[multiple] option.checked {\n    outline: 1px dotted #ffffff;\n    outline-offset: -1px;\n    background-color: #0000a2;\n    color: #ffffff; }\n";
styleInject(css$i);

var SelectMultipleSimple =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectMultipleSimple, _Component);

  function SelectMultipleSimple(props) {
    var _this;

    _classCallCheck(this, SelectMultipleSimple);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectMultipleSimple).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updateValue", function (value) {
      _this.setState({
        value: value
      });

      _this.props.onChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      if (_this.props.multiple) {
        var selectedIndex = _this.state.value.findIndex(function (val) {
          return val === event.target.value;
        });

        var isSelected = selectedIndex !== -1;

        if (!isSelected && _this.props.selectMultiple) {
          _this.updateValue([].concat(_toConsumableArray(_this.state.value), [event.target.value]));

          return;
        }

        if (!isSelected) {
          _this.updateValue([event.target.value]);

          return;
        }

        if (isSelected) {
          _this.updateValue([].concat(_toConsumableArray(_this.state.value.slice(0, selectedIndex)), _toConsumableArray(_this.state.value.slice(selectedIndex + 1))));

          return;
        }
      } else {
        _this.updateValue(event.target.value);
      }
    });

    _this.state = {
      value: _this.props.multiple ? [] : _this.props.value || ''
    };
    return _this;
  }

  _createClass(SelectMultipleSimple, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement("div", {
        className: "SelectMultipleSimple"
      }, React.createElement("select", {
        value: this.state.value,
        onChange: this.handleChange,
        disabled: this.props.isDisabled,
        multiple: true
      }, props.options.map(function (option) {
        return React.createElement("option", {
          key: option.value.toString(),
          value: option.value,
          disabled: option.isDisabled
        }, React.createElement("div", null, option.title || (typeof option.value === 'string' ? option.value : '')));
      })));
    }
  }]);

  return SelectMultipleSimple;
}(Component);

_defineProperty(SelectMultipleSimple, "defaultProps", {
  onChange: function onChange() {}
});

SelectMultipleSimple.propTypes = {
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  isDisabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
    isDisabled: PropTypes.bool
  }))
};

var css$j = ".MenuBar {\n  display: flex;\n  padding: 0px;\n  font-size: 1rem;\n  position: relative;\n  overflow-y: visible;\n  z-index: 20; }\n  .MenuBar > div {\n    position: relative; }\n    .MenuBar > div > button {\n      padding: 0px 4px;\n      outline: none;\n      border: none;\n      user-select: none;\n      color: #0c0c0c;\n      display: inline-block;\n      background-color: rgba(0, 0, 0, 0);\n      width: 100%;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      text-align: left;\n      padding: 3px 6px; }\n      .MenuBar > div > button + div,\n      .MenuBar > div > button + div {\n        z-index: 20;\n        visibility: hidden;\n        position: absolute;\n        max-height: 0px;\n        top: 100%;\n        left: 0px; }\n        @media (min-height: 720px) and (min-width: 960px) {\n          .MenuBar > div > button + div,\n          .MenuBar > div > button + div {\n            transition: max-height linear 750ms; } }\n      .MenuBar > div > button:hover {\n        box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px #ffffff; }\n      .MenuBar > div > button:active, .MenuBar > div > button:focus, .MenuBar > div > button:active:focus, .MenuBar > div > button.active, .MenuBar > div > button.clicked {\n        box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808088;\n        padding: 4px 5px 2px 7px; }\n        .MenuBar > div > button:active + div,\n        .MenuBar > div > button:active + div, .MenuBar > div > button:focus + div,\n        .MenuBar > div > button:focus + div, .MenuBar > div > button:active:focus + div,\n        .MenuBar > div > button:active:focus + div, .MenuBar > div > button.active + div,\n        .MenuBar > div > button.active + div, .MenuBar > div > button.clicked + div,\n        .MenuBar > div > button.clicked + div {\n          visibility: visible;\n          max-height: 480px; }\n";
styleInject(css$j);

var MenuEntry = withContextLogic(AbstractButton);

var MenuBar = function MenuBar(props) {
  return React.createElement("menu", {
    className: "window__menu MenuBar"
  }, props.options && props.options.map(function (section) {
    return React.createElement(MenuEntry, {
      className: cx('MenuBar__section', props.className),
      key: "menu-bar-section-".concat(section.title),
      options: section.options
    }, section.title);
  }));
};

MenuBar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape()),
  className: PropTypes.string
};

var Started = withContextLogic(StartButton);

var StartMenu = function StartMenu(props) {
  var className = props.className,
      otherProps = _objectWithoutProperties(props, ["className"]);

  return React.createElement(Started, _extends({
    className: cx('StartMenu', className)
  }, otherProps));
};

StartMenu.propTypes = Started.propTypes;

var Notifier = function Notifier(props) {
  return React.createElement("button", {
    className: "btn Notifier TaskBar__notifications__notifier",
    title: props.title,
    onClick: props.onClick,
    style: {
      backgroundImage: "url(\"".concat(props.icon, "\")")
    }
  });
};

Notifier.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
};
Notifier.defaultProps = {
  onClick: function onClick() {}
};

var INTERVALS = 20000;

var formatTime = function formatTime(date) {
  var hour = date.getHours();
  var min = date.getMinutes();

  if (hour < 10) {
    hour = '0' + hour;
  }

  if (min < 10) {
    min = '0' + min;
  }

  return hour + ':' + min;
};

var Time =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Time, _React$Component);

  function Time() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Time);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Time)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      time: _this.props.time ? new Date(_this.props.time) : new Date()
    });

    return _this;
  }

  _createClass(Time, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.fixedTime) {
        this.timerId = setInterval(function () {
          _this2.getDate();
        }, INTERVALS);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timerId) {
        clearInterval(this.timerId);
      }
    }
  }, {
    key: "getDate",
    value: function getDate() {
      this.setState({
        time: new Date(this.state.time.getTime() + INTERVALS)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "TaskBar__notifications__time"
      }, formatTime(this.state.time));
    }
  }]);

  return Time;
}(React.Component);

var Notifications = function Notifications(props) {
  return React.createElement("div", {
    className: "TaskBar__notifications"
  }, props.notifiers.map(function (notifier) {
    return React.createElement(Notifier, {
      key: notifier.alt,
      icon: notifier.icon,
      onClick: notifier.onClick,
      title: notifier.alt
    });
  }), React.createElement(Time, null));
};

Notifications.propsTypes = {
  notifiers: PropTypes.arrayOf(PropTypes.shape(Notifier.propTypes))
};
Notifications.defaultProps = {
  notifiers: []
};

var css$k = ".TaskBar {\n  position: fixed;\n  background-color: #bbc3c4;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  max-width: 100%;\n  z-index: 10;\n  box-shadow: 0px -1px 0px #ffffff;\n  padding: 2px 0px;\n  display: flex; }\n  .TaskBar > div,\n  .TaskBar > button {\n    position: relative;\n    height: 22px;\n    margin: 0px 2px; }\n  .TaskBar > div:not(:last-child) {\n    padding: 0px 6px; }\n    .TaskBar > div:not(:last-child):first-child {\n      padding: 0px 3px 0px 0px; }\n    .TaskBar > div:not(:last-child):after {\n      position: absolute;\n      top: 1px;\n      right: 0px;\n      height: calc(100% - 2px);\n      width: 1px;\n      background-color: #808088;\n      content: \"\";\n      box-shadow: 1px 0px 0px #ffffff; }\n    .TaskBar > div:not(:last-child):before {\n      position: absolute;\n      top: 3px;\n      right: -6px;\n      height: calc(100% - 6px);\n      width: 3px;\n      background-color: #bbc3c4;\n      content: \"\";\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px #ffffff; }\n  .TaskBar__programs {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-wrap: nowrap;\n    margin-right: 4px;\n    min-width: 42px; }\n    .TaskBar__programs:before {\n      display: none; }\n  .TaskBar__start {\n    position: relative; }\n    .TaskBar__start > button + div {\n      position: fixed;\n      bottom: 25px;\n      left: 2px;\n      visibility: hidden;\n      max-height: 0px;\n      padding-left: 22px; }\n      @media (min-height: 720px) and (min-width: 960px) {\n        .TaskBar__start > button + div {\n          transition: max-height linear 200ms; } }\n      .TaskBar__start > button + div > .divider:empty,\n      .TaskBar__start > button + div > div:empty {\n        margin-left: 24px;\n        width: calc(100% - 26px); }\n      .TaskBar__start > button + div:after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        left: 3px;\n        top: 3px;\n        height: calc(100% - 6px);\n        width: 20px;\n        background: #0000a2;\n        background: linear-gradient(#0000a2, #126fc2);\n        background: url(\"data:image/gif;base64,R0lGODlhDgBkALMAAAAAAP///wIAsZKSmZKTmpGSmZKTmcjOz8fNzsfOz8fOzv///wAAAAAAAAAAAAAAACH5BAEAAAsALAAAAAAOAGQAAAT/cMk5SUo06CO179wSGEowgEOQBcRUEuqkUaIRd/cCwyvFzyJNS3JQ2Tyt0QLBklgwEqZGQasShr4DQhuilDxgRCWAINgIAkIxFoB2DDJWbmGb2Oq0nJx2dqoCXUEuKl8GMCZRSjpgWAdYEydVkhMJQlVkQR8UTFRgQDhiHkc9QRyfRwRSV5+ZH1KbnodzjEGPCAYFcBIJj5mOk61IkgZSnpKVxpSeYCuegTjCw8Uev1bLPkfXccuY29SSGgmRky2p4b2Jnm5+3LrQ3CsY5Wuk9ZlwcJrv2uzLvWthJgH0cWVAKkMGBjhKws1YQ4cPP1wxUETclUPuBOXRY4mOvmDJafaFFMmKwoEDCspIgnGSC0pYDZvB88YvE7Bd3YABrBlRJs+HN73MiPgq4heQYJAhlYiOhqyUwLhVo7TTWcYlyEZOmAbEYM+I4hape4b0Cg0tDXlVyapVR9UY5h7KaogAg9R1c82ubEohAgA7\") no-repeat bottom 3px center, linear-gradient(#0000a2, #126fc2); }\n      .TaskBar__start > button + div > div {\n        display: flex;\n        align-items: center;\n        margin-left: 20px; }\n        .TaskBar__start > button + div > div > button {\n          height: 32px;\n          padding-left: 32px;\n          background-size: 22px;\n          background-position: 4px center; }\n    .TaskBar__start > button.active, .TaskBar__start > button.clicked {\n      background-position: 3px 2px;\n      outline: 1px dotted #0c0c0c;\n      outline-offset: -4px; }\n      .TaskBar__start > button.active > div, .TaskBar__start > button.clicked > div {\n        visibility: visible;\n        max-height: 100vh;\n        padding: 3px; }\n        .TaskBar__start > button.active > div div, .TaskBar__start > button.clicked > div div {\n          display: flex; }\n    .TaskBar__start.active > div {\n      visibility: visible;\n      max-height: 100vh;\n      padding: 3px; }\n      .TaskBar__start.active > div div {\n        display: flex; }\n  .TaskBar__notifications {\n    background-color: #bbc3c4;\n    display: flex;\n    flex: none;\n    margin-left: auto;\n    align-items: center;\n    height: 22px;\n    padding: 0px 8px 0px 4px;\n    box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808088; }\n    .TaskBar__notifications__time {\n      margin-left: 4px; }\n    .TaskBar__notifications__notifier {\n      height: 16px;\n      width: 16px;\n      background-color: #bbc3c4;\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      border: none; }\n      .TaskBar__notifications__notifier:active, .TaskBar__notifications__notifier:focus, .TaskBar__notifications__notifier:active:focus, .TaskBar__notifications__notifier.active, .TaskBar__notifications__notifier.clicked {\n        outline: none;\n        border: none; }\n";
styleInject(css$k);

var TaskBar = function TaskBar(props) {
  return React.createElement("div", {
    className: "TaskBar"
  }, React.createElement(StartMenu, {
    className: "TaskBar__start",
    options: props.options
  }), props.quickLaunch && React.createElement("div", {
    className: "TaskBar__quick-launch"
  }, props.quickLaunch.map(function (qlEntry) {
    return React.createElement(ButtonIconSmall, {
      key: "".concat(qlEntry.icon, "-QuickLaunch"),
      alt: qlEntry.alt,
      onClick: qlEntry.onClick,
      icon: qlEntry.icon
    });
  })), React.createElement("div", {
    className: "TaskBar__programs"
  }, props.openWindows && props.openWindows.map(function (openWindow) {
    return React.createElement(ButtonProgram, {
      isActive: openWindow.isActive,
      onClick: openWindow.onClick,
      icon: openWindow.icon,
      key: "".concat(openWindow.icon, "-ButtonProgram-").concat(openWindow.title)
    }, openWindow.title);
  })), React.createElement(Notifications, {
    notifiers: props.notifiers
  }));
};

TaskBar.propTypes = {
  options: PropTypes.array,
  quickLaunch: PropTypes.arrayOf(PropTypes.shape(ButtonIconSmall.propTypes)),
  openWindows: PropTypes.arrayOf(PropTypes.shape(ButtonProgram.propTypes)),
  notifiers: PropTypes.arrayOf(PropTypes.shape(Notifications.propsTypes))
};

var css$l = ".w98 .Window__heading {\n  display: flex;\n  background: linear-gradient(to right, #0000a2, #126fc2);\n  font-weight: bold;\n  color: #ffffff;\n  margin-bottom: 1px;\n  padding: 0px 1px 0px 3px;\n  align-items: center;\n  letter-spacing: 1px; }\n  .w98 .Window__heading button {\n    padding: 0px;\n    min-width: initial;\n    width: 16px;\n    height: 14px;\n    margin-left: 1px;\n    image-rendering: pixelated;\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n    background-repeat: no-repeat;\n    background-position: 1px 1px; }\n    .w98 .Window__heading button:focus, .w98 .Window__heading button.clicked {\n      outline: none;\n      border: none; }\n    .w98 .Window__heading button:active:focus, .w98 .Window__heading button.clicked {\n      padding: 2px 8px 1px 4px;\n      background-position: 2px 2px; }\n\n.w98 .Window__icon {\n  padding: 8px;\n  display: flex;\n  background-size: 14px;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.w98 .Window__title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n  min-width: 0px; }\n\n.w98 .Window__close {\n  margin-left: 2px;\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIUlI+pKwDoVGxvucmwvblqo33MqBQAOw==\"); }\n\n.w98 .Window__restore {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIZlI9pwK3SnAKI1kjtwTlpyHjV830b9qRHAQA7\"); }\n\n.w98 .Window__minimize {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIOlI+py+0PozSg2mXvFAUAOw==\"); }\n\n.w98 .Window__maximize {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIXlI8Jy4wNXzJAznqwsjtPoYFfCDXfWQAAOw==\"); }\n\n.w98 .Window--resizable:after {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  height: 12px;\n  width: 12px;\n  content: \"\";\n  background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAMAAwAAAIbnI8TmSF83IMSKvFWw3dnHnFV+GVGhZZXmaoFADs=\"); }\n\n.w98 .Window--maximized {\n  width: 100%;\n  height: 100%; }\n\n.w98 .Window--drag {\n  background-color: rgba(0, 0, 0, 0);\n  box-shadow: inset -3px -3px 0px #808088, inset 3px 3px 0px #808088; }\n  .w98 .Window--drag > *, .w98 .Window--drag:after {\n    filter: opacity(0.1%); }\n";
styleInject(css$l);

var WindowAbstract =
/*#__PURE__*/
function (_Component) {
  _inherits(WindowAbstract, _Component);

  function WindowAbstract() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WindowAbstract);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WindowAbstract)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      maximized: _this.props.maximizeOnOpen
    });

    _defineProperty(_assertThisInitialized(_this), "handleMaximize", function (e) {
      _this.setState({
        maximized: true
      });

      if (_this.props.onMaximize) {
        _this.props.onMaximize(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRestore", function (e) {
      _this.setState({
        maximized: false
      });

      if (_this.props.onRestore) {
        _this.props.onRestore(e);
      }
    });

    return _this;
  }

  _createClass(WindowAbstract, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement(WindowFrame, {
        className: cx('Window', props.className, {
          'Window--maximized': this.state.maximized,
          'Window--resizable': props.resizable,
          'Window--drag': props.changingState
        })
      }, React.createElement("div", {
        className: "Window__heading"
      }, props.icon && React.createElement("div", {
        className: "Window__icon",
        style: {
          backgroundImage: "url('".concat(props.icon, "')")
        }
      }), React.createElement("div", {
        className: "Window__title"
      }, props.title), props.onHelp && React.createElement(ButtonNav, {
        className: "Window__help",
        onClick: props.onHelp
      }), props.onMinimize && React.createElement(ButtonNav, {
        className: "Window__minimize",
        onClick: props.onMinimize
      }), this.state.maximized && this.props.resizable && React.createElement(ButtonNav, {
        className: "Window__restore",
        onClick: this.handleRestore
      }), !this.state.maximized && this.props.resizable && React.createElement(ButtonNav, {
        className: "Window__maximize",
        onClick: this.handleMaximize
      }), (props.onClose || props.onMaximize || props.onRestore || props.onMinimize || props.onHelp) && React.createElement(ButtonNav, {
        className: "Window__close",
        onClick: props.onClose,
        isDisabled: !props.onClose
      })), props.children);
    }
  }]);

  return WindowAbstract;
}(Component);

_defineProperty(WindowAbstract, "defaultProps", {
  title: '...',
  resizable: true
});

var windowProps = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  onClose: PropTypes.func,
  onMinimize: PropTypes.func,
  onMaximize: PropTypes.func,
  onRestore: PropTypes.func,
  maximizeOnOpen: PropTypes.bool,
  changingState: PropTypes.bool
};
WindowAbstract.propTypes = windowProps;

var css$m = ".WindowAlert {\n  display: inline-flex;\n  flex-direction: column;\n  max-width: 250px; }\n  .WindowAlert__message {\n    display: flex;\n    align-items: center;\n    min-height: 28px;\n    padding: 10px 2px 6px; }\n    .WindowAlert__message.has-icon {\n      background-size: 28px 28px;\n      background-repeat: no-repeat;\n      background-position: 6px 6px;\n      padding: 6px 4px 8px 40px; }\n  .WindowAlert__actions {\n    width: 100%;\n    display: flex;\n    justify-content: center; }\n    .WindowAlert__actions .btn {\n      margin: 0px 4px 8px; }\n";
styleInject(css$m);

var WindowAlert = function WindowAlert(props) {
  return React.createElement(WindowAbstract, {
    className: "WindowAlert",
    onClose: props.onClose,
    onHelp: props.onHelp,
    title: "Error",
    resizabled: false
  }, React.createElement("div", {
    className: cx('WindowAlert__message', {
      'has-icon': props.icon
    }),
    style: props.icon && {
      backgroundImage: "url(".concat(props.icon, ")")
    }
  }, props.children), React.createElement("div", {
    className: "WindowAlert__actions"
  }, props.onOK && React.createElement(ButtonForm, {
    className: "WindowAlert__ok",
    onClick: props.onOK
  }, "OK"), props.onCancel && React.createElement(ButtonForm, {
    className: "WindowAlert__cancel",
    onClick: props.onCancel
  }, "Cancel")));
};

WindowAlert.propTypes = _objectSpread({}, WindowAbstract.propTypes, {
  onOK: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.string
});

var css$n = ".w98 .WindowProgram {\n  display: inline-flex;\n  flex-direction: column; }\n  .w98 .WindowProgram > footer {\n    display: flex; }\n    .w98 .WindowProgram > footer > div {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      min-width: 0px;\n      flex-grow: 1;\n      padding: 2px;\n      height: 12px;\n      box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c; }\n      .w98 .WindowProgram > footer > div:not(:last-child) {\n        margin-right: 2px; }\n      .w98 .WindowProgram > footer > div:last-child {\n        padding-right: 12px; }\n  .w98 .WindowProgram > div:last-child {\n    margin-top: 2px; }\n";
styleInject(css$n);

var insertDefaultFooter = function insertDefaultFooter(customFooterElements) {
  var minimum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var footer = Array.isArray(customFooterElements) ? _toConsumableArray(customFooterElements) : [];

  for (var i = 0; i < minimum; i++) {
    footer[i] = footer && footer.text ? footer[i] : {
      text: ''
    };
  }

  return footer;
};

var Footer = function Footer() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return React.createElement("footer", null, props.entries.map(function (entry, idx) {
    return React.createElement("div", {
      key: "".concat(entry, "-").concat(idx),
      style: entry.icon && {
        backgroundImage: "url(".concat(entry.icon, ")")
      }
    }, entry.text || '');
  }));
};

var footerType = {
  text: PropTypes.string,
  icon: PropTypes.string
};
Footer.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape(footerType))
};

var WindowProgram =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WindowProgram, _React$Component);

  function WindowProgram() {
    _classCallCheck(this, WindowProgram);

    return _possibleConstructorReturn(this, _getPrototypeOf(WindowProgram).apply(this, arguments));
  }

  _createClass(WindowProgram, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var footer = insertDefaultFooter(props.footer);
      return React.createElement(WindowAbstract, {
        className: cx('WindowProgram', props.className),
        icon: props.icon,
        onClose: props.onClose,
        onMinimize: props.onMinimize,
        onMaximize: props.onMaximize,
        onRestore: props.onRestore,
        title: props.title,
        resizable: props.resizable,
        changingState: props.changingState
      }, Array.isArray(props.menuOptions) && React.createElement(MenuBar, {
        className: "WindowProgram__menu",
        options: props.menuOptions
      }), props.children, props.footer && React.createElement(Footer, {
        entries: footer
      }));
    }
  }]);

  return WindowProgram;
}(React.Component);

_defineProperty(WindowProgram, "defaultProps", {
  onMaximize: function onMaximize() {}
});

WindowProgram.propTypes = _objectSpread({}, WindowAbstract.propTypes, {
  menuOptions: PropTypes.arrayOf(PropTypes.any),
  footer: PropTypes.arrayOf(PropTypes.shape(footerType))
});

var css$o = ".options-list__dropdown {\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  height: calc(100% - 4px); }\n  .options-list__dropdown--empty {\n    display: none; }\n  .options-list__dropdown__button {\n    height: 100%;\n    border: none;\n    background-color: #bbc3c4;\n    background-image: url(\"data:image/gif;base64,R0lGODlhCAAFAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAIAAUAAAIKBCSGebzqoJKtAAA7\");\n    background-repeat: no-repeat;\n    background-position: 2px 3px;\n    padding: 0px 6px;\n    font-size: 0.7rem;\n    user-select: none;\n    letter-spacing: -2px;\n    display: flex;\n    flex-direction: column; }\n    .options-list__dropdown__button:hover {\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px #ffffff; }\n    .options-list__dropdown__button:active, .options-list__dropdown__button:focus, .options-list__dropdown__button:active:focus {\n      outline: none;\n      background-position: 3px 4px;\n      box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808088; }\n      .options-list__dropdown__button:active + .options-list__dropdown__list, .options-list__dropdown__button:focus + .options-list__dropdown__list, .options-list__dropdown__button:active:focus + .options-list__dropdown__list {\n        position: absolute;\n        top: 100%;\n        right: 0px;\n        display: block;\n        z-index: 10; }\n  .options-list__dropdown .options-list__dropdown__list {\n    display: none; }\n";
styleInject(css$o);

var OptionsListDropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(OptionsListDropdown, _Component);

  function OptionsListDropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OptionsListDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OptionsListDropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "openList", function () {
      _this.dropdownButton.focus();
    });

    return _this;
  }

  _createClass(OptionsListDropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        className: "options-list__dropdown"
      }, React.createElement("button", {
        ref: function ref(btn) {
          _this2.dropdownButton = btn;
        },
        onClick: this.openList,
        className: "options-list__dropdown__button"
      }), React.createElement(StandardMenu, {
        className: "options-list__dropdown__list",
        options: this.props.options
      }));
    }
  }]);

  return OptionsListDropdown;
}(Component);

var OptionsList =
/*#__PURE__*/
function (_Component2) {
  _inherits(OptionsList, _Component2);

  function OptionsList() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, OptionsList);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(OptionsList)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this3), "state", {
      displayedIcons: [],
      dropdown: []
    });

    return _this3;
  }

  _createClass(OptionsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var entriesInView = (this.section.clientWidth - 20) / 50;
      this.setState({
        displayedIcons: this.props.options.slice(0, entriesInView),
        dropdown: this.props.options.slice(entriesInView)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement("menu", {
        ref: function ref(section) {
          _this4.section = section;
        },
        className: cx(this.props.className, 'options-list')
      }, this.state.displayedIcons.map(function (option) {
        return React.createElement(ButtonIconLarge, {
          key: "large-button-".concat(option.title),
          icon: option.icon,
          title: option.title,
          onClick: option.onClick,
          isDisabled: !option.onClick
        });
      }), this.state.dropdown.length > 0 && React.createElement(OptionsListDropdown, {
        options: this.state.dropdown
      }));
    }
  }]);

  return OptionsList;
}(Component);

_defineProperty(OptionsList, "propTypes", {
  options: PropTypes.arrayOf(PropTypes.shape(ButtonIconLarge.propTypes)),
  className: PropTypes.string
});

var css$p = ".w98 .WindowExplorer {\n  display: inline-flex;\n  flex-direction: column; }\n  .w98 .WindowExplorer__view {\n    min-height: 20px;\n    margin: 2px 0px;\n    flex-grow: 1;\n    background-color: #ffffff;\n    box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n  .w98 .WindowExplorer__details {\n    display: flex; }\n    .w98 .WindowExplorer__details__section {\n      box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808088;\n      flex-grow: 1;\n      margin-top: 2px;\n      height: 16px; }\n      .w98 .WindowExplorer__details__section:not(:last-child) {\n        margin: 2px; }\n  .w98 .WindowExplorer .window__menu {\n    padding: 2px 2px 2px 12px; }\n  .w98 .WindowExplorer > div + menu {\n    margin-top: 2px;\n    box-shadow: 0px 2px 0px -1px #ffffff, -1px 2px 0px -1px #ffffff, -1px 1px 0px #808088, 0px 1px 0px #808088, inset 0px -1px 0px #808088, inset -1px 0px 0px #808088, inset 0px 0px 0px 1px #ffffff, -1px 0px 0px #808088, 1px 0px 0px #ffffff, -1px 1px 0px 0px #ffffff, 1px 1px 0px 0px #ffffff, -1px -1px 0px #808088, 0px -1px 0px #808088, inset 0px 1px 0px #ffffff, 1px -1px 0px #ffffff; }\n  .w98 .WindowExplorer > menu {\n    position: relative;\n    min-height: 16px;\n    padding-left: 12px;\n    margin: 0px 1px;\n    display: flex;\n    box-shadow: inset 0px -1px 0px #808088, inset -1px 0px 0px #808088, inset 0px 0px 0px 1px #ffffff, -1px 0px 0px #808088, 1px 0px 0px #ffffff, -1px 1px 0px 0px #ffffff, 1px 1px 0px 0px #ffffff; }\n    .w98 .WindowExplorer > menu:before {\n      position: absolute;\n      top: 3px;\n      left: 5px;\n      height: calc(100% - 6px);\n      width: 3px;\n      background-color: #bbc3c4;\n      content: \"\";\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px #ffffff; }\n  .w98 .WindowExplorer > footer {\n    display: flex; }\n    .w98 .WindowExplorer > footer > div {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      min-width: 0px;\n      flex-grow: 1;\n      padding: 2px;\n      height: 12px;\n      box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c; }\n      .w98 .WindowExplorer > footer > div:not(:last-child) {\n        margin-right: 2px; }\n      .w98 .WindowExplorer > footer > div:last-child {\n        padding-right: 12px; }\n  .w98 .WindowExplorer__address {\n    display: flex;\n    height: 22px;\n    overflow-y: visible; }\n    .w98 .WindowExplorer__address__title {\n      align-self: center;\n      margin-right: 4px; }\n    .w98 .WindowExplorer__address .Select {\n      flex-grow: 1;\n      z-index: 5;\n      margin-right: 4px;\n      margin-top: 1px; }\n  .w98 .WindowExplorer__options {\n    display: flex;\n    padding: 2px 8px 2px 12px; }\n  .w98 .WindowExplorer > div:last-child {\n    margin-top: 2px; }\n";
styleInject(css$p);

var WindowExplorer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WindowExplorer, _React$Component);

  function WindowExplorer() {
    _classCallCheck(this, WindowExplorer);

    return _possibleConstructorReturn(this, _getPrototypeOf(WindowExplorer).apply(this, arguments));
  }

  _createClass(WindowExplorer, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement(WindowProgram, {
        className: cx('WindowExplorer', props.className),
        icon: props.icon,
        onClose: props.onClose,
        onMinimize: props.onMinimize,
        onMaximize: props.onMaximize,
        onRestore: props.onRestore,
        title: props.title,
        resizable: props.resizable,
        footer: props.footer,
        menuOptions: props.menuOptions,
        maximizeOnOpen: props.maximizeOnOpen,
        changingState: props.changingState
      }, props.explorerOptions && React.createElement(OptionsList, {
        className: "WindowExplorer__options",
        options: props.explorerOptions
      }), React.createElement("menu", {
        className: "WindowExplorer__address"
      }, React.createElement("div", {
        className: "WindowExplorer__address__title"
      }, "Address"), React.createElement(Select, {
        placeholder: React.createElement("span", null, "Test"),
        isDisabled: true
      })), React.createElement("div", {
        className: "WindowExplorer__view"
      }, props.children));
    }
  }]);

  return WindowExplorer;
}(React.Component);

_defineProperty(WindowExplorer, "defaultProps", {
  footer: [],
  menuOptions: []
});

WindowExplorer.propTypes = _objectSpread({}, WindowProgram.propTypes, {
  explorerOptions: PropTypes.shape(OptionsList.propTypes.options)
});

var css$q = ".DetailsSection,\n.window__section {\n  position: relative;\n  border: 1px solid #ffffff;\n  outline: 1px solid #808088;\n  padding: 5px;\n  margin: 16px 8px 8px; }\n  .DetailsSection__title,\n  .window__section__title {\n    position: absolute;\n    top: -10px;\n    padding: 2px 4px;\n    background-color: #bbc3c4; }\n";
styleInject(css$q);

var DetailsSection = function DetailsSection(props) {
  return props.children ? React.createElement("section", {
    className: "DetailsSection window__section"
  }, React.createElement("div", {
    className: "DetailsSection__title"
  }, props.title), props.children) : null;
};

DetailsSection.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node
};

export { Theme, ButtonForm, ButtonNav, ButtonProgram, StartButton, ButtonIconLarge, ButtonIconSmall, StandardMenu, withContextLogic as withStandardMenuWrapper, ExplorerIcon, ListIcon, ExplorerView, Checkbox, Radio, InputText, Select, SelectBox, SelectMultipleSimple, MenuBar, StartMenu, TaskBar, WindowFrame, WindowAbstract, WindowAlert, WindowExplorer, WindowProgram, DetailsSection };
//# sourceMappingURL=pb.module.js.map
