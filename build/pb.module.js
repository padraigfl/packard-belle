import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function() {};

{
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
}
});

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

var css = "html {\n  font-size: 10px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  width: 200px;\n  background-color: #bbc3c4;\n  image-rendering: pixelated; }\n  html button {\n    font-size: 10px; }\n  html menu {\n    padding: 0px;\n    margin: 0px; }\n  html ._theme_disabled__9qKxo {\n    color: #808088; }\n  html ::-webkit-scrollbar {\n    width: 16px;\n    height: 16px;\n    background-color: white;\n    background-image: url(\"data:image/gif;base64,R0lGODlhAgACAJEAAAAAAP///8zMzP///yH5BAEAAAMALAAAAAACAAIAAAID1CYFADs=\"); }\n    html ::-webkit-scrollbar-track {\n      position: relative; }\n    html ::-webkit-scrollbar-thumb {\n      background: #bbc3c4;\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px 0px white;\n      border: 1px solid #0c0c0c;\n      border-top: 1px solid #bbc3c4;\n      border-left: 1px solid #bbc3c4; }\n    html ::-webkit-scrollbar-button {\n      background: #bbc3c4;\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px 0px white;\n      border: 1px solid #0c0c0c;\n      border-top: 1px solid #bbc3c4;\n      border-left: 1px solid #bbc3c4; }\n      html ::-webkit-scrollbar-button:start:decrement, html ::-webkit-scrollbar-button:end:increment {\n        height: 16px;\n        width: 16px;\n        display: block;\n        background-repeat: no-repeat;\n        background-color: #bbc3c4; }\n        html ::-webkit-scrollbar-button:start:decrement:active, html ::-webkit-scrollbar-button:end:increment:active {\n          border: 1px solid #808088;\n          box-shadow: none;\n          background-color: #bbc3c4; }\n      html ::-webkit-scrollbar-button:horizontal:decrement {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIlHEIy7ppBCgAOw==\");\n        background-position: 4px 3px; }\n        html ::-webkit-scrollbar-button:horizontal:decrement:active {\n          background-position: 5px 4px; }\n      html ::-webkit-scrollbar-button:horizontal:increment {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIhA4maeyrlCgAOw==\");\n        background-position: 5px 3px; }\n        html ::-webkit-scrollbar-button:horizontal:increment:active {\n          background-position: 6px 4px; }\n      html ::-webkit-scrollbar-button:vertical:decrement {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIHlGEJq8sOCwA7\");\n        background-position: 3px 5px; }\n        html ::-webkit-scrollbar-button:vertical:decrement:active {\n          background-position: 4px 6px; }\n      html ::-webkit-scrollbar-button:vertical:increment {\n        background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIIhA+CKWoNmSgAOw==\");\n        background-position: 3px 5px; }\n        html ::-webkit-scrollbar-button:vertical:increment:active {\n          background-position: 4px 6px; }\n    html ::-webkit-scrollbar-corner {\n      /*\n      background-image: url(resources/corner.png);\n      background-repeat: no-repeat;\n      */\n      background-color: #bbc3c4; }\n\n._theme_w98__32JLE *, ._theme_w98__32JLE {\n  cursor: url(\"data:image/gif;base64,R0lGODlhFgAmAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAWACYAAAJzBISpu8b/jINUHgpNCBMrzV1eAm6dV4YjkppiBWyyisazfDIt/ur2zcv8gDQf8ZYT7IDJJfHkZL6izwtVyhpKLVwtssudpZJZ8ZCstE3GvbSrHGxIPue2hW72CfOkNvy9wrbiFjcoGFhnmIjIp4iGcZdQAAA7\"), default; }\n\n._theme_w98__32JLE button {\n  border: 0px solid transparent;\n  background-color: #bbc3c4;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  ._theme_w98__32JLE button:active, ._theme_w98__32JLE button:focus, ._theme_w98__32JLE button:active:focus {\n    outline: none; }\n";
styleInject(css);

var Theme = function Theme(props) {
  return React.createElement(
    'div',
    { className: 'w98' },
    props.children
  );
};

Theme.propTypes = {
  children: propTypes.node
};

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var css$1 = ".btn_btn__2NUtR:not(.btn_no-style__3OtUc) {\n  border: 0px solid transparent;\n  background-color: #bbc3c4;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn_btn__2NUtR:not(.btn_no-style__3OtUc):disabled, .btn_btn__2NUtR:not(.btn_no-style__3OtUc).btn_disabled__2VTg1 {\n    pointer-events: none; }\n  .btn_btn__2NUtR:not(.btn_no-style__3OtUc):active, .btn_btn__2NUtR:not(.btn_no-style__3OtUc):focus, .btn_btn__2NUtR:not(.btn_no-style__3OtUc):active:focus, .btn_btn__2NUtR:not(.btn_no-style__3OtUc).btn_active__2QjGh, .btn_btn__2NUtR:not(.btn_no-style__3OtUc).btn_clicked__1ZW4f {\n    outline: none;\n    color: inherit; }\n  .btn_btn__2NUtR:not(.btn_no-style__3OtUc):before {\n    position: absolute;\n    display: block;\n    top: 1px;\n    left: 1px;\n    width: calc(100% - 2px);\n    height: calc(100% - 2px); }\n";
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

var defineProperty = function (obj, key, value) {
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
};

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
      if (_this.props.onContextMenu) {
        _this.props.onContextMenu(e);
      }
      return false;
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


      return React.createElement(
        'button',
        {
          ref: function ref(btn) {
            _this2.button = btn;
          },
          className: classnames('btn', props.className, {
            'clicked': this.state.mouseDown,
            'btn--active': props.isActive,
            'btn--disabled': props.disabled
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
          onBlur: function onBlur() {
            return _this2.props.onBlur();
          },
          onContextMenu: function onContextMenu(e) {
            return _this2.handleContextMenu(e);
          },
          disabled: props.disabled,
          style: props.style
        },
        props.children
      );
    }
  }]);
  return AbstractButton;
}(Component);

AbstractButton.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.node]),
  text: propTypes.string,
  onClick: propTypes.func,
  className: propTypes.string,
  isActive: propTypes.bool,
  style: propTypes.shape() // Todo: Needs custom prop
};

var css$2 = ".btn--form_btn__1iO_7.btn--form_btn--form__12Uj1 {\n  min-width: 48px;\n  outline-width: 1px;\n  outline-offset: -5px;\n  padding: 5px 1px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px white, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn--form_btn__1iO_7.btn--form_btn--form__12Uj1:focus {\n    outline: black;\n    outline-style: dotted;\n    box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #0c0c0c, inset 2px 2px 0px white; }\n  .btn--form_btn__1iO_7.btn--form_btn--form__12Uj1:active:focus, .btn--form_btn__1iO_7.btn--form_btn--form__12Uj1:active, .btn--form_btn__1iO_7.btn--form_btn--form__12Uj1.btn--form_active__3khNc, .btn--form_btn__1iO_7.btn--form_btn--form__12Uj1.btn--form_clicked__sXiqL {\n    padding: 6px 0px 4px 2px;\n    box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #808088, inset 2px 2px 0px #808088; }\n";
styleInject(css$2);

var FormButton = function FormButton(props) {
  return React.createElement(
    AbstractButton,
    {
      className: classnames('btn--form', props.className),
      onClick: props.onClick,
      isActive: props.isActive,
      disabled: props.disabled
    },
    props.children
  );
};

AbstractButton.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.node]),
  text: propTypes.string,
  onClick: propTypes.func,
  className: propTypes.string,
  isActive: propTypes.bool,
  disabled: propTypes.bool
};

var css$3 = ".btn--nav_btn__1wcxV.btn--nav_btn--nav__1Uxvl {\n  padding: 0px;\n  min-width: initial;\n  width: 16px;\n  height: 14px;\n  margin-left: 1px;\n  margin-top: 1px;\n  margin-bottom: 2px;\n  image-rendering: pixelated;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px white, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn--nav_btn__1wcxV.btn--nav_btn--nav__1Uxvl img {\n    height: 14px;\n    width: 14px; }\n  .btn--nav_btn__1wcxV.btn--nav_btn--nav__1Uxvl:focus {\n    outline: none;\n    border: none; }\n  .btn--nav_btn__1wcxV.btn--nav_btn--nav__1Uxvl:active:focus, .btn--nav_btn__1wcxV.btn--nav_btn--nav__1Uxvl.btn--nav_clicked__2bITl {\n    padding-top: 2px;\n    padding-bottom: 1px;\n    padding-left: 4px;\n    padding-right: 8px;\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088; }\n  .btn--nav_btn__1wcxV.btn--nav_btn--nav__1Uxvl.btn--nav_window__close__3VvjW {\n    margin-left: 2px; }\n";
styleInject(css$3);

var NavButton = function NavButton(props) {
  return React.createElement(AbstractButton, {
    className: classnames('btn--nav', props.className),
    onClick: props.onClick,
    isActive: props.isActive
  });
};

NavButton.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  isActive: propTypes.bool
};

var css$4 = ".btn--program_btn__3_Pn7.btn--program_btn--program__3cevb {\n  flex: 1;\n  margin: 0px 1px;\n  height: 22px;\n  max-width: 140px;\n  min-width: 40px;\n  display: inline-block;\n  width: 100%;\n  padding-top: 2px;\n  padding-left: 22px;\n  padding-right: 3px;\n  text-align: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  background-size: 16px;\n  background-repeat: no-repeat;\n  background-position: 4px 4px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px white, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn--program_btn__3_Pn7.btn--program_btn--program__3cevb:active:focus, .btn--program_btn__3_Pn7.btn--program_btn--program__3cevb.btn--program_btn--active__gieCH, .btn--program_btn__3_Pn7.btn--program_btn--program__3cevb.btn--program_clicked__l6Yty {\n    background-position: 5px 5px;\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088;\n    padding-top: 3px;\n    padding-left: 23px;\n    padding-right: 2px; }\n    .btn--program_btn__3_Pn7.btn--program_btn--program__3cevb:active:focus:before, .btn--program_btn__3_Pn7.btn--program_btn--program__3cevb.btn--program_btn--active__gieCH:before, .btn--program_btn__3_Pn7.btn--program_btn--program__3cevb.btn--program_clicked__l6Yty:before {\n      content: '';\n      background-size: 2px;\n      z-index: -1;\n      box-shadow: none; }\n  .btn--program_btn__3_Pn7.btn--program_btn--program__3cevb.btn--program_btn--active__gieCH {\n    background-color: transparent;\n    font-weight: bold; }\n    .btn--program_btn__3_Pn7.btn--program_btn--program__3cevb.btn--program_btn--active__gieCH:before {\n      content: '';\n      background-color: white;\n      background-image: url(\"../../../images/rgba-204-204-204-85.png\"); }\n";
styleInject(css$4);

var ProgramButton = function ProgramButton(props) {
  return React.createElement(
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

ProgramButton.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.node]),
  icon: propTypes.any,
  onClick: propTypes.func,
  className: propTypes.string,
  isActive: propTypes.bool
};

var css$5 = ".btn--start_btn__39YPp.btn--start_btn--start__6B3Je {\n  height: 22px;\n  display: flex;\n  align-content: center;\n  width: 54px;\n  padding-right: 6px;\n  background-image: url(\"data:image/gif;base64,R0lGODlhNAATAKIAAAAAAP///wAA/wD/AP//AP8AAP///wAAACH5BAEAAAYALAAAAAA0ABMAAAOPaLrc/jDKSaudIIPLu95dKH2fGIKLVmSDxpTms83qCgwtmik7j46/BglQsOF6BuQrCFEuCkLiJ5diJnswl6sB7dqGSpjPscNaFcWiRpAhbKPVqhbkVAiiAjaA4LYizWOADneEenltfXFXioCCD3mHAHptYW9jV3OKL1FgZzEySZiVnp8yYkKlFyRNqa2uEgkAOw==\");\n  background-size: auto 18px;\n  background-repeat: no-repeat;\n  background-position: 2px 1px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px white, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4; }\n  .btn--start_btn__39YPp.btn--start_btn--start__text__20SrX {\n    font-size: 1rem;\n    font-weight: bold; }\n  .btn--start_btn__39YPp.btn--start_btn--start__6B3Je:active, .btn--start_btn__39YPp.btn--start_btn--start__6B3Je:focus, .btn--start_btn__39YPp.btn--start_btn--start__6B3Je:active:focus, .btn--start_btn__39YPp.btn--start_btn--start__6B3Je.btn--start_active___yZt4, .btn--start_btn__39YPp.btn--start_btn--start__6B3Je.btn--start_clicked__2RYLA {\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #0c0c0c, inset 0px 1px 0px #0c0c0c, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px #808088, 0px -1px 0px #0c0c0c;\n    background-position: 3px 2px;\n    outline: 1px dotted black;\n    outline-offset: -4px; }\n";
styleInject(css$5);

var StartButton = function StartButton(props) {
  return React.createElement(AbstractButton, {
    className: classnames('btn--start', props.className),
    onClick: props.onClick,
    onBlur: props.onBlur,
    isActive: props.isActive
  });
};

StartButton.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  isActive: propTypes.bool
};

var css$6 = ".btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU {\n  padding: 2px;\n  width: 48px; }\n  .btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU img {\n    display: block;\n    margin: 0 auto;\n    filter: grayscale(1);\n    height: 20px;\n    max-width: 20px; }\n  .btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU:disabled, .btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU.btn--large-icon_disabled__10plk {\n    color: #808088; }\n    .btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU:disabled:hover, .btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU.btn--large-icon_disabled__10plk:hover {\n      box-shadow: none; }\n      .btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU:disabled:hover img, .btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU.btn--large-icon_disabled__10plk:hover img {\n        filter: grayscale(1); }\n  .btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU:hover {\n    box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px white; }\n    .btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU:hover img {\n      filter: grayscale(0); }\n  .btn--large-icon_btn__33we2.btn--large-icon_btn--large-icon__2y3gU:active:focus {\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #0c0c0c;\n    padding: 3px 1px 1px 3px; }\n";
styleInject(css$6);

var NavButton$1 = function NavButton(props) {
  return React.createElement(
    AbstractButton,
    {
      className: classnames('btn--large-icon', props.className),
      onClick: props.onClick,
      disabled: props.disabled
    },
    React.createElement('img', { src: props.icon }),
    props.title
  );
};

NavButton$1.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func,
  className: propTypes.string,
  icon: propTypes.string,
  disabled: propTypes.bool
};

var css$7 = ".btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL {\n  height: 22px;\n  width: 22px;\n  padding: 0px; }\n  .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL img {\n    margin: 3px;\n    max-height: 16px;\n    max-width: 16px; }\n  .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL:hover {\n    box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px white; }\n  .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL:hover:focus:active, .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL:hover:active, .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL.btn--small-icon_active__3wGzm, .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL.btn--small-icon_clicked__p46l3 {\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #808088; }\n    .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL:hover:focus:active img, .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL:hover:active img, .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL.btn--small-icon_active__3wGzm img, .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL.btn--small-icon_clicked__p46l3 img {\n      margin: 4px 2px 2px 4px; }\n  .btn--small-icon_btn__2lsBB.btn--small-icon_btn--small-icon__2intL.btn--small-icon_btn--disabled__2qZmL img {\n    filter: grayscale(1); }\n";
styleInject(css$7);

var NavButton$2 = function NavButton(props) {
  return React.createElement(
    AbstractButton,
    {
      className: classnames('btn--small-icon', props.className),
      onClick: props.onClick,
      disabled: props.disabled,
      isActive: props.isActive
    },
    React.createElement('img', { src: props.icon })
  );
};

NavButton$2.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  icon: propTypes.string,
  disabled: propTypes.bool,
  isActive: propTypes.bool
};

var css$8 = ".window_w98__2giFo .window_window__2fSHE {\n  position: relative;\n  background-color: #bbc3c4;\n  padding: 3px;\n  box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #bbc3c4, inset -2px -2px 0px #808088, inset 2px 2px 0px white; }\n  .window_w98__2giFo .window_window__heading__2yjhV {\n    display: flex;\n    background: linear-gradient(to right, #0000a2, #126fc2);\n    font-weight: bold;\n    color: white;\n    margin-bottom: 1px;\n    padding: 0px 3px;\n    align-items: center; }\n  .window_w98__2giFo .window_window__icon__1RuGZ {\n    padding: 8px;\n    display: flex;\n    background-size: 14px;\n    background-repeat: no-repeat;\n    background-position: center; }\n  .window_w98__2giFo .window_window__title__17LIk {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    flex-grow: 1;\n    min-width: 0px; }\n  .window_w98__2giFo .window_window__close__3ZdTn, .window_w98__2giFo .window_window__restore__3OASV, .window_w98__2giFo .window_window__minimize__3xFlt, .window_w98__2giFo .window_window__maximize__3vLOx {\n    padding: 0px;\n    min-width: initial;\n    width: 16px;\n    height: 14px;\n    margin-left: 1px;\n    image-rendering: pixelated;\n    display: flex;\n    align-items: center;\n    flex-shrink: 0;\n    background-repeat: no-repeat;\n    background-position: 1px 1px; }\n    .window_w98__2giFo .window_window__close__3ZdTn:focus, .window_w98__2giFo .window_window__close__3ZdTn.window_clicked__SZ0Sf, .window_w98__2giFo .window_window__restore__3OASV:focus, .window_w98__2giFo .window_window__restore__3OASV.window_clicked__SZ0Sf, .window_w98__2giFo .window_window__minimize__3xFlt:focus, .window_w98__2giFo .window_window__minimize__3xFlt.window_clicked__SZ0Sf, .window_w98__2giFo .window_window__maximize__3vLOx:focus, .window_w98__2giFo .window_window__maximize__3vLOx.window_clicked__SZ0Sf {\n      outline: none;\n      border: none; }\n    .window_w98__2giFo .window_window__close__3ZdTn:active:focus, .window_w98__2giFo .window_window__close__3ZdTn.window_clicked__SZ0Sf, .window_w98__2giFo .window_window__restore__3OASV:active:focus, .window_w98__2giFo .window_window__restore__3OASV.window_clicked__SZ0Sf, .window_w98__2giFo .window_window__minimize__3xFlt:active:focus, .window_w98__2giFo .window_window__minimize__3xFlt.window_clicked__SZ0Sf, .window_w98__2giFo .window_window__maximize__3vLOx:active:focus, .window_w98__2giFo .window_window__maximize__3vLOx.window_clicked__SZ0Sf {\n      padding-top: 2px;\n      padding-bottom: 1px;\n      padding-left: 4px;\n      padding-right: 8px;\n      background-position: 2px 2px; }\n  .window_w98__2giFo .window_window__close__3ZdTn {\n    margin-left: 2px;\n    background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIUlI+pKwDoVGxvucmwvblqo33MqBQAOw==\"); }\n  .window_w98__2giFo .window_window__restore__3OASV {\n    background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIZlI9pwK3SnAKI1kjtwTlpyHjV830b9qRHAQA7\"); }\n  .window_w98__2giFo .window_window__minimize__3xFlt {\n    background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIOlI+py+0PozSg2mXvFAUAOw==\"); }\n  .window_w98__2giFo .window_window__maximize__3vLOx {\n    background-image: url(\"data:image/gif;base64,R0lGODlhDQALAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAANAAsAAAIXlI8Jy4wNXzJAznqwsjtPoYFfCDXfWQAAOw==\"); }\n  .window_w98__2giFo .window_window__menu__2Zv9o, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__2RVw4 {\n    display: flex;\n    padding: 0px;\n    font-size: 1rem;\n    position: relative;\n    overflow-y: visible;\n    z-index: 20; }\n    .window_w98__2giFo .window_window__menu__section__2qzIE, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 {\n      position: relative; }\n      .window_w98__2giFo .window_window__menu__section__2qzIE > button, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button {\n        padding: 0px 4px;\n        outline: none;\n        border: none;\n        user-select: none;\n        color: #0c0c0c;\n        display: inline-block;\n        background-color: rgba(0, 0, 0, 0);\n        width: 100%;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        text-align: left;\n        padding: 3px 6px; }\n        .window_w98__2giFo .window_window__menu__section__2qzIE > button + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__menu__section__2qzIE > button + .window_menu-bar__section__dropdown__1A_4M, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button + .window_menu-bar__section__dropdown__1A_4M {\n          z-index: 20;\n          visibility: hidden;\n          position: absolute;\n          max-height: 0px;\n          top: 100%;\n          left: 0px;\n          transition: max-height linear 750ms; }\n        .window_w98__2giFo .window_window__menu__section__2qzIE > button:hover, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button:hover {\n          box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px white; }\n        .window_w98__2giFo .window_window__menu__section__2qzIE > button:active, .window_w98__2giFo .window_window__menu__section__2qzIE > button:focus, .window_w98__2giFo .window_window__menu__section__2qzIE > button:active:focus, .window_w98__2giFo .window_window__menu__section__2qzIE > button.window_active__3Kb1w, .window_w98__2giFo .window_window__menu__section__2qzIE > button.window_clicked__SZ0Sf, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button:active, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button:focus, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button:active:focus, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button.window_active__3Kb1w, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button.window_clicked__SZ0Sf {\n          box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #808088;\n          padding: 4px 5px 2px 7px; }\n          .window_w98__2giFo .window_window__menu__section__2qzIE > button:active + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__menu__section__2qzIE > button:focus + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__menu__section__2qzIE > button:active:focus + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__menu__section__2qzIE > button.window_active__3Kb1w + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__menu__section__2qzIE > button.window_clicked__SZ0Sf + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button:active + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button:focus + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button:active:focus + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button.window_active__3Kb1w + .window_context-menu__3Rwra, .window_w98__2giFo .window_window__2fSHE .window_menu-bar__section__1XMd1 > button.window_clicked__SZ0Sf + .window_context-menu__3Rwra {\n            visibility: visible;\n            max-height: 480px; }\n  .window_w98__2giFo .window_window__details__3-E7P {\n    position: relative;\n    border: 1px solid white;\n    outline: 1px solid darkgrey;\n    padding: 5px;\n    margin: 16px 8px 8px; }\n    .window_w98__2giFo .window_window__details__title__1KG6b {\n      position: absolute;\n      top: -10px;\n      padding: 2px 4px;\n      background-color: #bbc3c4; }\n  .window_w98__2giFo .window_window__2fSHE section {\n    position: relative;\n    border: 1px solid white;\n    outline: 1px solid darkgrey;\n    padding: 5px;\n    margin: 16px 8px 8px; }\n    .window_w98__2giFo .window_window__2fSHE section .window_title__2fZfA {\n      position: absolute;\n      top: -10px;\n      padding: 2px 4px;\n      background-color: #bbc3c4; }\n  .window_w98__2giFo .window_window--alert__3YUyf {\n    max-width: 320px; }\n    .window_w98__2giFo .window_window--alert__message__3BzIA {\n      display: flex;\n      align-items: center;\n      min-height: 28px;\n      padding: 10px 2px 6px; }\n      .window_w98__2giFo .window_window--alert__message__3BzIA.window_has-icon__3Qk1C {\n        background-size: 28px 28px;\n        background-repeat: no-repeat;\n        background-position: 6px 6px;\n        padding: 6px 2px 6px 44px; }\n    .window_w98__2giFo .window_window--alert__actions__1YkkM {\n      width: 100%;\n      display: flex;\n      justify-content: center; }\n      .window_w98__2giFo .window_window--alert__actions__1YkkM .window_btn--form__1GWVC {\n        margin: 0px 4px 8px; }\n";
styleInject(css$8);

var WindowFrame = function WindowFrame(props) {
  return React.createElement(
    'div',
    { className: classnames('window', props.className) },
    props.children
  );
};

WindowFrame.propTypes = {
  children: propTypes.node,
  className: propTypes.string
};

var ContextMenuItem = function ContextMenuItem(props) {
  return React.createElement(
    'div',
    {
      className: classnames('context-menu__item', props.className, props.type, { 'context-menu__item--has-options': props.options, 'active': props.isActive }),
      onMouseEnter: function onMouseEnter(e) {
        return props.mouseEnterItem(e);
      },
      onMouseLeave: function onMouseLeave() {},
      onMouseOut: function onMouseOut() {}
    },
    React.createElement(
      'button',
      {
        className: classnames('context-menu__item__button', { disabled: props.disabled }),
        onClick: props.onClick,
        style: props.icon ? { backgroundImage: 'url(\'' + props.icon + '\')' } : undefined,
        value: props.value,
        disabled: props.disabled
      },
      props.title
    ),
    props.options && React.createElement(ContextMenuSimple, {
      className: 'context-menu__item__child',
      options: props.options,
      value: props.value,
      mouseEnterItem: props.mouseEnterItem
    })
  );
};

ContextMenuItem.defaultProps = {
  onClick: function onClick() {},
  value: []
};

var css$9 = ".index_context-menu__3WikT {\n  display: inline-flex;\n  flex-direction: column;\n  word-wrap: none;\n  white-space: nowrap;\n  text-overflow: clip; }\n  .index_context-menu__3WikT > div {\n    position: relative; }\n    .index_context-menu__3WikT > div > .index_window__1xd31 {\n      position: absolute;\n      visibility: hidden;\n      width: auto;\n      transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; }\n    .index_context-menu__3WikT > div.index_active__2Fx8o > .index_window__1xd31 {\n      width: auto;\n      visibility: visible; }\n    .index_context-menu__3WikT > div > .index_window__1xd31 {\n      left: calc(100%  - 3px);\n      top: -3px;\n      max-width: 0%; }\n    .index_context-menu__3WikT > div:hover > .index_window__1xd31, .index_context-menu__3WikT > div.index_active__2Fx8o > .index_window__1xd31 {\n      max-width: 400%; }\n    .index_context-menu__3WikT > div > button {\n      position: relative;\n      display: block;\n      width: 100%;\n      padding: 0px 20px 0px 20px;\n      text-align: left;\n      background-repeat: no-repeat;\n      background-size: 16px;\n      background-position: 3px center;\n      background-color: rgba(0, 0, 0, 0);\n      border: none;\n      outline: none;\n      height: 20px; }\n      .index_context-menu__3WikT > div > button:before {\n        content: '';\n        position: absolute;\n        left: 0px;\n        top: 0px;\n        height: 16px;\n        width: 16px;\n        background-repeat: no-repeat;\n        background-position: center; }\n      .index_context-menu__3WikT > div > button .index_context-menu__item__text__3tRqq {\n        padding: 0px 20px 0px 0px; }\n      .index_context-menu__3WikT > div > button:disabled, .index_context-menu__3WikT > div > button.index_disabled__3pYvN {\n        color: #808088; }\n      .index_context-menu__3WikT > div > button:not(:only-child):after {\n        content: '';\n        position: absolute;\n        background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIhA4maeyrlCgAOw==\");\n        top: 0px;\n        left: 0px;\n        height: 100%;\n        width: calc(100% - 8px);\n        background-position: right center;\n        background-repeat: no-repeat; }\n    .index_context-menu__3WikT > div.index_radio-selected__3cljv > button:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBgAGAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAGAAYAAAIIFA6Gy816RAEAOw==\"); }\n    .index_context-menu__3WikT > div.index_checked__xiwND > button:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAcAAAIMlA9nwMj9xGuLIlUAADs=\"); }\n    .index_context-menu__3WikT > div.index_checked__xiwND.index_disabled__3pYvN > button:before {\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAHAAcAAAIMnC9nwsj9xmuLIlUAADs=\"); }\n    .index_context-menu__3WikT > div:hover, .index_context-menu__3WikT > div:active, .index_context-menu__3WikT > div:focus, .index_context-menu__3WikT > div:active:focus, .index_context-menu__3WikT > div.index_active__2Fx8o, .index_context-menu__3WikT > div.index_clicked__2exhA {\n      color: white; }\n      .index_context-menu__3WikT > div:hover > button:not(.index_disabled__3pYvN), .index_context-menu__3WikT > div:active > button:not(.index_disabled__3pYvN), .index_context-menu__3WikT > div:focus > button:not(.index_disabled__3pYvN), .index_context-menu__3WikT > div:active:focus > button:not(.index_disabled__3pYvN), .index_context-menu__3WikT > div.index_active__2Fx8o > button:not(.index_disabled__3pYvN), .index_context-menu__3WikT > div.index_clicked__2exhA > button:not(.index_disabled__3pYvN) {\n        color: white;\n        background-color: #0000a2; }\n        .index_context-menu__3WikT > div:hover > button:not(.index_disabled__3pYvN):not(:only-child):after, .index_context-menu__3WikT > div:active > button:not(.index_disabled__3pYvN):not(:only-child):after, .index_context-menu__3WikT > div:focus > button:not(.index_disabled__3pYvN):not(:only-child):after, .index_context-menu__3WikT > div:active:focus > button:not(.index_disabled__3pYvN):not(:only-child):after, .index_context-menu__3WikT > div.index_active__2Fx8o > button:not(.index_disabled__3pYvN):not(:only-child):after, .index_context-menu__3WikT > div.index_clicked__2exhA > button:not(.index_disabled__3pYvN):not(:only-child):after {\n          background-image: url(\"data:image/gif;base64,R0lGODlhBAAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAEAAcAAAIIjB4maeyrlCgAOw==\"); }\n  .index_context-menu__3WikT div:empty {\n    position: relative;\n    width: 95%;\n    margin: 2px auto;\n    border-top: 1px solid #808088;\n    border-bottom: 1px solid white;\n    display: none; }\n  .index_context-menu__3WikT :not(:empty) + div:empty:not(:last-child):not(:first-child) {\n    display: block; }\n\n.index_context-menu--css__3WwVs div__sub-menu--top > .index_window__1xd31 {\n  position: absolute;\n  visibility: hidden;\n  width: auto;\n  transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; }\n\n.index_context-menu--css__3WwVs div__sub-menu--top.index_active__2Fx8o > .index_window__1xd31 {\n  width: auto;\n  visibility: visible; }\n\n.index_context-menu--css__3WwVs div__sub-menu--top > .index_window__1xd31 {\n  bottom: calc(100% + $windowPadding);\n  left: 0px;\n  height: 0px;\n  max-height: 0%;\n  max-width: 100%; }\n\n.index_context-menu--css__3WwVs div__sub-menu--top:hover > .index_window__1xd31, .index_context-menu--css__3WwVs div__sub-menu--top.index_active__2Fx8o > .index_window__1xd31 {\n  height: initial;\n  max-height: 100%; }\n\n.index_context-menu--css__3WwVs div__sub-menu--bottom > .index_window__1xd31 {\n  position: absolute;\n  visibility: hidden;\n  width: auto;\n  transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; }\n\n.index_context-menu--css__3WwVs div__sub-menu--bottom.index_active__2Fx8o > .index_window__1xd31 {\n  width: auto;\n  visibility: visible; }\n\n.index_context-menu--css__3WwVs div__sub-menu--bottom > .index_window__1xd31 {\n  top: calc(100% + $windowPadding);\n  left: 0px;\n  max-height: 0%;\n  max-width: 100%; }\n\n.index_context-menu--css__3WwVs div__sub-menu--bottom:hover > .index_window__1xd31, .index_context-menu--css__3WwVs div__sub-menu--bottom.index_active__2Fx8o > .index_window__1xd31 {\n  height: initial;\n  max-height: 100%; }\n\n.index_context-menu--css__3WwVs div__sub-menu--left > .index_window__1xd31 {\n  position: absolute;\n  visibility: hidden;\n  width: auto;\n  transition: max-width cubic-bezier(0.38, 0.01, 0, 1) 200ms, max-height cubic-bezier(0.38, 0.01, 0, 1) 200ms; }\n\n.index_context-menu--css__3WwVs div__sub-menu--left.index_active__2Fx8o > .index_window__1xd31 {\n  width: auto;\n  visibility: visible; }\n\n.index_context-menu--css__3WwVs div__sub-menu--left > .index_window__1xd31 {\n  left: -100%;\n  top: -3px;\n  max-width: 0%; }\n\n.index_context-menu--css__3WwVs div__sub-menu--left:hover > .index_window__1xd31, .index_context-menu--css__3WwVs div__sub-menu--left.index_active__2Fx8o > .index_window__1xd31 {\n  max-width: 100%; }\n\n.index_context-menu--css__3WwVs div:active, .index_context-menu--css__3WwVs div .index_active__2Fx8o {\n  display: none; }\n\n.index_context-menu--css__3WwVs div:hover > .index_window__1xd31 {\n  width: auto;\n  visibility: visible;\n  display: block; }\n";
styleInject(css$9);

var ContextMenuSimple = function ContextMenuSimple(props) {
  if (props.children) {
    return React.createElement(
      WindowFrame,
      {
        className: classnames('context-menu context-menu--custom', props.className, props.direction)
      },
      props.children
    );
  }
  return React.createElement(
    WindowFrame,
    {
      className: classnames('context-menu', props.className, props.direction)
    },
    props.options.map(function (option) {
      if (Array.isArray(option)) {
        return React.createElement(
          React.Fragment,
          { key: 'menu-subset-' + option[0].title },
          React.createElement('div', { className: 'divider divider--start' }),
          option.map(function (subOption) {
            return React.createElement(ContextMenuItem, _extends({
              key: 'menu-divider-' + subOption.title
            }, subOption, {
              value: [].concat(toConsumableArray(props.value), [subOption.title]),
              mouseEnterItem: function mouseEnterItem(e) {
                return props.mouseEnterItem(e);
              }
            }));
          }),
          React.createElement('div', { className: 'divider divider--end' })
        );
      } else {
        return React.createElement(ContextMenuItem, _extends({
          key: 'context-menu-item-' + option.title
        }, option, {
          value: [].concat(toConsumableArray(props.value), [option.title]),
          mouseEnterItem: function mouseEnterItem(e) {
            return props.mouseEnterItem(e);
          }
        }));
      }
    })
  );
};

ContextMenuSimple.defaultProps = {
  value: []
};

var clone_1 = createCommonjsModule(function (module) {
var clone = (function() {

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (module.exports) {
  module.exports = clone;
}
});

var withContextLogic = function withContextLogic(ContextButton) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    inherits(ContextMenuSimple$$1, _Component);

    function ContextMenuSimple$$1() {
      var _ref;

      var _temp, _this, _ret;

      classCallCheck(this, ContextMenuSimple$$1);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ContextMenuSimple$$1.__proto__ || Object.getPrototypeOf(ContextMenuSimple$$1)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        options: _this.props.options,
        isActive: _this.props.isActive
      }, _this.mouseEnterItem = function (e) {
        if (e.target.value) {
          var newOptions = _this.updateActive(e.target.value.split(','), clone_1(_this.props.options), 0);
          console.log(newOptions);
          console.log(_this.props.options);
          _this.setState({ options: newOptions });
        }
      }, _this.handleClick = function (e) {
        if (_this.props.onClick) {
          _this.props.onClick(e);
        }
        _this.setState({ isOpen: true });
        return false;
      }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(ContextMenuSimple$$1, [{
      key: 'updateActive',
      value: function updateActive(activeFields, newOptions) {
        var _this2 = this;

        var idx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (idx === 0) {
          console.log(newOptions);
        }
        if (activeFields.length <= idx) {
          return newOptions;
        }
        var changeIdx = newOptions.findIndex(function (option, optIdx) {
          if (Array.isArray(option)) {
            var subIdx = option.findIndex(function (opt) {
              return opt.title === activeFields[idx];
            });
            if (subIdx !== -1) {
              console.log(optIdx + ', ' + subIdx);
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
          console.log(changeIdx);
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
            props = objectWithoutProperties(_props, ['options', 'onClick']);

        return React.createElement(
          'div',
          {
            className: classnames('context-menu-wrapper', props.className)
          },
          React.createElement(
            ContextButton,
            _extends({}, props, {
              onBlur: function onBlur(e) {
                return _this3.handleBlur(e);
              },
              onClick: function onClick(e) {
                return _this3.handleClick(e);
              }
            }),
            props.children
          ),
          React.createElement(ContextMenuSimple, {
            options: this.state.options,
            className: 'context-menu__wrapper',
            mouseEnterItem: function mouseEnterItem(e) {
              return _this3.mouseEnterItem(e);
            }
          })
        );
      }
    }], [{
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
    return ContextMenuSimple$$1;
  }(Component), _class.defaultProps = {
    value: []
  }, _temp2;
};

var css$a = ".icon_icon__2lSE5 {\n  position: relative;\n  display: block;\n  outline: none;\n  background: none;\n  border: none; }\n  .icon_icon__icon__14Z0F {\n    display: block;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat; }\n  .icon_icon__2lSE5:focus, .icon_icon__2lSE5:active, .icon_icon__2lSE5:active:focus, .icon_icon__2lSE5.icon_is-active__1BCnb {\n    outline: none; }\n    .icon_icon__2lSE5:focus .icon_icon__icon__14Z0F, .icon_icon__2lSE5:active .icon_icon__icon__14Z0F, .icon_icon__2lSE5:active:focus .icon_icon__icon__14Z0F, .icon_icon__2lSE5.icon_is-active__1BCnb .icon_icon__icon__14Z0F {\n      filter: hue-rotate(70deg) contrast(0.3) saturate(2); }\n    .icon_icon__2lSE5:focus .icon_icon__text__1qsxv, .icon_icon__2lSE5:active .icon_icon__text__1qsxv, .icon_icon__2lSE5:active:focus .icon_icon__text__1qsxv, .icon_icon__2lSE5.icon_is-active__1BCnb .icon_icon__text__1qsxv {\n      background-color: #0000a2;\n      color: white;\n      outline: 1px dotted white;\n      outline-offset: -1px; }\n";
styleInject(css$a);

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
      e.preventDefault();
      _this.icon.focus();
      if (_this.props.onContextMenu) {
        _this.props.onContextMenu(e);
      }
      return false;
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
        className: classnames('icon', props.className),
        title: props.alt,
        value: props.value,
        ref: function ref(icon) {
          _this2.icon = icon;
        }
      };

      var contents = React.createElement(
        React.Fragment,
        null,
        React.createElement('div', {
          className: 'icon__icon',
          style: { backgroundImage: 'url(\'' + props.icon + '\')' }
        }),
        React.createElement(
          'div',
          { className: 'icon__text' },
          props.title
        ),
        props.children
      );

      if (this.props.onClick || this.props.onDoubleClick) {
        return React.createElement(
          'button',
          _extends({
            ref: function ref(icon) {
              _this2.icon = icon;
            },
            onContextMenu: this.handleContextMenu
          }, iconProps),
          contents
        );
      }
      return React.createElement(
        'div',
        iconProps,
        contents
      );
    }
  }]);
  return AbstractIcon;
}(Component);

AbstractIcon.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
  className: propTypes.string,
  icon: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  value: propTypes.any
};

var css$b = ".icon--explorer_icon__2Gi0w.icon--explorer_icon--explorer__253rG {\n  width: 58px;\n  height: 70px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .icon--explorer_icon__2Gi0w.icon--explorer_icon--explorer__253rG .icon--explorer_icon__icon__RUZH9 {\n    width: 42px;\n    height: 42px;\n    margin: 0 auto; }\n  .icon--explorer_icon__2Gi0w.icon--explorer_icon--explorer__253rG .icon--explorer_icon__text__GnpCW {\n    position: absolute;\n    top: 45px;\n    left: 0px;\n    max-height: 24px;\n    width: 100%;\n    overflow-y: hidden;\n    display: inline-block; }\n  .icon--explorer_icon__2Gi0w.icon--explorer_icon--explorer__253rG:focus .icon--explorer_icon__text__GnpCW, .icon--explorer_icon__2Gi0w.icon--explorer_icon--explorer__253rG:active .icon--explorer_icon__text__GnpCW, .icon--explorer_icon__2Gi0w.icon--explorer_icon--explorer__253rG:active:focus .icon--explorer_icon__text__GnpCW, .icon--explorer_icon__2Gi0w.icon--explorer_icon--explorer__253rG.icon--explorer_active__3eO5_ .icon--explorer_icon__text__GnpCW, .icon--explorer_icon__2Gi0w.icon--explorer_icon--explorer__253rG.icon--explorer_clicked__3fmlu .icon--explorer_icon__text__GnpCW {\n    max-height: initial; }\n";
styleInject(css$b);

var ExplorerIcon = function ExplorerIcon(props) {
  return React.createElement(AbstractIcon, {
    onClick: props.onClick,
    onDoubleClick: props.onDoubleClick,
    alt: props.alt,
    className: classnames('icon--explorer', props.className),
    icon: props.icon,
    title: props.title
  });
};

ExplorerIcon.propTypes = {
  onClick: propTypes.func,
  onDoubleClick: propTypes.func,
  className: propTypes.string,
  icon: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string
};

var css$c = ".icon--list_icon__g8Zr8.icon--list_icon--list__Kuvuw {\n  height: 18px;\n  margin: 2px;\n  text-align: left;\n  display: flex;\n  align-items: center; }\n  .icon--list_icon__g8Zr8.icon--list_icon--list__Kuvuw .icon--list_icon__icon__2JlVX {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    margin-right: 2px; }\n  .icon--list_icon__g8Zr8.icon--list_icon--list__Kuvuw .icon--list_icon__text__AAJCz {\n    position: relative;\n    padding: 2px;\n    display: inline-block;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: calc(100% - 20px);\n    padding-bottom: 3px; }\n  .icon--list_icon__g8Zr8.icon--list_icon--list__Kuvuw:focus .icon--list_icon__text__AAJCz, .icon--list_icon__g8Zr8.icon--list_icon--list__Kuvuw:active .icon--list_icon__text__AAJCz, .icon--list_icon__g8Zr8.icon--list_icon--list__Kuvuw:active:focus .icon--list_icon__text__AAJCz, .icon--list_icon__g8Zr8.icon--list_icon--list__Kuvuw.icon--list_active__3y-cn .icon--list_icon__text__AAJCz, .icon--list_icon__g8Zr8.icon--list_icon--list__Kuvuw.icon--list_clicked__19FzT .icon--list_icon__text__AAJCz {\n    max-height: initial; }\n";
styleInject(css$c);

var ListIcon = function ListIcon(props) {
  return React.createElement(AbstractIcon, {
    onClick: props.onClick,
    onDoubleClick: props.onDoubleClick,
    alt: props.alt,
    className: classnames('icon--list', props.className),
    icon: props.icon,
    title: props.title,
    value: props.value
  });
};

ListIcon.propTypes = {
  onClick: propTypes.func,
  onDoubleClick: propTypes.func,
  className: propTypes.string,
  icon: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  value: propTypes.any
};

var css$d = "input[type=checkbox], input[type=radio] {\n  opacity: 0;\n  display: none;\n  cursor: pointer; }\n  input[type=checkbox] + label, input[type=radio] + label {\n    position: relative;\n    padding: 1px 0px;\n    padding-left: 16px; }\n    input[type=checkbox] + label > span, input[type=checkbox] + label > div, input[type=radio] + label > span, input[type=radio] + label > div {\n      display: inline-block;\n      border: 1px solid rgba(0, 0, 0, 0); }\n    input[type=checkbox] + label:before, input[type=radio] + label:before {\n      content: '';\n      position: absolute;\n      left: 0px;\n      top: 1px;\n      width: 20px;\n      height: 12px;\n      background-repeat: no-repeat; }\n  input[type=checkbox]:checked + label, input[type=radio]:checked + label {\n    border-bottom-left-radius: 2px;\n    border-bottom-right-radius: 2px; }\n  input[type=checkbox]:checked:active + label > span, input[type=checkbox]:checked:active + label > div, input[type=checkbox]:checked:focus + label > span, input[type=checkbox]:checked:focus + label > div, input[type=checkbox]:checked:active:focus + label > span, input[type=checkbox]:checked:active:focus + label > div, input[type=checkbox]:checked.toggle_active__23e2U + label > span, input[type=checkbox]:checked.toggle_active__23e2U + label > div, input[type=checkbox]:checked.toggle_clicked__YMsVz + label > span, input[type=checkbox]:checked.toggle_clicked__YMsVz + label > div, input[type=radio]:checked:active + label > span, input[type=radio]:checked:active + label > div, input[type=radio]:checked:focus + label > span, input[type=radio]:checked:focus + label > div, input[type=radio]:checked:active:focus + label > span, input[type=radio]:checked:active:focus + label > div, input[type=radio]:checked.toggle_active__23e2U + label > span, input[type=radio]:checked.toggle_active__23e2U + label > div, input[type=radio]:checked.toggle_clicked__YMsVz + label > span, input[type=radio]:checked.toggle_clicked__YMsVz + label > div {\n    border: 1px dotted black; }\n  input[type=checkbox]:disabled + label, input[type=checkbox].toggle_disabled__2TXpg + label, input[type=radio]:disabled + label, input[type=radio].toggle_disabled__2TXpg + label {\n    color: #808088; }\n";
styleInject(css$d);

var css$e = ".checkbox_w98__1vwP5 input[type=checkbox] + label:before {\n  width: 13px;\n  height: 13px;\n  background-color: white;\n  box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n\n.checkbox_w98__1vwP5 input[type=checkbox]:checked + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAcAAAIMlA9nwMj9xGuLIlUAADs=\");\n  background-position: center;\n  background-size: 8px; }\n\n.checkbox_w98__1vwP5 input[type=checkbox]:disabled + label:before, .checkbox_w98__1vwP5 input[type=checkbox].checkbox_disabled__9LXPG + label:before {\n  background-color: #bbc3c4; }\n\n.checkbox_w98__1vwP5 input[type=checkbox]:disabled:checked + label:before, .checkbox_w98__1vwP5 input[type=checkbox].checkbox_disabled__9LXPG:checked + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhBwAHAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAHAAcAAAIMnC9nwsj9xmuLIlUAADs=\"); }\n";
styleInject(css$e);

var css$f = ".radio_w98__3tOjj input[type=radio] + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMqSErTs6uBCVqcIQesBtCaEDAfGAaeeaZqILKqyLQyI4hhTWT3nUEKECQBADs=\"); }\n\n.radio_w98__3tOjj input[type=radio]:checked + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMtSErTs6uBCVqcIQesBtCaEDBfhmWiZ1JooG5skJZwOA6g3QliKC4oXg+iAEESADs=\"); }\n\n.radio_w98__3tOjj input[type=radio]:disabled + label:before, .radio_w98__3tOjj input[type=radio].radio_disabled__10FA9 + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMpSErTs6uBCVqccAY1AFTC1n1LOJKE6aEqmorsxggCRMtEENA3vug6SAIAOw==\"); }\n\n.radio_w98__3tOjj input[type=radio]:disabled:checked + label:before, .radio_w98__3tOjj input[type=radio].radio_disabled__10FA9:checked + label:before {\n  background-image: url(\"data:image/gif;base64,R0lGODlhDAAMAKIAAAAAAP///8zMzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAAAMAAwAAAMtSErTs6uBCVqccAY1AFTC1i0YGIwE5REhqppourLiZ3KCAOWbEgQ5Xg/y+0ESADs=\"); }\n";
styleInject(css$f);

var Checkbox = function Checkbox(props) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement('input', defineProperty({
      type: props.type,
      id: props.id,
      disabled: props.disabled,
      value: props.value,
      checked: props.checked,
      onChange: props.onChange,
      name: props.name
    }, 'disabled', props.disabled)),
    React.createElement(
      'label',
      { htmlFor: props.id },
      React.createElement(
        'span',
        null,
        props.label
      )
    )
  );
};

var css$g = "input[type=text] {\n  position: relative;\n  padding: 3px 3px 6px 3px;\n  font-size: 10px;\n  border: none;\n  box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n  input[type=text]:active, input[type=text]:focus, input[type=text]:active:focus, input[type=text].input_clicked__2-hW6 {\n    outline: none; }\n  input[type=text]:disabled, input[type=text].input_disabled__rXnc5 {\n    background-color: #bbc3c4; }\n";
styleInject(css$g);

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
      value: _this.props.value
    }, _this.handleChange = function (e) {
      _this.setState({
        value: e.target.value
      });

      _this.props.onChange(e.target.value);
    }, _this.handleBlur = function () {
      _this.props.onBlur(_this.state.value);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(InputText, [{
    key: 'render',
    value: function render() {
      return React.createElement('input', {
        type: 'text',
        className: this.props.className,
        value: this.state.value,
        id: this.props.id,
        name: this.props.id,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onKeyDown: this.props.onKeyDown,
        onFocus: this.props.onFocus,
        disabled: this.props.disabled
      });
    }
  }]);
  return InputText;
}(Component);

InputText.defaultProps = {
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};


InputText.propTypes = {
  className: propTypes.string,
  disabled: propTypes.bool,
  value: propTypes.string,
  id: propTypes.string,
  onBlur: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  onKeyDown: propTypes.func.isRequired,
  onFocus: propTypes.func.isRequired
};

var AutosizeInput_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(React.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;
});

var AutosizeInput = unwrapExports(AutosizeInput_1);

var arrowRenderer = function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return React.createElement('span', {
		className: 'Select-arrow',
		onMouseDown: onMouseDown
	});
};

arrowRenderer.propTypes = {
	onMouseDown: propTypes.func
};

var clearRenderer = function clearRenderer() {
	return React.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
};

var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
};

var trim = function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var isValid = function isValid(value) {
	return typeof value !== 'undefined' && value !== null && value !== '';
};

var filterOptions = function filterOptions(options, filterValue, excludeOptions, props) {
	if (props.ignoreAccents) {
		filterValue = stripDiacritics(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (props.trimFilter) {
		filterValue = trim(filterValue);
	}

	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
		return i[props.valueKey];
	});

	return options.filter(function (option) {
		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
		if (props.filterOption) return props.filterOption.call(undefined, option, filterValue);
		if (!filterValue) return true;

		var value = option[props.valueKey];
		var label = option[props.labelKey];
		var hasValue = isValid(value);
		var hasLabel = isValid(label);

		if (!hasValue && !hasLabel) {
			return false;
		}

		var valueTest = hasValue ? String(value) : null;
		var labelTest = hasLabel ? String(label) : null;

		if (props.ignoreAccents) {
			if (valueTest && props.matchProp !== 'label') valueTest = stripDiacritics(valueTest);
			if (labelTest && props.matchProp !== 'value') labelTest = stripDiacritics(labelTest);
		}

		if (props.ignoreCase) {
			if (valueTest && props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (labelTest && props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}

		return props.matchPos === 'start' ? valueTest && props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || labelTest && props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : valueTest && props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || labelTest && props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
};

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
	    optionRenderer = _ref.optionRenderer,
	    options = _ref.options,
	    removeValue = _ref.removeValue,
	    selectValue = _ref.selectValue,
	    valueArray = _ref.valueArray,
	    valueKey = _ref.valueKey;

	var Option = optionComponent;

	return options.map(function (option, i) {
		var isSelected = valueArray && valueArray.some(function (x) {
			return x[valueKey] === option[valueKey];
		});
		var isFocused = option === focusedOption;
		var optionClass = classnames(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return React.createElement(
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
				selectValue: selectValue
			},
			optionRenderer(option, i, inputValue)
		);
	});
};

menuRenderer.propTypes = {
	focusOption: propTypes.func,
	focusedOption: propTypes.object,
	inputValue: propTypes.string,
	instancePrefix: propTypes.string,
	onFocus: propTypes.func,
	onOptionRef: propTypes.func,
	onSelect: propTypes.func,
	optionClassName: propTypes.string,
	optionComponent: propTypes.func,
	optionRenderer: propTypes.func,
	options: propTypes.array,
	removeValue: propTypes.func,
	selectValue: propTypes.func,
	valueArray: propTypes.array,
	valueKey: propTypes.string
};

var blockEvent = (function (event) {
	event.preventDefault();
	event.stopPropagation();
	if (event.target.tagName !== 'A' || !('href' in event.target)) {
		return;
	}
	if (event.target.target) {
		window.open(event.target.href, event.target.target);
	} else {
		window.location.href = event.target.href;
	}
});

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
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





var defineProperty$1 = function (obj, key, value) {
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
};

var _extends$1 = Object.assign || function (target) {
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



var inherits$1 = function (subClass, superClass) {
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









var objectWithoutProperties$1 = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn$1 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Option = function (_React$Component) {
	inherits$1(Option, _React$Component);

	function Option(props) {
		classCallCheck$1(this, Option);

		var _this = possibleConstructorReturn$1(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		return _this;
	}

	createClass$1(Option, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'onFocus',
		value: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    option = _props.option,
			    instancePrefix = _props.instancePrefix,
			    optionIndex = _props.optionIndex;

			var className = classnames(this.props.className, option.className);

			return option.disabled ? React.createElement(
				'div',
				{ className: className,
					onMouseDown: blockEvent,
					onClick: blockEvent },
				this.props.children
			) : React.createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					'aria-label': option.label,
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	}]);
	return Option;
}(React.Component);

Option.propTypes = {
	children: propTypes.node,
	className: propTypes.string, // className (based on mouse position)
	instancePrefix: propTypes.string.isRequired, // unique prefix for the ids (used for aria)
	isDisabled: propTypes.bool, // the option is disabled
	isFocused: propTypes.bool, // the option is focused
	isSelected: propTypes.bool, // the option is selected
	onFocus: propTypes.func, // method to handle mouseEnter on option element
	onSelect: propTypes.func, // method to handle click on option element
	onUnfocus: propTypes.func, // method to handle mouseLeave on option element
	option: propTypes.object.isRequired, // object that is base for that option
	optionIndex: propTypes.number // index of the option, used to generate unique ids for aria
};

var Value = function (_React$Component) {
	inherits$1(Value, _React$Component);

	function Value(props) {
		classCallCheck$1(this, Value);

		var _this = possibleConstructorReturn$1(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		return _this;
	}

	createClass$1(Value, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		}
	}, {
		key: 'onRemove',
		value: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		}
	}, {
		key: 'handleTouchEndRemove',
		value: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.onRemove(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'renderRemoveIcon',
		value: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return React.createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'\xD7'
			);
		}
	}, {
		key: 'renderLabel',
		value: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? React.createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : React.createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: classnames('Select-value', this.props.value.disabled ? 'Select-value-disabled' : '', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	}]);
	return Value;
}(React.Component);

Value.propTypes = {
	children: propTypes.node,
	disabled: propTypes.bool, // disabled prop passed to ReactSelect
	id: propTypes.string, // Unique id for the value - used for aria
	onClick: propTypes.func, // method to handle click on value label
	onRemove: propTypes.func, // method to handle removal of the value
	value: propTypes.object.isRequired // the option object for this value
};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/react-select
*/
var stringifyValue = function stringifyValue(value) {
	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = propTypes.oneOfType([propTypes.string, propTypes.node]);
var stringOrNumber = propTypes.oneOfType([propTypes.string, propTypes.number]);

var instanceId = 1;

var shouldShowValue = function shouldShowValue(state, props) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	if (!inputValue) return true;

	if (!onSelectResetsInput) {
		return !(!isFocused && isPseudoFocused || isFocused && !isPseudoFocused);
	}

	return false;
};

var shouldShowPlaceholder = function shouldShowPlaceholder(state, props, isOpen) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	return !inputValue || !onSelectResetsInput && !isOpen && !isPseudoFocused && !isFocused;
};

/**
 * Retrieve a value from the given options and valueKey
 * @param {String|Number|Array} value	- the selected value(s)
 * @param {Object}		 props	- the Select component's props (or nextProps)
 */
var expandValue = function expandValue(value, props) {
	var valueType = typeof value === 'undefined' ? 'undefined' : _typeof$1(value);
	if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
	var options = props.options,
	    valueKey = props.valueKey;

	if (!options) return;
	for (var i = 0; i < options.length; i++) {
		if (String(options[i][valueKey]) === String(value)) return options[i];
	}
};

var handleRequired = function handleRequired(value, multi) {
	if (!value) return true;
	return multi ? value.length === 0 : Object.keys(value).length === 0;
};

var Select$1 = function (_React$Component) {
	inherits$1(Select, _React$Component);

	function Select(props) {
		classCallCheck$1(this, Select);

		var _this = possibleConstructorReturn$1(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

		['clearValue', 'focusOption', 'getOptionLabel', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleTouchMove', 'handleTouchOutside', 'handleTouchStart', 'handleValueClick', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
			return _this[fn] = _this[fn].bind(_this);
		});

		_this.state = {
			inputValue: '',
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false,
			required: false
		};
		return _this;
	}

	createClass$1(Select, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);

			if (this.props.required) {
				this.setState({
					required: handleRequired(valueArray[0], this.props.multi)
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (typeof this.props.autofocus !== 'undefined' && typeof console !== 'undefined') {
				console.warn('Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0');
			}
			if (this.props.autoFocus || this.props.autofocus) {
				this.focus();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);

			if (nextProps.required) {
				this.setState({
					required: handleRequired(valueArray[0], nextProps.multi)
				});
			} else if (this.props.required) {
				// Used to be required but it's not any more
				this.setState({ required: false });
			}

			if (this.state.inputValue && this.props.value !== nextProps.value && nextProps.onSelectResetsInput) {
				this.setState({ inputValue: this.handleInputValueChange('') });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = findDOMNode(this.focused);
				var menuNode = findDOMNode(this.menu);

				var scrollTop = menuNode.scrollTop;
				var scrollBottom = scrollTop + menuNode.offsetHeight;
				var optionTop = focusedOptionNode.offsetTop;
				var optionBottom = optionTop + focusedOptionNode.offsetHeight;

				if (scrollTop > optionTop || scrollBottom < optionBottom) {
					menuNode.scrollTop = focusedOptionNode.offsetTop;
				}

				// We still set hasScrolledToOption to true even if we didn't
				// actually need to scroll, as we've still confirmed that the
				// option is in view.
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}

			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = findDOMNode(this.focused);
				var menuDOM = findDOMNode(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				} else if (focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
			if (prevState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(this.state.isOpen);
				var handler = this.state.isOpen ? this.props.onOpen : this.props.onClose;
				handler && handler();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.toggleTouchOutsideEvent(false);
		}
	}, {
		key: 'toggleTouchOutsideEvent',
		value: function toggleTouchOutsideEvent(enabled) {
			var eventTogglerName = enabled ? document.addEventListener ? 'addEventListener' : 'attachEvent' : document.removeEventListener ? 'removeEventListener' : 'detachEvent';
			var pref = document.addEventListener ? '' : 'on';

			document[eventTogglerName](pref + 'touchstart', this.handleTouchOutside);
			document[eventTogglerName](pref + 'mousedown', this.handleTouchOutside);
		}
	}, {
		key: 'handleTouchOutside',
		value: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (!this.input) return;
			this.input.focus();
		}
	}, {
		key: 'blurInput',
		value: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchEndClearValue',
		value: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Clear the value
			this.clearValue(event);
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (event.target.tagName === 'INPUT') {
				if (!this.state.isFocused) {
					this._openAfterFocus = this.props.openOnClick;
					this.focus();
				} else if (!this.state.isOpen) {
					this.setState({
						isOpen: true,
						isPseudoFocused: false,
						focusedOption: null
					});
				}

				return;
			}

			// prevent default event handlers
			event.preventDefault();

			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				// This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen,
					focusedOption: null
				});
			}

			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();

				var input = this.input;
				var toOpen = true;

				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}

				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';

				if (this._focusAfterClear) {
					toOpen = false;
					this._focusAfterClear = false;
				}

				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: toOpen,
					isPseudoFocused: false,
					focusedOption: null
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = this.props.openOnClick;
				this.focus();
				this.setState({ focusedOption: null });
			}
		}
	}, {
		key: 'handleMouseDownOnArrow',
		value: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (this.state.isOpen) {
				// prevent default event handlers
				event.stopPropagation();
				event.preventDefault();
				// close the menu
				this.closeMenu();
			} else {
				// If the menu isn't open, let the event bubble to the main handleMouseDown
				this.setState({
					isOpen: true
				});
			}
		}
	}, {
		key: 'handleMouseDownOnMenu',
		value: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.stopPropagation();
			event.preventDefault();

			this._openAfterFocus = true;
			this.focus();
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					inputValue: this.handleInputValueChange(''),
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			}
			this.hasScrolledToOption = false;
		}
	}, {
		key: 'handleInputFocus',
		value: function handleInputFocus(event) {
			if (this.props.disabled) return;

			var toOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			toOpen = this._focusAfterClear ? false : toOpen; //if focus happens after clear values, don't open dropdown yet.

			if (this.props.onFocus) {
				this.props.onFocus(event);
			}

			this.setState({
				isFocused: true,
				isOpen: !!toOpen
			});

			this._focusAfterClear = false;
			this._openAfterFocus = false;
		}
	}, {
		key: 'handleInputBlur',
		value: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = this.handleInputValueChange('');
			}
			this.setState(onBlurredState);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var newInputValue = event.target.value;

			if (this.state.inputValue !== event.target.value) {
				newInputValue = this.handleInputValueChange(newInputValue);
			}

			this.setState({
				inputValue: newInputValue,
				isOpen: true,
				isPseudoFocused: false
			});
		}
	}, {
		key: 'setInputValue',
		value: function setInputValue(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof$1(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			this.setState({
				inputValue: newValue
			});
		}
	}, {
		key: 'handleInputValueChange',
		value: function handleInputValueChange(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof$1(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			return newValue;
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (this.props.disabled) return;

			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}

			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						break;
					}
					event.preventDefault();
					this.selectFocusedOption();
					break;
				case 13:
					// enter
					event.preventDefault();
					event.stopPropagation();
					if (this.state.isOpen) {
						this.selectFocusedOption();
					} else {
						this.focusNextOption();
					}
					break;
				case 27:
					// escape
					event.preventDefault();
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 32:
					// space
					if (this.props.searchable) {
						break;
					}
					event.preventDefault();
					if (!this.state.isOpen) {
						this.focusNextOption();
						break;
					}
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 38:
					// up
					event.preventDefault();
					this.focusPreviousOption();
					break;
				case 40:
					// down
					event.preventDefault();
					this.focusNextOption();
					break;
				case 33:
					// page up
					event.preventDefault();
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					event.preventDefault();
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusStartOption();
					break;
				case 46:
					// delete
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
			}
		}
	}, {
		key: 'handleValueClick',
		value: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		}
	}, {
		key: 'handleMenuScroll',
		value: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;

			if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
				this.props.onMenuScrollToBottom();
			}
		}
	}, {
		key: 'getOptionLabel',
		value: function getOptionLabel(op) {
			return op[this.props.labelKey];
		}

		/**
   * Turns a value into an array from the given options
   * @param {String|Number|Array} value		- the value of the select input
   * @param {Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
   * @returns	{Array}	the value of the select represented in an array
   */

	}, {
		key: 'getValueArray',
		value: function getValueArray(value) {
			var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof$1(nextProps)) === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') {
					value = value.split(props.delimiter);
				}
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this2 = this;

			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (this.props.required) {
				var required = handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.simpleValue && value) {
				value = this.props.multi ? value.map(function (i) {
					return i[_this2.props.valueKey];
				}).join(this.props.delimiter) : value[this.props.valueKey];
			}
			if (this.props.onChange) {
				this.props.onChange(value);
			}
		}
	}, {
		key: 'selectValue',
		value: function selectValue(value) {
			var _this3 = this;

			// NOTE: we actually add/set the value in a callback to make sure the
			// input value is empty to avoid styling issues in Chrome
			if (this.props.closeOnSelect) {
				this.hasScrolledToOption = false;
			}
			var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
			if (this.props.multi) {
				this.setState({
					focusedIndex: null,
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect
				}, function () {
					var valueArray = _this3.getValueArray(_this3.props.value);
					if (valueArray.some(function (i) {
						return i[_this3.props.valueKey] === value[_this3.props.valueKey];
					})) {
						_this3.removeValue(value);
					} else {
						_this3.addValue(value);
					}
				});
			} else {
				this.setState({
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect,
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this3.setValue(value);
				});
			}
		}
	}, {
		key: 'addValue',
		value: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (!this.props.closeOnSelect) {
				return;
			}
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		}
	}, {
		key: 'popValue',
		value: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
		}
	}, {
		key: 'removeValue',
		value: function removeValue(value) {
			var _this4 = this;

			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i[_this4.props.valueKey] !== value[_this4.props.valueKey];
			}));
			this.focus();
		}
	}, {
		key: 'clearValue',
		value: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.preventDefault();

			this.setValue(this.getResetValue());
			this.setState({
				inputValue: this.handleInputValueChange(''),
				isOpen: false
			}, this.focus);

			this._focusAfterClear = true;
		}
	}, {
		key: 'getResetValue',
		value: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		}
	}, {
		key: 'focusOption',
		value: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		}
	}, {
		key: 'focusNextOption',
		value: function focusNextOption() {
			this.focusAdjacentOption('next');
		}
	}, {
		key: 'focusPreviousOption',
		value: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		}
	}, {
		key: 'focusPageUpOption',
		value: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		}
	}, {
		key: 'focusPageDownOption',
		value: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		}
	}, {
		key: 'focusStartOption',
		value: function focusStartOption() {
			this.focusAdjacentOption('start');
		}
	}, {
		key: 'focusEndOption',
		value: function focusEndOption() {
			this.focusAdjacentOption('end');
		}
	}, {
		key: 'focusAdjacentOption',
		value: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				var newState = {
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null),
					isOpen: true
				};
				if (this.props.onSelectResetsInput) {
					newState.inputValue = '';
				}
				this.setState(newState);
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var _potentialIndex = focusedIndex + this.props.pageSize;
				if (_potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = _potentialIndex;
				}
			}

			if (focusedIndex === -1) {
				focusedIndex = 0;
			}

			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		}
	}, {
		key: 'getFocusedOption',
		value: function getFocusedOption() {
			return this._focusedOption;
		}
	}, {
		key: 'selectFocusedOption',
		value: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		}
	}, {
		key: 'renderLoading',
		value: function renderLoading() {
			if (!this.props.isLoading) return;
			return React.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				React.createElement('span', { className: 'Select-loading' })
			);
		}
	}, {
		key: 'renderValue',
		value: function renderValue(valueArray, isOpen) {
			var _this5 = this;

			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				var showPlaceholder = shouldShowPlaceholder(this.state, this.props, isOpen);
				return showPlaceholder ? React.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return React.createElement(
						ValueComponent,
						{
							disabled: _this5.props.disabled || value.clearableValue === false,
							id: _this5._instancePrefix + '-value-' + i,
							instancePrefix: _this5._instancePrefix,
							key: 'value-' + i + '-' + value[_this5.props.valueKey],
							onClick: onClick,
							onRemove: _this5.removeValue,
							placeholder: _this5.props.placeholder,
							value: value,
							values: valueArray
						},
						renderLabel(value, i),
						React.createElement(
							'span',
							{ className: 'Select-aria-only' },
							'\xA0'
						)
					);
				});
			} else if (shouldShowValue(this.state, this.props)) {
				if (isOpen) onClick = null;
				return React.createElement(
					ValueComponent,
					{
						disabled: this.props.disabled,
						id: this._instancePrefix + '-value-item',
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						placeholder: this.props.placeholder,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		}
	}, {
		key: 'renderInput',
		value: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this6 = this;

			var className = classnames('Select-input', this.props.inputProps.className);
			var isOpen = this.state.isOpen;

			var ariaOwns = classnames((_classNames = {}, defineProperty$1(_classNames, this._instancePrefix + '-list', isOpen), defineProperty$1(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

			var value = this.state.inputValue;
			if (value && !this.props.onSelectResetsInput && !this.state.isFocused) {
				// it hides input value when it is not focused and was not reset on select
				value = '';
			}

			var inputProps = _extends$1({}, this.props.inputProps, {
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-describedby': this.props['aria-describedby'],
				'aria-expanded': '' + isOpen,
				'aria-haspopup': '' + isOpen,
				'aria-label': this.props['aria-label'],
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-owns': ariaOwns,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this6.input = _ref;
				},
				role: 'combobox',
				required: this.state.required,
				tabIndex: this.props.tabIndex,
				value: value
			});

			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}

			if (this.props.disabled || !this.props.searchable) {
				var divProps = objectWithoutProperties$1(this.props.inputProps, []);


				var _ariaOwns = classnames(defineProperty$1({}, this._instancePrefix + '-list', isOpen));
				return React.createElement('div', _extends$1({}, divProps, {
					'aria-expanded': isOpen,
					'aria-owns': _ariaOwns,
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					'aria-disabled': '' + this.props.disabled,
					'aria-label': this.props['aria-label'],
					'aria-labelledby': this.props['aria-labelledby'],
					className: className,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function ref(_ref2) {
						return _this6.input = _ref2;
					},
					role: 'combobox',
					style: { border: 0, width: 1, display: 'inline-block' },
					tabIndex: this.props.tabIndex || 0
				}));
			}

			if (this.props.autosize) {
				return React.createElement(AutosizeInput, _extends$1({ id: this.props.id }, inputProps, { className: className, minWidth: '5' }));
			}
			return React.createElement(
				'div',
				{ className: className, key: 'input-wrap', style: { display: 'inline-block' } },
				React.createElement('input', _extends$1({ id: this.props.id }, inputProps))
			);
		}
	}, {
		key: 'renderClear',
		value: function renderClear() {
			var valueArray = this.getValueArray(this.props.value);
			if (!this.props.clearable || !valueArray.length || this.props.disabled || this.props.isLoading) return;
			var ariaLabel = this.props.multi ? this.props.clearAllText : this.props.clearValueText;
			var clear = this.props.clearRenderer();

			return React.createElement(
				'span',
				{
					'aria-label': ariaLabel,
					className: 'Select-clear-zone',
					onMouseDown: this.clearValue,
					onTouchEnd: this.handleTouchEndClearValue,
					onTouchMove: this.handleTouchMove,
					onTouchStart: this.handleTouchStart,
					title: ariaLabel
				},
				clear
			);
		}
	}, {
		key: 'renderArrow',
		value: function renderArrow() {
			if (!this.props.arrowRenderer) return;

			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

			if (!arrow) {
				return null;
			}

			return React.createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions$$1 = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : filterOptions;

				return filterOptions$$1(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					trimFilter: this.props.trimFilter,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		}
	}, {
		key: 'onOptionRef',
		value: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		}
	}, {
		key: 'renderMenu',
		value: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					inputValue: this.state.inputValue,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onOptionRef: this.onOptionRef,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					removeValue: this.removeValue,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey
				});
			} else if (this.props.noResultsText) {
				return React.createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		}
	}, {
		key: 'renderHiddenField',
		value: function renderHiddenField(valueArray) {
			var _this7 = this;

			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this7.props.valueKey]);
				}).join(this.props.delimiter);
				return React.createElement('input', {
					disabled: this.props.disabled,
					name: this.props.name,
					ref: function ref(_ref3) {
						return _this7.value = _ref3;
					},
					type: 'hidden',
					value: value
				});
			}
			return valueArray.map(function (item, index) {
				return React.createElement('input', {
					disabled: _this7.props.disabled,
					key: 'hidden.' + index,
					name: _this7.props.name,
					ref: 'value' + index,
					type: 'hidden',
					value: stringifyValue(item[_this7.props.valueKey])
				});
			});
		}
	}, {
		key: 'getFocusableOptionIndex',
		value: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;

			var valueKey = this.props.valueKey;
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = -1;
				options.some(function (option, index) {
					var isOptionEqual = option[valueKey] === focusedOption[valueKey];
					if (isOptionEqual) {
						focusedOptionIndex = index;
					}
					return isOptionEqual;
				});
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}

			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		}
	}, {
		key: 'renderOuter',
		value: function renderOuter(options, valueArray, focusedOption) {
			var _this8 = this;

			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}

			return React.createElement(
				'div',
				{ ref: function ref(_ref5) {
						return _this8.menuContainer = _ref5;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				React.createElement(
					'div',
					{
						className: 'Select-menu',
						id: this._instancePrefix + '-list',
						onMouseDown: this.handleMouseDownOnMenu,
						onScroll: this.handleMenuScroll,
						ref: function ref(_ref4) {
							return _this8.menu = _ref4;
						},
						role: 'listbox',
						style: this.props.menuStyle,
						tabIndex: -1
					},
					menu
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this9 = this;

			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = classnames('Select', this.props.className, {
				'has-value': valueArray.length,
				'is-clearable': this.props.clearable,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'Select--multi': this.props.multi,
				'Select--rtl': this.props.rtl,
				'Select--single': !this.props.multi
			});

			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = React.createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}

			return React.createElement(
				'div',
				{ ref: function ref(_ref7) {
						return _this9.wrapper = _ref7;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				React.createElement(
					'div',
					{ ref: function ref(_ref6) {
							return _this9.control = _ref6;
						},
						className: 'Select-control',
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchMove: this.handleTouchMove,
						onTouchStart: this.handleTouchStart,
						style: this.props.style
					},
					React.createElement(
						'div',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, valueArray, focusedOption) : null
			);
		}
	}]);
	return Select;
}(React.Component);

Select$1.propTypes = {
	'aria-describedby': propTypes.string, // html id(s) of element(s) that should be used to describe this input (for assistive tech)
	'aria-label': propTypes.string, // aria label (for assistive tech)
	'aria-labelledby': propTypes.string, // html id of an element that should be used as the label (for assistive tech)
	arrowRenderer: propTypes.func, // create the drop-down caret element
	autoBlur: propTypes.bool, // automatically blur the component when an option is selected
	autoFocus: propTypes.bool, // autofocus the component on mount
	autofocus: propTypes.bool, // deprecated; use autoFocus instead
	autosize: propTypes.bool, // whether to enable autosizing or not
	backspaceRemoves: propTypes.bool, // whether backspace removes an item if there is no text input
	backspaceToRemoveMessage: propTypes.string, // message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
	className: propTypes.string, // className for the outer element
	clearAllText: stringOrNode, // title for the "clear" control when multi: true
	clearRenderer: propTypes.func, // create clearable x element
	clearValueText: stringOrNode, // title for the "clear" control
	clearable: propTypes.bool, // should it be possible to reset value
	closeOnSelect: propTypes.bool, // whether to close the menu when a value is selected
	deleteRemoves: propTypes.bool, // whether delete removes an item if there is no text input
	delimiter: propTypes.string, // delimiter to use to join multiple values for the hidden field value
	disabled: propTypes.bool, // whether the Select is disabled or not
	escapeClearsValue: propTypes.bool, // whether escape clears the value when the menu is closed
	filterOption: propTypes.func, // method to filter a single option (option, filterString)
	filterOptions: propTypes.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	id: propTypes.string, // html id to set on the input element for accessibility or tests
	ignoreAccents: propTypes.bool, // whether to strip diacritics when filtering
	ignoreCase: propTypes.bool, // whether to perform case-insensitive filtering
	inputProps: propTypes.object, // custom attributes for the Input
	inputRenderer: propTypes.func, // returns a custom input component
	instanceId: propTypes.string, // set the components instanceId
	isLoading: propTypes.bool, // whether the Select is loading externally or not (such as options being loaded)
	joinValues: propTypes.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
	labelKey: propTypes.string, // path of the label value in option objects
	matchPos: propTypes.string, // (any|start) match the start or entire string when filtering
	matchProp: propTypes.string, // (any|label|value) which option property to filter on
	menuBuffer: propTypes.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	menuContainerStyle: propTypes.object, // optional style to apply to the menu container
	menuRenderer: propTypes.func, // renders a custom menu with options
	menuStyle: propTypes.object, // optional style to apply to the menu
	multi: propTypes.bool, // multi-value input
	name: propTypes.string, // generates a hidden <input /> tag with this field name for html forms
	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
	onBlur: propTypes.func, // onBlur handler: function (event) {}
	onBlurResetsInput: propTypes.bool, // whether input is cleared on blur
	onChange: propTypes.func, // onChange handler: function (newValue) {}
	onClose: propTypes.func, // fires when the menu is closed
	onCloseResetsInput: propTypes.bool, // whether input is cleared when menu is closed through the arrow
	onFocus: propTypes.func, // onFocus handler: function (event) {}
	onInputChange: propTypes.func, // onInputChange handler: function (inputValue) {}
	onInputKeyDown: propTypes.func, // input keyDown handler: function (event) {}
	onMenuScrollToBottom: propTypes.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	onOpen: propTypes.func, // fires when the menu is opened
	onSelectResetsInput: propTypes.bool, // whether input is cleared on select (works only for multiselect)
	onValueClick: propTypes.func, // onClick handler for value labels: function (value, event) {}
	openOnClick: propTypes.bool, // boolean to control opening the menu when the control is clicked
	openOnFocus: propTypes.bool, // always open options menu on focus
	optionClassName: propTypes.string, // additional class(es) to apply to the <Option /> elements
	optionComponent: propTypes.func, // option component to render in dropdown
	optionRenderer: propTypes.func, // optionRenderer: function (option) {}
	options: propTypes.array, // array of options
	pageSize: propTypes.number, // number of entries to page when using page up/down keys
	placeholder: stringOrNode, // field placeholder, displayed when there's no value
	removeSelected: propTypes.bool, // whether the selected option is removed from the dropdown on multi selects
	required: propTypes.bool, // applies HTML5 required attribute when needed
	resetValue: propTypes.any, // value to use when you clear the control
	rtl: propTypes.bool, // set to true in order to use react-select in right-to-left direction
	scrollMenuIntoView: propTypes.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	searchable: propTypes.bool, // whether to enable searching feature or not
	simpleValue: propTypes.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	style: propTypes.object, // optional style to apply to the control
	tabIndex: stringOrNumber, // optional tab index of the control
	tabSelectsValue: propTypes.bool, // whether to treat tabbing out while focused to be value selection
	trimFilter: propTypes.bool, // whether to trim whitespace around filter value
	value: propTypes.any, // initial field value
	valueComponent: propTypes.func, // value component to render
	valueKey: propTypes.string, // path of the label value in option objects
	valueRenderer: propTypes.func, // valueRenderer: function (option) {}
	wrapperStyle: propTypes.object // optional style to apply to the component wrapper
};

Select$1.defaultProps = {
	arrowRenderer: arrowRenderer,
	autosize: true,
	backspaceRemoves: true,
	backspaceToRemoveMessage: 'Press backspace to remove {label}',
	clearable: true,
	clearAllText: 'Clear all',
	clearRenderer: clearRenderer,
	clearValueText: 'Clear value',
	closeOnSelect: true,
	deleteRemoves: true,
	delimiter: ',',
	disabled: false,
	escapeClearsValue: true,
	filterOptions: filterOptions,
	ignoreAccents: true,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	joinValues: false,
	labelKey: 'label',
	matchPos: 'any',
	matchProp: 'any',
	menuBuffer: 0,
	menuRenderer: menuRenderer,
	multi: false,
	noResultsText: 'No results found',
	onBlurResetsInput: true,
	onCloseResetsInput: true,
	onSelectResetsInput: true,
	openOnClick: true,
	optionComponent: Option,
	pageSize: 5,
	placeholder: 'Select...',
	removeSelected: true,
	required: false,
	rtl: false,
	scrollMenuIntoView: true,
	searchable: true,
	simpleValue: false,
	tabSelectsValue: true,
	trimFilter: true,
	valueComponent: Value,
	valueKey: 'value'
};

var propTypes$1 = {
	autoload: propTypes.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: propTypes.any, // object to use to cache results; set to null/false to disable caching
	children: propTypes.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: propTypes.bool, // strip diacritics when filtering; defaults to true
	ignoreCase: propTypes.bool, // perform case-insensitive filtering; defaults to true
	loadOptions: propTypes.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	loadingPlaceholder: propTypes.oneOfType([// replaces the placeholder while options are loading
	propTypes.string, propTypes.node]),
	multi: propTypes.bool, // multi-value input
	noResultsText: propTypes.oneOfType([// field noResultsText, displayed when no options come back from the server
	propTypes.string, propTypes.node]),
	onChange: propTypes.func, // onChange handler: function (newValue) {}
	onInputChange: propTypes.func, // optional for keeping track of what is being typed
	options: propTypes.array.isRequired, // array of options
	placeholder: propTypes.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	propTypes.string, propTypes.node]),
	searchPromptText: propTypes.oneOfType([// label to prompt for search input
	propTypes.string, propTypes.node]),
	value: propTypes.any // initial field value
};

var defaultCache = {};

var defaultChildren = function defaultChildren(props) {
	return React.createElement(Select$1, props);
};

var defaultProps = {
	autoload: true,
	cache: defaultCache,
	children: defaultChildren,
	ignoreAccents: true,
	ignoreCase: true,
	loadingPlaceholder: 'Loading...',
	options: [],
	searchPromptText: 'Type to search'
};

var Async = function (_Component) {
	inherits$1(Async, _Component);

	function Async(props, context) {
		classCallCheck$1(this, Async);

		var _this = possibleConstructorReturn$1(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

		_this._cache = props.cache === defaultCache ? {} : props.cache;

		_this.state = {
			inputValue: '',
			isLoading: false,
			options: props.options
		};

		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	createClass$1(Async, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var autoload = this.props.autoload;


			if (autoload) {
				this.loadOptions('');
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options !== this.props.options) {
				this.setState({
					options: nextProps.options
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._callback = null;
		}
	}, {
		key: 'loadOptions',
		value: function loadOptions(inputValue) {
			var _this2 = this;

			var loadOptions = this.props.loadOptions;

			var cache = this._cache;

			if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
				this._callback = null;

				this.setState({
					isLoading: false,
					options: cache[inputValue]
				});

				return;
			}

			var callback = function callback(error, data) {
				var options = data && data.options || [];

				if (cache) {
					cache[inputValue] = options;
				}

				if (callback === _this2._callback) {
					_this2._callback = null;

					_this2.setState({
						isLoading: false,
						options: options
					});
				}
			};

			// Ignore all but the most recent request
			this._callback = callback;

			var promise = loadOptions(inputValue, callback);
			if (promise) {
				promise.then(function (data) {
					return callback(null, data);
				}, function (error) {
					return callback(error);
				});
			}

			if (this._callback && !this.state.isLoading) {
				this.setState({
					isLoading: true
				});
			}
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(inputValue) {
			var _props = this.props,
			    ignoreAccents = _props.ignoreAccents,
			    ignoreCase = _props.ignoreCase,
			    onInputChange = _props.onInputChange;

			var newInputValue = inputValue;

			if (onInputChange) {
				var value = onInputChange(newInputValue);
				// Note: != used deliberately here to catch undefined and null
				if (value != null && (typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) !== 'object') {
					newInputValue = '' + value;
				}
			}

			var transformedInputValue = newInputValue;

			if (ignoreAccents) {
				transformedInputValue = stripDiacritics(transformedInputValue);
			}

			if (ignoreCase) {
				transformedInputValue = transformedInputValue.toLowerCase();
			}

			this.setState({ inputValue: newInputValue });
			this.loadOptions(transformedInputValue);

			// Return new input value, but without applying toLowerCase() to avoid modifying the user's view case of the input while typing.
			return newInputValue;
		}
	}, {
		key: 'noResultsText',
		value: function noResultsText() {
			var _props2 = this.props,
			    loadingPlaceholder = _props2.loadingPlaceholder,
			    noResultsText = _props2.noResultsText,
			    searchPromptText = _props2.searchPromptText;
			var _state = this.state,
			    inputValue = _state.inputValue,
			    isLoading = _state.isLoading;


			if (isLoading) {
				return loadingPlaceholder;
			}
			if (inputValue && noResultsText) {
				return noResultsText;
			}
			return searchPromptText;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props,
			    children = _props3.children,
			    loadingPlaceholder = _props3.loadingPlaceholder,
			    placeholder = _props3.placeholder;
			var _state2 = this.state,
			    isLoading = _state2.isLoading,
			    options = _state2.options;


			var props = {
				noResultsText: this.noResultsText(),
				placeholder: isLoading ? loadingPlaceholder : placeholder,
				options: isLoading && loadingPlaceholder ? [] : options,
				ref: function ref(_ref) {
					return _this3.select = _ref;
				}
			};

			return children(_extends$1({}, this.props, props, {
				isLoading: isLoading,
				onInputChange: this.onInputChange
			}));
		}
	}]);
	return Async;
}(Component);

Async.propTypes = propTypes$1;
Async.defaultProps = defaultProps;

var CreatableSelect = function (_React$Component) {
	inherits$1(CreatableSelect, _React$Component);

	function CreatableSelect(props, context) {
		classCallCheck$1(this, CreatableSelect);

		var _this = possibleConstructorReturn$1(this, (CreatableSelect.__proto__ || Object.getPrototypeOf(CreatableSelect)).call(this, props, context));

		_this.filterOptions = _this.filterOptions.bind(_this);
		_this.menuRenderer = _this.menuRenderer.bind(_this);
		_this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
		_this.onInputChange = _this.onInputChange.bind(_this);
		_this.onOptionSelect = _this.onOptionSelect.bind(_this);
		return _this;
	}

	createClass$1(CreatableSelect, [{
		key: 'createNewOption',
		value: function createNewOption() {
			var _props = this.props,
			    isValidNewOption = _props.isValidNewOption,
			    newOptionCreator = _props.newOptionCreator,
			    onNewOptionClick = _props.onNewOptionClick,
			    _props$options = _props.options,
			    options = _props$options === undefined ? [] : _props$options;


			if (isValidNewOption({ label: this.inputValue })) {
				var option = newOptionCreator({ label: this.inputValue, labelKey: this.labelKey, valueKey: this.valueKey });
				var _isOptionUnique = this.isOptionUnique({ option: option, options: options });

				// Don't add the same option twice.
				if (_isOptionUnique) {
					if (onNewOptionClick) {
						onNewOptionClick(option);
					} else {
						options.unshift(option);

						this.select.selectValue(option);
					}
				}
			}
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions$$1() {
			var _props2 = this.props,
			    filterOptions$$1 = _props2.filterOptions,
			    isValidNewOption = _props2.isValidNewOption,
			    promptTextCreator = _props2.promptTextCreator,
			    showNewOptionAtTop = _props2.showNewOptionAtTop;

			// TRICKY Check currently selected options as well.
			// Don't display a create-prompt for a value that's selected.
			// This covers async edge-cases where a newly-created Option isn't yet in the async-loaded array.

			var excludeOptions = (arguments.length <= 2 ? undefined : arguments[2]) || [];

			var filteredOptions = filterOptions$$1.apply(undefined, arguments) || [];

			if (isValidNewOption({ label: this.inputValue })) {
				var _newOptionCreator = this.props.newOptionCreator;


				var option = _newOptionCreator({
					label: this.inputValue,
					labelKey: this.labelKey,
					valueKey: this.valueKey
				});

				// TRICKY Compare to all options (not just filtered options) in case option has already been selected).
				// For multi-selects, this would remove it from the filtered list.
				var _isOptionUnique2 = this.isOptionUnique({
					option: option,
					options: excludeOptions.concat(filteredOptions)
				});

				if (_isOptionUnique2) {
					var prompt = promptTextCreator(this.inputValue);

					this._createPlaceholderOption = _newOptionCreator({
						label: prompt,
						labelKey: this.labelKey,
						valueKey: this.valueKey
					});

					if (showNewOptionAtTop) {
						filteredOptions.unshift(this._createPlaceholderOption);
					} else {
						filteredOptions.push(this._createPlaceholderOption);
					}
				}
			}

			return filteredOptions;
		}
	}, {
		key: 'isOptionUnique',
		value: function isOptionUnique(_ref) {
			var option = _ref.option,
			    options = _ref.options;
			var isOptionUnique = this.props.isOptionUnique;


			options = options || this.props.options;

			return isOptionUnique({
				labelKey: this.labelKey,
				option: option,
				options: options,
				valueKey: this.valueKey
			});
		}
	}, {
		key: 'menuRenderer',
		value: function menuRenderer$$1(params) {
			var menuRenderer$$1 = this.props.menuRenderer;


			return menuRenderer$$1(_extends$1({}, params, {
				onSelect: this.onOptionSelect,
				selectValue: this.onOptionSelect
			}));
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(input) {
			var onInputChange = this.props.onInputChange;

			// This value may be needed in between Select mounts (when this.select is null)

			this.inputValue = input;

			if (onInputChange) {
				this.inputValue = onInputChange(input);
			}

			return this.inputValue;
		}
	}, {
		key: 'onInputKeyDown',
		value: function onInputKeyDown(event) {
			var _props3 = this.props,
			    shouldKeyDownEventCreateNewOption = _props3.shouldKeyDownEventCreateNewOption,
			    onInputKeyDown = _props3.onInputKeyDown;

			var focusedOption = this.select.getFocusedOption();

			if (focusedOption && focusedOption === this._createPlaceholderOption && shouldKeyDownEventCreateNewOption(event)) {
				this.createNewOption();

				// Prevent decorated Select from doing anything additional with this keyDown event
				event.preventDefault();
			} else if (onInputKeyDown) {
				onInputKeyDown(event);
			}
		}
	}, {
		key: 'onOptionSelect',
		value: function onOptionSelect(option) {
			if (option === this._createPlaceholderOption) {
				this.createNewOption();
			} else {
				this.select.selectValue(option);
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    refProp = _props4.ref,
			    restProps = objectWithoutProperties$1(_props4, ['ref']);
			var children = this.props.children;

			// We can't use destructuring default values to set the children,
			// because it won't apply work if `children` is null. A falsy check is
			// more reliable in real world use-cases.

			if (!children) {
				children = defaultChildren$2;
			}

			var props = _extends$1({}, restProps, {
				allowCreate: true,
				filterOptions: this.filterOptions,
				menuRenderer: this.menuRenderer,
				onInputChange: this.onInputChange,
				onInputKeyDown: this.onInputKeyDown,
				ref: function ref(_ref2) {
					_this2.select = _ref2;

					// These values may be needed in between Select mounts (when this.select is null)
					if (_ref2) {
						_this2.labelKey = _ref2.props.labelKey;
						_this2.valueKey = _ref2.props.valueKey;
					}
					if (refProp) {
						refProp(_ref2);
					}
				}
			});

			return children(props);
		}
	}]);
	return CreatableSelect;
}(React.Component);

var defaultChildren$2 = function defaultChildren(props) {
	return React.createElement(Select$1, props);
};

var isOptionUnique = function isOptionUnique(_ref3) {
	var option = _ref3.option,
	    options = _ref3.options,
	    labelKey = _ref3.labelKey,
	    valueKey = _ref3.valueKey;

	if (!options || !options.length) {
		return true;
	}

	return options.filter(function (existingOption) {
		return existingOption[labelKey] === option[labelKey] || existingOption[valueKey] === option[valueKey];
	}).length === 0;
};

var isValidNewOption = function isValidNewOption(_ref4) {
	var label = _ref4.label;
	return !!label;
};

var newOptionCreator = function newOptionCreator(_ref5) {
	var label = _ref5.label,
	    labelKey = _ref5.labelKey,
	    valueKey = _ref5.valueKey;

	var option = {};
	option[valueKey] = label;
	option[labelKey] = label;
	option.className = 'Select-create-option-placeholder';

	return option;
};

var promptTextCreator = function promptTextCreator(label) {
	return 'Create option "' + label + '"';
};

var shouldKeyDownEventCreateNewOption = function shouldKeyDownEventCreateNewOption(_ref6) {
	var keyCode = _ref6.keyCode;

	switch (keyCode) {
		case 9: // TAB
		case 13: // ENTER
		case 188:
			// COMMA
			return true;
		default:
			return false;
	}
};

// Default prop methods
CreatableSelect.isOptionUnique = isOptionUnique;
CreatableSelect.isValidNewOption = isValidNewOption;
CreatableSelect.newOptionCreator = newOptionCreator;
CreatableSelect.promptTextCreator = promptTextCreator;
CreatableSelect.shouldKeyDownEventCreateNewOption = shouldKeyDownEventCreateNewOption;

CreatableSelect.defaultProps = {
	filterOptions: filterOptions,
	isOptionUnique: isOptionUnique,
	isValidNewOption: isValidNewOption,
	menuRenderer: menuRenderer,
	newOptionCreator: newOptionCreator,
	promptTextCreator: promptTextCreator,
	shouldKeyDownEventCreateNewOption: shouldKeyDownEventCreateNewOption,
	showNewOptionAtTop: true
};

CreatableSelect.propTypes = {
	// Child function responsible for creating the inner Select component
	// This component can be used to compose HOCs (eg Creatable and Async)
	// (props: Object): PropTypes.element
	children: propTypes.func,

	// See Select.propTypes.filterOptions
	filterOptions: propTypes.any,

	// Searches for any matching option within the set of options.
	// This function prevents duplicate options from being created.
	// ({ option: Object, options: Array, labelKey: string, valueKey: string }): boolean
	isOptionUnique: propTypes.func,

	// Determines if the current input text represents a valid option.
	// ({ label: string }): boolean
	isValidNewOption: propTypes.func,

	// See Select.propTypes.menuRenderer
	menuRenderer: propTypes.any,

	// Factory to create new option.
	// ({ label: string, labelKey: string, valueKey: string }): Object
	newOptionCreator: propTypes.func,

	// input change handler: function (inputValue) {}
	onInputChange: propTypes.func,

	// input keyDown handler: function (event) {}
	onInputKeyDown: propTypes.func,

	// new option click handler: function (option) {}
	onNewOptionClick: propTypes.func,

	// See Select.propTypes.options
	options: propTypes.array,

	// Creates prompt/placeholder option text.
	// (filterText: string): string
	promptTextCreator: propTypes.func,

	ref: propTypes.func,

	// Decides if a keyDown event (eg its `keyCode`) should result in the creation of a new option.
	shouldKeyDownEventCreateNewOption: propTypes.func,

	// Where to show prompt/placeholder option text.
	// true: new option prompt at top of list (default)
	// false: new option prompt at bottom of list
	showNewOptionAtTop: propTypes.bool
};

var AsyncCreatableSelect = function (_React$Component) {
	inherits$1(AsyncCreatableSelect, _React$Component);

	function AsyncCreatableSelect() {
		classCallCheck$1(this, AsyncCreatableSelect);
		return possibleConstructorReturn$1(this, (AsyncCreatableSelect.__proto__ || Object.getPrototypeOf(AsyncCreatableSelect)).apply(this, arguments));
	}

	createClass$1(AsyncCreatableSelect, [{
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				Async,
				this.props,
				function (_ref) {
					var ref = _ref.ref,
					    asyncProps = objectWithoutProperties$1(_ref, ['ref']);

					var asyncRef = ref;
					return React.createElement(
						CreatableSelect,
						asyncProps,
						function (_ref2) {
							var ref = _ref2.ref,
							    creatableProps = objectWithoutProperties$1(_ref2, ['ref']);

							var creatableRef = ref;
							return _this2.props.children(_extends$1({}, creatableProps, {
								ref: function ref(select) {
									creatableRef(select);
									asyncRef(select);
									_this2.select = select;
								}
							}));
						}
					);
				}
			);
		}
	}]);
	return AsyncCreatableSelect;
}(React.Component);

var defaultChildren$1 = function defaultChildren(props) {
	return React.createElement(Select$1, props);
};

AsyncCreatableSelect.propTypes = {
	children: propTypes.func.isRequired // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
};

AsyncCreatableSelect.defaultProps = {
	children: defaultChildren$1
};

Select$1.Async = Async;
Select$1.AsyncCreatable = AsyncCreatableSelect;
Select$1.Creatable = CreatableSelect;
Select$1.Value = Value;
Select$1.Option = Option;

var css$h = "._select_w98__3RVby select[multiple] {\n  position: relative;\n  border: none;\n  background-color: white;\n  border-radius: 0px;\n  outline: none;\n  padding: 2px;\n  box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n  ._select_w98__3RVby select[multiple]:active, ._select_w98__3RVby select[multiple]:focus {\n    outline: none; }\n  ._select_w98__3RVby select[multiple] option:active, ._select_w98__3RVby select[multiple] option:focus, ._select_w98__3RVby select[multiple] option:checked {\n    outline: 1px dotted white;\n    outline-offset: -1px;\n    background-color: #0000a2;\n    color: white; }\n\n._select_w98__3RVby ._select_SelectMultiple__18W0r {\n  display: inline-block;\n  padding: 2px;\n  box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n  ._select_w98__3RVby ._select_SelectMultiple__18W0r > select[multiple] {\n    padding: 0px;\n    box-shadow: none; }\n  ._select_w98__3RVby ._select_SelectMultiple__18W0r ::-webkit-scrollbar {\n    display: none; }\n\n._select_w98__3RVby ._select_Select__50fK8 {\n  position: relative; }\n  ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf {\n    width: 100%; }\n    ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-input__3WQAn, ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-placeholder__1y-_B, ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-value__n99Fu {\n      width: calc(100% - 4px); }\n    ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-input__3WQAn {\n      display: none !important; }\n    ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-value__n99Fu, ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-placeholder__1y-_B {\n      height: 16px;\n      background-color: white;\n      border: none;\n      box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n      padding: 2px; }\n      ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-value__n99Fu ._select_Select-value-label__1xCJl > div, ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-placeholder__1y-_B ._select_Select-value-label__1xCJl > div {\n        margin: 1px;\n        margin-right: 17px;\n        padding-left: 1px;\n        outline: 1px dotted rgba(0, 0, 0, 0); }\n      ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-value__n99Fu:active ._select_Select-value-label__1xCJl > div, ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-value__n99Fu:focus ._select_Select-value-label__1xCJl > div, ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-placeholder__1y-_B:active ._select_Select-value-label__1xCJl > div, ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-placeholder__1y-_B:focus ._select_Select-value-label__1xCJl > div {\n        outline: 1px dotted white;\n        outline-offset: -1px;\n        background-color: #0000a2;\n        color: white; }\n    ._select_window--explorer__lRQTs ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-placeholder__1y-_B {\n      padding: 4px 2px 1px; }\n    ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-arrow-zone__3iqVR {\n      position: absolute;\n      box-shadow: inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #bbc3c4, inset -2px -2px 0px #808088, inset 2px 2px 0px white;\n      height: 16px;\n      width: 16px;\n      left: calc(100% - 18px);\n      top: 2px;\n      background-color: #bbc3c4;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-image: url(\"data:image/gif;base64,R0lGODlhBwAEAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAHAAQAAAIIhA+CKWoNmSgAOw==\"); }\n    ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-control__20nFf ._select_Select-clear-zone__29ZN_ {\n      display: none; }\n  ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-menu-outer__1Pw1L {\n    border: 1px solid black;\n    background-color: white; }\n    ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-menu-outer__1Pw1L ._select_Select-menu__2q7wb ._select_Select-option__3JLEF {\n      padding: 1px; }\n      ._select_w98__3RVby ._select_Select__50fK8 ._select_Select-menu-outer__1Pw1L ._select_Select-menu__2q7wb ._select_Select-option__3JLEF:hover {\n        outline: 1px dotted white;\n        outline-offset: -1px;\n        background-color: #0000a2;\n        color: white; }\n  ._select_w98__3RVby ._select_Select__50fK8._select_is-disabled__2WvQJ {\n    pointer-events: none; }\n    ._select_w98__3RVby ._select_Select__50fK8._select_is-disabled__2WvQJ ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-value__n99Fu, ._select_w98__3RVby ._select_Select__50fK8._select_is-disabled__2WvQJ ._select_Select-control__20nFf ._select_Select-multi-value-wrapper__2gwuB ._select_Select-placeholder__1y-_B {\n      background-color: #bbc3c4; }\n    ._select_w98__3RVby ._select_Select__50fK8._select_is-disabled__2WvQJ ._select_Select-control__20nFf ._select_Select-arrow-zone__3iqVR:after {\n      background-image: url(\"data:image/gif;base64,R0lGODlhCAAFAJEAAAAAAP///5mZmf///yH5BAEAAAMALAAAAAAIAAUAAAIMlC8zKBF6nIJyqqcKADs=\"); }\n\n._select_w98__3RVby ._select_SelectBox__nYW_g {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  padding: 2px; }\n  ._select_w98__3RVby ._select_SelectBox__nYW_g:disabled, ._select_w98__3RVby ._select_SelectBox__nYW_g._select_disabled__2zSmP {\n    pointer-events: none;\n    background-color: #bbc3c4; }\n    ._select_w98__3RVby ._select_SelectBox__nYW_g:disabled > div, ._select_w98__3RVby ._select_SelectBox__nYW_g._select_disabled__2zSmP > div {\n      overflow: hidden; }\n    ._select_w98__3RVby ._select_SelectBox__nYW_g:disabled button, ._select_w98__3RVby ._select_SelectBox__nYW_g._select_disabled__2zSmP button {\n      color: #808088 !important; }\n    ._select_w98__3RVby ._select_SelectBox__nYW_g:disabled ._select_icon__3_5k9, ._select_w98__3RVby ._select_SelectBox__nYW_g._select_disabled__2zSmP ._select_icon__3_5k9 {\n      filter: grayscale(1); }\n  ._select_w98__3RVby ._select_SelectBox__nYW_g > div {\n    position: relative;\n    overflow: auto; }\n  ._select_w98__3RVby ._select_SelectBox__nYW_g:after {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c;\n    pointer-events: none;\n    content: ''; }\n  ._select_w98__3RVby ._select_SelectBox__nYW_g button:not(._select_icon__3_5k9) {\n    display: block;\n    outline: none;\n    background: transparent;\n    border: none;\n    white-space: nowrap;\n    overflow: hidden;\n    color: #0c0c0c;\n    width: 100%;\n    text-align: left; }\n    ._select_w98__3RVby ._select_SelectBox__nYW_g button:not(._select_icon__3_5k9):after {\n      content: attr(title);\n      position: initial; }\n    ._select_w98__3RVby ._select_SelectBox__nYW_g button:not(._select_icon__3_5k9)._select_is-active__cuEsf {\n      background-color: #0000a2;\n      color: white;\n      outline-offset: -1px;\n      outline: 1px dotted white; }\n  ._select_w98__3RVby ._select_SelectBox--ExplorerIcon__2FCBZ > div {\n    display: flex;\n    flex-direction: row;\n    overflow-y: hidden;\n    padding-bottom: 20px; }\n    ._select_w98__3RVby ._select_SelectBox--ExplorerIcon__2FCBZ > div ._select_explorer-icon__9GV4f {\n      margin: 2px 8px; }\n  ._select_w98__3RVby ._select_SelectBox__nYW_g ._select_icon--list__1RHxH {\n    margin: 0px;\n    padding: 1px; }\n    ._select_w98__3RVby ._select_SelectBox__nYW_g ._select_icon--list__1RHxH ._select_icon__text__h01DD {\n      width: initial; }\n    ._select_w98__3RVby ._select_SelectBox__nYW_g ._select_icon--list__1RHxH:focus:not(._select_is-active__cuEsf) ._select_icon__text__h01DD, ._select_w98__3RVby ._select_SelectBox__nYW_g ._select_icon--list__1RHxH:active:not(._select_is-active__cuEsf) ._select_icon__text__h01DD {\n      background-color: transparent;\n      color: #0c0c0c;\n      outline: none;\n      outline-offset: -1px; }\n";
styleInject(css$h);

// copied straight from react select demos with slight changes
var menuRenderer$1 = function menuRenderer$$1(_ref) {
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

		var Option$$1 = optionComponent || function (props) {
				return React.createElement('div', props);
		};

		return options.map(function (option, i) {
				var isSelected = valueArray && valueArray.some(function (x) {
						return x[valueKey] === option[valueKey];
				});
				var isFocused = option === focusedOption;
				var optionClass = classnames(optionClassName, {
						'Select-option': true,
						'is-selected': isSelected,
						'is-focused': isFocused,
						'is-disabled': option.disabled
				});

				return React.createElement(
						Option$$1,
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
						React.createElement(
								'span',
								null,
								option.label
						)
				);
		});
};
menuRenderer$1.propTypes = {
		focusOption: propTypes.func,
		focusedOption: propTypes.object,
		inputValue: propTypes.string,
		instancePrefix: propTypes.string,
		onFocus: propTypes.func,
		onOptionRef: propTypes.func,
		onSelect: propTypes.func,
		optionClassName: propTypes.string,
		optionComponent: propTypes.func,
		optionRenderer: propTypes.func,
		options: propTypes.array,
		removeValue: propTypes.func,
		selectValue: propTypes.func,
		valueArray: propTypes.array,
		valueKey: propTypes.string
};

var ValueRenderer = function ValueRenderer(props) {
		return React.createElement(
				'div',
				{ style: { backgroundImage: props.icon ? 'url(\'' + props.icon + '\')' : 'none' } },
				props.label
		);
};

var Select = function (_Component) {
		inherits(Select, _Component);

		function Select(props) {
				classCallCheck(this, Select);

				var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

				_this.onChange = function (e) {
						_this.setState({ value: e.value });
				};

				_this.state = {
						value: _this.props.value || null
				};
				return _this;
		}

		createClass(Select, [{
				key: 'render',
				value: function render() {
						var props = this.props;

						return React.createElement(Select$1, _extends({}, props, {
								className: 'Select',
								placeholder: props.placeholder,
								onChange: this.onChange,
								isOpen: true,
								isDisabled: this.props.isDisabled,
								searchable: this.props.searchable,
								menuRenderer: this.props.useIcons ? menuRenderer$1 : undefined,
								valueRenderer: ValueRenderer,
								value: this.state.value
						}));
				}
		}]);
		return Select;
}(Component);

Select.defaultProps = {
		placeholder: '',
		searchable: false
};

var isSelected = function isSelected(selected, val) {
  return selected.some(function (selectedEntry) {
    return selectedEntry === val;
  });
};

var Select$2 = function Select(props) {
  var Comp = props.component ? props.component : 'button';
  return React.createElement(
    'div',
    { className: classnames('SelectBox', props.component ? 'SelectBox--' + props.component.name : 'SelectBox--simple', { disabled: props.disabled }) },
    React.createElement(
      'div',
      null,
      props.options.map(function (option) {
        return React.createElement(Comp, {
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

var css$i = "select[multiple] {\n  position: relative;\n  border: none;\n  background-color: white;\n  border-radius: 0px;\n  outline: none;\n  padding: 2px;\n  box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n  select[multiple]:active, select[multiple]:focus, select[multiple]:active:focus, select[multiple].select_active__2PeRe, select[multiple].select_clicked__23TRR {\n    outline: none; }\n  select[multiple] option:active, select[multiple] option:focus, select[multiple] option:checked, select[multiple] option.select_checked__396qA {\n    outline: 1px dotted white;\n    outline-offset: -1px;\n    background-color: #0000a2;\n    color: white; }\n";
styleInject(css$i);

var Select$3 = function (_Component) {
  inherits(Select, _Component);

  function Select(props) {
    classCallCheck(this, Select);

    var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.updateValue = function (value) {
      _this.setState({ value: value });
      _this.props.onChange(value);
    };

    _this.handleChange = function (event) {
      console.log(event.target.value);
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

  createClass(Select, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      return React.createElement(
        'div',
        { className: 'SelectMultipleSimple' },
        React.createElement(
          'select',
          { value: this.state.value, onChange: this.handleChange, multiple: true },
          props.options.map(function (option) {
            return React.createElement(
              'option',
              {
                key: option.value.toString(),
                value: option.value,
                disabled: option.disabled
              },
              React.createElement(
                'div',
                null,
                option.name,
                React.createElement(
                  'div',
                  null,
                  'ppp'
                )
              )
            );
          })
        )
      );
    }
  }]);
  return Select;
}(Component);

Select$3.defaultProps = {
  onChange: function onChange() {}
};

var MenuEntry = withContextLogic(AbstractButton);

var MenuBar = function MenuBar(props) {
  return React.createElement(
    'menu',
    { className: 'window__menu menu-bar' },
    props.options && props.options.map(function (section) {
      return React.createElement(
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

var Started = withContextLogic(StartButton);

var StartMenu = function StartMenu(props) {
  var className = props.className,
      otherProps = objectWithoutProperties(props, ['className']);

  return React.createElement(Started, _extends({
    className: classnames('start-menu task-bar__start', props.className)
  }, otherProps));
};

var Notifier = function Notifier(props) {
  return React.createElement('button', {
    className: 'btn taskbar-notifications__notifier',
    title: props.title,
    onClick: props.onClick,
    style: { backgroundImage: 'url("' + props.src + '")' }
  });
};

Notifier.propTypes = {
  src: propTypes.string,
  onClick: propTypes.func,
  title: propTypes.string
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
    key: 'componentWillMount',
    value: function componentWillMount() {
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
      return React.createElement(
        'div',
        { className: 'task-bar--notifications__time' },
        formatTime(this.state.time)
      );
    }
  }]);
  return Time;
}(React.Component);

var Notifications = function Notifications(props) {
  return React.createElement(
    'div',
    { className: 'task-bar--notifications' },
    React.createElement(Notifier, null),
    props.notifiers.map(function (notifier) {
      return React.createElement(Notifier, {
        src: notifier.src,
        onClick: notifier.onClick,
        title: notifier.title
      });
    }),
    React.createElement(Time, null)
  );
};

Notifications.propsTypes = {
  notifiers: propTypes.arrayOf(propTypes.shape(Notifier.propTypes))
};

Notifications.defaultProps = {
  notifiers: []
};

var css$j = ".task-bar_w98__1k5T0 .task-bar_task-bar__12eUa {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  max-width: 100%;\n  z-index: 10;\n  box-shadow: 0px -1px 0px white;\n  padding: 2px 0px;\n  display: flex; }\n  .task-bar_w98__1k5T0 .task-bar_task-bar__12eUa > div, .task-bar_w98__1k5T0 .task-bar_task-bar__12eUa > button {\n    position: relative;\n    height: 22px;\n    margin: 0px 2px; }\n  .task-bar_w98__1k5T0 .task-bar_task-bar__programs__MeRCt {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-wrap: nowrap;\n    margin-right: 4px;\n    min-width: 42px; }\n    .task-bar_w98__1k5T0 .task-bar_task-bar__programs__MeRCt:before {\n      display: none; }\n  .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo {\n    position: relative; }\n    .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button + div {\n      transition: max-height linear 200ms;\n      position: fixed;\n      bottom: 25px;\n      left: 2px;\n      visibility: hidden;\n      max-height: 0px;\n      padding-left: 22px; }\n      .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button + div > .task-bar_divider__3aKOY, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button + div > div:empty {\n        margin-left: 24px;\n        width: calc(100% - 26px); }\n      .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button + div:after {\n        content: '';\n        display: block;\n        position: absolute;\n        left: 3px;\n        top: 3px;\n        height: calc(100% - 6px);\n        width: 20px;\n        background: #0000a2;\n        background: linear-gradient(#0000a2, #126fc2);\n        background: url(\"data:image/gif;base64,R0lGODlhDgBkALMAAAAAAP///wIAsZKSmZKTmpGSmZKTmcjOz8fNzsfOz8fOzv///wAAAAAAAAAAAAAAACH5BAEAAAsALAAAAAAOAGQAAAT/cMk5SUo06CO179wSGEowgEOQBcRUEuqkUaIRd/cCwyvFzyJNS3JQ2Tyt0QLBklgwEqZGQasShr4DQhuilDxgRCWAINgIAkIxFoB2DDJWbmGb2Oq0nJx2dqoCXUEuKl8GMCZRSjpgWAdYEydVkhMJQlVkQR8UTFRgQDhiHkc9QRyfRwRSV5+ZH1KbnodzjEGPCAYFcBIJj5mOk61IkgZSnpKVxpSeYCuegTjCw8Uev1bLPkfXccuY29SSGgmRky2p4b2Jnm5+3LrQ3CsY5Wuk9ZlwcJrv2uzLvWthJgH0cWVAKkMGBjhKws1YQ4cPP1wxUETclUPuBOXRY4mOvmDJafaFFMmKwoEDCspIgnGSC0pYDZvB88YvE7Bd3YABrBlRJs+HN73MiPgq4heQYJAhlYiOhqyUwLhVo7TTWcYlyEZOmAbEYM+I4hape4b0Cg0tDXlVyapVR9UY5h7KaogAg9R1c82ubEohAgA7\") no-repeat bottom 3px center, linear-gradient(#0000a2, #126fc2); }\n      .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button + div > div {\n        display: flex;\n        align-items: center;\n        margin-left: 20px; }\n        .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button + div > div > button {\n          height: 32px;\n          padding-left: 32px;\n          background-size: 22px;\n          background-position: 4px center; }\n        .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button + div > div .task-bar_window__1LCoQ {\n          display: none; }\n    .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button:active, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button:focus, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button:active:focus, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button.task-bar_active__tZDVp, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button.task-bar_clicked__1yioz {\n      background-position: 3px 2px;\n      outline: 1px dotted black;\n      outline-offset: -4px; }\n      .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button:active + div, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button:focus + div, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button:active:focus + div, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button.task-bar_active__tZDVp + div, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button.task-bar_clicked__1yioz + div {\n        visibility: visible;\n        max-height: 100vh;\n        padding: 3px; }\n        .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button:active + div div, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button:focus + div div, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button:active:focus + div div, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button.task-bar_active__tZDVp + div div, .task-bar_w98__1k5T0 .task-bar_task-bar__start__18cYo > button.task-bar_clicked__1yioz + div div {\n          display: flex; }\n  .task-bar_w98__1k5T0 .task-bar_task-bar--notifications__1y4a0 {\n    background-color: #bbc3c4;\n    display: flex;\n    flex: none;\n    margin-left: auto;\n    align-items: center;\n    height: 22px;\n    padding: 0px 8px 0px 4px;\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #808088; }\n    .task-bar_w98__1k5T0 .task-bar_task-bar--notifications__time__3wP9h {\n      margin-left: 4px; }\n    .task-bar_w98__1k5T0 .task-bar_task-bar--notifications__notifier__2LJXh {\n      height: 16px;\n      width: 16px;\n      background-color: #bbc3c4;\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      border: none; }\n      .task-bar_w98__1k5T0 .task-bar_task-bar--notifications__notifier__2LJXh:active, .task-bar_w98__1k5T0 .task-bar_task-bar--notifications__notifier__2LJXh:focus, .task-bar_w98__1k5T0 .task-bar_task-bar--notifications__notifier__2LJXh:active:focus, .task-bar_w98__1k5T0 .task-bar_task-bar--notifications__notifier__2LJXh.task-bar_active__tZDVp, .task-bar_w98__1k5T0 .task-bar_task-bar--notifications__notifier__2LJXh.task-bar_clicked__1yioz {\n        outline: none;\n        border: none; }\n  .task-bar_w98__1k5T0 .task-bar_task-bar__12eUa > div:not(:last-child) {\n    padding: 0px 6px; }\n    .task-bar_w98__1k5T0 .task-bar_task-bar__12eUa > div:not(:last-child):first-child {\n      padding: 0px 3px 0px 0px; }\n    .task-bar_w98__1k5T0 .task-bar_task-bar__12eUa > div:not(:last-child):after {\n      position: absolute;\n      top: 1px;\n      right: 0px;\n      height: calc(100% - 2px);\n      width: 1px;\n      background-color: #808088;\n      content: '';\n      box-shadow: 1px 0px 0px white; }\n    .task-bar_w98__1k5T0 .task-bar_task-bar__12eUa > div:not(:last-child):before {\n      position: absolute;\n      top: 3px;\n      right: -6px;\n      height: calc(100% - 6px);\n      width: 3px;\n      background-color: #bbc3c4;\n      content: '';\n      box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px white; }\n";
styleInject(css$j);

var TaskBar = function TaskBar(props) {
  return React.createElement(
    'div',
    { className: 'task-bar' },
    React.createElement(StartMenu, {
      options: props.options
    }),
    props.quickLaunch && React.createElement(
      'div',
      { className: 'task-bar__quick-launch' },
      props.quickLaunch.map(function (qlEntry) {
        return React.createElement(NavButton$2, {
          key: qlEntry.icon + '-QuickLaunch',
          alt: qlEntry.alt,
          onClick: qlEntry.onClick,
          icon: qlEntry.icon
        });
      })
    ),
    props.openWindows && React.createElement(
      'div',
      { className: 'task-bar__programs' },
      props.openWindows.map(function (openWindow) {
        return React.createElement(
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
    React.createElement(Notifications, null)
  );
};

var StaticWindow = function StaticWindow(props) {
  return React.createElement(
    WindowFrame,
    { className: props.className },
    React.createElement(
      'div',
      { className: 'window__heading' },
      props.icon && React.createElement('div', {
        className: 'window__icon',
        style: { backgroundImage: 'url(\'' + props.icon + '\')' }
      }),
      React.createElement(
        'div',
        {
          className: 'window__title'
        },
        props.title
      ),
      props.onMinimize && React.createElement(NavButton, { className: 'window__minimize' }),
      props.isMaximized && props.onRestore && React.createElement(NavButton, { className: 'window__restore' }),
      !props.isMaximized && props.onMaximize && React.createElement(NavButton, { className: 'window__maximize' }),
      props.onClose && React.createElement(NavButton, { className: 'window__close' })
    ),
    props.children
  );
};

StaticWindow.propTypes = {
  children: propTypes.node,
  title: propTypes.string,
  onClose: propTypes.func,
  onMinimize: propTypes.func,
  onMaximize: propTypes.func,
  onRestore: propTypes.func,
  className: propTypes.string,
  isActive: propTypes.bool,
  isMaximized: propTypes.bool,
  icon: propTypes.string
};

var css$k = "._explorer-window_w98__2fHSi ._explorer-window_window--explorer__view__5ESjb {\n  min-height: 20px;\n  margin: 2px auto 1px;\n  background-color: white;\n  box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px 0px #808088, inset -2px -2px 0px #bbc3c4, inset 2px 2px 0px 0px #0c0c0c; }\n\n._explorer-window_w98__2fHSi ._explorer-window_window--explorer__details__3vBig {\n  display: flex; }\n  ._explorer-window_w98__2fHSi ._explorer-window_window--explorer__details__section__13kQ- {\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #808088;\n    flex-grow: 1;\n    margin-top: 2px;\n    height: 16px; }\n    ._explorer-window_w98__2fHSi ._explorer-window_window--explorer__details__section__13kQ-:not(:last-child) {\n      margin: 2px; }\n\n._explorer-window_w98__2fHSi ._explorer-window_window--explorer__3LTVm ._explorer-window_menu-bar__1oCve {\n  padding: 2px 1px 2px 12px; }\n\n._explorer-window_w98__2fHSi ._explorer-window_window--explorer__3LTVm > div + menu {\n  margin-top: 2px;\n  box-shadow: 0px 1px 0px white, inset 0px -1px 0px #808088, -1px 0px 0px #808088, inset 1px 0px 0px white, 1px 0px 0px white, inset -1px 0px 0px #808088, -1px -1px 0px #808088, 0px -1px 0px #808088, inset 0px 1px 0px white, 1px -1px 0px white; }\n\n._explorer-window_w98__2fHSi ._explorer-window_window--explorer__3LTVm > menu {\n  position: relative;\n  min-height: 16px;\n  padding-left: 12px;\n  margin: 0px 1px;\n  display: flex;\n  box-shadow: 0px 1px 0px white, inset 0px -1px 0px #808088, -1px 0px 0px #808088, inset 1px 0px 0px white, 1px 0px 0px white, inset -1px 0px 0px #808088; }\n  ._explorer-window_w98__2fHSi ._explorer-window_window--explorer__3LTVm > menu:before {\n    position: absolute;\n    top: 2px;\n    left: 5px;\n    height: calc(100% - 4px);\n    width: 3px;\n    background-color: #bbc3c4;\n    content: '';\n    box-shadow: inset -1px -1px 0px #808088, inset 1px 1px 0px white; }\n\n._explorer-window_w98__2fHSi ._explorer-window_window--explorer__3LTVm > footer {\n  display: flex; }\n  ._explorer-window_w98__2fHSi ._explorer-window_window--explorer__3LTVm > footer > div {\n    flex-grow: 1;\n    padding: 2px 4px;\n    box-shadow: inset -1px -1px 0px white, inset 1px 1px 0px #0c0c0c; }\n    ._explorer-window_w98__2fHSi ._explorer-window_window--explorer__3LTVm > footer > div:not(:last-child) {\n      margin-right: 4px; }\n\n._explorer-window_w98__2fHSi ._explorer-window_window--explorer__address__2PmDP {\n  display: flex;\n  height: 22px;\n  overflow-y: visible; }\n  ._explorer-window_w98__2fHSi ._explorer-window_window--explorer__address__title__1VSGa {\n    align-self: center;\n    margin-right: 4px;\n    padding-bottom: 2px; }\n  ._explorer-window_w98__2fHSi ._explorer-window_window--explorer__address__2PmDP ._explorer-window_Select__3yETB {\n    flex-grow: 1;\n    z-index: 5;\n    margin-right: 4px;\n    margin-top: 1px; }\n\n._explorer-window_w98__2fHSi ._explorer-window_window--explorer__options__1d9Dw {\n  display: flex;\n  padding: 2px 4px 2px 12px; }\n\n._explorer-window_w98__2fHSi ._explorer-window_window--explorer__3LTVm > div:last-child {\n  margin-top: 2px; }\n";
styleInject(css$k);

var ExplorerWindow = function ExplorerWindow(props) {
  return React.createElement(
    StaticWindow,
    {
      className: classnames('window--explorer', props.className),
      icon: props.icon,
      onClose: props.onClose,
      onMaximize: props.onClose,
      onMinimize: props.onMaximize,
      title: props.title
    },
    React.createElement(MenuBar, {
      className: 'window--explorer__menu',
      options: props.menuOptions
    }),
    props.explorerOptions && React.createElement(
      'menu',
      { className: 'window--explorer__options' },
      props.explorerOptions.map(function (option) {
        return React.createElement(NavButton$1, {
          key: 'large-button-' + option.title,
          icon: option.icon,
          title: option.title,
          onClick: option.onClick,
          disabled: !option.onClick
        });
      })
    ),
    React.createElement(
      'menu',
      { className: 'window--explorer__address' },
      React.createElement(
        'div',
        { className: 'window--explorer__address__title' },
        'Address'
      ),
      React.createElement(Select, { placeholder: React.createElement(
          'span',
          null,
          'Test'
        ), isDisabled: true })
    ),
    React.createElement(
      'div',
      {
        className: 'window--explorer__view',
        style: props.backgroundColor && {
          backgroundColor: props.backgroundColor
        }
      },
      props.children
    ),
    props.footer && React.createElement(
      'footer',
      null,
      Array.isArray(props.footer) ? props.footer.map(function (entry) {
        return entry;
      }) : props.footer
    )
  );
};

var DetailsSection = function DetailsSection(props) {
  return React.createElement(
    'section',
    { className: 'window__section' },
    React.createElement(
      'div',
      { className: 'title' },
      props.title
    ),
    props.children
  );
};

DetailsSection.propTypes = {
  title: propTypes.node,
  children: propTypes.node
};

export { Theme, FormButton, NavButton, ProgramButton, StartButton, NavButton$1 as LargeIconButton, NavButton$2 as SmallIconButton, ContextMenuSimple as ContextMenu, withContextLogic as withContextMenuWrapper, ExplorerIcon, ListIcon, Checkbox, InputText, Select, Select$2 as SelectBox, Select$3 as SelectMultipleSimple, MenuBar, StartMenu, TaskBar, StaticWindow as AbstractWindow, ExplorerWindow, WindowFrame, DetailsSection };
//# sourceMappingURL=pb.module.js.map
