(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames'), require('clone'), require('react-select')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames', 'clone', 'react-select'], factory) :
  (factory((global.PackardBelle = {}),global.React,global.PropTypes,global.classnames,global.clone,global.ReactSelect));
}(this, (function (exports,React,PropTypes,classnames,clone,ReactSelect) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  classnames = classnames && classnames.hasOwnProperty('default') ? classnames['default'] : classnames;
  clone = clone && clone.hasOwnProperty('default') ? clone['default'] : clone;
  ReactSelect = ReactSelect && ReactSelect.hasOwnProperty('default') ? ReactSelect['default'] : ReactSelect;

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

  var css = "@font-face {\n  font-family: 'MSFont';\n  src: url(./fonts/ms98s11a10d02.ttf); }\n\nhtml {\n  font-size: 11px;\n  width: 200px;\n  background-color: #bbc3c4;\n  image-rendering: pixelated; }\n  html button {\n    font-size: 11px; }\n  html menu {\n    padding: 0px;\n    margin: 0px; }\n  html * {\n    font-family: 'MSFont', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }\n  html .disabled {\n    color: #808088; }\n  html ::-webkit-scrollbar {\n    width: 16px;\n    height: 16px;\n    background-color: white;\n    background-image: url(\"data:image/gif;base64,R0lGODlhAgACAJEAAAAAAP///8zMzP///yH5BAEAAAMALAAAAAACAAIAAAID1CYFADs=\"); }\n    html ::-webkit-scrollbar-track {\n      position: relative; }\n    html ::-webkit-scrollbar-thumb {\n      background: #bbc3c4;\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px 0px white;\n      border: 1px solid #0c0c0c;\n      border-top: 1px solid #bbc3c4;\n      border-left: 1px solid #bbc3c4; }\n    html ::-webkit-scrollbar-button {\n      background: #bbc3c4;\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px 0px white;\n      border: 1px solid #0c0c0c;\n      border-top: 1px solid #bbc3c4;\n      border-left: 1px solid #bbc3c4; }\n      html ::-webkit-scrollbar-button:start:decrement, html ::-webkit-scrollbar-button:end:increment {\n        height: 16px;\n        width: 16px;\n        display: block;\n        background-repeat: no-repeat;\n        background-color: #bbc3c4; }\n        html ::-webkit-scrollbar-button:start:decrement:active, html ::-webkit-scrollbar-button:end:increment:active {\n          border: 1px solid #808088;\n          box-shadow: none;\n          background-color: #bbc3c4; }\n      html ::-webkit-scrollbar-button:horizontal:decrement {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIlHEIy7ppBCgAOw==\");\n        background-position: 4px 3px; }\n        html ::-webkit-scrollbar-button:horizontal:decrement:active {\n          background-position: 5px 4px; }\n      html ::-webkit-scrollbar-button:horizontal:increment {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIhA4maeyrlCgAOw==\");\n        background-position: 5px 3px; }\n        html ::-webkit-scrollbar-button:horizontal:increment:active {\n          background-position: 6px 4px; }\n      html ::-webkit-scrollbar-button:vertical:decrement {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIHlGEJq8sOCwA7\");\n        background-position: 3px 5px; }\n        html ::-webkit-scrollbar-button:vertical:decrement:active {\n          background-position: 4px 6px; }\n      html ::-webkit-scrollbar-button:vertical:increment {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIIhA+CKWoNmSgAOw==\");\n        background-position: 3px 5px; }\n        html ::-webkit-scrollbar-button:vertical:increment:active {\n          background-position: 4px 6px; }\n    html ::-webkit-scrollbar-corner {\n      /*\n      background-image: url(resources/corner.png);\n      background-repeat: no-repeat;\n      */\n      background-color: #bbc3c4; }\n\n.w98 *, .w98 {\n  cursor: url(\"data:image/gif;base64,R0lGODlhCwATAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAALABMAAAIrhI4JlhrcBAgvSlrbxPBs7mAU9IlMaV7mwo6jY2zk+Xphh8iWint1tDgUAAA7\"), default; }\n\n.w98.x2 {\n  transform: scale(2); }\n  .w98.x2 *, .w98.x2 {\n    cursor: url(\"data:image/gif;base64,R0lGODlhFgAmAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAWACYAAAJzBISpu8b/jINUHgpNCBMrzV1eAm6dV4YjkppiBWyyisazfDIt/ur2zcv8gDQf8ZYT7IDJJfHkZL6izwtVyhpKLVwtssudpZJZ8ZCstE3GvbSrHGxIPue2hW72CfOkNvy9wrbiFjcoGFhnmIjIp4iGcZdQAAA7\"), default; }\n";
  styleInject(css);

  var Theme = function Theme(props) {
    return React__default.createElement(
      'div',
      { className: 'w98' },
      props.children
    );
  };

  Theme.propTypes = {
    children: PropTypes.node
  };

  var css$1 = ".btn {\n  border: 0px solid transparent;\n  background-color: #bbc3c4;\n  position: relative;\n  user-select: none; }\n  .btn:disabled, .btn.disabled {\n    pointer-events: none; }\n  .btn:active, .btn:focus, .btn:active:focus, .btn.active, .btn.clicked {\n    outline: none;\n    color: inherit; }\n  .btn:before {\n    position: absolute;\n    display: block;\n    top: 1px;\n    left: 1px;\n    width: calc(100% - 2px);\n    height: calc(100% - 2px); }\n";
  styleInject(css$1);

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
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

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var AbstractButton = function (_Component) {
    inherits(AbstractButton, _Component);

    function AbstractButton() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, AbstractButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AbstractButton.__proto__ || Object.getPrototypeOf(AbstractButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        mouseDown: false
      }, _this.handleMouse = function (func, mouseDown) {
        _this.setState({ mouseDown: mouseDown });
        if (func) {
          func();
        }
      }, _this.handleClick = function (e) {
        _this.button.focus();
        if (_this.props.onClick) {
          _this.props.onClick(e);
        }
      }, _this.handleBlur = function (e) {
        if (_this.props.onBlur) {
          _this.props.onBlur(e);
        }
      }, _this.handleContextMenu = function (e) {
        e.preventDefault();
        e.stopPropagation();
        _this.button.focus();
        if (_this.props.onContextMenu) {
          _this.props.onContextMenu(e);
        }
      }, _this.handleDoubleClick = function (e) {
        if (_this.props.onDoubleClick) {
          _this.props.onDoubleClick(e);
        }
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(AbstractButton, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var props = this.props;


        return React__default.createElement(
          'button',
          {
            ref: function ref(btn) {
              _this2.button = btn;
            },
            className: classnames('btn', props.className, {
              'clicked': this.state.mouseDown,
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
          },
          props.children
        );
      }
    }]);
    return AbstractButton;
  }(React.Component);

  var commonButtonPropTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    className: PropTypes.string,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,

    onBlur: PropTypes.func,
    onClick: PropTypes.func
  };

  AbstractButton.propTypes = _extends({}, commonButtonPropTypes, {
    onDoubleClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    style: PropTypes.shape() // Todo: Needs custom prop
  });

  var css$2 = ".btn.btn--form {\n  min-width: 48px;\n  outline-width: 1px;\n  outline-offset: -5px;\n  padding: 5px 1px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px white, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn.btn--form:focus {\n    outline: black;\n    outline-style: dotted;\n    outline-width: 1px;\n    box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #0c0c0c, inset 2px 2px 0px white; }\n  .btn.btn--form:active:focus, .btn.btn--form:active, .btn.btn--form.active, .btn.btn--form.clicked {\n    padding: 6px 0px 4px 2px;\n    box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #808088, inset 2px 2px 0px #808088; }\n";
  styleInject(css$2);

  var FormButton = function FormButton(props) {
    return React__default.createElement(
      AbstractButton,
      {
        className: classnames('btn--form', props.className),
        onClick: props.onClick,
        isActive: props.isActive,
        isDisabled: props.isDisabled
      },
      props.children
    );
  };

  AbstractButton.propTypes = _extends({}, commonButtonPropTypes);

  var css$3 = ".btn.btn--nav {\n  padding: 0px;\n  min-width: initial;\n  width: 16px;\n  height: 14px;\n  margin-left: 1px;\n  margin-top: 1px;\n  margin-bottom: 2px;\n  image-rendering: pixelated;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px white, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn.btn--nav img {\n    height: 14px;\n    width: 14px; }\n  .btn.btn--nav:focus {\n    outline: none;\n    border: none; }\n  .btn.btn--nav:active:focus, .btn.btn--nav.clicked {\n    padding-top: 2px;\n    padding-bottom: 1px;\n    padding-left: 4px;\n    padding-right: 8px;\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088; }\n  .btn.btn--nav.window__close {\n    margin-left: 2px; }\n";
  styleInject(css$3);

  var NavButton = function NavButton(props) {
    return React__default.createElement(AbstractButton, {
      className: classnames('btn--nav', props.className),
      onClick: props.onClick,
      isActive: props.isActive,
      isDisabled: props.isDisabled
    });
  };

  NavButton.propTypes = commonButtonPropTypes;

  var css$4 = ".btn.btn--program {\n  flex: 1;\n  margin: 0px 1px;\n  height: 22px;\n  max-width: 140px;\n  min-width: 40px;\n  display: inline-block;\n  width: 100%;\n  padding-top: 2px;\n  padding-left: 22px;\n  padding-right: 3px;\n  text-align: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background-size: 16px;\n  background-repeat: no-repeat;\n  background-position: 4px 4px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px white, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn.btn--program:active:focus, .btn.btn--program.btn--active, .btn.btn--program.clicked {\n    background-position: 5px 5px;\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088;\n    padding-top: 3px;\n    padding-left: 23px;\n    padding-right: 2px; }\n    .btn.btn--program:active:focus:before, .btn.btn--program.btn--active:before, .btn.btn--program.clicked:before {\n      content: '';\n      background-size: 2px;\n      z-index: -1;\n      box-shadow: none; }\n  .btn.btn--program.btn--active {\n    background-color: transparent;\n    font-weight: bold; }\n    .btn.btn--program.btn--active:before {\n      content: '';\n      background-color: white;\n      background-image: url(\"data:image/gif;base64,R0lGODlhAgACAJEAAAAAAP///8zMzP///yH5BAEAAAMALAAAAAACAAIAAAID1CYFADs=\"); }\n";
  styleInject(css$4);

  var ProgramButton = function ProgramButton(props) {
    return React__default.createElement(
      AbstractButton,
      {
        className: classnames('btn--program', props.className),
        onClick: props.onClick,
        isActive: props.isActive,
        style: _extends({ backgroundImage: 'url(' + props.icon + ')' }, props.style)
      },
      props.children
    );
  };

  ProgramButton.propTypes = _extends({}, commonButtonPropTypes, {
    icon: PropTypes.any
  });

  var css$5 = ".btn.btn--start {\n  height: 22px;\n  display: flex;\n  align-content: center;\n  width: 54px;\n  padding-right: 6px;\n  background-image: url(\"data:image/gif;base64,R0lGODlhNAATAKIAAAAAAP///wAA/wD/AP//AP8AAP///wAAACH5BAEAAAYALAAAAAA0ABMAAAOPaLrc/jDKSaudIIPLu95dKH2fGIKLVmSDxpTms83qCgwtmik7j46/BglQsOF6BuQrCFEuCkLiJ5diJnswl6sB7dqGSpjPscNaFcWiRpAhbKPVqhbkVAiiAjaA4LYizWOADneEenltfXFXioCCD3mHAHptYW9jV3OKL1FgZzEySZiVnp8yYkKlFyRNqa2uEgkAOw==\");\n  background-size: auto 18px;\n  background-repeat: no-repeat;\n  background-position: 2px 1px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px white, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn.btn--start__text {\n    font-size: 1rem;\n    font-weight: bold; }\n  .btn.btn--start:active, .btn.btn--start:focus, .btn.btn--start:active:focus, .btn.btn--start.active, .btn.btn--start.clicked {\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #0c0c0c, inset 0px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088, 0px -1px 0px #0c0c0c;\n    background-position: 3px 2px;\n    outline: 1px dotted black;\n    outline-offset: -4px; }\n";
  styleInject(css$5);

  var StartButton = function StartButton(props) {
    return React__default.createElement(AbstractButton, {
      className: classnames('btn--start', props.className),
      onClick: props.onClick,
      onBlur: props.onBlur,
      isActive: props.isActive
    });
  };

  StartButton.propTypes = commonButtonPropTypes;

  var css$6 = ".btn.btn--large-icon {\n  padding: 2px;\n  width: 48px;\n  min-width: 48px; }\n  .btn.btn--large-icon img {\n    display: block;\n    margin: 0 auto;\n    filter: grayscale(1);\n    height: 20px;\n    max-width: 20px; }\n  .btn.btn--large-icon:disabled, .btn.btn--large-icon.disabled {\n    color: #808088; }\n    .btn.btn--large-icon:disabled:hover, .btn.btn--large-icon.disabled:hover {\n      box-shadow: none; }\n      .btn.btn--large-icon:disabled:hover img, .btn.btn--large-icon.disabled:hover img {\n        filter: grayscale(1); }\n  .btn.btn--large-icon:hover {\n    box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px white; }\n    .btn.btn--large-icon:hover img {\n      filter: grayscale(0); }\n  .btn.btn--large-icon:active:focus {\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #0c0c0c;\n    padding: 3px 1px 1px 3px; }\n";
  styleInject(css$6);

  var LargeIconButton = function LargeIconButton(props) {
    return React__default.createElement(
      AbstractButton,
      {
        className: classnames('btn--large-icon', props.className),
        onClick: props.onClick,
        isDisabled: props.isDisabled
      },
      React__default.createElement('img', { src: props.icon }),
      props.title
    );
  };

  LargeIconButton.propTypes = _extends({}, commonButtonPropTypes, {
    icon: PropTypes.string,
    title: PropTypes.string
  });

  var css$7 = ".btn.btn--small-icon {\n  height: 22px;\n  width: 22px;\n  padding: 0px; }\n  .btn.btn--small-icon img {\n    margin: 3px;\n    max-height: 16px;\n    max-width: 16px; }\n  .btn.btn--small-icon:hover {\n    box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px white; }\n  .btn.btn--small-icon:hover:focus:active, .btn.btn--small-icon:hover:active, .btn.btn--small-icon.active, .btn.btn--small-icon.clicked {\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #808088; }\n    .btn.btn--small-icon:hover:focus:active img, .btn.btn--small-icon:hover:active img, .btn.btn--small-icon.active img, .btn.btn--small-icon.clicked img {\n      margin: 4px 2px 2px 4px; }\n  .btn.btn--small-icon.btn--disabled img {\n    filter: grayscale(1); }\n";
  styleInject(css$7);

  var NavButton$1 = function NavButton(props) {
    return React__default.createElement(
      AbstractButton,
      {
        className: classnames('btn--small-icon', props.className),
        onClick: props.onClick,
        isDisabled: props.isDisabled,
        isActive: props.isActive
      },
      React__default.createElement('img', { src: props.icon })
    );
  };

  NavButton$1.propTypes = _extends({}, commonButtonPropTypes, {
    icon: PropTypes.string
  });

  var css$8 = ".window {\n  position: relative;\n  background-color: #bbc3c4;\n  padding: 3px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #bbc3c4, inset -2px -2px 0px #808088, inset 2px 2px 0px white; }\n";
  styleInject(css$8);

  var WindowFrame = function WindowFrame(props) {
    return React__default.createElement(
      'div',
      { className: classnames('window', props.className) },
      props.children
    );
  };

  WindowFrame.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  var StandardMenuItem = function StandardMenuItem(props) {
    return React__default.createElement(
      'div',
      {
        className: classnames('standard-menu__item', props.className, props.type, { 'standard-menu__item--has-options': props.options, 'active': props.isActive }),
        onMouseEnter: props.mouseEnterItem
      },
      React__default.createElement(
        'button',
        {
          className: classnames('standard-menu__item__button', { disabled: props.isDisabled }),
          onClick: props.onClick,
          style: props.icon ? { backgroundImage: 'url(\'' + props.icon + '\')' } : undefined,
          value: props.value,
          disabled: props.isDisabled
        },
        props.title
      ),
      props.options && React__default.createElement(StandardMenu, {
        className: 'standard-menu__item__child',
        options: props.options,
        value: props.value,
        mouseEnterItem: props.mouseEnterItem
      })
    );
  };

  StandardMenuItem.defaultProps = {
    onClick: function onClick() {},
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

  var css$9 = ".standard-menu {\n  display: inline-flex;\n  flex-direction: column;\n  word-wrap: none;\n  white-space: nowrap;\n  text-overflow: clip; }\n  .standard-menu > div {\n    position: relative; }\n    .standard-menu > div > .window {\n      position: absolute;\n      visibility: hidden;\n      width: auto;\n      transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; }\n    .standard-menu > div.active > .window {\n      width: auto;\n      visibility: visible; }\n    .standard-menu > div > .window {\n      left: calc(100%  - 3px);\n      top: -3px;\n      max-width: 0%; }\n    .standard-menu > div:hover > .window, .standard-menu > div.active > .window {\n      max-width: 400%; }\n    .standard-menu > div > button {\n      position: relative;\n      display: block;\n      width: 100%;\n      padding: 0px 20px 0px 20px;\n      text-align: left;\n      background-repeat: no-repeat;\n      background-size: 16px;\n      background-position: 3px center;\n      background-color: rgba(0, 0, 0, 0);\n      border: none;\n      outline: none;\n      height: 20px; }\n      .standard-menu > div > button:before {\n        content: '';\n        position: absolute;\n        left: 0px;\n        top: 0px;\n        height: 16px;\n        width: 16px;\n        background-repeat: no-repeat;\n        background-position: center; }\n      .standard-menu > div > button .standard-menu__item__text {\n        padding: 0px 20px 0px 0px; }\n      .standard-menu > div > button:disabled, .standard-menu > div > button.disabled {\n        color: #808088; }\n      .standard-menu > div > button:not(:only-child):after {\n        content: '';\n        position: absolute;\n        background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIhA4maeyrlCgAOw==\");\n        top: 0px;\n        left: 0px;\n        height: 100%;\n        width: calc(100% - 8px);\n        background-position: right center;\n        background-repeat: no-repeat; }\n    .standard-menu > div.radio-selected > button:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBgAGAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAGAAYAAAIIFA6Gy816RAEAOw==\"); }\n    .standard-menu > div.checked > button:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAcAAAIMlA9nwMj9xGuLIlUAADs=\"); }\n    .standard-menu > div.checked.disabled > button:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAHAAcAAAIMnC9nwsj9xmuLIlUAADs=\"); }\n    .standard-menu > div:hover, .standard-menu > div:active, .standard-menu > div:focus, .standard-menu > div:active:focus, .standard-menu > div.active, .standard-menu > div.clicked {\n      color: white; }\n      .standard-menu > div:hover > button:not(.disabled), .standard-menu > div:active > button:not(.disabled), .standard-menu > div:focus > button:not(.disabled), .standard-menu > div:active:focus > button:not(.disabled), .standard-menu > div.active > button:not(.disabled), .standard-menu > div.clicked > button:not(.disabled) {\n        color: white;\n        background-color: #0000a2; }\n        .standard-menu > div:hover > button:not(.disabled):not(:only-child):after, .standard-menu > div:active > button:not(.disabled):not(:only-child):after, .standard-menu > div:focus > button:not(.disabled):not(:only-child):after, .standard-menu > div:active:focus > button:not(.disabled):not(:only-child):after, .standard-menu > div.active > button:not(.disabled):not(:only-child):after, .standard-menu > div.clicked > button:not(.disabled):not(:only-child):after {\n          background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIjB4maeyrlCgAOw==\"); }\n  .standard-menu > div:empty {\n    position: relative;\n    width: 95%;\n    margin: 2px auto;\n    border-top: 1px solid #808088;\n    border-bottom: 1px solid white;\n    display: none; }\n  .standard-menu > div:not(:empty) + div:empty:not(:last-child):not(:first-child) {\n    display: block; }\n  .standard-menu.css div__sub-menu--top > .window {\n    position: absolute;\n    visibility: hidden;\n    width: auto;\n    transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; }\n  .standard-menu.css div__sub-menu--top.active > .window {\n    width: auto;\n    visibility: visible; }\n  .standard-menu.css div__sub-menu--top > .window {\n    bottom: calc(100% + $windowPadding);\n    left: 0px;\n    height: 0px;\n    max-height: 0%;\n    max-width: 100%; }\n  .standard-menu.css div__sub-menu--top:hover > .window, .standard-menu.css div__sub-menu--top.active > .window {\n    height: initial;\n    max-height: 100%; }\n  .standard-menu.css div__sub-menu--bottom > .window {\n    position: absolute;\n    visibility: hidden;\n    width: auto;\n    transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; }\n  .standard-menu.css div__sub-menu--bottom.active > .window {\n    width: auto;\n    visibility: visible; }\n  .standard-menu.css div__sub-menu--bottom > .window {\n    top: calc(100% + $windowPadding);\n    left: 0px;\n    max-height: 0%;\n    max-width: 100%; }\n  .standard-menu.css div__sub-menu--bottom:hover > .window, .standard-menu.css div__sub-menu--bottom.active > .window {\n    height: initial;\n    max-height: 100%; }\n  .standard-menu.css div__sub-menu--left > .window {\n    position: absolute;\n    visibility: hidden;\n    width: auto;\n    transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; }\n  .standard-menu.css div__sub-menu--left.active > .window {\n    width: auto;\n    visibility: visible; }\n  .standard-menu.css div__sub-menu--left > .window {\n    left: -100%;\n    top: -3px;\n    max-width: 0%; }\n  .standard-menu.css div__sub-menu--left:hover > .window, .standard-menu.css div__sub-menu--left.active > .window {\n    max-width: 100%; }\n  .standard-menu.css div:active, .standard-menu.css div .active {\n    display: none; }\n  .standard-menu.css div:hover > .window {\n    width: auto;\n    visibility: visible;\n    display: block; }\n";
  styleInject(css$9);

  var StandardMenu = function StandardMenu(props) {
    return React__default.createElement(
      WindowFrame,
      {
        className: classnames('standard-menu', props.className, props.direction, {
          'standard-menu--visible': props.isVisible
        })
      },
      props.options.map(function (option) {
        if (Array.isArray(option)) {
          return React__default.createElement(
            React__default.Fragment,
            { key: 'menu-subset-' + option[0].title },
            React__default.createElement('div', { className: 'divider divider--start' }),
            option.map(function (subOption) {
              return React__default.createElement(StandardMenuItem, _extends({
                key: 'menu-divider-' + subOption.title
              }, subOption, {
                value: [].concat(toConsumableArray(props.value), [subOption.title]),
                mouseEnterItem: props.mouseEnterItem
              }));
            }),
            React__default.createElement('div', { className: 'divider divider--end' })
          );
        } else {
          return React__default.createElement(StandardMenuItem, _extends({
            key: 'standard-menu-item-' + option.title
          }, option, {
            value: [].concat(toConsumableArray(props.value), [option.title]),
            mouseEnterItem: props.mouseEnterItem
          }));
        }
      })
    );
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

    return _temp = _class = function (_Component) {
      inherits(StandardMenuSimple, _Component);
      createClass(StandardMenuSimple, null, [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
          if (nextProps.isActive !== prevState.isActive) {
            return {
              options: nextProps.options,
              isActive: nextProps.isActive
            };
          } else return null;
        }
      }]);

      function StandardMenuSimple(props) {
        classCallCheck(this, StandardMenuSimple);

        var _this = possibleConstructorReturn(this, (StandardMenuSimple.__proto__ || Object.getPrototypeOf(StandardMenuSimple)).call(this, props));

        _this.state = {
          options: _this.props.options,
          isActive: _this.props.isActive
        };

        _this.mouseEnterItem = function (e) {
          if (e.target.value) {
            var newOptions = _this.updateActive(e.target.value.split(','), clone(_this.props.options), 0);
            _this.setState({ options: newOptions });
          }
        };

        _this.handleClick = function (e) {
          if (_this.props.onClick) {
            _this.props.onClick(e);
          }
          _this.setState({ isOpen: true });
        };

        _this.handleContextMenu = function (e) {
          if (_this.props.onContextMenu) {
            _this.props.onContextMenu(e);
          }
          _this.setState({ isOpen: true });
        };

        return _this;
      }

      createClass(StandardMenuSimple, [{
        key: 'updateActive',
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
        key: 'handleBlur',
        value: function handleBlur(e) {
          if (this.props.onBlur) {
            this.props.onBlur(e);
          }
          this.setState({
            isOpen: false,
            options: this.props.options
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          var _props = this.props,
              options = _props.options,
              onClick = _props.onClick,
              props = objectWithoutProperties(_props, ['options', 'onClick']); //eslint-disable-line

          if (ContextButton) {
            return React__default.createElement(
              'div',
              {
                className: classnames('standard-menu-wrapper', props.className)
              },
              React__default.createElement(
                ContextButton,
                _extends({}, props, {
                  className: classnames({ 'active': this.state.isOpen }),
                  onBlur: function onBlur(e) {
                    return _this3.handleBlur(e);
                  },
                  onClick: !this.props.onContextMenu && function (e) {
                    return _this3.handleClick(e);
                  },
                  onContextMenu: this.props.onContextMenu && function (e) {
                    return _this3.handleContextMenu(e);
                  }
                }),
                props.children
              ),
              React__default.createElement(StandardMenu, {
                options: this.state.options,
                className: 'standard-menu__wrapper',
                mouseEnterItem: function mouseEnterItem(e) {
                  return _this3.mouseEnterItem(e);
                }
              })
            );
          }
          return React__default.createElement(StandardMenu, {
            options: this.state.options,
            className: 'standard-menu__wrapper',
            mouseEnterItem: function mouseEnterItem(e) {
              return _this3.mouseEnterItem(e);
            }
          });
        }
      }]);
      return StandardMenuSimple;
    }(React.Component), _class.defaultProps = {
      value: []
    }, _class.propTypes = _extends({}, standardMenuProps, {
      onClick: PropTypes.func,
      onBlur: PropTypes.func,
      onContextMenu: PropTypes.func
    }), _temp;
  };

  var AbstractIcon = function (_Component) {
    inherits(AbstractIcon, _Component);

    function AbstractIcon() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, AbstractIcon);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AbstractIcon.__proto__ || Object.getPrototypeOf(AbstractIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        doubleReady: false
      }, _this.disableAction = function () {
        _this.setState({ doubleReady: false });
      }, _this.checkDoubleClick = function () {
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
          _this.setState({ doubleReady: true });
          setTimeout(_this.disableAction, 700);
        }
      }, _this.handleClick = function () {
        _this.icon.focus();
        if (_this.props.onClick) {
          _this.props.onClick();
        }
      }, _this.handleContextMenu = function (e) {
        //e.preventDefault();
        _this.icon.focus();
        if (_this.props.onContextMenu) {
          _this.props.onContextMenu(e);
        }
        //return false;
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(AbstractIcon, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var props = this.props;


        var iconProps = {
          onDoubleClick: props.onDoubleClick,
          onClick: this.handleClick,
          onContextMenu: this.props.onContextMenu && this.handleContextMenu,
          className: classnames('icon', props.className),
          title: props.alt,
          value: props.value,
          ref: function ref(icon) {
            _this2.icon = icon;
          }
        };

        var contents = React__default.createElement(
          React__default.Fragment,
          null,
          React__default.createElement('div', {
            className: 'icon__icon',
            style: { backgroundImage: 'url(\'' + props.icon + '\')' }
          }),
          React__default.createElement(
            'div',
            { className: 'icon__text' },
            props.title
          )
        );

        if (this.props.onClick || this.props.onDoubleClick) {
          return React__default.createElement(
            'button',
            _extends({
              ref: function ref(icon) {
                _this2.icon = icon;
              }
            }, iconProps),
            contents
          );
        }
        return React__default.createElement(
          'div',
          iconProps,
          contents
        );
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
    onContextMenu: PropTypes.func
  };

  AbstractIcon.propTypes = iconProps;

  var css$a = ".icon.icon--explorer {\n  position: relative;\n  display: block;\n  outline: none;\n  background: none;\n  border: none;\n  width: 58px;\n  height: 70px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .icon.icon--explorer .icon__icon {\n    display: block;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; }\n  .icon.icon--explorer:focus, .icon.icon--explorer:active, .icon.icon--explorer:active:focus, .icon.icon--explorer.is-active {\n    outline: none; }\n    .icon.icon--explorer:focus .icon__icon, .icon.icon--explorer:active .icon__icon, .icon.icon--explorer:active:focus .icon__icon, .icon.icon--explorer.is-active .icon__icon {\n      filter: hue-rotate(70deg) contrast(0.3) saturate(2); }\n    .icon.icon--explorer:focus .icon__text, .icon.icon--explorer:active .icon__text, .icon.icon--explorer:active:focus .icon__text, .icon.icon--explorer.is-active .icon__text {\n      background-color: #0000a2;\n      color: white;\n      outline: 1px dotted white;\n      outline-offset: -1px; }\n  .icon.icon--explorer .icon__icon {\n    width: 42px;\n    height: 42px;\n    margin: 0 auto; }\n  .icon.icon--explorer .icon__text {\n    position: absolute;\n    top: 45px;\n    left: 0px;\n    max-height: 28px;\n    width: 100%;\n    overflow-y: hidden;\n    display: inline-block; }\n  .icon.icon--explorer:focus .icon__text, .icon.icon--explorer:active .icon__text, .icon.icon--explorer:active:focus .icon__text, .icon.icon--explorer.active .icon__text, .icon.icon--explorer.clicked .icon__text {\n    max-height: initial; }\n";
  styleInject(css$a);

  var ExplorerIcon = function ExplorerIcon(props) {
    return React__default.createElement(AbstractIcon, {
      onClick: props.onClick,
      onDoubleClick: props.onDoubleClick,
      onContextMenu: props.onContextMenu,
      alt: props.alt,
      className: classnames('icon--explorer', props.className),
      icon: props.icon,
      title: props.title
    });
  };

  ExplorerIcon.propTypes = iconProps;

  var css$b = ".icon.icon--list {\n  position: relative;\n  display: block;\n  outline: none;\n  background: none;\n  border: none;\n  height: 18px;\n  margin: 2px;\n  text-align: left;\n  display: flex;\n  align-items: center; }\n  .icon.icon--list .icon__icon {\n    display: block;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; }\n  .icon.icon--list:focus, .icon.icon--list:active, .icon.icon--list:active:focus, .icon.icon--list.is-active {\n    outline: none; }\n    .icon.icon--list:focus .icon__icon, .icon.icon--list:active .icon__icon, .icon.icon--list:active:focus .icon__icon, .icon.icon--list.is-active .icon__icon {\n      filter: hue-rotate(70deg) contrast(0.3) saturate(2); }\n    .icon.icon--list:focus .icon__text, .icon.icon--list:active .icon__text, .icon.icon--list:active:focus .icon__text, .icon.icon--list.is-active .icon__text {\n      background-color: #0000a2;\n      color: white;\n      outline: 1px dotted white;\n      outline-offset: -1px; }\n  .icon.icon--list .icon__icon {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    margin-right: 2px; }\n  .icon.icon--list .icon__text {\n    position: relative;\n    padding: 2px;\n    display: inline-block;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: calc(100% - 20px);\n    padding-bottom: 3px; }\n  .icon.icon--list:focus .icon__text, .icon.icon--list:active .icon__text, .icon.icon--list:active:focus .icon__text, .icon.icon--list.active .icon__text, .icon.icon--list.clicked .icon__text {\n    max-height: initial; }\n";
  styleInject(css$b);

  var ListIcon = function ListIcon(props) {
    return React__default.createElement(AbstractIcon, {
      onClick: props.onClick,
      onDoubleClick: props.onDoubleClick,
      onContextMenu: props.onContextMenu,
      alt: props.alt,
      className: classnames('icon--list', props.className),
      icon: props.icon,
      title: props.title,
      value: props.value
    });
  };

  ListIcon.propTypes = iconProps;

  var Toggle = function Toggle(props) {
    return React__default.createElement(
      'div',
      { className: classnames('Toggle', props.type) },
      React__default.createElement('input', {
        type: props.type,
        id: props.id,
        disabled: props.isDisabled,
        value: props.value,
        checked: props.checked,
        onChange: props.onChange,
        name: props.name
      }),
      React__default.createElement(
        'label',
        { htmlFor: props.id },
        React__default.createElement(
          'span',
          null,
          props.label
        )
      )
    );
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

  var css$c = ".checkbox {\n  display: inline-block; }\n  .checkbox input[type='checkbox'] {\n    opacity: 0;\n    display: none;\n    cursor: pointer; }\n    .checkbox input[type='checkbox'] + label {\n      position: relative;\n      padding: 1px 0px;\n      padding-left: 16px; }\n      .checkbox input[type='checkbox'] + label > span, .checkbox input[type='checkbox'] + label > div {\n        display: inline-block;\n        border: 1px solid rgba(0, 0, 0, 0); }\n      .checkbox input[type='checkbox'] + label:before {\n        content: '';\n        position: absolute;\n        left: 0px;\n        top: 1px;\n        width: 20px;\n        height: 12px;\n        background-repeat: no-repeat; }\n    .checkbox input[type='checkbox']:checked + label {\n      border-bottom-left-radius: 2px;\n      border-bottom-right-radius: 2px; }\n    .checkbox input[type='checkbox']:checked:active + label > span, .checkbox input[type='checkbox']:checked:active + label > div, .checkbox input[type='checkbox']:checked:focus + label > span, .checkbox input[type='checkbox']:checked:focus + label > div, .checkbox input[type='checkbox']:checked:active:focus + label > span, .checkbox input[type='checkbox']:checked:active:focus + label > div, .checkbox input[type='checkbox']:checked.active + label > span, .checkbox input[type='checkbox']:checked.active + label > div, .checkbox input[type='checkbox']:checked.clicked + label > span, .checkbox input[type='checkbox']:checked.clicked + label > div {\n      border: 1px dotted black; }\n    .checkbox input[type='checkbox']:disabled + label, .checkbox input[type='checkbox'].disabled + label {\n      color: #808088; }\n    .checkbox input[type='checkbox'] + label:before {\n      width: 13px;\n      height: 13px;\n      background-color: white;\n      box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n    .checkbox input[type='checkbox']:checked + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAcAAAIMlA9nwMj9xGuLIlUAADs=\");\n      background-position: center;\n      background-size: 8px; }\n    .checkbox input[type='checkbox']:disabled + label:before, .checkbox input[type='checkbox'].disabled + label:before {\n      background-color: #bbc3c4; }\n    .checkbox input[type='checkbox']:disabled:checked + label:before, .checkbox input[type='checkbox'].disabled:checked + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAHAAcAAAIMnC9nwsj9xmuLIlUAADs=\"); }\n";
  styleInject(css$c);

  var Checkbox = function Checkbox(props) {
    return React__default.createElement(Toggle, _extends({}, props, {
      type: 'checkbox'
    }));
  };

  Checkbox.propTypes = Toggle.propTypes;

  var css$d = ".radio {\n  display: inline-block; }\n  .radio input[type='radio'] {\n    opacity: 0;\n    display: none;\n    cursor: pointer; }\n    .radio input[type='radio'] + label {\n      position: relative;\n      padding: 1px 0px;\n      padding-left: 16px; }\n      .radio input[type='radio'] + label > span, .radio input[type='radio'] + label > div {\n        display: inline-block;\n        border: 1px solid rgba(0, 0, 0, 0); }\n      .radio input[type='radio'] + label:before {\n        content: '';\n        position: absolute;\n        left: 0px;\n        top: 1px;\n        width: 20px;\n        height: 12px;\n        background-repeat: no-repeat; }\n    .radio input[type='radio']:checked + label {\n      border-bottom-left-radius: 2px;\n      border-bottom-right-radius: 2px; }\n    .radio input[type='radio']:checked:active + label > span, .radio input[type='radio']:checked:active + label > div, .radio input[type='radio']:checked:focus + label > span, .radio input[type='radio']:checked:focus + label > div, .radio input[type='radio']:checked:active:focus + label > span, .radio input[type='radio']:checked:active:focus + label > div, .radio input[type='radio']:checked.active + label > span, .radio input[type='radio']:checked.active + label > div, .radio input[type='radio']:checked.clicked + label > span, .radio input[type='radio']:checked.clicked + label > div {\n      border: 1px dotted black; }\n    .radio input[type='radio']:disabled + label, .radio input[type='radio'].disabled + label {\n      color: #808088; }\n    .radio input[type='radio'] + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMqSErTs6uBCVqcIQesBtCaEDAfGAaeeaZqILKqyLQyI4hhTWT3nUEKECQBADs=\"); }\n    .radio input[type='radio']:checked + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMtSErTs6uBCVqcIQesBtCaEDBfhmWiZ1JooG5skJZwOA6g3QliKC4oXg+iAEESADs=\"); }\n    .radio input[type='radio']:disabled + label:before, .radio input[type='radio'].disabled + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMpSErTs6uBCVqccAY1AFTC1n1LOJKE6aEqmorsxggCRMtEENA3vug6SAIAOw==\"); }\n    .radio input[type='radio']:disabled:checked + label:before, .radio input[type='radio'].disabled:checked + label:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMtSErTs6uBCVqccAY1AFTC1i0YGIwE5REhqppourLiZ3KCAOWbEgQ5Xg/y+0ESADs=\"); }\n";
  styleInject(css$d);

  var Radio = function Radio(props) {
    return React__default.createElement(Toggle, _extends({}, props, {
      type: 'radio'
    }));
  };

  Radio.propTypes = Toggle.propTypes;

  var css$e = ".input-text {\n  position: relative;\n  padding: 3px 3px 6px 3px;\n  font-size: 11px;\n  border: none;\n  box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n  .input-text:active, .input-text:focus, .input-text:active:focus, .input-text.clicked {\n    outline: none; }\n  .input-text:disabled, .input-text.disabled {\n    background-color: #bbc3c4; }\n";
  styleInject(css$e);

  var InputText = function (_Component) {
    inherits(InputText, _Component);

    function InputText() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, InputText);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = InputText.__proto__ || Object.getPrototypeOf(InputText)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        value: _this.props.initialValue
      }, _this.handleChange = function (e) {
        if (_this.props.initialValue) {
          _this.setState({
            value: e.target.value
          });
        }

        _this.props.onChange(e.target.value);
      }, _this.handleBlur = function () {
        _this.props.onBlur(_this.state.value);
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(InputText, [{
      key: 'render',
      value: function render() {
        return React__default.createElement('input', {
          type: 'text',
          className: classnames('input-text', this.props.className),
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

  InputText.defaultProps = {
    onChange: function onChange() {},
    onKeyDown: function onKeyDown() {},
    onBlur: function onBlur() {},
    onFocus: function onFocus() {}
  };


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

  var css$f = ".w98 .Select {\n  position: relative; }\n  .w98 .Select .Select-control {\n    width: 100%; }\n    .w98 .Select .Select-control .Select-multi-value-wrapper .Select-input, .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder, .w98 .Select .Select-control .Select-multi-value-wrapper .Select-value {\n      width: calc(100% - 4px); }\n    .w98 .Select .Select-control .Select-multi-value-wrapper .Select-input {\n      display: none !important; }\n    .w98 .Select .Select-control .Select-multi-value-wrapper .Select-value, .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder {\n      height: 16px;\n      background-color: white;\n      border: none;\n      box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n      padding: 2px; }\n      .w98 .Select .Select-control .Select-multi-value-wrapper .Select-value .Select-value-label > div, .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder .Select-value-label > div {\n        margin: 1px;\n        margin-right: 17px;\n        padding-left: 1px;\n        outline: 1px dotted rgba(0, 0, 0, 0); }\n      .w98 .Select .Select-control .Select-multi-value-wrapper .Select-value:active .Select-value-label > div, .w98 .Select .Select-control .Select-multi-value-wrapper .Select-value:focus .Select-value-label > div, .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder:active .Select-value-label > div, .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder:focus .Select-value-label > div {\n        outline: 1px dotted white;\n        outline-offset: -1px;\n        background-color: #0000a2;\n        color: white; }\n    .w98 .Select .Select-control .Select-multi-value-wrapper .Select-placeholder {\n      display: flex;\n      align-items: center;\n      padding: 2px 0px 2px 4px; }\n    .w98 .Select .Select-control .Select-arrow-zone {\n      position: absolute;\n      box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #bbc3c4, inset -2px -2px 0px #808088, inset 2px 2px 0px white;\n      height: 16px;\n      width: 16px;\n      left: calc(100% - 18px);\n      top: 2px;\n      background-color: #bbc3c4;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIIhA+CKWoNmSgAOw==\"); }\n    .w98 .Select .Select-control .Select-clear-zone {\n      display: none; }\n  .w98 .Select .Select-menu-outer {\n    border: 1px solid black;\n    background-color: white; }\n    .w98 .Select .Select-menu-outer .Select-menu .Select-option {\n      padding: 1px; }\n      .w98 .Select .Select-menu-outer .Select-menu .Select-option:hover {\n        outline: 1px dotted white;\n        outline-offset: -1px;\n        background-color: #0000a2;\n        color: white; }\n  .w98 .Select.is-disabled {\n    pointer-events: none; }\n    .w98 .Select.is-disabled .Select-control .Select-multi-value-wrapper .Select-value, .w98 .Select.is-disabled .Select-control .Select-multi-value-wrapper .Select-placeholder {\n      background-color: #bbc3c4; }\n    .w98 .Select.is-disabled .Select-control .Select-arrow-zone:after {\n      background-image: url(\"data:image/gif;base64,R0lGODlhCAAFAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAIAAUAAAIMlC8zKBF6nIJyqqcKADs=\"); }\n";
  styleInject(css$f);

  var DefaultOptionComponent = function DefaultOptionComponent(props) {
    return React__default.createElement('div', props);
  };

  // copied straight from react select demos with slight changes
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
      var optionClass = classnames(optionClassName, {
        'Select-option': true,
        'Select-option--icon': true,
        'is-selected': isSelected,
        'is-focused': isFocused,
        'is-disabled': option.disabled
      });

      return React__default.createElement(
        Option,
        {
          className: optionClass,
          focusOption: focusOption,
          inputValue: inputValue,
          instancePrefix: instancePrefix,
          isDisabled: option.disabled,
          isFocused: isFocused,
          isSelected: isSelected,
          key: 'option-' + i + '-' + option[valueKey],
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
        },
        React__default.createElement(
          'span',
          null,
          option.label
        )
      );
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
    return React__default.createElement(
      'div',
      { style: { backgroundImage: props.icon ? 'url(\'' + props.icon + '\')' : 'none' } },
      props.label
    );
  };
  ValueRenderer.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string
  };

  var Select = function (_Component) {
    inherits(Select, _Component);

    function Select(props) {
      classCallCheck(this, Select);

      var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

      _this.handleChange = function (e) {
        if (_this.props.onChange) {
          _this.setState({ value: e.value });
        } else {
          _this.props.onChange(e);
        }
      };

      _this.state = {
        value: _this.props.onChange ? null : _this.props.value
      };
      return _this;
    }

    createClass(Select, [{
      key: 'render',
      value: function render() {
        var props = this.props;

        return React__default.createElement(ReactSelect, _extends({}, props, {
          className: 'Select',
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
  }(React.Component);

  Select.defaultProps = {
    placeholder: '',
    searchable: false
  };


  Select.propTypes = {
    placeholder: PropTypes.any,
    isDisabled: PropTypes.bool,
    searchable: PropTypes.bool,
    useIcons: PropTypes.bool
  };

  var css$g = ".SelectBox {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  padding: 2px; }\n  .SelectBox:disabled, .SelectBox.disabled {\n    pointer-events: none;\n    background-color: #bbc3c4; }\n    .SelectBox:disabled > div, .SelectBox.disabled > div {\n      overflow: hidden; }\n    .SelectBox:disabled button, .SelectBox.disabled button {\n      color: #808088 !important; }\n    .SelectBox:disabled .icon, .SelectBox.disabled .icon {\n      filter: grayscale(1); }\n  .SelectBox > div {\n    position: relative;\n    overflow: auto; }\n  .SelectBox:after {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n    pointer-events: none;\n    content: ''; }\n  .SelectBox button:not(.icon) {\n    display: block;\n    outline: none;\n    background: transparent;\n    border: none;\n    white-space: nowrap;\n    overflow: hidden;\n    color: #0c0c0c;\n    width: 100%;\n    text-align: left; }\n    .SelectBox button:not(.icon):after {\n      content: attr(title);\n      position: initial; }\n    .SelectBox button:not(.icon).is-active {\n      background-color: #0000a2;\n      color: white;\n      outline-offset: -1px;\n      outline: 1px dotted white; }\n  .SelectBox--ExplorerIcon > div {\n    display: flex;\n    flex-direction: row;\n    overflow-y: hidden;\n    padding-bottom: 20px; }\n    .SelectBox--ExplorerIcon > div .explorer-icon {\n      margin: 2px 8px; }\n  .SelectBox .icon--list {\n    margin: 0px;\n    padding: 1px; }\n    .SelectBox .icon--list .icon__text {\n      width: initial; }\n    .SelectBox .icon--list:focus:not(.is-active) .icon__text, .SelectBox .icon--list:active:not(.is-active) .icon__text {\n      background-color: transparent;\n      color: #0c0c0c;\n      outline: none;\n      outline-offset: -1px; }\n";
  styleInject(css$g);

  var isSelected = function isSelected(selected, val) {
    return Array.isArray(selected) ? selected.some(function (selectedEntry) {
      return selectedEntry === val;
    }) : selected === val;
  };

  var SelectBox = function SelectBox(props) {
    var Comp = props.component ? props.component : 'button';
    return React__default.createElement(
      'div',
      { className: classnames('SelectBox', props.component ? 'SelectBox--' + props.component.name : 'SelectBox--simple', { disabled: props.isDisabled }) },
      React__default.createElement(
        'div',
        null,
        props.options.map(function (option) {
          return React__default.createElement(Comp, {
            key: option.value,
            onClick: function onClick() {
              return props.onClick(option.value);
            },
            alt: props.component ? option.alt : undefined,
            className: classnames(option.className, { 'is-active': isSelected(props.selected, option.value) }),
            icon: props.component ? option.icon : undefined,
            title: option.title || (typeof option.value === 'string' ? option.value : ''),
            value: option.value
          });
        })
      )
    );
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

  var css$h = ".SelectMultipleSimple select[multiple] {\n  position: relative;\n  border: none;\n  background-color: white;\n  border-radius: 0px;\n  outline: none;\n  padding: 2px;\n  box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n  .SelectMultipleSimple select[multiple]:active, .SelectMultipleSimple select[multiple]:focus, .SelectMultipleSimple select[multiple]:active:focus, .SelectMultipleSimple select[multiple].active, .SelectMultipleSimple select[multiple].clicked {\n    outline: none; }\n  .SelectMultipleSimple select[multiple] option:active, .SelectMultipleSimple select[multiple] option:focus, .SelectMultipleSimple select[multiple] option:checked, .SelectMultipleSimple select[multiple] option.checked {\n    outline: 1px dotted white;\n    outline-offset: -1px;\n    background-color: #0000a2;\n    color: white; }\n";
  styleInject(css$h);

  var SelectMultipleSimple = function (_Component) {
    inherits(SelectMultipleSimple, _Component);

    function SelectMultipleSimple(props) {
      classCallCheck(this, SelectMultipleSimple);

      var _this = possibleConstructorReturn(this, (SelectMultipleSimple.__proto__ || Object.getPrototypeOf(SelectMultipleSimple)).call(this, props));

      _this.updateValue = function (value) {
        _this.setState({ value: value });
        _this.props.onChange(value);
      };

      _this.handleChange = function (event) {
        if (_this.props.multiple) {
          var selectedIndex = _this.state.value.findIndex(function (val) {
            return val === event.target.value;
          });
          var isSelected = selectedIndex !== -1;
          if (!isSelected && _this.props.selectMultiple) {
            _this.updateValue([].concat(toConsumableArray(_this.state.value), [event.target.value]));
            return;
          }
          if (!isSelected) {
            _this.updateValue([event.target.value]);
            return;
          }
          if (isSelected) {
            _this.updateValue([].concat(toConsumableArray(_this.state.value.slice(0, selectedIndex)), toConsumableArray(_this.state.value.slice(selectedIndex + 1))));
            return;
          }
        } else {
          _this.updateValue(event.target.value);
        }
      };

      _this.state = {
        value: _this.props.multiple ? [] : _this.props.value || ''
      };
      return _this;
    }

    createClass(SelectMultipleSimple, [{
      key: 'render',
      value: function render() {
        var props = this.props;

        return React__default.createElement(
          'div',
          { className: 'SelectMultipleSimple' },
          React__default.createElement(
            'select',
            { value: this.state.value, onChange: this.handleChange, disabled: this.props.isDisabled, multiple: true },
            props.options.map(function (option) {
              return React__default.createElement(
                'option',
                {
                  key: option.value.toString(),
                  value: option.value,
                  disabled: option.isDisabled
                },
                React__default.createElement(
                  'div',
                  null,
                  option.title || (typeof option.value === 'string' ? option.value : '')
                )
              );
            })
          )
        );
      }
    }]);
    return SelectMultipleSimple;
  }(React.Component);

  SelectMultipleSimple.defaultProps = {
    onChange: function onChange() {}
  };


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

  var css$i = ".menu-bar {\n  display: flex;\n  padding: 0px;\n  font-size: 1rem;\n  position: relative;\n  overflow-y: visible;\n  z-index: 20; }\n  .menu-bar > div {\n    position: relative; }\n    .menu-bar > div > button {\n      padding: 0px 4px;\n      outline: none;\n      border: none;\n      user-select: none;\n      color: #0c0c0c;\n      display: inline-block;\n      background-color: rgba(0, 0, 0, 0);\n      width: 100%;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      text-align: left;\n      padding: 3px 6px; }\n      .menu-bar > div > button + div, .menu-bar > div > button + div {\n        z-index: 20;\n        visibility: hidden;\n        position: absolute;\n        max-height: 0px;\n        top: 100%;\n        left: 0px;\n        transition: max-height linear 750ms; }\n      .menu-bar > div > button:hover {\n        box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px white; }\n      .menu-bar > div > button:active, .menu-bar > div > button:focus, .menu-bar > div > button:active:focus, .menu-bar > div > button.active, .menu-bar > div > button.clicked {\n        box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #808088;\n        padding: 4px 5px 2px 7px; }\n        .menu-bar > div > button:active + div, .menu-bar > div > button:active + div, .menu-bar > div > button:focus + div, .menu-bar > div > button:focus + div, .menu-bar > div > button:active:focus + div, .menu-bar > div > button:active:focus + div, .menu-bar > div > button.active + div, .menu-bar > div > button.active + div, .menu-bar > div > button.clicked + div, .menu-bar > div > button.clicked + div {\n          visibility: visible;\n          max-height: 480px; }\n";
  styleInject(css$i);

  var MenuEntry = withContextLogic(AbstractButton);

  var MenuBar = function MenuBar(props) {
    return React__default.createElement(
      'menu',
      { className: 'window__menu menu-bar' },
      props.options && props.options.map(function (section) {
        return React__default.createElement(
          MenuEntry,
          {
            className: classnames('window__menu__section menu-bar__section', props.className),
            key: 'menu-bar-section-' + section.title,
            options: section.options
          },
          section.title
        );
      })
    );
  };

  MenuBar.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape()),
    className: PropTypes.string
  };

  var Started = withContextLogic(StartButton);

  var StartMenu = function StartMenu(props) {
    var className = props.className,
        otherProps = objectWithoutProperties(props, ['className']);

    return React__default.createElement(Started, _extends({
      className: classnames('start-menu task-bar__start', className)
    }, otherProps));
  };

  StartMenu.propTypes = Started.propTypes;

  var Notifier = function Notifier(props) {
    return React__default.createElement('button', {
      className: 'btn task-bar__notifications__notifier',
      title: props.title,
      onClick: props.onClick,
      style: { backgroundImage: 'url("' + props.icon + '")' }
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

  var Time = function (_React$Component) {
    inherits(Time, _React$Component);

    function Time() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, Time);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Time.__proto__ || Object.getPrototypeOf(Time)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        time: _this.props.time ? new Date(_this.props.time) : new Date()
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(Time, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        if (!this.props.fixedTime) {
          this.timerId = setInterval(function () {
            _this2.getDate();
          }, INTERVALS);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.timerId) {
          clearInterval(this.timerId);
        }
      }
    }, {
      key: 'getDate',
      value: function getDate() {
        this.setState({ time: new Date(this.state.time.getTime() + INTERVALS) });
      }
    }, {
      key: 'render',
      value: function render() {
        return React__default.createElement(
          'div',
          { className: 'task-bar__notifications__time' },
          formatTime(this.state.time)
        );
      }
    }]);
    return Time;
  }(React__default.Component);

  var Notifications = function Notifications(props) {
    return React__default.createElement(
      'div',
      { className: 'task-bar__notifications' },
      props.notifiers.map(function (notifier) {
        return React__default.createElement(Notifier, {
          key: notifier.alt,
          icon: notifier.icon,
          onClick: notifier.onClick,
          title: notifier.alt
        });
      }),
      React__default.createElement(Time, null)
    );
  };

  Notifications.propsTypes = {
    notifiers: PropTypes.arrayOf(PropTypes.shape(Notifier.propTypes))
  };

  Notifications.defaultProps = {
    notifiers: []
  };

  var css$j = ".task-bar {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  max-width: 100%;\n  z-index: 10;\n  box-shadow: 0px -1px 0px white;\n  padding: 2px 0px;\n  display: flex; }\n  .task-bar > div, .task-bar > button {\n    position: relative;\n    height: 22px;\n    margin: 0px 2px; }\n  .task-bar > div:not(:last-child) {\n    padding: 0px 6px; }\n    .task-bar > div:not(:last-child):first-child {\n      padding: 0px 3px 0px 0px; }\n    .task-bar > div:not(:last-child):after {\n      position: absolute;\n      top: 1px;\n      right: 0px;\n      height: calc(100% - 2px);\n      width: 1px;\n      background-color: #808088;\n      content: '';\n      box-shadow: 1px 0px 0px white; }\n    .task-bar > div:not(:last-child):before {\n      position: absolute;\n      top: 3px;\n      right: -6px;\n      height: calc(100% - 6px);\n      width: 3px;\n      background-color: #bbc3c4;\n      content: '';\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px white; }\n  .task-bar__programs {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-wrap: nowrap;\n    margin-right: 4px;\n    min-width: 42px; }\n    .task-bar__programs:before {\n      display: none; }\n  .task-bar__start {\n    position: relative; }\n    .task-bar__start > button + div {\n      transition: max-height linear 200ms;\n      position: fixed;\n      bottom: 25px;\n      left: 2px;\n      visibility: hidden;\n      max-height: 0px;\n      padding-left: 22px; }\n      .task-bar__start > button + div > .divider, .task-bar__start > button + div > div:empty {\n        margin-left: 24px;\n        width: calc(100% - 26px); }\n      .task-bar__start > button + div:after {\n        content: '';\n        display: block;\n        position: absolute;\n        left: 3px;\n        top: 3px;\n        height: calc(100% - 6px);\n        width: 20px;\n        background: #0000a2;\n        background: linear-gradient(#0000a2, #126fc2);\n        background: url(\"data:image/gif;base64,R0lGODlhDgBkALMAAAAAAP///wIAsZKSmZKTmpGSmZKTmcjOz8fNzsfOz8fOzv///wAAAAAAAAAAAAAAACH5BAEAAAsALAAAAAAOAGQAAAT/cMk5SUo06CO179wSGEowgEOQBcRUEuqkUaIRd/cCwyvFzyJNS3JQ2Tyt0QLBklgwEqZGQasShr4DQhuilDxgRCWAINgIAkIxFoB2DDJWbmGb2Oq0nJx2dqoCXUEuKl8GMCZRSjpgWAdYEydVkhMJQlVkQR8UTFRgQDhiHkc9QRyfRwRSV5+ZH1KbnodzjEGPCAYFcBIJj5mOk61IkgZSnpKVxpSeYCuegTjCw8Uev1bLPkfXccuY29SSGgmRky2p4b2Jnm5+3LrQ3CsY5Wuk9ZlwcJrv2uzLvWthJgH0cWVAKkMGBjhKws1YQ4cPP1wxUETclUPuBOXRY4mOvmDJafaFFMmKwoEDCspIgnGSC0pYDZvB88YvE7Bd3YABrBlRJs+HN73MiPgq4heQYJAhlYiOhqyUwLhVo7TTWcYlyEZOmAbEYM+I4hape4b0Cg0tDXlVyapVR9UY5h7KaogAg9R1c82ubEohAgA7\") no-repeat bottom 3px center, linear-gradient(#0000a2, #126fc2); }\n      .task-bar__start > button + div > div {\n        display: flex;\n        align-items: center;\n        margin-left: 20px; }\n        .task-bar__start > button + div > div > button {\n          height: 32px;\n          padding-left: 32px;\n          background-size: 22px;\n          background-position: 4px center; }\n        .task-bar__start > button + div > div .window {\n          display: none; }\n    .task-bar__start > button:active, .task-bar__start > button:focus, .task-bar__start > button:active:focus, .task-bar__start > button.active, .task-bar__start > button.clicked {\n      background-position: 3px 2px;\n      outline: 1px dotted black;\n      outline-offset: -4px; }\n      .task-bar__start > button:active + div, .task-bar__start > button:focus + div, .task-bar__start > button:active:focus + div, .task-bar__start > button.active + div, .task-bar__start > button.clicked + div {\n        visibility: visible;\n        max-height: 100vh;\n        padding: 3px; }\n        .task-bar__start > button:active + div div, .task-bar__start > button:focus + div div, .task-bar__start > button:active:focus + div div, .task-bar__start > button.active + div div, .task-bar__start > button.clicked + div div {\n          display: flex; }\n  .task-bar__notifications {\n    background-color: #bbc3c4;\n    display: flex;\n    flex: none;\n    margin-left: auto;\n    align-items: center;\n    height: 22px;\n    padding: 0px 8px 0px 4px;\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #808088; }\n    .task-bar__notifications__time {\n      margin-left: 4px; }\n    .task-bar__notifications__notifier {\n      height: 16px;\n      width: 16px;\n      background-color: #bbc3c4;\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      border: none; }\n      .task-bar__notifications__notifier:active, .task-bar__notifications__notifier:focus, .task-bar__notifications__notifier:active:focus, .task-bar__notifications__notifier.active, .task-bar__notifications__notifier.clicked {\n        outline: none;\n        border: none; }\n";
  styleInject(css$j);

  var TaskBar = function TaskBar(props) {
    return React__default.createElement(
      'div',
      { className: 'task-bar' },
      React__default.createElement(StartMenu, {
        options: props.options
      }),
      props.quickLaunch && React__default.createElement(
        'div',
        { className: 'task-bar__quick-launch' },
        props.quickLaunch.map(function (qlEntry) {
          return React__default.createElement(NavButton$1, {
            key: qlEntry.icon + '-QuickLaunch',
            alt: qlEntry.alt,
            onClick: qlEntry.onClick,
            icon: qlEntry.icon
          });
        })
      ),
      props.openWindows && React__default.createElement(
        'div',
        { className: 'task-bar__programs' },
        props.openWindows.map(function (openWindow) {
          return React__default.createElement(
            ProgramButton,
            {
              isActive: openWindow.isActive,
              onClick: openWindow.onClick,
              icon: openWindow.icon,
              key: openWindow.icon + '-ProgramButton-' + openWindow.title
            },
            openWindow.title
          );
        })
      ),
      React__default.createElement(Notifications, { notifiers: props.notifiers })
    );
  };

  TaskBar.propTypes = {
    options: PropTypes.array,
    quickLaunch: PropTypes.arrayOf(PropTypes.shape(NavButton$1.propTypes)),
    openWindows: PropTypes.arrayOf(PropTypes.shape(ProgramButton.propTypes)),
    notifiers: PropTypes.arrayOf(PropTypes.shape(Notifications.propsTypes))
  };

  var css$k = ".window__heading {\n  display: flex;\n  background: linear-gradient(to right, #0000a2, #126fc2);\n  font-weight: bold;\n  color: white;\n  margin-bottom: 1px;\n  padding: 0px 3px;\n  align-items: center;\n  letter-spacing: 1px; }\n  .window__heading button {\n    padding: 0px;\n    min-width: initial;\n    width: 16px;\n    height: 14px;\n    margin-left: 1px;\n    image-rendering: pixelated;\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n    background-repeat: no-repeat;\n    background-position: 1px 1px; }\n    .window__heading button:focus, .window__heading button.clicked {\n      outline: none;\n      border: none; }\n    .window__heading button:active:focus, .window__heading button.clicked {\n      padding: 2px 8px 1px 4px;\n      background-position: 2px 2px; }\n\n.window__icon {\n  padding: 8px;\n  display: flex;\n  background-size: 14px;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.window__title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-grow: 1;\n  min-width: 0px; }\n\n.window__close {\n  margin-left: 2px;\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIUlI+pKwDoVGxvucmwvblqo33MqBQAOw==\"); }\n\n.window__restore {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIZlI9pwK3SnAKI1kjtwTlpyHjV830b9qRHAQA7\"); }\n\n.window__minimize {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIOlI+py+0PozSg2mXvFAUAOw==\"); }\n\n.window__maximize {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIXlI8Jy4wNXzJAznqwsjtPoYFfCDXfWQAAOw==\"); }\n";
  styleInject(css$k);

  var StaticWindow = function StaticWindow(props) {
    return React__default.createElement(
      WindowFrame,
      { className: props.className },
      React__default.createElement(
        'div',
        { className: 'window__heading' },
        props.icon && React__default.createElement('div', {
          className: 'window__icon',
          style: { backgroundImage: 'url(\'' + props.icon + '\')' }
        }),
        React__default.createElement(
          'div',
          {
            className: 'window__title'
          },
          props.title
        ),
        props.onMinimize && React__default.createElement(NavButton, { className: 'window__minimize' }),
        props.isMaximized && props.onRestore && React__default.createElement(NavButton, { className: 'window__restore' }),
        !props.isMaximized && props.onMaximize && React__default.createElement(NavButton, { className: 'window__maximize' }),
        props.onClose && React__default.createElement(NavButton, { className: 'window__close' })
      ),
      props.children
    );
  };

  var windowProps = {
    children: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isMaximized: PropTypes.bool,
    icon: PropTypes.string,

    onClose: PropTypes.func,
    onMinimize: PropTypes.func,
    onMaximize: PropTypes.func,
    onRestore: PropTypes.func
  };

  StaticWindow.propTypes = windowProps;

  var css$l = ".options-list__dropdown {\n  position: absolute;\n  right: 2px;\n  top: 2px;\n  height: calc(100% - 4px); }\n  .options-list__dropdown--empty {\n    display: none; }\n  .options-list__dropdown__button {\n    height: 100%;\n    border: none;\n    background-color: #bbc3c4;\n    background-image: url(\"data:image/gif;base64,R0lGODlhCAAFAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAIAAUAAAIKBCSGebzqoJKtAAA7\");\n    background-repeat: no-repeat;\n    background-position: 2px 3px;\n    padding: 0px 6px;\n    font-size: 0.70rem;\n    user-select: none;\n    letter-spacing: -2px;\n    display: flex;\n    flex-direction: column; }\n    .options-list__dropdown__button:hover {\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px white; }\n    .options-list__dropdown__button:active, .options-list__dropdown__button:focus, .options-list__dropdown__button:active:focus {\n      background-position: 3px 4px;\n      box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #808088; }\n      .options-list__dropdown__button:active + .options-list__dropdown__list, .options-list__dropdown__button:focus + .options-list__dropdown__list, .options-list__dropdown__button:active:focus + .options-list__dropdown__list {\n        position: absolute;\n        top: 100%;\n        right: 0px;\n        display: block;\n        z-index: 10; }\n    .options-list__dropdown__button:active, .options-list__dropdown__button:focus, .options-list__dropdown__button:active:focus {\n      outline: none; }\n  .options-list__dropdown .options-list__dropdown__list {\n    display: none; }\n";
  styleInject(css$l);

  var OptionsList = function (_Component) {
    inherits(OptionsList, _Component);

    function OptionsList() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, OptionsList);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = OptionsList.__proto__ || Object.getPrototypeOf(OptionsList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        displayedIcons: [],
        dropdown: []
      }, _this.openList = function () {
        _this.dropdownButton.focus();
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(OptionsList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var entriesInView = (this.section.clientWidth - 20) / 50;
        this.setState({
          displayedIcons: this.props.options.slice(0, entriesInView),
          dropdown: this.props.options.slice(entriesInView)
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return React__default.createElement(
          'menu',
          {
            ref: function ref(section) {
              _this2.section = section;
            },
            className: classnames(this.props.className, 'options-list')
          },
          this.state.displayedIcons.map(function (option) {
            return React__default.createElement(LargeIconButton, {
              key: 'large-button-' + option.title,
              icon: option.icon,
              title: option.title,
              onClick: option.onClick,
              isDisabled: !option.onClick
            });
          }),
          React__default.createElement(
            'div',
            {
              className: classnames('options-list__dropdown', { 'options-list__dropdown--empty': this.state.dropdown.length < 1 })
            },
            React__default.createElement('button', {
              ref: function ref(btn) {
                _this2.dropdownButton = btn;
              },
              onClick: this.openList,
              className: 'options-list__dropdown__button'
            }),
            React__default.createElement(StandardMenu, {
              className: 'options-list__dropdown__list',
              options: this.state.dropdown
            })
          )
        );
      }
    }]);
    return OptionsList;
  }(React.Component);

  OptionsList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape(LargeIconButton.propTypes)),
    className: PropTypes.string
  };

  var css$m = ".w98 .window--explorer__view {\n  min-height: 20px;\n  margin: 2px auto 1px;\n  background-color: white;\n  box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n\n.w98 .window--explorer__details {\n  display: flex; }\n  .w98 .window--explorer__details__section {\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #808088;\n    flex-grow: 1;\n    margin-top: 2px;\n    height: 16px; }\n    .w98 .window--explorer__details__section:not(:last-child) {\n      margin: 2px; }\n\n.w98 .window--explorer .menu-bar {\n  padding: 2px 1px 2px 12px; }\n\n.w98 .window--explorer > div + menu {\n  margin-top: 2px;\n  box-shadow: 0px 2px 0px -1px white, -1px 2px 0px -1px white, -1px 1px 0px #808088, 0px 1px 0px #808088, inset 0px -1px 0px #808088, inset -1px 0px 0px #808088, inset 0px 0px 0px 1px white, -1px 0px 0px #808088, 1px 0px 0px white, -1px 1px 0px 0px white, 1px 1px 0px 0px white, -1px -1px 0px #808088, 0px -1px 0px #808088, inset 0px 1px 0px white, 1px -1px 0px white; }\n\n.w98 .window--explorer > menu {\n  position: relative;\n  min-height: 16px;\n  padding-left: 12px;\n  margin: 0px 1px;\n  display: flex;\n  box-shadow: inset 0px -1px 0px #808088, inset -1px 0px 0px #808088, inset 0px 0px 0px 1px white, -1px 0px 0px #808088, 1px 0px 0px white, -1px 1px 0px 0px white, 1px 1px 0px 0px white; }\n  .w98 .window--explorer > menu:before {\n    position: absolute;\n    top: 3px;\n    left: 5px;\n    height: calc(100% - 6px);\n    width: 3px;\n    background-color: #bbc3c4;\n    content: '';\n    box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px white; }\n\n.w98 .window--explorer > footer {\n  display: flex; }\n  .w98 .window--explorer > footer > div {\n    flex-grow: 1;\n    padding: 2px;\n    height: 12px;\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #0c0c0c; }\n    .w98 .window--explorer > footer > div:not(:last-child) {\n      margin-right: 2px; }\n\n.w98 .window--explorer__address {\n  display: flex;\n  height: 22px;\n  overflow-y: visible; }\n  .w98 .window--explorer__address__title {\n    align-self: center;\n    margin-right: 4px; }\n  .w98 .window--explorer__address .Select {\n    flex-grow: 1;\n    z-index: 5;\n    margin-right: 4px;\n    margin-top: 1px; }\n\n.w98 .window--explorer__options {\n  display: flex;\n  padding: 2px 8px 2px 12px; }\n\n.w98 .window--explorer > div:last-child {\n  margin-top: 2px; }\n";
  styleInject(css$m);

  var insertDefaultFooter = function insertDefaultFooter(customFooterElements, minimum) {
    var footer = [].concat(toConsumableArray(customFooterElements));
    for (var i = 0; i < minimum; i++) {
      footer[i] = footer[i] || { text: '' };
    }
    return footer;
  };

  var ExplorerWindow = function ExplorerWindow(props) {
    var footer = insertDefaultFooter(props.footer);
    return React__default.createElement(
      StaticWindow,
      {
        className: classnames('window--explorer', props.className),
        icon: props.icon,
        onClose: props.onClose,
        onMaximize: props.onClose,
        onMinimize: props.onMaximize,
        title: props.title
      },
      React__default.createElement(MenuBar, {
        className: 'window--explorer__menu',
        options: props.menuOptions
      }),
      props.explorerOptions && React__default.createElement(OptionsList, {
        className: 'window--explorer__options',
        options: props.explorerOptions
      }),
      React__default.createElement(
        'menu',
        { className: 'window--explorer__address' },
        React__default.createElement(
          'div',
          { className: 'window--explorer__address__title' },
          'Address'
        ),
        React__default.createElement(Select, { placeholder: React__default.createElement(
            'span',
            null,
            'Test'
          ), isDisabled: true })
      ),
      React__default.createElement(
        'div',
        {
          className: 'window--explorer__view',
          style: props.backgroundColor && {
            backgroundColor: props.backgroundColor
          }
        },
        props.children
      ),
      React__default.createElement(
        'footer',
        null,
        footer.map(function (entry) {
          return React__default.createElement(
            'div',
            {
              key: Math.random(),
              style: entry.icon && {
                backgroundImage: 'url(' + entry.icon + ')'
              }
            },
            entry.text || ''
          );
        })
      )
    );
  };

  var footerType = {
    text: PropTypes.string,
    icon: PropTypes.string
  };

  ExplorerWindow.propTypes = _extends({}, StaticWindow.propTypes, {
    menuOptions: PropTypes.arrayOf(PropTypes.any),
    explorerOptions: PropTypes.shape(OptionsList.propTypes.options),
    footer: PropTypes.arrayOf(PropTypes.shape(footerType))
  });

  var css$n = ".window__section {\n  position: relative;\n  border: 1px solid white;\n  outline: 1px solid darkgrey;\n  padding: 5px;\n  margin: 16px 8px 8px; }\n  .window__section .title {\n    position: absolute;\n    top: -10px;\n    padding: 2px 4px;\n    background-color: #bbc3c4; }\n";
  styleInject(css$n);

  var DetailsSection = function DetailsSection(props) {
    return React__default.createElement(
      'section',
      { className: 'window__section' },
      React__default.createElement(
        'div',
        { className: 'title' },
        props.title
      ),
      props.children
    );
  };

  DetailsSection.propTypes = {
    title: PropTypes.node,
    children: PropTypes.node
  };

  exports.Theme = Theme;
  exports.FormButton = FormButton;
  exports.NavButton = NavButton;
  exports.ProgramButton = ProgramButton;
  exports.StartButton = StartButton;
  exports.LargeIconButton = LargeIconButton;
  exports.SmallIconButton = NavButton$1;
  exports.StandardMenu = StandardMenu;
  exports.withStandardMenuWrapper = withContextLogic;
  exports.ExplorerIcon = ExplorerIcon;
  exports.ListIcon = ListIcon;
  exports.Checkbox = Checkbox;
  exports.Radio = Radio;
  exports.InputText = InputText;
  exports.Select = Select;
  exports.SelectBox = SelectBox;
  exports.SelectMultipleSimple = SelectMultipleSimple;
  exports.MenuBar = MenuBar;
  exports.StartMenu = StartMenu;
  exports.TaskBar = TaskBar;
  exports.AbstractWindow = StaticWindow;
  exports.ExplorerWindow = ExplorerWindow;
  exports.WindowFrame = WindowFrame;
  exports.DetailsSection = DetailsSection;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pb.js.map
