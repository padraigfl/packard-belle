(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('classnames'), require('prop-types'), require('clone')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'classnames', 'prop-types', 'clone'], factory) :
  (global = global || self, factory(global.PackardBelle = {}, global.React, global.classnames, global.PropTypes, global.clone));
}(this, (function (exports, React, cx, PropTypes, clone) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  cx = cx && Object.prototype.hasOwnProperty.call(cx, 'default') ? cx['default'] : cx;
  PropTypes = PropTypes && Object.prototype.hasOwnProperty.call(PropTypes, 'default') ? PropTypes['default'] : PropTypes;
  clone = clone && Object.prototype.hasOwnProperty.call(clone, 'default') ? clone['default'] : clone;

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

  var css_248z = "/* stylelint-disable selector-pseudo-class-no-unknown */\n@font-face {\n  font-family: MSSansSerif;\n  src: url(\"data:application/octet-stream;base64,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\");\n  font-weight: normal;\n}\n@font-face {\n  font-family: MSSansSerif;\n  src: url(\"data:application/octet-stream;base64,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\");\n  font-weight: bold;\n}\nhtml {\n  font-size: 11px;\n}\nhtml button {\n  font-size: 11px;\n}\nhtml menu {\n  padding: 0px;\n  margin: 0px;\n}\nhtml body {\n  font-family: MSSansSerif, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  min-width: 200px;\n  margin: 0px;\n}\nhtml .disabled {\n  color: #808088;\n}\n\n.w98 {\n  font-family: MSSansSerif, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  width: 100%;\n  height: 100%;\n  image-rendering: pixelated;\n  position: relative;\n  transform: scale(1);\n  /* stylelint-disable selector-max-specificity */\n}\n.w98 *, .w98 {\n  font-family: MSSansSerif, \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  cursor: url(\"data:image/gif;base64,R0lGODlhCwATAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAALABMAAAIrhI4JlhrcBAgvSlrbxPBs7mAU9IlMaV7mwo6jY2zk+Xphh8iWint1tDgUAAA7\"), default;\n  /* core resizers */\n  /* stylelint-disable */\n  /* stylelint-enable */\n}\n.w98 * .default, .w98 .default {\n  cursor: url(\"data:image/gif;base64,R0lGODlhCwATAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAALABMAAAIrhI4JlhrcBAgvSlrbxPBs7mAU9IlMaV7mwo6jY2zk+Xphh8iWint1tDgUAAA7\"), default;\n}\n.w98 * .ns-resize, .w98 .ns-resize {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAARAgMAAAByem51AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTP///wAAAObOYyIAAAABdFJOUwBA5thmAAAAL0lEQVQI12NgcGBgYJzAwMC2hIFBaiUDQ9YqB4bQqQ5gMXQMEgfJg9SB1IPEgPoBo1IMTmZmZtEAAAAASUVORK5CYII=\"), ns-resize !important;\n}\n.w98 * .ew-resize, .w98 .ew-resize {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJAgMAAACphi+fAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTP///wAAAObOYyIAAAABdFJOUwBA5thmAAAALklEQVQI12NgCGB0YGBgnMA4gYGBbQLjEgYGqamhKxkYslatWuUAZUPEIWrA6gFBVwvfT0IY5wAAAABJRU5ErkJggg==\"), ew-resize !important;\n}\n.w98 * .nesw-resize, .w98 .nesw-resize {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANAgMAAAAPhQzvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTP///wAAAObOYyIAAAABdFJOUwBA5thmAAAANklEQVQI12NgYA11YGBgWwUkGEEEQxaINQsk5ubAECDJ6MCQkgIUzpwAlWPIArOWAInQEAYGAEgkCk3UfIArAAAAAElFTkSuQmCC\"), nesw-resize !important;\n}\n.w98 * .nwse-resize, .w98 .nwse-resize {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANAgMAAAAPhQzvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTP///wAAAObOYyIAAAABdFJOUwBA5thmAAAAM0lEQVQI12MIDWFgYMhaAiImgAgHIJEJYqWkAIkASUagAJsbkGCc5QCVZ1wFEgMRrKEOAFiMCk2T07A5AAAAAElFTkSuQmCC\"), nwse-resize !important;\n}\n.w98 * .wait,\n.w98 * .wait *, .w98 .wait,\n.w98 .wait * {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACVBMVEVHcEz///8AAADmzmMiAAAAAXRSTlMAQObYZgAAAFBJREFUGNNjYCATcK1atQLCCA3NQBVhCg1NQGNEzoQywlKhjKlTF0AMWhrWAGFozoIZnYHO0IyCMpZOa4BqD10AtWIquslwu9LSEgg5lSAAAOlfHH2vJ/pDAAAAAElFTkSuQmCC\"), wait !important;\n}\n.w98 * .wait2,\n.w98 * .wait2 *, .w98 .wait2,\n.w98 .wait2 * {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAMAAACjpw26AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTP///wAAAObOYyIAAAABdFJOUwBA5thmAAAAX0lEQVQY022RUQ4AIAhCjfsfuoaS2OKrvVGgBeIrwM9SYMHwooibD7fzctcJfyzOq4aLAwtMFG5OerH5OyVbTXdXz3nybRspPWySscJQQbluQfh0mDtxbhuc+HGP3zjaO/4BfC812vkAAAAASUVORK5CYII=\"), wait !important;\n}\n.w98 * .text,\n.w98 * input[type=text],\n.w98 * textarea,\n.w98 * .text *, .w98 .text,\n.w98 input[type=text],\n.w98 textarea,\n.w98 .text * {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAASAgMAAAD07hzbAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTP///wAAAObOYyIAAAABdFJOUwBA5thmAAAAIElEQVQI12MIFXVgyNJyYAid6sDAOIGBJBw6FapX1AEAtPsMHfNC+MIAAAAASUVORK5CYII=\"), text !important;\n}\n.w98 * .none, .w98 .none {\n  cursor: none;\n}\n.w98 * .help, .w98 .help {\n  cursor: url(./cursors/Hand-min.png), help;\n}\n.w98 * .pointer, .w98 .pointer {\n  cursor: url(./cursors/HandPointer-min.png), pointer;\n}\n.w98 * .crosshair, .w98 .crosshair {\n  cursor: url(./cursors/Crosshair-min.png), crosshair;\n}\n.w98 * .vertical-text, .w98 .vertical-text {\n  cursor: url(./cursors/VText-min.png), vertical-text;\n}\n.w98 * .copy, .w98 .copy {\n  cursor: url(./cursors/Copy-min.png), copy;\n}\n.w98 * .move, .w98 .move {\n  cursor: url(./cursors/Move-min.png), move;\n}\n.w98 * .no-drop, .w98 .no-drop {\n  cursor: url(./cursors/NO-min.png), no-drop;\n}\n.w98 * .not-allowed, .w98 .not-allowed {\n  cursor: url(./cursors/NO-min.png), not-allowed;\n}\n.w98 * .grab, .w98 .grab {\n  cursor: url(./cursors/Hand-min.png), grab;\n}\n.w98 * .grabbing, .w98 .grabbing {\n  cursor: url(./cursors/Handsqueezed-min.png), grabbing;\n}\n.w98 * .col-resize, .w98 .col-resize {\n  cursor: url(./cursors/ColRezise-min.png), col-resize;\n}\n.w98 * .row-resize, .w98 .row-resize {\n  cursor: url(./cursors/RowResize-min.png), row-resize;\n}\n.w98 * .n-resize, .w98 .n-resize {\n  cursor: url(./cursors/UpArrow-min.png), n-resize;\n}\n.w98 * .e-resize, .w98 .e-resize {\n  cursor: url(./cursors/LeftArrow-min.png), e-resize;\n}\n.w98 * .s-resize, .w98 .s-resize {\n  cursor: url(./cursors/DownArrow-min.png), s-resize;\n}\n.w98 * .w-resize, .w98 .w-resize {\n  cursor: url(./cursors/RightArrow-min.png), w-resize;\n}\n.w98 * .ne-resize, .w98 .ne-resize {\n  cursor: url(./cursors/UpRightArrow-min.png), ne-resize;\n}\n.w98 * .nw-resize, .w98 .nw-resize {\n  cursor: url(./cursors/UpLeftArrow-min.png), nw-resize;\n}\n.w98 * .se-resize, .w98 .se-resize {\n  cursor: url(./cursors/DownRightArrow-min.png), se-resize;\n}\n.w98 * .sw-resize, .w98 .sw-resize {\n  cursor: url(./cursors/DownLeftArrow-min.png), sw-resize;\n}\n.w98 * .zoom-in, .w98 .zoom-in {\n  cursor: url(./cursors/ZoomIn-min.png), zoom-in;\n}\n.w98 * .zoom-out, .w98 .zoom-out {\n  cursor: url(./cursors/ZoomOut-min.png), zoom-out;\n}\n.w98.x2 {\n  transform: scale(2);\n}\n.w98.x2 *, .w98.x2 {\n  cursor: url(\"data:image/gif;base64,R0lGODlhFgAmAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAWACYAAAJzBISpu8b/jINUHgpNCBMrzV1eAm6dV4YjkppiBWyyisazfDIt/ur2zcv8gDQf8ZYT7IDJJfHkZL6izwtVyhpKLVwtssudpZJZ8ZCstE3GvbSrHGxIPue2hW72CfOkNvy9wrbiFjcoGFhnmIjIp4iGcZdQAAA7\"), default;\n}\n.w98 ::-webkit-scrollbar {\n  width: 16px;\n  height: 16px;\n  background-color: #ffffff;\n  background-image: url(\"data:image/gif;base64,R0lGODlhAgACAJEAAAAAAP///8zMzP///yH5BAEAAAMALAAAAAACAAIAAAID1CYFADs=\");\n}\n.w98 ::-webkit-scrollbar-track {\n  position: relative;\n}\n.w98 ::-webkit-scrollbar-thumb {\n  background: #bbc3c4;\n  box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px 0px #ffffff;\n  border: 1px solid #0c0c0c;\n  border-top: 1px solid #bbc3c4;\n  border-left: 1px solid #bbc3c4;\n}\n.w98 ::-webkit-scrollbar-button {\n  background: #bbc3c4;\n  box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px 0px #ffffff;\n  border: 1px solid #0c0c0c;\n  border-top: 1px solid #bbc3c4;\n  border-left: 1px solid #bbc3c4;\n}\n.w98 ::-webkit-scrollbar-button:start:decrement, .w98 ::-webkit-scrollbar-button:end:increment {\n  height: 16px;\n  width: 16px;\n  display: block;\n  background-repeat: no-repeat;\n  background-color: #bbc3c4;\n}\n.w98 ::-webkit-scrollbar-button:start:decrement:active, .w98 ::-webkit-scrollbar-button:end:increment:active {\n  border: 1px solid #808088;\n  box-shadow: none;\n  background-color: #bbc3c4;\n}\n.w98 ::-webkit-scrollbar-button:horizontal:decrement {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIlHEIy7ppBCgAOw==\");\n  background-position: 4px 3px;\n}\n.w98 ::-webkit-scrollbar-button:horizontal:decrement:active {\n  background-position: 5px 4px;\n}\n.w98 ::-webkit-scrollbar-button:horizontal:increment {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIhA4maeyrlCgAOw==\");\n  background-position: 5px 3px;\n}\n.w98 ::-webkit-scrollbar-button:horizontal:increment:active {\n  background-position: 6px 4px;\n}\n.w98 ::-webkit-scrollbar-button:vertical:decrement {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIHlGEJq8sOCwA7\");\n  background-position: 3px 5px;\n}\n.w98 ::-webkit-scrollbar-button:vertical:decrement:active {\n  background-position: 4px 6px;\n}\n.w98 ::-webkit-scrollbar-button:vertical:increment {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIIhA+CKWoNmSgAOw==\");\n  background-position: 3px 5px;\n}\n.w98 ::-webkit-scrollbar-button:vertical:increment:active {\n  background-position: 4px 6px;\n}\n.w98 ::-webkit-scrollbar-corner {\n  /*\n  background-image: url(resources/corner.png);\n  background-repeat: no-repeat;\n  */\n  background-color: #bbc3c4;\n}\n.w98 ::selection {\n  color: #ffffff;\n  background-color: #0000a2;\n}";
  styleInject(css_248z);

  var Theme = function Theme(props) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: cx('w98', props.className),
      style: props.style
    }, props.children);
  };
  Theme.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape()
  };

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
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
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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
    _extends = Object.assign ? Object.assign.bind() : function (target) {
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
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
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
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var css_248z$1 = ".btn {\n  border: 0px solid transparent;\n  background-color: #bbc3c4;\n  position: relative;\n  user-select: none;\n}\n.btn:disabled, .btn.disabled {\n  pointer-events: none;\n}\n.btn:active, .btn:focus, .btn:active:focus, .btn.active, .btn.clicked {\n  outline: none;\n  color: inherit;\n}\n.btn:before {\n  position: absolute;\n  display: block;\n  top: 1px;\n  left: 1px;\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n}";
  styleInject(css_248z$1);

  var AbstractButton = /*#__PURE__*/function (_Component) {
    _inherits(AbstractButton, _Component);
    var _super = _createSuper(AbstractButton);
    function AbstractButton() {
      var _this;
      _classCallCheck(this, AbstractButton);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
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
        return /*#__PURE__*/React__default.createElement("button", {
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
          style: props.style,
          title: props.title
        }, props.children);
      }
    }]);
    return AbstractButton;
  }(React.Component);
  var commonButtonPropTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.string,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onClick: PropTypes.func
  };
  AbstractButton.propTypes = _objectSpread2(_objectSpread2({}, commonButtonPropTypes), {}, {
    onDoubleClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    style: PropTypes.shape() // Todo: Needs custom prop
  });

  var commonButtonPropTypes$1 = AbstractButton.propTypes;

  var css_248z$2 = ".btn.ButtonForm {\n  min-width: 48px;\n  outline-width: 1px;\n  outline-offset: -5px;\n  padding: 5px 1px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4;\n}\n.btn.ButtonForm:focus {\n  outline: #0c0c0c;\n  outline-style: dotted;\n  outline-width: 1px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #0c0c0c, inset 2px 2px 0px #ffffff;\n}\n.btn.ButtonForm:active:focus, .btn.ButtonForm:active, .btn.ButtonForm.active, .btn.ButtonForm.clicked {\n  padding: 6px 0px 4px 2px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #808088, inset 2px 2px 0px #808088;\n}";
  styleInject(css_248z$2);

  var ButtonForm = function ButtonForm(props) {
    return /*#__PURE__*/React__default.createElement(AbstractButton, {
      className: cx('ButtonForm', props.className),
      onClick: props.onClick,
      isActive: props.isActive,
      isDisabled: props.isDisabled
    }, props.children);
  };
  AbstractButton.propTypes = _objectSpread2({}, commonButtonPropTypes$1);

  var css_248z$3 = ".btn.ButtonNav {\n  padding: 0px;\n  min-width: initial;\n  width: 16px;\n  height: 14px;\n  margin-left: 1px;\n  margin-top: 1px;\n  margin-bottom: 2px;\n  image-rendering: pixelated;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4;\n}\n.btn.ButtonNav img {\n  height: 14px;\n  width: 14px;\n}\n.btn.ButtonNav:focus {\n  outline: none;\n  border: none;\n}\n.btn.ButtonNav:active:focus, .btn.ButtonNav.clicked {\n  padding-top: 2px;\n  padding-bottom: 1px;\n  padding-left: 4px;\n  padding-right: 8px;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088;\n}\n.btn.ButtonNav.window__close, .btn.ButtonNav.Window__close {\n  margin-left: 2px;\n}";
  styleInject(css_248z$3);

  var ButtonNav = function ButtonNav(props) {
    return /*#__PURE__*/React__default.createElement(AbstractButton, {
      className: cx('ButtonNav', props.className),
      onClick: props.onClick,
      isActive: props.isActive,
      isDisabled: props.isDisabled
    });
  };
  ButtonNav.propTypes = commonButtonPropTypes$1;

  var css_248z$4 = ".btn.ButtonProgram {\n  flex: 1;\n  margin: 0px 1px;\n  height: 22px;\n  max-width: 140px;\n  min-width: 40px;\n  display: inline-block;\n  width: 100%;\n  padding-top: 1px;\n  padding-left: 22px;\n  padding-right: 3px;\n  text-align: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background-size: 16px;\n  background-repeat: no-repeat;\n  background-position: 4px 4px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4;\n}\n.btn.ButtonProgram:active:focus, .btn.ButtonProgram.btn--active, .btn.ButtonProgram.clicked {\n  background-position: 5px 5px;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088;\n  padding-top: 3px;\n  padding-left: 23px;\n  padding-right: 2px;\n}\n.btn.ButtonProgram:active:focus:before, .btn.ButtonProgram.btn--active:before, .btn.ButtonProgram.clicked:before {\n  content: \"\";\n  background-size: 2px;\n  z-index: -1;\n  box-shadow: none;\n}\n.btn.ButtonProgram.btn--active {\n  background-color: transparent;\n  font-weight: bold;\n}\n.btn.ButtonProgram.btn--active:before {\n  content: \"\";\n  background-color: #ffffff;\n  background-image: url(\"data:image/gif;base64,R0lGODlhAgACAJEAAAAAAP///8zMzP///yH5BAEAAAMALAAAAAACAAIAAAID1CYFADs=\");\n}";
  styleInject(css_248z$4);

  var ButtonProgram = function ButtonProgram(props) {
    return /*#__PURE__*/React__default.createElement(AbstractButton, {
      className: cx('ButtonProgram', props.className),
      onClick: props.onClick,
      isActive: props.isActive,
      style: _objectSpread2({
        backgroundImage: "url(".concat(props.icon, ")")
      }, props.style)
    }, props.children);
  };
  ButtonProgram.propTypes = _objectSpread2(_objectSpread2({}, commonButtonPropTypes$1), {}, {
    icon: PropTypes.any
  });

  var css_248z$5 = ".btn.StartButton {\n  height: 22px;\n  display: flex;\n  align-content: center;\n  width: 54px;\n  padding-right: 6px;\n  background-image: url(\"data:image/gif;base64,R0lGODlhNAATAPIFAAAAAAAA/wD/AP//AP8AAAAAAAAAAAAAACH5BAUAAAUALAAAAAA0ABMAAAOMWLrc/jDKSau9OF/Agf5RJ3ogRi4dwQkdI5aPJ6cqILAnp+j7KfGxEaF2AwJdvlBSQWhwaivjstCiVltVRnMLHR1fqKWOd2wMh50AZ5BFhsNYUlkRcAICasCAPZX2/mRTdYN5eGt8b1aJgYqND3iGdyKIcEmBcYkudl5zMBAyVm1tnhMjn6SoqaqrDwkAOw==\");\n  background-size: auto 18px;\n  background-repeat: no-repeat;\n  background-position: 2px 1px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4;\n}\n.btn.StartButton__text {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.btn.StartButton.active, .btn.StartButton.clicked {\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c, inset 0px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088, 0px -1px 0px #0c0c0c;\n  background-position: 3px 2px;\n  outline: 1px dotted #0c0c0c;\n  outline-offset: -4px;\n}";
  styleInject(css_248z$5);

  var StartButton = function StartButton(props) {
    return /*#__PURE__*/React__default.createElement(AbstractButton, {
      className: cx('StartButton', props.className),
      onClick: props.onClick,
      onBlur: props.onBlur,
      isActive: props.isActive
    });
  };
  StartButton.propTypes = commonButtonPropTypes$1;

  var css_248z$6 = ".ButtonIconLarge {\n  padding: 2px;\n  width: 48px;\n  min-width: 48px;\n  height: 38px;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n.ButtonIconLarge__text {\n  margin-top: auto;\n}\n.ButtonIconLarge .ButtonIconLarge__icon {\n  flex-grow: 1;\n  width: 20px;\n  height: 20px;\n  margin: 1px auto 2px;\n}\n.ButtonIconLarge img {\n  max-width: 20px;\n  max-height: 20px;\n  display: block;\n  filter: grayscale(1);\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0 auto;\n}\n.ButtonIconLarge:disabled, .ButtonIconLarge.disabled {\n  color: #808088;\n}\n.ButtonIconLarge:disabled:hover, .ButtonIconLarge.disabled:hover {\n  box-shadow: none;\n}\n.ButtonIconLarge:disabled:hover img, .ButtonIconLarge.disabled:hover img {\n  filter: grayscale(1);\n}\n.ButtonIconLarge:hover {\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff;\n}\n.ButtonIconLarge:hover img {\n  filter: grayscale(0);\n}\n.ButtonIconLarge:active:focus {\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c;\n  padding: 3px 1px 1px 3px;\n}\n.ButtonIconLarge__icon {\n  flex-grow: 1;\n  width: 20px;\n  height: 20px;\n  margin: 1px auto 2px;\n  align-content: center;\n}";
  styleInject(css_248z$6);

  var ButtonIconLarge = function ButtonIconLarge(props) {
    return /*#__PURE__*/React__default.createElement(AbstractButton, {
      className: cx('ButtonIconLarge', props.className),
      onClick: props.onClick,
      isDisabled: props.isDisabled
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "ButtonIconLarge__icon"
    }, /*#__PURE__*/React__default.createElement("img", {
      src: props.icon
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "ButtonIconLarge__text"
    }, props.title));
  };
  ButtonIconLarge.propTypes = _objectSpread2(_objectSpread2({}, commonButtonPropTypes), {}, {
    icon: PropTypes.string,
    title: PropTypes.string
  });

  var css_248z$7 = ".btn.ButtonIconSmall {\n  height: 22px;\n  width: 22px;\n  padding: 0px;\n}\n.btn.ButtonIconSmall img {\n  margin: 3px;\n  max-height: 16px;\n  max-width: 16px;\n}\n.btn.ButtonIconSmall:hover, .btn.ButtonIconSmall--hasBorder {\n  box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px #ffffff;\n}\n.btn.ButtonIconSmall:hover:focus:active, .btn.ButtonIconSmall:hover:active, .btn.ButtonIconSmall.active, .btn.ButtonIconSmall.clicked {\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808088;\n}\n.btn.ButtonIconSmall:hover:focus:active img, .btn.ButtonIconSmall:hover:active img, .btn.ButtonIconSmall.active img, .btn.ButtonIconSmall.clicked img {\n  margin: 4px 2px 2px 4px;\n}\n.btn.ButtonIconSmall.btn--disabled img {\n  filter: grayscale(1);\n}";
  styleInject(css_248z$7);

  var ButtonIconSmall = function ButtonIconSmall(props) {
    return /*#__PURE__*/React__default.createElement(AbstractButton, {
      className: cx('ButtonIconSmall', props.className, {
        'ButtonIconSmall--hasBorder': props.hasBorder
      }),
      onClick: props.onClick,
      isDisabled: props.isDisabled,
      isActive: props.isActive,
      title: props.title
    }, /*#__PURE__*/React__default.createElement("img", {
      src: props.icon
    }));
  };
  ButtonIconSmall.propTypes = _objectSpread2(_objectSpread2({}, commonButtonPropTypes$1), {}, {
    icon: PropTypes.string
  });

  var css_248z$8 = ".Frame {\n  position: relative;\n  background-color: #bbc3c4;\n  padding: 3px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #bbc3c4, inset -2px -2px 0px #808088, inset 2px 2px 0px #ffffff;\n  display: inline-block;\n}";
  styleInject(css_248z$8);

  var WindowFrame = function WindowFrame(props) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: cx('Frame', props.className),
      ref: props.innerRef
    }, props.children);
  };
  WindowFrame.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var StandardMenuItem = function StandardMenuItem(props) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: cx('StandardMenuItem', props.className, props.type, {
        'StandardMenuItem--has-options': props.options,
        active: props.isActive,
        'radio-selected': props.isSelected,
        checked: props.isChecked
      }),
      onMouseEnter: props.mouseEnterItem,
      onTouchStart: props.mouseEnterItem
    }, /*#__PURE__*/React__default.createElement("button", {
      className: cx('StandardMenuItem__button', {
        disabled: props.isDisabled
      }),
      onClick: !props.options && !props.isDisabled ? props.closeOnClick(props.onClick) : undefined,
      style: props.icon ? {
        backgroundImage: "url('".concat(props.icon, "')")
      } : undefined,
      value: props.value
    }, props.title), props.options && /*#__PURE__*/React__default.createElement(props.StandardMenu, {
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

  var css_248z$9 = ".StandardMenu {\n  display: inline-flex;\n  flex-direction: column;\n  word-wrap: none;\n  white-space: nowrap;\n  text-overflow: clip;\n}\n.StandardMenu > div {\n  position: relative;\n}\n.StandardMenu > div > button {\n  user-select: none;\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0px 20px 0px 28px;\n  text-align: left;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  background-position: 3px center;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  outline: none;\n  height: 20px;\n}\n.StandardMenu > div > button:before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 16px;\n  width: 16px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.StandardMenu > div > button .StandardMenu__item__text {\n  padding: 0px 20px 0px 0px;\n}\n.StandardMenu > div > button:disabled, .StandardMenu > div > button.disabled {\n  color: #808088;\n}\n.StandardMenu > div > button:not(:only-child):after {\n  content: \"\";\n  position: absolute;\n  background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIhA4maeyrlCgAOw==\");\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: calc(100% - 8px);\n  background-position: right center;\n  background-repeat: no-repeat;\n}\n.StandardMenu > div.radio-selected > button:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBgAGAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAGAAYAAAIIFA6Gy816RAEAOw==\");\n}\n.StandardMenu > div.checked > button:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAcAAAIMlA9nwMj9xGuLIlUAADs=\");\n}\n.StandardMenu > div.checked.disabled > button:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAHAAcAAAIMnC9nwsj9xmuLIlUAADs=\");\n}\n.StandardMenu > div.active, .StandardMenu > div.clicked {\n  color: #ffffff;\n}\n.StandardMenu > div.active > button:not(.disabled), .StandardMenu > div.clicked > button:not(.disabled) {\n  color: #ffffff;\n  background-color: #0000a2;\n}\n.StandardMenu > div.active > button:not(.disabled):not(:only-child):after, .StandardMenu > div.clicked > button:not(.disabled):not(:only-child):after {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIjB4maeyrlCgAOw==\");\n}\n.StandardMenu > div > .window,\n.StandardMenu > div > .Frame {\n  position: absolute;\n  visibility: hidden;\n  width: auto;\n}\n@media (min-height: 720px) and (min-width: 960px) {\n  .StandardMenu > div > .window,\n  .StandardMenu > div > .Frame {\n    transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms;\n  }\n}\n.StandardMenu > div.active > .window,\n.StandardMenu > div.active > .Frame {\n  width: auto;\n  visibility: visible;\n}\n.StandardMenu > div > .window,\n.StandardMenu > div > .Frame {\n  left: calc(100% - 3px);\n  top: -3px;\n  max-width: 0%;\n}\n.StandardMenu > div:hover > .window,\n.StandardMenu > div:hover > .Frame, .StandardMenu > div.active > .window,\n.StandardMenu > div.active > .Frame {\n  max-width: 400%;\n}\n.StandardMenu > div:empty:not(:only-child) {\n  position: relative;\n  width: 95%;\n  margin: 2px auto;\n  border-top: 1px solid #808088;\n  border-bottom: 1px solid #ffffff;\n  display: none;\n}\n.StandardMenu > div:not(:empty) + div:empty:not(:last-child):not(:first-child) {\n  display: block;\n}\n.StandardMenu.css div__sub-menu--top > .window,\n.StandardMenu.css div__sub-menu--top > .Frame {\n  position: absolute;\n  visibility: hidden;\n  width: auto;\n}\n@media (min-height: 720px) and (min-width: 960px) {\n  .StandardMenu.css div__sub-menu--top > .window,\n  .StandardMenu.css div__sub-menu--top > .Frame {\n    transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms;\n  }\n}\n.StandardMenu.css div__sub-menu--top.active > .window,\n.StandardMenu.css div__sub-menu--top.active > .Frame {\n  width: auto;\n  visibility: visible;\n}\n.StandardMenu.css div__sub-menu--top > .window,\n.StandardMenu.css div__sub-menu--top > .Frame {\n  bottom: calc(100% + 3px);\n  left: 0px;\n  height: 0px;\n  max-height: 0%;\n  max-width: 100%;\n}\n.StandardMenu.css div__sub-menu--top:hover > .window,\n.StandardMenu.css div__sub-menu--top:hover > .Frame, .StandardMenu.css div__sub-menu--top.active > .window,\n.StandardMenu.css div__sub-menu--top.active > .Frame {\n  height: initial;\n  max-height: 100%;\n}\n.StandardMenu.css div__sub-menu--bottom > .window,\n.StandardMenu.css div__sub-menu--bottom > .Frame {\n  position: absolute;\n  visibility: hidden;\n  width: auto;\n}\n@media (min-height: 720px) and (min-width: 960px) {\n  .StandardMenu.css div__sub-menu--bottom > .window,\n  .StandardMenu.css div__sub-menu--bottom > .Frame {\n    transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms;\n  }\n}\n.StandardMenu.css div__sub-menu--bottom.active > .window,\n.StandardMenu.css div__sub-menu--bottom.active > .Frame {\n  width: auto;\n  visibility: visible;\n}\n.StandardMenu.css div__sub-menu--bottom > .window,\n.StandardMenu.css div__sub-menu--bottom > .Frame {\n  top: calc(100% + 3px);\n  left: 0px;\n  max-height: 0%;\n  max-width: 100%;\n}\n.StandardMenu.css div__sub-menu--bottom:hover > .window,\n.StandardMenu.css div__sub-menu--bottom:hover > .Frame, .StandardMenu.css div__sub-menu--bottom.active > .window,\n.StandardMenu.css div__sub-menu--bottom.active > .Frame {\n  height: initial;\n  max-height: 100%;\n}\n.StandardMenu.css div__sub-menu--left > .window,\n.StandardMenu.css div__sub-menu--left > .Frame {\n  position: absolute;\n  visibility: hidden;\n  width: auto;\n}\n@media (min-height: 720px) and (min-width: 960px) {\n  .StandardMenu.css div__sub-menu--left > .window,\n  .StandardMenu.css div__sub-menu--left > .Frame {\n    transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms;\n  }\n}\n.StandardMenu.css div__sub-menu--left.active > .window,\n.StandardMenu.css div__sub-menu--left.active > .Frame {\n  width: auto;\n  visibility: visible;\n}\n.StandardMenu.css div__sub-menu--left > .window,\n.StandardMenu.css div__sub-menu--left > .Frame {\n  left: -100%;\n  top: -3px;\n  max-width: 0%;\n}\n.StandardMenu.css div__sub-menu--left:hover > .window,\n.StandardMenu.css div__sub-menu--left:hover > .Frame, .StandardMenu.css div__sub-menu--left.active > .window,\n.StandardMenu.css div__sub-menu--left.active > .Frame {\n  max-width: 100%;\n}\n.StandardMenu.css div:active,\n.StandardMenu.css div .active {\n  display: none;\n}\n.StandardMenu.css div:hover > .window,\n.StandardMenu.css div:hover > .Frame {\n  width: auto;\n  visibility: visible;\n  display: block;\n}\n.StandardMenu.css div:hover > button {\n  background-color: #0000a2;\n  color: #ffffff;\n}\n.StandardMenu.css div:hover > button:after {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIjB4maeyrlCgAOw==\");\n}\n.StandardMenu.css div:hover.checked > *:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAHAAcAAAIMnC9nwsj9xmuLIlUAADs=\");\n}\n\n.StandardMenuItem--empty .StandardMenuItem__button {\n  text-shadow: 1px 1px #ffffff;\n  text-align: center;\n}";
  styleInject(css_248z$9);

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
    return /*#__PURE__*/React__default.createElement(WindowFrame, {
      className: cx('StandardMenu', props.className, props.direction, {
        'StandardMenu--visible': props.isVisible
      })
    }, hasOptions && options.length > 0 ? options.map(function (option) {
      if (typeof option === 'string' && option.includes(DIVIDER)) {
        return /*#__PURE__*/React__default.createElement("div", {
          key: option.toString(),
          className: "".concat(DIVIDER, " ").concat(option)
        });
      }
      return /*#__PURE__*/React__default.createElement(StandardMenuItem, _extends({
        key: "StandardMenu-item-".concat(option.title)
      }, option, {
        value: [].concat(_toConsumableArray(props.value), [option.title]),
        closeOnClick: props.closeOnClick,
        mouseEnterItem: props.mouseEnterItem,
        StandardMenu: StandardMenu
      }));
    }) : /*#__PURE__*/React__default.createElement(StandardMenuItem, {
      title: "(Empty)",
      className: 'StandardMenuItem--empty',
      mouseEnterItem: props.mouseEnterItem,
      closeOnClick: props.closeOnClick,
      StandardMenu: StandardMenu,
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

  var standardMenuProps$1 = StandardMenu.propTypes;

  var AbstractIcon = /*#__PURE__*/function (_Component) {
    _inherits(AbstractIcon, _Component);
    var _super = _createSuper(AbstractIcon);
    function AbstractIcon() {
      var _this;
      _classCallCheck(this, AbstractIcon);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        doubleReady: false
      });
      _defineProperty(_assertThisInitialized(_this), "disableAction", function () {
        _this.setState({
          doubleReady: false
        });
      });
      _defineProperty(_assertThisInitialized(_this), "checkDoubleClick", function () {
        _this.handleClick();
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
      _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
        _this.icon.focus();
        if (_this.props.onClick) {
          _this.props.onClick(e);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (e) {
        e.preventDefault();
        _this.icon.focus();
        if (_this.props.onContextMenu) {
          _this.props.onContextMenu(e);
        }
        //return false;
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
          onClick: this.checkDoubleClick,
          onContextMenu: this.props.onContextMenu && this.handleContextMenu,
          onTouchEnd: this.props.onDoubleClick || this.props.onClick,
          className: cx('icon', props.className),
          title: props.alt,
          value: props.value,
          ref: function ref(icon) {
            _this2.icon = icon;
          },
          href: props.href
        };
        var contents = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
          className: "icon__icon",
          style: {
            backgroundImage: "url('".concat(props.icon, "')")
          }
        }), /*#__PURE__*/React__default.createElement("div", {
          className: "icon__text"
        }, props.title));
        if (this.props.onClick || this.props.onDoubleClick) {
          return /*#__PURE__*/React__default.createElement(Comp, _extends({
            ref: function ref(icon) {
              _this2.icon = icon;
            },
            target: props.external && Comp === 'a' && '_blank',
            rel: props.external && Comp === 'a' && 'noopener noreferrer'
          }, iconProps), contents);
        }
        return /*#__PURE__*/React__default.createElement("div", iconProps, contents);
      }
    }]);
    return AbstractIcon;
  }(React.Component);
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
    href: PropTypes.string,
    external: PropTypes.bool
  };
  AbstractIcon.propTypes = iconProps;

  var iconProps$1 = AbstractIcon.propTypes;

  var css_248z$a = ".icon.ExplorerIcon {\n  position: relative;\n  display: block;\n  outline: none;\n  background: none;\n  border: none;\n  color: initial;\n  text-decoration: none;\n  padding: 1px 7px 2px;\n  padding: initial;\n  margin: 3px;\n  width: 52px;\n  height: 58px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.icon.ExplorerIcon .icon__icon {\n  display: block;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.icon.ExplorerIcon:focus, .icon.ExplorerIcon:active, .icon.ExplorerIcon:active:focus, .icon.ExplorerIcon.is-active {\n  outline: none;\n}\n.icon.ExplorerIcon:focus .icon__icon, .icon.ExplorerIcon:active .icon__icon, .icon.ExplorerIcon:active:focus .icon__icon, .icon.ExplorerIcon.is-active .icon__icon {\n  filter: hue-rotate(70deg) contrast(0.3) saturate(2);\n}\n.icon.ExplorerIcon:focus .icon__text, .icon.ExplorerIcon:active .icon__text, .icon.ExplorerIcon:active:focus .icon__text, .icon.ExplorerIcon.is-active .icon__text {\n  background-color: #0000a2;\n  color: #ffffff;\n  outline: 1px dotted #ffffff;\n  outline-offset: -1px;\n}\n.icon.ExplorerIcon .icon__icon {\n  width: 32px;\n  height: 32px;\n  margin: 0 3px;\n}\n.icon.ExplorerIcon .icon__text {\n  margin: 2px;\n  position: absolute;\n  top: 34px;\n  padding: 2px;\n  max-height: 22px;\n  max-width: 100%;\n  overflow: hidden;\n  display: inline-block;\n}\n.icon.ExplorerIcon:focus .icon__text, .icon.ExplorerIcon:active .icon__text, .icon.ExplorerIcon:active:focus .icon__text, .icon.ExplorerIcon.active .icon__text, .icon.ExplorerIcon.clicked .icon__text {\n  padding: 2px 3px;\n  max-height: initial;\n  z-index: 1;\n}";
  styleInject(css_248z$a);

  var ExplorerIcon = function ExplorerIcon(props) {
    return /*#__PURE__*/React__default.createElement(AbstractIcon, _extends({}, props, {
      onClick: props.onClick,
      onDoubleClick: props.onDoubleClick,
      onContextMenu: props.onContextMenu,
      alt: props.alt,
      icon: props.icon,
      title: props.title,
      href: props.href,
      className: cx('ExplorerIcon', props.className)
    }));
  };
  ExplorerIcon.propTypes = iconProps$1;

  var css_248z$b = ".icon.ListIcon {\n  position: relative;\n  display: block;\n  outline: none;\n  background: none;\n  border: none;\n  color: initial;\n  text-decoration: none;\n  padding: 1px 7px 2px;\n  height: 18px;\n  margin: 2px;\n  text-align: left;\n  display: flex;\n  align-items: center;\n}\n.icon.ListIcon .icon__icon {\n  display: block;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.icon.ListIcon:focus, .icon.ListIcon:active, .icon.ListIcon:active:focus, .icon.ListIcon.is-active {\n  outline: none;\n}\n.icon.ListIcon:focus .icon__icon, .icon.ListIcon:active .icon__icon, .icon.ListIcon:active:focus .icon__icon, .icon.ListIcon.is-active .icon__icon {\n  filter: hue-rotate(70deg) contrast(0.3) saturate(2);\n}\n.icon.ListIcon:focus .icon__text, .icon.ListIcon:active .icon__text, .icon.ListIcon:active:focus .icon__text, .icon.ListIcon.is-active .icon__text {\n  background-color: #0000a2;\n  color: #ffffff;\n  outline: 1px dotted #ffffff;\n  outline-offset: -1px;\n}\n.icon.ListIcon .icon__icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  margin-right: 2px;\n}\n.icon.ListIcon .icon__text {\n  position: relative;\n  padding: 2px;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: calc(100% - 20px);\n  padding-bottom: 3px;\n}\n.icon.ListIcon:focus .icon__text, .icon.ListIcon:active .icon__text, .icon.ListIcon:active:focus .icon__text, .icon.ListIcon.active .icon__text, .icon.ListIcon.clicked .icon__text {\n  max-height: initial;\n}";
  styleInject(css_248z$b);

  var ListIcon = function ListIcon(props) {
    return /*#__PURE__*/React__default.createElement(AbstractIcon, _extends({}, props, {
      onClick: props.onClick,
      onDoubleClick: props.onDoubleClick,
      onContextMenu: props.onContextMenu,
      alt: props.alt,
      icon: props.icon,
      title: props.title,
      value: props.value,
      href: props.href,
      className: cx('ListIcon', props.className)
    }));
  };
  ListIcon.propTypes = iconProps;

  var css_248z$c = ".ExplorerView {\n  display: flex;\n  flex-flow: column wrap;\n  height: 100%;\n  width: 100%;\n  align-content: flex-start;\n}\n.ExplorerView--fixed-width {\n  overflow-y: scroll;\n  height: initial;\n}\n.ExplorerView--fixed-height {\n  overflow-x: scroll;\n  width: initial;\n}";
  styleInject(css_248z$c);

  var ExplorerView = function ExplorerView(props) {
    return /*#__PURE__*/React__default.createElement("div", {
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
    return /*#__PURE__*/React__default.createElement("div", {
      className: cx('Toggle', props.className)
    }, /*#__PURE__*/React__default.createElement("input", {
      type: props.type,
      id: props.id,
      disabled: props.isDisabled,
      value: props.value,
      checked: props.checked,
      onChange: props.onChange,
      name: props.name
    }), /*#__PURE__*/React__default.createElement("label", {
      htmlFor: props.id
    }, /*#__PURE__*/React__default.createElement("span", null, props.label)));
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

  var css_248z$d = ".Checkbox {\n  display: inline-block;\n}\n.Checkbox input[type=checkbox] {\n  opacity: 0;\n  display: none;\n  cursor: pointer;\n}\n.Checkbox input[type=checkbox] + label {\n  position: relative;\n  padding: 1px 0px;\n  padding-left: 16px;\n}\n.Checkbox input[type=checkbox] + label > span,\n.Checkbox input[type=checkbox] + label > div {\n  display: inline-block;\n  border: 1px solid rgba(0, 0, 0, 0);\n}\n.Checkbox input[type=checkbox] + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 1px;\n  width: 20px;\n  height: 12px;\n  background-repeat: no-repeat;\n}\n.Checkbox input[type=checkbox]:checked + label {\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n.Checkbox input[type=checkbox]:checked:active + label > span,\n.Checkbox input[type=checkbox]:checked:active + label > div, .Checkbox input[type=checkbox]:checked:focus + label > span,\n.Checkbox input[type=checkbox]:checked:focus + label > div, .Checkbox input[type=checkbox]:checked:active:focus + label > span,\n.Checkbox input[type=checkbox]:checked:active:focus + label > div, .Checkbox input[type=checkbox]:checked.active + label > span,\n.Checkbox input[type=checkbox]:checked.active + label > div, .Checkbox input[type=checkbox]:checked.clicked + label > span,\n.Checkbox input[type=checkbox]:checked.clicked + label > div {\n  border: 1px dotted #0c0c0c;\n}\n.Checkbox input[type=checkbox]:disabled + label, .Checkbox input[type=checkbox].disabled + label {\n  color: #808088;\n}\n.Checkbox input[type=checkbox] + label:before {\n  width: 13px;\n  height: 13px;\n  background-color: #ffffff;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n}\n.Checkbox input[type=checkbox]:checked + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAcAAAIMlA9nwMj9xGuLIlUAADs=\");\n  background-position: center;\n  background-size: 8px;\n}\n.Checkbox input[type=checkbox]:disabled + label:before, .Checkbox input[type=checkbox].disabled + label:before {\n  background-color: #bbc3c4;\n}\n.Checkbox input[type=checkbox]:disabled:checked + label:before, .Checkbox input[type=checkbox].disabled:checked + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAHAAcAAAIMnC9nwsj9xmuLIlUAADs=\");\n}";
  styleInject(css_248z$d);

  var Checkbox = function Checkbox(props) {
    return /*#__PURE__*/React__default.createElement(Toggle, _extends({}, props, {
      className: cx('Checkbox', props.className),
      type: "checkbox"
    }));
  };
  Checkbox.propTypes = Toggle.propTypes;

  var css_248z$e = ".Radio {\n  display: inline-block;\n}\n.Radio input[type=radio] {\n  opacity: 0;\n  display: none;\n  cursor: pointer;\n}\n.Radio input[type=radio] + label {\n  position: relative;\n  padding: 1px 0px;\n  padding-left: 16px;\n}\n.Radio input[type=radio] + label > span,\n.Radio input[type=radio] + label > div {\n  display: inline-block;\n  border: 1px solid rgba(0, 0, 0, 0);\n}\n.Radio input[type=radio] + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 1px;\n  width: 20px;\n  height: 12px;\n  background-repeat: no-repeat;\n}\n.Radio input[type=radio]:checked + label {\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n.Radio input[type=radio]:checked:active + label > span,\n.Radio input[type=radio]:checked:active + label > div, .Radio input[type=radio]:checked:focus + label > span,\n.Radio input[type=radio]:checked:focus + label > div, .Radio input[type=radio]:checked:active:focus + label > span,\n.Radio input[type=radio]:checked:active:focus + label > div, .Radio input[type=radio]:checked.active + label > span,\n.Radio input[type=radio]:checked.active + label > div, .Radio input[type=radio]:checked.clicked + label > span,\n.Radio input[type=radio]:checked.clicked + label > div {\n  border: 1px dotted #0c0c0c;\n}\n.Radio input[type=radio]:disabled + label, .Radio input[type=radio].disabled + label {\n  color: #808088;\n}\n.Radio input[type=radio] + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMqSErTs6uBCVqcIQesBtCaEDAfGAaeeaZqILKqyLQyI4hhTWT3nUEKECQBADs=\");\n}\n.Radio input[type=radio]:checked + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMtSErTs6uBCVqcIQesBtCaEDBfhmWiZ1JooG5skJZwOA6g3QliKC4oXg+iAEESADs=\");\n}\n.Radio input[type=radio]:disabled + label:before, .Radio input[type=radio].disabled + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMpSErTs6uBCVqccAY1AFTC1n1LOJKE6aEqmorsxggCRMtEENA3vug6SAIAOw==\");\n}\n.Radio input[type=radio]:disabled:checked + label:before, .Radio input[type=radio].disabled:checked + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMtSErTs6uBCVqccAY1AFTC1i0YGIwE5REhqppourLiZ3KCAOWbEgQ5Xg/y+0ESADs=\");\n}";
  styleInject(css_248z$e);

  var Radio = function Radio(props) {
    return /*#__PURE__*/React__default.createElement(Toggle, _extends({}, props, {
      className: "Radio",
      type: "radio"
    }));
  };
  Radio.propTypes = Toggle.propTypes;

  var css_248z$f = ".InputText {\n  position: relative;\n  padding: 3px 3px 6px;\n  font-size: 11px;\n  border: none;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n}\n.InputText:active, .InputText:focus, .InputText:active:focus, .InputText.clicked {\n  outline: none;\n}\n.InputText:disabled, .InputText.disabled {\n  background-color: #bbc3c4;\n}";
  styleInject(css_248z$f);

  var InputText = /*#__PURE__*/function (_Component) {
    _inherits(InputText, _Component);
    var _super = _createSuper(InputText);
    function InputText() {
      var _this;
      _classCallCheck(this, InputText);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
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
        return /*#__PURE__*/React__default.createElement("input", {
          type: "text",
          className: cx('InputText text', this.props.className),
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
  }(React.Component);
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

  var css_248z$g = ".FakeSelect {\n  position: relative;\n  display: flex;\n  height: 22px;\n  align-self: center;\n  align-items: center;\n  background-color: #ffffff;\n  overflow: hidden;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n}\n.FakeSelect__icon {\n  margin-left: 6px;\n  height: 16px;\n}\n.FakeSelect__children {\n  margin-left: 6px;\n  margin-right: 28px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.FakeSelect__arrow {\n  position: absolute;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #bbc3c4, inset -2px -2px 0px #808088, inset 2px 2px 0px #ffffff;\n  height: 18px;\n  width: 18px;\n  left: calc(100% - 20px);\n  top: 2px;\n  background-color: #bbc3c4;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIIhA+CKWoNmSgAOw==\");\n}";
  styleInject(css_248z$g);

  var FakeSelect = function FakeSelect(props) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: cx('FakeSelect', {
        disabled: props.isDisabled
      })
    }, props.icon && /*#__PURE__*/React__default.createElement("img", {
      className: "FakeSelect__icon",
      src: props.icon
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "FakeSelect__children"
    }, props.title), /*#__PURE__*/React__default.createElement("div", {
      className: "FakeSelect__arrow"
    }));
  };

  var css_248z$h = ".SelectBox {\n  position: relative;\n  width: 100%;\n  background-color: #ffffff;\n  padding: 2px;\n}\n.SelectBox:disabled, .SelectBox.disabled {\n  pointer-events: none;\n  background-color: #bbc3c4;\n}\n.SelectBox:disabled > div, .SelectBox.disabled > div {\n  overflow: hidden;\n}\n.SelectBox:disabled button, .SelectBox.disabled button {\n  color: #808088 !important;\n}\n.SelectBox:disabled .icon, .SelectBox.disabled .icon {\n  filter: grayscale(1);\n}\n.SelectBox > div {\n  position: relative;\n  overflow: auto;\n}\n.SelectBox:after {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n  pointer-events: none;\n  content: \"\";\n}\n.SelectBox button:not(.icon) {\n  display: block;\n  outline: none;\n  background: transparent;\n  border: none;\n  white-space: nowrap;\n  overflow: hidden;\n  color: #0c0c0c;\n  width: 100%;\n  text-align: left;\n}\n.SelectBox button:not(.icon):after {\n  content: attr(title);\n  position: initial;\n}\n.SelectBox button:not(.icon).is-active {\n  background-color: #0000a2;\n  color: #ffffff;\n  outline-offset: -1px;\n  outline: 1px dotted #ffffff;\n}\n.SelectBox--ExplorerIcon > div {\n  display: flex;\n  flex-direction: row;\n  overflow-y: hidden;\n  padding-bottom: 20px;\n}\n.SelectBox--ExplorerIcon > div .explorer-icon {\n  margin: 2px 8px;\n}\n.SelectBox .icon--list {\n  margin: 0px;\n  padding: 1px;\n}\n.SelectBox .icon--list .icon__text {\n  width: initial;\n}\n.SelectBox .icon--list:focus:not(.is-active) .icon__text, .SelectBox .icon--list:active:not(.is-active) .icon__text {\n  background-color: transparent;\n  color: #0c0c0c;\n  outline: none;\n  outline-offset: -1px;\n}";
  styleInject(css_248z$h);

  var isSelected = function isSelected(selected, val) {
    return Array.isArray(selected) ? selected.some(function (selectedEntry) {
      return selectedEntry === val;
    }) : selected === val;
  };
  var SelectBox = function SelectBox(props) {
    var Comp = props.component ? props.component : 'button';
    return /*#__PURE__*/React__default.createElement("div", {
      className: cx('SelectBox', props.component ? "SelectBox--".concat(props.component.name) : 'SelectBox--simple', {
        disabled: props.isDisabled
      })
    }, /*#__PURE__*/React__default.createElement("div", null, props.options.map(function (option) {
      return /*#__PURE__*/React__default.createElement(Comp, {
        key: _typeof(option.value) !== 'object' ? option.value : JSON.stringify(option.value),
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

  var css_248z$i = ".SelectMultipleSimple select[multiple] {\n  position: relative;\n  border: none;\n  background-color: #ffffff;\n  border-radius: 0px;\n  outline: none;\n  padding: 2px;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n}\n.SelectMultipleSimple select[multiple]:active, .SelectMultipleSimple select[multiple]:focus, .SelectMultipleSimple select[multiple]:active:focus, .SelectMultipleSimple select[multiple].active, .SelectMultipleSimple select[multiple].clicked {\n  outline: none;\n}\n.SelectMultipleSimple select[multiple] option:active, .SelectMultipleSimple select[multiple] option:focus, .SelectMultipleSimple select[multiple] option:checked, .SelectMultipleSimple select[multiple] option.checked {\n  outline: 1px dotted #ffffff;\n  outline-offset: -1px;\n  background-color: #0000a2;\n  color: #ffffff;\n}";
  styleInject(css_248z$i);

  var SelectMultipleSimple = /*#__PURE__*/function (_Component) {
    _inherits(SelectMultipleSimple, _Component);
    var _super = _createSuper(SelectMultipleSimple);
    function SelectMultipleSimple(props) {
      var _this;
      _classCallCheck(this, SelectMultipleSimple);
      _this = _super.call(this, props);
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
        return /*#__PURE__*/React__default.createElement("div", {
          className: "SelectMultipleSimple"
        }, /*#__PURE__*/React__default.createElement("select", {
          value: this.state.value,
          onChange: this.handleChange,
          disabled: this.props.isDisabled,
          multiple: true
        }, props.options.map(function (option) {
          return /*#__PURE__*/React__default.createElement("option", {
            key: option.value.toString(),
            value: option.value,
            disabled: option.isDisabled
          }, /*#__PURE__*/React__default.createElement("div", null, option.title || (typeof option.value === 'string' ? option.value : '')));
        })));
      }
    }]);
    return SelectMultipleSimple;
  }(React.Component);
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

  var _excluded = ["className"];
  var withContextLogic = function withContextLogic(ContextButton) {
    var _class;
    return _class = /*#__PURE__*/function (_Component) {
      _inherits(StandardMenuSimple, _Component);
      var _super = _createSuper(StandardMenuSimple);
      function StandardMenuSimple() {
        var _this;
        _classCallCheck(this, StandardMenuSimple);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
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
          var renderedMenu = /*#__PURE__*/React__default.createElement(StandardMenu, {
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
              props = _objectWithoutProperties(_this$props, _excluded);
            return /*#__PURE__*/React__default.createElement("div", {
              ref: function ref(el) {
                _this3.el = el;
              },
              className: cx('StandardMenuWrapper', className, {
                active: this.state.isOpen
              })
            }, /*#__PURE__*/React__default.createElement(ContextButton, _extends({}, props, {
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
    }(React.Component), _defineProperty(_class, "defaultProps", {
      value: []
    }), _defineProperty(_class, "propTypes", _objectSpread2(_objectSpread2({}, standardMenuProps$1), {}, {
      onClick: PropTypes.func,
      onBlur: PropTypes.func,
      onContextMenu: PropTypes.func
    })), _class;
  };

  var _excluded$1 = ["className"];
  var Started = withContextLogic(StartButton);
  var StartMenu = function StartMenu(props) {
    var className = props.className,
      otherProps = _objectWithoutProperties(props, _excluded$1);
    return /*#__PURE__*/React__default.createElement(Started, _extends({
      className: cx('StartMenu', className)
    }, otherProps));
  };
  StartMenu.propTypes = Started.propTypes;

  var Notifier = function Notifier(props) {
    return /*#__PURE__*/React__default.createElement("button", {
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
  var Time = /*#__PURE__*/function (_React$Component) {
    _inherits(Time, _React$Component);
    var _super = _createSuper(Time);
    function Time() {
      var _this;
      _classCallCheck(this, Time);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
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
        return /*#__PURE__*/React__default.createElement("div", {
          className: "TaskBar__notifications__time"
        }, formatTime(this.state.time));
      }
    }]);
    return Time;
  }(React__default.Component);
  var Notifications = function Notifications(props) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "TaskBar__notifications"
    }, props.notifiers.map(function (notifier) {
      return /*#__PURE__*/React__default.createElement(Notifier, {
        key: notifier.alt,
        icon: notifier.icon,
        onClick: notifier.onClick,
        title: notifier.alt
      });
    }), /*#__PURE__*/React__default.createElement(Time, null));
  };
  Notifications.propsTypes = {
    notifiers: PropTypes.arrayOf(PropTypes.shape(Notifier.propTypes))
  };
  Notifications.defaultProps = {
    notifiers: []
  };

  var css_248z$j = ".TaskBar {\n  position: fixed;\n  background-color: #bbc3c4;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  max-width: 100%;\n  z-index: 10;\n  box-shadow: 0px -1px 0px #ffffff;\n  padding: 2px 0px;\n  display: flex;\n}\n.TaskBar > div,\n.TaskBar > button {\n  position: relative;\n  height: 22px;\n  margin: 0px 2px;\n}\n.TaskBar > div:not(:last-child) {\n  padding: 0px 6px;\n}\n.TaskBar > div:not(:last-child):first-child {\n  padding: 0px 3px 0px 0px;\n}\n.TaskBar > div:not(:last-child):after {\n  position: absolute;\n  top: 1px;\n  right: 0px;\n  height: calc(100% - 2px);\n  width: 1px;\n  background-color: #808088;\n  content: \"\";\n  box-shadow: 1px 0px 0px #ffffff;\n}\n.TaskBar > div:not(:last-child):before {\n  position: absolute;\n  top: 3px;\n  right: -6px;\n  height: calc(100% - 6px);\n  width: 3px;\n  background-color: #bbc3c4;\n  content: \"\";\n  box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px #ffffff;\n}\n.TaskBar__programs {\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-wrap: nowrap;\n  margin-right: 4px;\n  min-width: 42px;\n}\n.TaskBar__programs:before {\n  display: none;\n}\n.TaskBar__start {\n  position: relative;\n}\n.TaskBar__start > button + div {\n  position: fixed;\n  bottom: 25px;\n  left: 2px;\n  visibility: hidden;\n  max-height: 0px;\n  padding-left: 22px;\n}\n@media (min-height: 720px) and (min-width: 960px) {\n  .TaskBar__start > button + div {\n    transition: max-height linear 200ms;\n  }\n}\n.TaskBar__start > button + div > .divider:empty,\n.TaskBar__start > button + div > div:empty {\n  margin-left: 24px;\n  width: calc(100% - 26px);\n}\n.TaskBar__start > button + div:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 3px;\n  top: 3px;\n  height: calc(100% - 6px);\n  width: 20px;\n  background: #0000a2;\n  background: linear-gradient(#0000a2, #126fc2);\n  background: url(\"data:image/gif;base64,R0lGODlhDgBkALMAAAAAAP///wIAsZKSmZKTmpGSmZKTmcjOz8fNzsfOz8fOzv///wAAAAAAAAAAAAAAACH5BAEAAAsALAAAAAAOAGQAAAT/cMk5SUo06CO179wSGEowgEOQBcRUEuqkUaIRd/cCwyvFzyJNS3JQ2Tyt0QLBklgwEqZGQasShr4DQhuilDxgRCWAINgIAkIxFoB2DDJWbmGb2Oq0nJx2dqoCXUEuKl8GMCZRSjpgWAdYEydVkhMJQlVkQR8UTFRgQDhiHkc9QRyfRwRSV5+ZH1KbnodzjEGPCAYFcBIJj5mOk61IkgZSnpKVxpSeYCuegTjCw8Uev1bLPkfXccuY29SSGgmRky2p4b2Jnm5+3LrQ3CsY5Wuk9ZlwcJrv2uzLvWthJgH0cWVAKkMGBjhKws1YQ4cPP1wxUETclUPuBOXRY4mOvmDJafaFFMmKwoEDCspIgnGSC0pYDZvB88YvE7Bd3YABrBlRJs+HN73MiPgq4heQYJAhlYiOhqyUwLhVo7TTWcYlyEZOmAbEYM+I4hape4b0Cg0tDXlVyapVR9UY5h7KaogAg9R1c82ubEohAgA7\") no-repeat bottom 3px center, linear-gradient(#0000a2, #126fc2);\n}\n.TaskBar__start > button + div > div {\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n.TaskBar__start > button + div > div > button {\n  height: 32px;\n  padding-left: 32px;\n  background-size: 22px;\n  background-position: 4px center;\n}\n.TaskBar__start > button.active, .TaskBar__start > button.clicked {\n  background-position: 3px 2px;\n  outline: 1px dotted #0c0c0c;\n  outline-offset: -4px;\n}\n.TaskBar__start > button.active > div, .TaskBar__start > button.clicked > div {\n  visibility: visible;\n  max-height: 100vh;\n  padding: 3px;\n}\n.TaskBar__start > button.active > div div, .TaskBar__start > button.clicked > div div {\n  display: flex;\n}\n.TaskBar__start.active > div {\n  visibility: visible;\n  max-height: 100vh;\n  padding: 3px;\n}\n.TaskBar__start.active > div div {\n  display: flex;\n}\n.TaskBar__notifications {\n  background-color: #bbc3c4;\n  display: flex;\n  flex: none;\n  margin-left: auto;\n  align-items: center;\n  height: 22px;\n  padding: 0px 8px 0px 4px;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808088;\n}\n.TaskBar__notifications__time {\n  margin-left: 4px;\n}\n.TaskBar__notifications__notifier {\n  height: 16px;\n  width: 16px;\n  background-color: #bbc3c4;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  border: none;\n}\n.TaskBar__notifications__notifier:active, .TaskBar__notifications__notifier:focus, .TaskBar__notifications__notifier:active:focus, .TaskBar__notifications__notifier.active, .TaskBar__notifications__notifier.clicked {\n  outline: none;\n  border: none;\n}";
  styleInject(css_248z$j);

  var TaskBar = function TaskBar(props) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "TaskBar"
    }, /*#__PURE__*/React__default.createElement(StartMenu, {
      className: "TaskBar__start",
      options: props.options
    }), props.quickLaunch && /*#__PURE__*/React__default.createElement("div", {
      className: "TaskBar__quick-launch"
    }, props.quickLaunch.map(function (qlEntry) {
      return /*#__PURE__*/React__default.createElement(ButtonIconSmall, {
        key: "".concat(qlEntry.icon, "-QuickLaunch"),
        title: qlEntry.title,
        onClick: qlEntry.onClick,
        icon: qlEntry.icon
      });
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "TaskBar__programs"
    }, props.openWindows && props.openWindows.map(function (openWindow) {
      return /*#__PURE__*/React__default.createElement(ButtonProgram, {
        isActive: openWindow.isActive,
        onClick: openWindow.onClick,
        icon: openWindow.icon,
        key: "".concat(openWindow.icon, "-ButtonProgram-").concat(openWindow.title, "-").concat(openWindow.id)
      }, openWindow.title);
    })), /*#__PURE__*/React__default.createElement(Notifications, {
      notifiers: props.notifiers
    }));
  };
  TaskBar.defaultProps = {
    openWindows: [],
    notifiers: [],
    quickLaunch: [],
    options: []
  };
  TaskBar.propTypes = {
    options: PropTypes.array,
    quickLaunch: PropTypes.arrayOf(PropTypes.shape(ButtonIconSmall.propTypes)),
    openWindows: PropTypes.arrayOf(PropTypes.shape(ButtonProgram.propTypes)),
    notifiers: PropTypes.arrayOf(PropTypes.shape(Notifications.propsTypes))
  };

  var css_248z$k = ".MenuBar {\n  display: flex;\n  padding: 0px;\n  font-size: 1rem;\n  position: relative;\n  overflow-y: visible;\n  z-index: 20;\n}\n.MenuBar > div {\n  position: relative;\n}\n.MenuBar > div > button {\n  padding: 0px 4px;\n  outline: none;\n  border: none;\n  user-select: none;\n  color: #0c0c0c;\n  display: inline-block;\n  background-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: left;\n  padding: 3px 6px;\n  text-transform: capitalize;\n}\n.MenuBar > div > button + div,\n.MenuBar > div > button + div {\n  z-index: 20;\n  visibility: hidden;\n  position: absolute;\n  max-height: 0px;\n  top: 100%;\n  left: 0px;\n}\n@media (min-height: 720px) and (min-width: 960px) {\n  .MenuBar > div > button + div,\n  .MenuBar > div > button + div {\n    transition: max-height linear 750ms;\n  }\n}\n.MenuBar > div > button:hover {\n  box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px #ffffff;\n}\n.MenuBar > div > button:active, .MenuBar > div > button:focus, .MenuBar > div > button:active:focus, .MenuBar > div > button.active, .MenuBar > div > button.clicked {\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808088;\n  padding: 4px 5px 2px 7px;\n}\n.MenuBar > div > button:active + div,\n.MenuBar > div > button:active + div, .MenuBar > div > button:focus + div,\n.MenuBar > div > button:focus + div, .MenuBar > div > button:active:focus + div,\n.MenuBar > div > button:active:focus + div, .MenuBar > div > button.active + div,\n.MenuBar > div > button.active + div, .MenuBar > div > button.clicked + div,\n.MenuBar > div > button.clicked + div {\n  visibility: visible;\n  max-height: 480px;\n}";
  styleInject(css_248z$k);

  var MenuEntry = withContextLogic(AbstractButton);
  var MenuBar = function MenuBar(props) {
    return /*#__PURE__*/React__default.createElement("menu", {
      className: "window__menu MenuBar"
    }, props.options && props.options.map(function (section) {
      return /*#__PURE__*/React__default.createElement(MenuEntry, {
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

  var css_248z$l = ".w98 .Window__heading {\n  display: flex;\n  background: linear-gradient(to right, #0000a2, #126fc2);\n  font-weight: bold;\n  color: #ffffff;\n  margin-bottom: 1px;\n  padding: 0px 1px 0px 3px;\n  align-items: center;\n  letter-spacing: 1px;\n}\n.w98 .Window__heading button {\n  padding: 0px;\n  min-width: initial;\n  width: 16px;\n  height: 14px;\n  margin-left: 1px;\n  image-rendering: pixelated;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  background-repeat: no-repeat;\n  background-position: 1px 1px;\n}\n.w98 .Window__heading button:focus, .w98 .Window__heading button.clicked {\n  outline: none;\n  border: none;\n}\n.w98 .Window__heading button:active:focus, .w98 .Window__heading button.clicked {\n  padding: 2px 8px 1px 4px;\n  background-position: 2px 2px;\n}\n.w98 .Window__icon {\n  padding: 8px;\n  display: flex;\n  background-size: 14px;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-right: 4px;\n}\n.w98 .Window__title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n  min-width: 0px;\n  user-select: none;\n}\n.w98 .Window__close {\n  margin-left: 2px;\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIUlI+pKwDoVGxvucmwvblqo33MqBQAOw==\");\n}\n.w98 .Window__restore {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIZlI9pwK3SnAKI1kjtwTlpyHjV830b9qRHAQA7\");\n}\n.w98 .Window__minimize {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIOlI+py+0PozSg2mXvFAUAOw==\");\n}\n.w98 .Window__maximize {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIXlI8Jy4wNXzJAznqwsjtPoYFfCDXfWQAAOw==\");\n}\n.w98 .Window__help {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIUlI9pwKDrBHtTxmcxvJTrn30VqBQAOw==\");\n}\n.w98 .Window--resizable:after {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  height: 12px;\n  width: 12px;\n  content: \"\";\n  background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAMAAwAAAIbnI8TmSF83IMSKvFWw3dnHnFV+GVGhZZXmaoFADs=\");\n}\n.w98 .Window--maximized {\n  width: 100%;\n  height: 100%;\n}\n.w98 .Window--drag {\n  background-color: rgba(0, 0, 0, 0);\n  box-shadow: inset -3px -3px 0px #808088, inset 3px 3px 0px #808088;\n}\n.w98 .Window--drag > *, .w98 .Window--drag:after {\n  filter: opacity(0.1%);\n}";
  styleInject(css_248z$l);

  var WindowAbstract = /*#__PURE__*/function (_Component) {
    _inherits(WindowAbstract, _Component);
    var _super = _createSuper(WindowAbstract);
    function WindowAbstract() {
      var _this;
      _classCallCheck(this, WindowAbstract);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
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
        return /*#__PURE__*/React__default.createElement(WindowFrame, {
          className: cx('Window', props.className, {
            'Window--maximized': this.state.maximized,
            'Window--resizable': props.resizable,
            'Window--drag': props.changingState
          }),
          ref: props.innerRef
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "Window__heading"
        }, props.icon && /*#__PURE__*/React__default.createElement("div", {
          className: "Window__icon",
          style: {
            backgroundImage: "url('".concat(props.icon, "')")
          }
        }), /*#__PURE__*/React__default.createElement("div", {
          className: "Window__title"
        }, props.title), props.onHelp && /*#__PURE__*/React__default.createElement(ButtonNav, {
          className: "Window__help",
          onClick: props.onHelp
        }), props.onMinimize && /*#__PURE__*/React__default.createElement(ButtonNav, {
          className: "Window__minimize",
          onClick: props.onMinimize
        }), this.state.maximized && this.props.resizable && /*#__PURE__*/React__default.createElement(ButtonNav, {
          className: "Window__restore",
          onClick: this.handleRestore
        }), !this.state.maximized && this.props.resizable && /*#__PURE__*/React__default.createElement(ButtonNav, {
          className: "Window__maximize",
          onClick: this.handleMaximize
        }), (props.onClose || props.onMaximize || props.onRestore || props.onMinimize || props.onHelp) && /*#__PURE__*/React__default.createElement(ButtonNav, {
          className: "Window__close",
          onClick: props.onClose,
          isDisabled: !props.onClose
        })), props.children);
      }
    }]);
    return WindowAbstract;
  }(React.Component);
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

  var css_248z$m = ".WindowAlert {\n  display: inline-flex;\n  flex-direction: column;\n  max-width: 250px;\n}\n.WindowAlert__message {\n  display: flex;\n  align-items: center;\n  user-select: none;\n  min-height: 28px;\n  padding: 10px 2px 6px;\n}\n.WindowAlert__message.has-icon {\n  background-size: 28px 28px;\n  background-repeat: no-repeat;\n  background-position: 6px 6px;\n  padding: 6px 4px 8px 40px;\n}\n.WindowAlert__actions {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.WindowAlert__actions .btn {\n  margin: 0px 4px 8px;\n}";
  styleInject(css_248z$m);

  var WindowAlert = function WindowAlert(props) {
    return /*#__PURE__*/React__default.createElement(WindowAbstract, {
      className: cx('WindowAlert', props.className),
      onClose: props.onClose,
      onHelp: props.onHelp,
      title: props.title || 'Error',
      resizable: false
    }, /*#__PURE__*/React__default.createElement("div", {
      className: cx('WindowAlert__message', {
        'has-icon': props.icon
      }),
      style: props.icon && {
        backgroundImage: "url(".concat(props.icon, ")")
      }
    }, props.children), /*#__PURE__*/React__default.createElement("div", {
      className: "WindowAlert__actions"
    }, props.onOK && /*#__PURE__*/React__default.createElement(ButtonForm, {
      className: "WindowAlert__ok",
      onClick: props.onOK
    }, "OK"), props.onCancel && /*#__PURE__*/React__default.createElement(ButtonForm, {
      className: "WindowAlert__cancel",
      onClick: props.onCancel
    }, "Cancel")));
  };
  WindowAlert.propTypes = _objectSpread2(_objectSpread2({}, WindowAbstract.propTypes), {}, {
    onOK: PropTypes.func,
    onCancel: PropTypes.func,
    children: PropTypes.node,
    icon: PropTypes.string
  });

  var img1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOAgMAAABbQXQZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURQAAq////wAAADZqBOUAAAArSURBVAjXY1gFBAwNDAxMDGDW1NDQMIapUbOmQVhTGBjEoCyEGJwFJkDaAGAFGP4kmmZ0AAAAAElFTkSuQmCC";

  var img2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOAgMAAABbQXQZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURQAAq////wAAAIeIj/NEB9oAAAAoSURBVAjXY1gFBAwNDAxMDGDW1NDQMIY5mYXLGCaEOobh4AYic0HaAHnVGXeUN3O0AAAAAElFTkSuQmCC";

  var img3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTAAA/1Ooqf///wAAAIeIj6ipUf//AKoAVwAAqwD///8AABIbKHYAAAABdFJOUwBA5thmAAAAY0lEQVQY012PURKAIAgFHwimdf/7xkMza/92hxkA2GgNH+rFoMRJPaq5QU8VlIAuEiEd6R0M6WMenWFzoBucXupwOAObFdgKxiXYJ6JMZ1Da43MtXldeKusZyYk41QeiPN1+3GTUApb2Wc7EAAAAAElFTkSuQmCC";

  var img4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPAgMAAACQHae8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTAAAAP//ADvXwAwAAAABdFJOUwBA5thmAAAAOUlEQVQI12NgYGBkgAEwy4GFgTVAUIBBooXFgSE0NESQwaOj04EhSUlRAMRiAbEYQCwGJFZoaCgDADXDC1L2Qw0aAAAAAElFTkSuQmCC";

  var img5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAANCAMAAABBwMRzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUdwTP///4eIj4zp4tUAAAABdFJOUwBA5thmAAAAOElEQVQI112OQQ4AIAzCuv7/0WpMcBNO0CwM8IhIa9sXu8AaRmmW283KFOHVOYnh44Q+VmPw+88FZDYBB0ED8bYAAAAASUVORK5CYII=";

  var css_248z$n = ".WindowAction {\n  width: 80%;\n  max-width: 350px;\n  min-width: 280px;\n}\n.WindowAction > :not(:first-child) {\n  margin: 4px 5px;\n  width: auto;\n}\n.WindowAction .Window__title {\n  text-transform: capitalize;\n}\n.WindowAction__location {\n  display: flex;\n  align-items: center;\n  margin: 3px;\n  text-transform: capitalize;\n}\n.WindowAction__location .btn {\n  margin-right: 2px;\n}\n.WindowAction__location .FakeSelect {\n  flex-grow: 1;\n  margin: auto 4px;\n}\n.WindowAction__files {\n  width: initial;\n  margin: 5px 3px;\n}\n.WindowAction__footer {\n  margin: 3px;\n  display: flex;\n}\n.WindowAction__input {\n  display: flex;\n  align-items: center;\n}\n.WindowAction__input .FakeSelect {\n  margin-left: auto;\n  width: 75%;\n  max-width: 180px;\n  min-width: 140px;\n}\n.WindowAction__input .InputText {\n  margin-left: auto;\n  width: calc(75% - 6px);\n  max-width: 174px;\n  min-width: 136px;\n}\n.WindowAction__action-inputs {\n  flex-grow: 1;\n}\n.WindowAction__input,\n.WindowAction .ButtonForm {\n  margin-top: 4px;\n}\n.WindowAction__action-buttons {\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 8px;\n}\n.WindowAction__action-buttons .btn {\n  text-transform: capitalize;\n}";
  styleInject(css_248z$n);

  var noop = function noop() {};
  var WindowAction = function WindowAction(props) {
    return /*#__PURE__*/React__default.createElement(WindowAbstract, {
      className: cx('WindowAction', props.className),
      title: props.action,
      onClose: props.onCancel,
      onHelp: props.onHelp,
      resizable: false
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "WindowAction__location"
    }, /*#__PURE__*/React__default.createElement("div", null, props.action, " in"), /*#__PURE__*/React__default.createElement(FakeSelect, {
      title: props.location
    }), /*#__PURE__*/React__default.createElement(ButtonIconSmall, {
      isDisabled: true,
      hasBorder: true,
      icon: img5
    }), /*#__PURE__*/React__default.createElement(ButtonIconSmall, {
      isDisabled: true,
      hasBorder: true,
      icon: img4
    }), /*#__PURE__*/React__default.createElement(ButtonIconSmall, {
      isDisabled: true,
      hasBorder: true,
      icon: img3
    }), /*#__PURE__*/React__default.createElement(ButtonIconSmall, {
      isDisabled: true,
      hasBorder: true,
      icon: img2
    }), /*#__PURE__*/React__default.createElement(ButtonIconSmall, {
      isDisabled: true,
      hasBorder: true,
      icon: img1
    })), Array.isArray(props.content) && /*#__PURE__*/React__default.createElement(SelectBox, {
      options: props.content,
      className: "WindowAction__files",
      selected: [],
      component: ListIcon,
      onClick: props.onChangeName
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "WindowAction__footer"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "WindowAction__action-inputs"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "WindowAction__input"
    }, "File name:", /*#__PURE__*/React__default.createElement(InputText, {
      onChange: props.onChangeName,
      value: props.name
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "WindowAction__input"
    }, "Type: ", /*#__PURE__*/React__default.createElement(FakeSelect, {
      title: props.type,
      isDisabled: true
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: "WindowAction__action-buttons"
    }, /*#__PURE__*/React__default.createElement(ButtonForm, {
      onClick: props.onAction
    }, props.action), /*#__PURE__*/React__default.createElement(ButtonForm, {
      onClick: props.onCancel
    }, "Cancel"))));
  };
  WindowAction.defaultProps = {
    onAction: noop,
    onCancel: noop,
    onHelp: noop,
    action: 'Save??',
    location: 'Desktop',
    content: null,
    name: ''
  };

  var css_248z$o = ".w98 .WindowProgram {\n  display: inline-flex;\n  flex-direction: column;\n}\n.w98 .WindowProgram > footer {\n  display: flex;\n}\n.w98 .WindowProgram > footer > div {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  min-width: 0px;\n  flex-grow: 1;\n  padding: 2px;\n  height: 12px;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c;\n}\n.w98 .WindowProgram > footer > div:not(:last-child) {\n  margin-right: 2px;\n}\n.w98 .WindowProgram > footer > div:last-child {\n  padding-right: 12px;\n}\n.w98 .WindowProgram > div:last-child {\n  margin-top: 2px;\n}";
  styleInject(css_248z$o);

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
    return /*#__PURE__*/React__default.createElement("footer", null, props.entries.map(function (entry, idx) {
      return /*#__PURE__*/React__default.createElement("div", {
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
  var WindowProgram = /*#__PURE__*/function (_React$Component) {
    _inherits(WindowProgram, _React$Component);
    var _super = _createSuper(WindowProgram);
    function WindowProgram() {
      _classCallCheck(this, WindowProgram);
      return _super.apply(this, arguments);
    }
    _createClass(WindowProgram, [{
      key: "render",
      value: function render() {
        var props = this.props;
        var footer = insertDefaultFooter(props.footer);
        return /*#__PURE__*/React__default.createElement(WindowAbstract, {
          className: cx('WindowProgram', props.className),
          icon: props.icon,
          onClose: props.onClose,
          onMinimize: props.onMinimize,
          onMaximize: props.onMaximize,
          onRestore: props.onRestore,
          title: props.title,
          resizable: props.resizable,
          changingState: props.changingState,
          maximizeOnOpen: props.maximizeOnOpen
        }, Array.isArray(props.menuOptions) && /*#__PURE__*/React__default.createElement(MenuBar, {
          className: "WindowProgram__menu",
          options: props.menuOptions
        }), props.children, props.footer && /*#__PURE__*/React__default.createElement(Footer, {
          entries: footer
        }));
      }
    }]);
    return WindowProgram;
  }(React__default.Component);
  _defineProperty(WindowProgram, "defaultProps", {
    onMaximize: function onMaximize() {}
  });
  WindowProgram.propTypes = _objectSpread2(_objectSpread2({}, WindowAbstract.propTypes), {}, {
    menuOptions: PropTypes.arrayOf(PropTypes.any),
    footer: PropTypes.arrayOf(PropTypes.shape(footerType))
  });

  var css_248z$p = ".OptionsList {\n  display: block;\n  min-height: initial;\n  z-index: 10;\n}\n.OptionsList__large-icons {\n  display: flex;\n  overflow: hidden;\n}\n.OptionsList__dropdown {\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  height: calc(100% - 4px);\n}\n.OptionsList__dropdown--empty {\n  display: none;\n}\n.OptionsList__dropdown__button {\n  height: 100%;\n  border: none;\n  background-color: #bbc3c4;\n  background-image: url(\"data:image/gif;base64,R0lGODlhCAAFAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAIAAUAAAIKBCSGebzqoJKtAAA7\");\n  background-repeat: no-repeat;\n  background-position: 2px 3px;\n  padding: 0px 6px;\n  font-size: 0.7rem;\n  user-select: none;\n  letter-spacing: -2px;\n  display: flex;\n  flex-direction: column;\n}\n.OptionsList__dropdown__button:hover {\n  box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px #ffffff;\n}\n.OptionsList__dropdown__button:active, .OptionsList__dropdown__button:focus, .OptionsList__dropdown__button:active:focus {\n  outline: none;\n  background-position: 3px 4px;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808088;\n}\n.OptionsList__dropdown__button:active + .OptionsList__dropdown__list, .OptionsList__dropdown__button:focus + .OptionsList__dropdown__list, .OptionsList__dropdown__button:active:focus + .OptionsList__dropdown__list {\n  position: absolute;\n  top: 100%;\n  right: 0px;\n  display: block;\n  z-index: 10;\n}\n.OptionsList .OptionsList__dropdown__list {\n  display: none;\n}\n.OptionsList .OptionsList__dropdown__button {\n  margin-left: auto;\n}\n.OptionsList .StandardMenuItem__button:hover {\n  background-color: #0000a2;\n  color: #ffffff;\n}\n.OptionsList .divider {\n  border-left: 1px solid #808088;\n  border-right: 1px solid #ffffff;\n  width: 1px;\n  margin: 2px 3px;\n}\n.OptionsList .divider + .divider {\n  display: none;\n}";
  styleInject(css_248z$p);

  var OptionsListDropdown = /*#__PURE__*/function (_Component) {
    _inherits(OptionsListDropdown, _Component);
    var _super = _createSuper(OptionsListDropdown);
    function OptionsListDropdown() {
      var _this;
      _classCallCheck(this, OptionsListDropdown);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "openList", function () {
        _this.dropdownButton.focus();
      });
      return _this;
    }
    _createClass(OptionsListDropdown, [{
      key: "render",
      value: function render() {
        var _this2 = this;
        return /*#__PURE__*/React__default.createElement("div", {
          className: "OptionsList__dropdown"
        }, /*#__PURE__*/React__default.createElement("button", {
          ref: function ref(btn) {
            _this2.dropdownButton = btn;
          },
          onClick: this.openList,
          className: "OptionsList__dropdown__button"
        }), /*#__PURE__*/React__default.createElement(StandardMenu, {
          className: "OptionsList__dropdown__list",
          options: this.props.options
        }));
      }
    }]);
    return OptionsListDropdown;
  }(React.Component);
  var OptionsList = /*#__PURE__*/function (_Component2) {
    _inherits(OptionsList, _Component2);
    var _super2 = _createSuper(OptionsList);
    function OptionsList() {
      var _this3;
      _classCallCheck(this, OptionsList);
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      _this3 = _super2.call.apply(_super2, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this3), "state", {
        entriesInView: 8
      });
      _defineProperty(_assertThisInitialized(_this3), "ref", /*#__PURE__*/React__default.createRef());
      _defineProperty(_assertThisInitialized(_this3), "checkWidth", function () {
        if (!_this3.ref.current) {
          return;
        }
        var width = _this3.ref.current.offsetWidth || 200;
        var entriesInView = (width - 20) / 50;
        if (_this3.state.entriesInView !== entriesInView) {
          _this3.setState({
            entriesInView: entriesInView
          });
        }
      });
      return _this3;
    }
    _createClass(OptionsList, [{
      key: "render",
      value: function render() {
        var _this4 = this;
        var props = this.props,
          state = this.state;
        var options = flattenWithDividers(props.options);
        return /*#__PURE__*/React__default.createElement("menu", {
          ref: this.ref,
          onMouseEnter: function onMouseEnter() {
            return _this4.checkWidth();
          },
          className: cx(props.className, 'OptionsList')
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "OptionsList__large-icons"
        }, options.slice(0, state.entriesInView).map(function (option) {
          if (option.includes && option.includes('divider')) {
            return /*#__PURE__*/React__default.createElement("div", {
              className: "divider ".concat(option)
            });
          }
          return /*#__PURE__*/React__default.createElement(ButtonIconLarge, {
            key: "large-button-".concat(option.title),
            icon: option.icon,
            title: option.title,
            onClick: function onClick() {
              return _this4.setState({
                rand: Math.random()
              });
            },
            isDisabled: !option.onClick
          });
        })), props.options.slice(state.entriesInView).length > 0 && /*#__PURE__*/React__default.createElement(OptionsListDropdown, {
          options: props.options.slice(state.entriesInView)
        }));
      }
    }]);
    return OptionsList;
  }(React.Component);
  _defineProperty(OptionsList, "propTypes", {
    options: PropTypes.arrayOf(PropTypes.shape(ButtonIconLarge.propTypes)),
    className: PropTypes.string
  });

  var css_248z$q = ".w98 .WindowExplorer {\n  display: inline-flex;\n  flex-direction: column;\n}\n.w98 .WindowExplorer__view {\n  min-height: 20px;\n  margin: 2px 0px;\n  flex-grow: 1;\n  background-color: #ffffff;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n}\n.w98 .WindowExplorer__details {\n  display: flex;\n}\n.w98 .WindowExplorer__details__section {\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #808088;\n  flex-grow: 1;\n  margin-top: 2px;\n  height: 16px;\n}\n.w98 .WindowExplorer__details__section:not(:last-child) {\n  margin: 2px;\n}\n.w98 .WindowExplorer .window__menu {\n  padding: 2px 2px 2px 12px;\n}\n.w98 .WindowExplorer > div + menu {\n  margin-top: 2px;\n  box-shadow: 0px 2px 0px -1px #ffffff, -1px 2px 0px -1px #ffffff, -1px 1px 0px #808088, 0px 1px 0px #808088, inset 0px -1px 0px #808088, inset -1px 0px 0px #808088, inset 0px 0px 0px 1px #ffffff, -1px 0px 0px #808088, 1px 0px 0px #ffffff, -1px 1px 0px 0px #ffffff, 1px 1px 0px 0px #ffffff, -1px -1px 0px #808088, 0px -1px 0px #808088, inset 0px 1px 0px #ffffff, 1px -1px 0px #ffffff;\n}\n.w98 .WindowExplorer > menu {\n  position: relative;\n  min-height: 22px;\n  padding-left: 12px;\n  margin: 0px 1px;\n  box-shadow: inset 0px -1px 0px #808088, inset -1px 0px 0px #808088, inset 0px 0px 0px 1px #ffffff, -1px 0px 0px #808088, 1px 0px 0px #ffffff, -1px 1px 0px 0px #ffffff, 1px 1px 0px 0px #ffffff;\n}\n.w98 .WindowExplorer > menu:before {\n  position: absolute;\n  top: 3px;\n  left: 5px;\n  height: calc(100% - 6px);\n  width: 3px;\n  background-color: #bbc3c4;\n  content: \"\";\n  box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px #ffffff;\n}\n.w98 .WindowExplorer > menu.OptionsList {\n  min-height: 40px;\n  display: block;\n}\n.w98 .WindowExplorer > footer {\n  display: flex;\n}\n.w98 .WindowExplorer > footer > div {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  min-width: 0px;\n  flex-grow: 1;\n  padding: 2px;\n  height: 12px;\n  box-shadow: inset -1px -1px 0px #ffffff, inset 1px 1px 0px #0c0c0c;\n}\n.w98 .WindowExplorer > footer > div:not(:last-child) {\n  margin-right: 2px;\n}\n.w98 .WindowExplorer > footer > div:last-child {\n  padding-right: 12px;\n}\n.w98 .WindowExplorer__address {\n  display: flex;\n  height: 26px;\n  overflow-y: visible;\n  user-select: none;\n}\n.w98 .WindowExplorer__address__title {\n  align-self: center;\n  margin-right: 4px;\n}\n.w98 .WindowExplorer__address .FakeSelect {\n  flex-grow: 1;\n  z-index: 5;\n  margin-right: 4px;\n}\n.w98 .WindowExplorer__options {\n  display: flex;\n  padding: 2px 8px 2px 12px;\n}\n.w98 .WindowExplorer > div:last-child {\n  margin-top: 2px;\n}";
  styleInject(css_248z$q);

  var WindowExplorer = /*#__PURE__*/function (_React$Component) {
    _inherits(WindowExplorer, _React$Component);
    var _super = _createSuper(WindowExplorer);
    function WindowExplorer() {
      _classCallCheck(this, WindowExplorer);
      return _super.apply(this, arguments);
    }
    _createClass(WindowExplorer, [{
      key: "render",
      value: function render() {
        var props = this.props;
        return /*#__PURE__*/React__default.createElement(WindowProgram, {
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
        }, props.explorerOptions && /*#__PURE__*/React__default.createElement(OptionsList, {
          className: "WindowExplorer__options",
          options: props.explorerOptions
        }), /*#__PURE__*/React__default.createElement("menu", {
          className: "WindowExplorer__address"
        }, /*#__PURE__*/React__default.createElement("div", {
          className: "WindowExplorer__address__title"
        }, "Address"), props.customSelect ? props.customSelect() : /*#__PURE__*/React__default.createElement(FakeSelect, {
          title: props.title,
          icon: props.icon,
          isDisabled: true
        })), /*#__PURE__*/React__default.createElement("div", {
          className: "WindowExplorer__view"
        }, props.children));
      }
    }]);
    return WindowExplorer;
  }(React__default.Component);
  _defineProperty(WindowExplorer, "defaultProps", {
    footer: [],
    menuOptions: []
  });
  WindowExplorer.propTypes = _objectSpread2(_objectSpread2({}, WindowProgram.propTypes), {}, {
    explorerOptions: OptionsList.propTypes.options
  });

  var css_248z$r = ".DetailsSection,\n.window__section {\n  position: relative;\n  border: 1px solid #ffffff;\n  outline: 1px solid #808088;\n  padding: 5px;\n  margin: 16px 8px 8px;\n}\n.DetailsSection__title,\n.window__section__title {\n  position: absolute;\n  top: -10px;\n  padding: 2px 4px;\n  background-color: #bbc3c4;\n}";
  styleInject(css_248z$r);

  var DetailsSection = function DetailsSection(props) {
    return props.children ? /*#__PURE__*/React__default.createElement("section", {
      className: "DetailsSection window__section"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "DetailsSection__title"
    }, props.title), props.children) : null;
  };
  DetailsSection.propTypes = {
    title: PropTypes.node,
    children: PropTypes.node
  };

  exports.ButtonForm = ButtonForm;
  exports.ButtonIconLarge = ButtonIconLarge;
  exports.ButtonIconSmall = ButtonIconSmall;
  exports.ButtonNav = ButtonNav;
  exports.ButtonProgram = ButtonProgram;
  exports.Checkbox = Checkbox;
  exports.DetailsSection = DetailsSection;
  exports.ExplorerIcon = ExplorerIcon;
  exports.ExplorerView = ExplorerView;
  exports.FakeSelect = FakeSelect;
  exports.InputText = InputText;
  exports.ListIcon = ListIcon;
  exports.MenuBar = MenuBar;
  exports.Radio = Radio;
  exports.SelectBox = SelectBox;
  exports.SelectBoxSimple = SelectMultipleSimple;
  exports.StandardMenu = StandardMenu;
  exports.StartButton = StartButton;
  exports.StartMenu = StartMenu;
  exports.TaskBar = TaskBar;
  exports.Theme = Theme;
  exports.Window = WindowAbstract;
  exports.WindowAction = WindowAction;
  exports.WindowAlert = WindowAlert;
  exports.WindowExplorer = WindowExplorer;
  exports.WindowProgram = WindowProgram;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pb.js.map
