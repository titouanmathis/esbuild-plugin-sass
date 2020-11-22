(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key3 of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key3) && key3 !== "default")
          __defProp(target, key3, {get: () => module[key3], enumerable: !(desc = __getOwnPropDesc(module, key3)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // node_modules/@babel/runtime/helpers/arrayLikeToArray.js
  var require_arrayLikeToArray = __commonJS((exports, module) => {
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    module.exports = _arrayLikeToArray;
  });

  // node_modules/@babel/runtime/helpers/arrayWithoutHoles.js
  var require_arrayWithoutHoles = __commonJS((exports, module) => {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return arrayLikeToArray(arr);
    }
    module.exports = _arrayWithoutHoles;
  });

  // node_modules/@babel/runtime/helpers/iterableToArray.js
  var require_iterableToArray = __commonJS((exports, module) => {
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
        return Array.from(iter);
    }
    module.exports = _iterableToArray;
  });

  // node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
  var require_unsupportedIterableToArray = __commonJS((exports, module) => {
    var arrayLikeToArray = require_arrayLikeToArray();
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return arrayLikeToArray(o, minLen);
    }
    module.exports = _unsupportedIterableToArray;
  });

  // node_modules/@babel/runtime/helpers/nonIterableSpread.js
  var require_nonIterableSpread = __commonJS((exports, module) => {
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread;
  });

  // node_modules/@babel/runtime/helpers/toConsumableArray.js
  var require_toConsumableArray = __commonJS((exports, module) => {
    var arrayWithoutHoles = require_arrayWithoutHoles();
    var iterableToArray = require_iterableToArray();
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    var nonIterableSpread = require_nonIterableSpread();
    function _toConsumableArray5(arr) {
      return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
    }
    module.exports = _toConsumableArray5;
  });

  // node_modules/@babel/runtime/helpers/arrayWithHoles.js
  var require_arrayWithHoles = __commonJS((exports, module) => {
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    module.exports = _arrayWithHoles;
  });

  // node_modules/@babel/runtime/helpers/iterableToArrayLimit.js
  var require_iterableToArrayLimit = __commonJS((exports, module) => {
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    module.exports = _iterableToArrayLimit;
  });

  // node_modules/@babel/runtime/helpers/nonIterableRest.js
  var require_nonIterableRest = __commonJS((exports, module) => {
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableRest;
  });

  // node_modules/@babel/runtime/helpers/slicedToArray.js
  var require_slicedToArray = __commonJS((exports, module) => {
    var arrayWithHoles = require_arrayWithHoles();
    var iterableToArrayLimit = require_iterableToArrayLimit();
    var unsupportedIterableToArray = require_unsupportedIterableToArray();
    var nonIterableRest = require_nonIterableRest();
    function _slicedToArray6(arr, i) {
      return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
    }
    module.exports = _slicedToArray6;
  });

  // node_modules/@babel/runtime/helpers/classCallCheck.js
  var require_classCallCheck = __commonJS((exports, module) => {
    function _classCallCheck10(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    module.exports = _classCallCheck10;
  });

  // node_modules/@babel/runtime/helpers/createClass.js
  var require_createClass = __commonJS((exports, module) => {
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass10(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    module.exports = _createClass10;
  });

  // node_modules/@babel/runtime/helpers/setPrototypeOf.js
  var require_setPrototypeOf = __commonJS((exports, module) => {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    module.exports = _setPrototypeOf;
  });

  // node_modules/@babel/runtime/helpers/inherits.js
  var require_inherits = __commonJS((exports, module) => {
    var setPrototypeOf = require_setPrototypeOf();
    function _inherits8(subClass, superClass) {
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
      if (superClass)
        setPrototypeOf(subClass, superClass);
    }
    module.exports = _inherits8;
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS((exports, module) => {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        module.exports = _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        module.exports = _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    module.exports = _typeof;
  });

  // node_modules/@babel/runtime/helpers/assertThisInitialized.js
  var require_assertThisInitialized = __commonJS((exports, module) => {
    function _assertThisInitialized6(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    module.exports = _assertThisInitialized6;
  });

  // node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
  var require_possibleConstructorReturn = __commonJS((exports, module) => {
    var _typeof = require_typeof();
    var assertThisInitialized6 = require_assertThisInitialized();
    function _possibleConstructorReturn8(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return assertThisInitialized6(self);
    }
    module.exports = _possibleConstructorReturn8;
  });

  // node_modules/@babel/runtime/helpers/getPrototypeOf.js
  var require_getPrototypeOf = __commonJS((exports, module) => {
    function _getPrototypeOf8(o) {
      module.exports = _getPrototypeOf8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf9(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf8(o);
    }
    module.exports = _getPrototypeOf8;
  });

  // node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
  var require_objectWithoutPropertiesLoose = __commonJS((exports, module) => {
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key3, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key3 = sourceKeys[i];
        if (excluded.indexOf(key3) >= 0)
          continue;
        target[key3] = source[key3];
      }
      return target;
    }
    module.exports = _objectWithoutPropertiesLoose;
  });

  // node_modules/@babel/runtime/helpers/objectWithoutProperties.js
  var require_objectWithoutProperties = __commonJS((exports, module) => {
    var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
    function _objectWithoutProperties2(source, excluded) {
      if (source == null)
        return {};
      var target = objectWithoutPropertiesLoose(source, excluded);
      var key3, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key3 = sourceSymbolKeys[i];
          if (excluded.indexOf(key3) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key3))
            continue;
          target[key3] = source[key3];
        }
      }
      return target;
    }
    module.exports = _objectWithoutProperties2;
  });

  // node_modules/nanoid/non-secure/index.js
  var require_non_secure = __commonJS((exports, module) => {
    var url = "-_";
    var i = 36;
    while (i--) {
      url += i.toString(36);
    }
    i = 36;
    while (i-- - 10) {
      url += i.toString(36).toUpperCase();
    }
    module.exports = function(size) {
      var id = "";
      i = size || 21;
      while (i--) {
        id += url[Math.random() * 64 | 0];
      }
      return id;
    };
  });

  // node_modules/@babel/runtime/helpers/defineProperty.js
  var require_defineProperty = __commonJS((exports, module) => {
    function _defineProperty6(obj, key3, value) {
      if (key3 in obj) {
        Object.defineProperty(obj, key3, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key3] = value;
      }
      return obj;
    }
    module.exports = _defineProperty6;
  });

  // node_modules/deepmerge/dist/cjs.js
  var require_cjs = __commonJS((exports, module) => {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options2) {
      return options2.clone !== false && options2.isMergeableObject(value) ? deepmerge2(emptyTarget(value), value, options2) : value;
    }
    function defaultArrayMerge(target, source, options2) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options2);
      });
    }
    function getMergeFunction(key3, options2) {
      if (!options2.customMerge) {
        return deepmerge2;
      }
      var customMerge = options2.customMerge(key3);
      return typeof customMerge === "function" ? customMerge : deepmerge2;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return target.propertyIsEnumerable(symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key3) {
      return propertyIsOnObject(target, key3) && !(Object.hasOwnProperty.call(target, key3) && Object.propertyIsEnumerable.call(target, key3));
    }
    function mergeObject(target, source, options2) {
      var destination = {};
      if (options2.isMergeableObject(target)) {
        getKeys(target).forEach(function(key3) {
          destination[key3] = cloneUnlessOtherwiseSpecified(target[key3], options2);
        });
      }
      getKeys(source).forEach(function(key3) {
        if (propertyIsUnsafe(target, key3)) {
          return;
        }
        if (propertyIsOnObject(target, key3) && options2.isMergeableObject(source[key3])) {
          destination[key3] = getMergeFunction(key3, options2)(target[key3], source[key3], options2);
        } else {
          destination[key3] = cloneUnlessOtherwiseSpecified(source[key3], options2);
        }
      });
      return destination;
    }
    function deepmerge2(target, source, options2) {
      options2 = options2 || {};
      options2.arrayMerge = options2.arrayMerge || defaultArrayMerge;
      options2.isMergeableObject = options2.isMergeableObject || isMergeableObject;
      options2.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options2);
      } else if (sourceIsArray) {
        return options2.arrayMerge(target, source, options2);
      } else {
        return mergeObject(target, source, options2);
      }
    }
    deepmerge2.all = function deepmergeAll(array, options2) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge2(prev, next, options2);
      }, {});
    };
    var deepmerge_1 = deepmerge2;
    module.exports = deepmerge_1;
  });

  // demo/src/js/app.js
  var require_app = __commonJS((exports) => {
    __export(exports, {
      default: () => app_default
    });
    class App extends js_toolkit_default {
      get config() {
        return {
          name: "App"
        };
      }
    }
    var app_default = new App(document.body);
  });

  // node_modules/@studiometa/js-toolkit/index.js
  const toConsumableArray4 = __toModule(require_toConsumableArray());
  const slicedToArray5 = __toModule(require_slicedToArray());
  const classCallCheck9 = __toModule(require_classCallCheck());
  const createClass9 = __toModule(require_createClass());
  const inherits7 = __toModule(require_inherits());
  const possibleConstructorReturn7 = __toModule(require_possibleConstructorReturn());
  const getPrototypeOf7 = __toModule(require_getPrototypeOf());
  const objectWithoutProperties = __toModule(require_objectWithoutProperties());

  // node_modules/@studiometa/js-toolkit/abstracts/Base/index.js
  const toConsumableArray3 = __toModule(require_toConsumableArray());
  const classCallCheck8 = __toModule(require_classCallCheck());
  const assertThisInitialized5 = __toModule(require_assertThisInitialized());
  const createClass8 = __toModule(require_createClass());
  const inherits6 = __toModule(require_inherits());
  const possibleConstructorReturn6 = __toModule(require_possibleConstructorReturn());
  const getPrototypeOf6 = __toModule(require_getPrototypeOf());
  const non_secure = __toModule(require_non_secure());

  // node_modules/@studiometa/js-toolkit/utils/object/autoBind.js
  const slicedToArray = __toModule(require_slicedToArray());

  // node_modules/@studiometa/js-toolkit/utils/object/getAllProperties.js
  const toConsumableArray = __toModule(require_toConsumableArray());
  function getAllProperties(object) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var proto = Object.getPrototypeOf(object);
    if (proto === Object.prototype) {
      return props;
    }
    return getAllProperties(proto, Object.getOwnPropertyNames(proto).map(function(name) {
      return [name, proto];
    }).reduce(function(acc, val) {
      return [].concat(toConsumableArray.default(acc), [val]);
    }, props));
  }

  // node_modules/@studiometa/js-toolkit/utils/object/autoBind.js
  function autoBind(instance2) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, include = _ref.include, exclude = _ref.exclude;
    var filter = function filter2(key3) {
      var match = function match2(pattern) {
        return typeof pattern === "string" ? key3 === pattern : pattern.test(key3);
      };
      if (include) {
        return include.some(match);
      }
      if (exclude) {
        return !exclude.some(match);
      }
      return true;
    };
    getAllProperties(instance2).filter(function(_ref2) {
      var _ref3 = slicedToArray.default(_ref2, 1), key3 = _ref3[0];
      return key3 !== "constructor" && filter(key3);
    }).forEach(function(_ref4) {
      var _ref5 = slicedToArray.default(_ref4, 2), key3 = _ref5[0], object = _ref5[1];
      var descriptor = Object.getOwnPropertyDescriptor(object, key3);
      if (descriptor && typeof descriptor.value === "function") {
        instance2[key3] = instance2[key3].bind(instance2);
      }
    });
    return instance2;
  }

  // node_modules/@studiometa/js-toolkit/abstracts/EventManager.js
  const classCallCheck = __toModule(require_classCallCheck());
  const createClass = __toModule(require_createClass());
  const defineProperty = __toModule(require_defineProperty());
  var EventManager = /* @__PURE__ */ function() {
    function EventManager3() {
      classCallCheck.default(this, EventManager3);
      defineProperty.default(this, "_events", {});
    }
    createClass.default(EventManager3, [{
      key: "$on",
      value: function $on(event, listener) {
        var _this = this;
        if (!Array.isArray(this._events[event])) {
          this._events[event] = [];
        }
        this._events[event].push(listener);
        return function() {
          _this.$off(event, listener);
        };
      }
    }, {
      key: "$off",
      value: function $off(event, listener) {
        if (!event) {
          this._events = {};
          return this;
        }
        if (!listener) {
          this._events[event] = [];
          return this;
        }
        var index = this._events[event].indexOf(listener);
        if (index > -1) {
          this._events[event].splice(index, 1);
        }
        return this;
      }
    }, {
      key: "$emit",
      value: function $emit(event) {
        var _this2 = this;
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (!Array.isArray(this._events[event])) {
          return this;
        }
        this._events[event].forEach(function(listener) {
          listener.apply(_this2, args);
        });
        return this;
      }
    }, {
      key: "$once",
      value: function $once(event, listener) {
        var instance2 = this;
        this.$on(event, function handler() {
          instance2.$off(event, handler);
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          listener.apply(instance2, args);
        });
        return this;
      }
    }]);
    return EventManager3;
  }();

  // node_modules/@studiometa/js-toolkit/abstracts/Base/utils.js
  function debug(instance2) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return instance2.$options.debug ? window.console.log.apply(window, [instance2.config.name].concat(args)) : function() {
    };
  }
  function hasMethod(obj, name) {
    return typeof obj[name] === "function";
  }
  function callMethod(instance2, method) {
    var _instance$method;
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }
    debug.apply(void 0, [instance2, "callMethod", method].concat(args));
    if (method === "destroyed" && !instance2.$isMounted || method === "mounted" && instance2.$isMounted) {
      debug(instance2, "not", method, "because the method has already been triggered once.");
      return instance2;
    }
    instance2.$emit.apply(instance2, [method].concat(args));
    if (!hasMethod(instance2, method)) {
      return instance2;
    }
    (_instance$method = instance2[method]).call.apply(_instance$method, [instance2].concat(args));
    debug.apply(void 0, [instance2, method, instance2].concat(args));
    return instance2;
  }

  // node_modules/@studiometa/js-toolkit/abstracts/Base/children.js
  const slicedToArray2 = __toModule(require_slicedToArray());
  function getChild(el, ComponentClass, parent) {
    if (el.__base__) {
      return el.__base__;
    }
    if (ComponentClass.__isBase__) {
      Object.defineProperty(ComponentClass.prototype, "__isChild__", {
        value: true
      });
      var child = new ComponentClass(el);
      Object.defineProperty(child, "$parent", {
        get: function get() {
          return parent;
        }
      });
      return child;
    }
    var asyncComponent = ComponentClass().then(function(module) {
      var ResolvedClass = module.default ? module.default : module;
      Object.defineProperty(ResolvedClass.prototype, "__isChild__", {
        value: true
      });
      var child2 = new ResolvedClass(el);
      Object.defineProperty(child2, "$parent", {
        get: function get() {
          return parent;
        }
      });
      return child2;
    });
    asyncComponent.__isAsync__ = true;
    return asyncComponent;
  }
  function getComponentElements(nameOrSelector) {
    var element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
    var selector = '[data-component="'.concat(nameOrSelector, '"]');
    var elements = [];
    try {
      elements = Array.from(element.querySelectorAll(selector));
    } catch (_unused) {
    }
    if (elements.length === 0) {
      elements = Array.from(element.querySelectorAll(nameOrSelector));
    }
    return elements;
  }
  function getChildren(instance2, element, components2) {
    var children2 = Object.entries(components2).reduce(function(acc, _ref) {
      var _ref2 = slicedToArray2.default(_ref, 2), name = _ref2[0], ComponentClass = _ref2[1];
      var elements = getComponentElements(name, element);
      if (elements.length === 0) {
        return acc;
      }
      acc[name] = elements.map(function(el) {
        return getChild(el, ComponentClass, instance2);
      }).filter(function(el) {
        return el !== "terminated";
      });
      if (acc[name].length === 0) {
        delete acc[name];
      }
      return acc;
    }, {});
    instance2.$emit("get:children", children2);
    return children2;
  }

  // node_modules/@studiometa/js-toolkit/abstracts/Base/options.js
  const deepmerge = __toModule(require_cjs());
  function getOptions(instance2, element, config) {
    var options2 = {};
    if (element.dataset.options) {
      try {
        options2 = JSON.parse(element.dataset.options);
      } catch (err) {
        throw new Error("Can not parse the `data-options` attribute. Is it a valid JSON string?");
      }
    }
    options2 = deepmerge.default(config, options2);
    instance2.$emit("get:options", options2);
    return options2;
  }
  function setOptions(instance2, element, newOptions) {
    var options2 = {};
    if (element.dataset.options) {
      try {
        options2 = JSON.parse(element.dataset.options);
      } catch (err) {
        throw new Error("Can not parse the `data-options` attribute. Is it a valid JSON string?");
      }
    }
    options2 = deepmerge.default(options2, newOptions);
    element.dataset.options = JSON.stringify(options2);
  }

  // node_modules/@studiometa/js-toolkit/abstracts/Base/refs.js
  function scopeSelectorPonyfill(element, selector, uniqId) {
    var attr = "data-uniq-id";
    var scopedSelector = "[".concat(attr, '="').concat(uniqId, '"] ').concat(selector);
    element.setAttribute(attr, uniqId);
    var list = Array.from(element.querySelectorAll(scopedSelector));
    element.removeAttribute(attr);
    return list;
  }
  function getRefs(instance2, element) {
    var allRefs = Array.from(element.querySelectorAll("[data-ref]"));
    var childrenRefs = scopeSelectorPonyfill(element, "[data-component] [data-ref]", instance2.$id);
    var elements = allRefs.filter(function(ref) {
      return !childrenRefs.includes(ref);
    });
    var refs2 = elements.reduce(function($refs, $ref) {
      var refName = $ref.dataset.ref;
      var $realRef = $ref.__base__ ? $ref.__base__ : $ref;
      if (refName.endsWith("[]")) {
        refName = refName.replace(/\[\]$/, "");
        if (!$refs[refName]) {
          $refs[refName] = [];
        }
      }
      if ($refs[refName]) {
        if (Array.isArray($refs[refName])) {
          $refs[refName].push($realRef);
        } else {
          $refs[refName] = [$refs[refName], $realRef];
        }
      } else {
        $refs[refName] = $realRef;
      }
      return $refs;
    }, {});
    instance2.$emit("get:refs", refs2);
    return refs2;
  }

  // node_modules/@studiometa/js-toolkit/abstracts/Base/components.js
  function mountComponent(component) {
    if (component.__isAsync__) {
      component.then(function(instance2) {
        return instance2.$mount();
      });
    } else {
      component.$mount();
    }
  }
  function mountComponents(instance2) {
    if (!instance2.$children) {
      return;
    }
    debug(instance2, "mountComponents", instance2.$children);
    Object.values(instance2.$children).forEach(function($child) {
      $child.forEach(mountComponent);
    });
  }
  function destroyComponent(component) {
    if (component.__isAsync__) {
      component.then(function(instance2) {
        return instance2.$destroy();
      });
    } else {
      component.$destroy();
    }
  }
  function destroyComponents(instance2) {
    if (!instance2.$children) {
      return;
    }
    debug(instance2, "destroyComponents", instance2.$children);
    Object.values(instance2.$children).forEach(function($child) {
      $child.forEach(destroyComponent);
    });
  }

  // node_modules/@studiometa/js-toolkit/services/pointer.js
  const classCallCheck4 = __toModule(require_classCallCheck());
  const createClass4 = __toModule(require_createClass());
  const assertThisInitialized2 = __toModule(require_assertThisInitialized());
  const inherits2 = __toModule(require_inherits());
  const possibleConstructorReturn2 = __toModule(require_possibleConstructorReturn());
  const getPrototypeOf2 = __toModule(require_getPrototypeOf());
  const defineProperty3 = __toModule(require_defineProperty());

  // node_modules/@studiometa/js-toolkit/abstracts/Service.js
  const classCallCheck2 = __toModule(require_classCallCheck());
  const createClass2 = __toModule(require_createClass());
  var Service = /* @__PURE__ */ function() {
    function Service7() {
      classCallCheck2.default(this, Service7);
      this.callbacks = new Map();
      this.isInit = false;
    }
    createClass2.default(Service7, [{
      key: "init",
      value: function init() {
        throw new Error("The `init` method must be implemented.");
      }
    }, {
      key: "kill",
      value: function kill() {
        throw new Error("The `kill` method must be implemented.");
      }
    }, {
      key: "add",
      value: function add(key3, callback) {
        if (this.has(key3)) {
          throw new Error("A callback with the key `".concat(key3, "` has already been registered."));
        }
        if (this.callbacks.size === 0 && !this.isInit) {
          this.init();
          this.isInit = true;
        }
        this.callbacks.set(key3, callback);
        return this;
      }
    }, {
      key: "has",
      value: function has(key3) {
        return this.callbacks.has(key3);
      }
    }, {
      key: "get",
      value: function get(key3) {
        return this.callbacks.get(key3);
      }
    }, {
      key: "remove",
      value: function remove(key3) {
        this.callbacks.delete(key3);
        if (this.callbacks.size === 0 && this.isInit) {
          this.kill();
          this.isInit = false;
        }
        return this;
      }
    }, {
      key: "trigger",
      value: function trigger() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        this.callbacks.forEach(function(callback) {
          callback.apply(void 0, args);
        });
        return this;
      }
    }, {
      key: "props",
      get: function get() {
        throw new Error("The `props` getter must be implemented.");
      }
    }]);
    return Service7;
  }();

  // node_modules/@studiometa/js-toolkit/utils/throttle.js
  function throttle(fn) {
    var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 16;
    var lastCall = 0;
    return function() {
      var now = new Date().getTime();
      if (now - lastCall < delay) {
        return false;
      }
      lastCall = now;
      return fn.apply(void 0, arguments);
    };
  }

  // node_modules/@studiometa/js-toolkit/utils/debounce.js
  function debounce(fn) {
    var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 300;
    var timeout;
    return function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        fn.apply(void 0, args);
      }, delay);
    };
  }

  // node_modules/@studiometa/js-toolkit/services/raf.js
  const classCallCheck3 = __toModule(require_classCallCheck());
  const createClass3 = __toModule(require_createClass());
  const assertThisInitialized = __toModule(require_assertThisInitialized());
  const inherits = __toModule(require_inherits());
  const possibleConstructorReturn = __toModule(require_possibleConstructorReturn());
  const getPrototypeOf = __toModule(require_getPrototypeOf());
  const defineProperty2 = __toModule(require_defineProperty());

  // node_modules/@studiometa/js-toolkit/utils/nextFrame.js
  var getRaf = function getRaf2() {
    return typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;
  };
  function nextFrame() {
    var fn = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    var raf3 = getRaf();
    return new Promise(function(resolve) {
      raf3(function() {
        return raf3(function() {
          return resolve(fn());
        });
      });
    });
  }

  // node_modules/@studiometa/js-toolkit/services/raf.js
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = getPrototypeOf.default(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = getPrototypeOf.default(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn.default(this, result);
    };
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var Raf = /* @__PURE__ */ function(_Service) {
    inherits.default(Raf2, _Service);
    var _super = _createSuper(Raf2);
    function Raf2() {
      var _this;
      classCallCheck3.default(this, Raf2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      defineProperty2.default(assertThisInitialized.default(_this), "isTicking", false);
      return _this;
    }
    createClass3.default(Raf2, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        var raf3 = getRaf();
        var loop = function loop2() {
          _this2.trigger(_this2.props);
          if (!_this2.isTicking) {
            return;
          }
          raf3(loop2);
        };
        this.isTicking = true;
        loop();
      }
    }, {
      key: "kill",
      value: function kill() {
        this.isTicking = false;
      }
    }, {
      key: "props",
      get: function get() {
        return {
          time: window.performance.now()
        };
      }
    }]);
    return Raf2;
  }(Service);
  var instance = null;
  var raf_default = function() {
    if (!instance) {
      instance = new Raf();
    }
    var add = instance.add.bind(instance);
    var remove = instance.remove.bind(instance);
    var has = instance.has.bind(instance);
    var props = function props2() {
      return instance.props;
    };
    return {
      add,
      remove,
      has,
      props
    };
  };

  // node_modules/@studiometa/js-toolkit/services/pointer.js
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = getPrototypeOf2.default(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = getPrototypeOf2.default(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn2.default(this, result);
    };
  }
  function _isNativeReflectConstruct2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var Pointer = /* @__PURE__ */ function(_Service) {
    inherits2.default(Pointer2, _Service);
    var _super = _createSuper2(Pointer2);
    function Pointer2() {
      var _this;
      classCallCheck4.default(this, Pointer2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      defineProperty3.default(assertThisInitialized2.default(_this), "isDown", false);
      defineProperty3.default(assertThisInitialized2.default(_this), "y", window.innerHeight / 2);
      defineProperty3.default(assertThisInitialized2.default(_this), "yLast", window.innerHeight / 2);
      defineProperty3.default(assertThisInitialized2.default(_this), "x", window.innerWidth / 2);
      defineProperty3.default(assertThisInitialized2.default(_this), "xLast", window.innerWidth / 2);
      defineProperty3.default(assertThisInitialized2.default(_this), "event", void 0);
      return _this;
    }
    createClass4.default(Pointer2, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        var _useRaf = raf_default(), add = _useRaf.add, remove = _useRaf.remove;
        this.hasRaf = false;
        var debounced = debounce(function(event) {
          _this2.updateValues(event);
          remove("usePointer");
          _this2.trigger(_this2.props);
          _this2.hasRaf = false;
        }, 50);
        this.handler = throttle(function(event) {
          _this2.updateValues(event);
          if (!_this2.hasRaf) {
            add("usePointer", function() {
              _this2.trigger(_this2.props);
            });
            _this2.hasRaf = true;
          }
          debounced(event);
        }, 32).bind(this);
        this.downHandler = this.downHandler.bind(this);
        this.upHandler = this.upHandler.bind(this);
        document.documentElement.addEventListener("mouseenter", this.handler, {
          once: true
        });
        document.addEventListener("mousemove", this.handler, {
          passive: true
        });
        document.addEventListener("touchmove", this.handler, {
          passive: true
        });
        document.addEventListener("mousedown", this.downHandler, {
          passive: true
        });
        document.addEventListener("touchstart", this.downHandler, {
          passive: true
        });
        document.addEventListener("mouseup", this.upHandler, {
          passive: true
        });
        document.addEventListener("touchend", this.upHandler, {
          passive: true
        });
      }
    }, {
      key: "kill",
      value: function kill() {
        document.removeEventListener("mousemove", this.handler);
        document.removeEventListener("touchmove", this.handler);
        document.removeEventListener("mousedown", this.downHandler);
        document.removeEventListener("touchstart", this.downHandler);
        document.removeEventListener("mouseup", this.upHandler);
        document.removeEventListener("touchend", this.upHandler);
      }
    }, {
      key: "downHandler",
      value: function downHandler() {
        this.isDown = true;
        this.trigger(this.props);
      }
    }, {
      key: "upHandler",
      value: function upHandler() {
        this.isDown = false;
        this.trigger(this.props);
      }
    }, {
      key: "updateValues",
      value: function updateValues(event) {
        this.event = event;
        this.yLast = this.y;
        this.xLast = this.x;
        if (((event.touches || [])[0] || event || {}).clientY !== this.y) {
          this.y = ((event.touches || [])[0] || event || {}).clientY;
        }
        if (((event.touches || [])[0] || event || {}).clientX !== this.x) {
          this.x = ((event.touches || [])[0] || event || {}).clientX;
        }
      }
    }, {
      key: "props",
      get: function get() {
        return {
          event: this.event,
          isDown: this.isDown,
          x: this.x,
          y: this.y,
          changed: {
            x: this.x !== this.xLast,
            y: this.y !== this.yLast
          },
          last: {
            x: this.xLast,
            y: this.yLast
          },
          delta: {
            x: this.x - this.xLast,
            y: this.y - this.yLast
          },
          progress: {
            x: this.x / window.innerWidth,
            y: this.y / window.innerHeight
          },
          max: {
            x: window.innerWidth,
            y: window.innerHeight
          }
        };
      }
    }]);
    return Pointer2;
  }(Service);
  var pointer = null;
  var pointer_default = function() {
    if (!pointer) {
      pointer = new Pointer();
    }
    var add = pointer.add.bind(pointer);
    var remove = pointer.remove.bind(pointer);
    var has = pointer.has.bind(pointer);
    var props = function props2() {
      return pointer.props;
    };
    return {
      add,
      remove,
      has,
      props
    };
  };

  // node_modules/@studiometa/js-toolkit/services/resize.js
  const classCallCheck5 = __toModule(require_classCallCheck());
  const createClass5 = __toModule(require_createClass());
  const inherits3 = __toModule(require_inherits());
  const possibleConstructorReturn3 = __toModule(require_possibleConstructorReturn());
  const getPrototypeOf3 = __toModule(require_getPrototypeOf());
  function _createSuper3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct3();
    return function _createSuperInternal() {
      var Super = getPrototypeOf3.default(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = getPrototypeOf3.default(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn3.default(this, result);
    };
  }
  function _isNativeReflectConstruct3() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var Resize = /* @__PURE__ */ function(_Service) {
    inherits3.default(Resize2, _Service);
    var _super = _createSuper3(Resize2);
    function Resize2() {
      classCallCheck5.default(this, Resize2);
      return _super.apply(this, arguments);
    }
    createClass5.default(Resize2, [{
      key: "init",
      value: function init() {
        var _this = this;
        this.handler = debounce(function() {
          _this.trigger(_this.props);
        }).bind(this);
        if (this.canUseResizeObserver) {
          this.resizeObserver = new ResizeObserver(this.handler);
          this.resizeObserver.observe(document.documentElement);
        } else {
          window.addEventListener("resize", this.handler);
        }
      }
    }, {
      key: "kill",
      value: function kill() {
        if (this.canUseResizeObserver) {
          this.resizeObserver.disconnect();
        } else {
          window.removeEventListener("resize", this.handler);
        }
        delete this.resizeObserver;
      }
    }, {
      key: "props",
      get: function get() {
        var props = {
          width: window.innerWidth,
          height: window.innerHeight,
          ratio: window.innerWidth / window.innerHeight,
          orientation: "square"
        };
        if (props.ratio > 1) {
          props.orientation = "landscape";
        }
        if (props.ratio < 1) {
          props.orientation = "portrait";
        }
        if (this.breakpointElement) {
          props.breakpoint = this.breakpoint;
          props.breakpoints = this.breakpoints;
        }
        return props;
      }
    }, {
      key: "breakpointElement",
      get: function get() {
        return document.querySelector("[data-breakpoint]") || null;
      }
    }, {
      key: "breakpoint",
      get: function get() {
        return window.getComputedStyle(this.breakpointElement, "::before").getPropertyValue("content").replace(/"/g, "");
      }
    }, {
      key: "breakpoints",
      get: function get() {
        var breakpoints = window.getComputedStyle(this.breakpointElement, "::after").getPropertyValue("content").replace(/"/g, "");
        return breakpoints.split(",");
      }
    }, {
      key: "canUseResizeObserver",
      get: function get() {
        return typeof window.ResizeObserver !== "undefined";
      }
    }]);
    return Resize2;
  }(Service);
  var resize = null;
  var resize_default = function() {
    if (!resize) {
      resize = new Resize();
    }
    var add = resize.add.bind(resize);
    var remove = resize.remove.bind(resize);
    var has = resize.has.bind(resize);
    var props = function props2() {
      return resize.props;
    };
    return {
      add,
      remove,
      has,
      props
    };
  };

  // node_modules/@studiometa/js-toolkit/services/scroll.js
  const classCallCheck6 = __toModule(require_classCallCheck());
  const createClass6 = __toModule(require_createClass());
  const assertThisInitialized3 = __toModule(require_assertThisInitialized());
  const inherits4 = __toModule(require_inherits());
  const possibleConstructorReturn4 = __toModule(require_possibleConstructorReturn());
  const getPrototypeOf4 = __toModule(require_getPrototypeOf());
  const defineProperty4 = __toModule(require_defineProperty());
  function _createSuper4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct4();
    return function _createSuperInternal() {
      var Super = getPrototypeOf4.default(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = getPrototypeOf4.default(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn4.default(this, result);
    };
  }
  function _isNativeReflectConstruct4() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var Scroll = /* @__PURE__ */ function(_Service) {
    inherits4.default(Scroll2, _Service);
    var _super = _createSuper4(Scroll2);
    function Scroll2() {
      var _this;
      classCallCheck6.default(this, Scroll2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      defineProperty4.default(assertThisInitialized3.default(_this), "y", window.pageYOffset);
      defineProperty4.default(assertThisInitialized3.default(_this), "yLast", window.pageYOffset);
      defineProperty4.default(assertThisInitialized3.default(_this), "x", window.pageXOffset);
      defineProperty4.default(assertThisInitialized3.default(_this), "xLast", window.pageXOffset);
      return _this;
    }
    createClass6.default(Scroll2, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        var debounced = debounce(function() {
          _this2.trigger(_this2.props);
          nextFrame(function() {
            _this2.trigger(_this2.props);
          });
        }, 50);
        this.handler = throttle(function() {
          _this2.trigger(_this2.props);
          debounced();
        }, 32).bind(this);
        document.addEventListener("scroll", this.handler, {
          passive: true
        });
      }
    }, {
      key: "kill",
      value: function kill() {
        document.removeEventListener("scroll", this.handler);
      }
    }, {
      key: "props",
      get: function get() {
        this.yLast = this.y;
        this.xLast = this.x;
        if (window.pageYOffset !== this.y) {
          this.y = window.pageYOffset;
        }
        if (window.pageXOffset !== this.x) {
          this.x = window.pageXOffset;
        }
        return {
          x: this.x,
          y: this.y,
          changed: {
            x: this.x !== this.xLast,
            y: this.y !== this.yLast
          },
          last: {
            x: this.xLast,
            y: this.yLast
          },
          delta: {
            x: this.x - this.xLast,
            y: this.y - this.yLast
          },
          progress: {
            x: this.max.x === 0 ? 1 : this.x / this.max.x,
            y: this.max.y === 0 ? 1 : this.y / this.max.y
          },
          max: this.max
        };
      }
    }, {
      key: "max",
      get: function get() {
        return {
          x: (document.scrollingElement || document.body).scrollWidth - window.innerWidth,
          y: (document.scrollingElement || document.body).scrollHeight - window.innerHeight
        };
      }
    }]);
    return Scroll2;
  }(Service);
  var scroll = null;
  var scroll_default = function() {
    if (!scroll) {
      scroll = new Scroll();
    }
    var add = scroll.add.bind(scroll);
    var remove = scroll.remove.bind(scroll);
    var has = scroll.has.bind(scroll);
    var props = function props2() {
      return scroll.props;
    };
    return {
      add,
      remove,
      has,
      props
    };
  };

  // node_modules/@studiometa/js-toolkit/services/key.js
  const slicedToArray3 = __toModule(require_slicedToArray());
  const classCallCheck7 = __toModule(require_classCallCheck());
  const createClass7 = __toModule(require_createClass());
  const assertThisInitialized4 = __toModule(require_assertThisInitialized());
  const inherits5 = __toModule(require_inherits());
  const possibleConstructorReturn5 = __toModule(require_possibleConstructorReturn());
  const getPrototypeOf5 = __toModule(require_getPrototypeOf());
  const defineProperty5 = __toModule(require_defineProperty());

  // node_modules/@studiometa/js-toolkit/utils/keyCodes.js
  var keyCodes_default = {
    ENTER: 13,
    SPACE: 32,
    TAB: 9,
    ESC: 27,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };

  // node_modules/@studiometa/js-toolkit/services/key.js
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key3) {
          defineProperty5.default(target, key3, source[key3]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key3) {
          Object.defineProperty(target, key3, Object.getOwnPropertyDescriptor(source, key3));
        });
      }
    }
    return target;
  }
  function _createSuper5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct5();
    return function _createSuperInternal() {
      var Super = getPrototypeOf5.default(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = getPrototypeOf5.default(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn5.default(this, result);
    };
  }
  function _isNativeReflectConstruct5() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var Key = /* @__PURE__ */ function(_Service) {
    inherits5.default(Key2, _Service);
    var _super = _createSuper5(Key2);
    function Key2() {
      var _this;
      classCallCheck7.default(this, Key2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      defineProperty5.default(assertThisInitialized4.default(_this), "event", {});
      defineProperty5.default(assertThisInitialized4.default(_this), "triggered", 0);
      defineProperty5.default(assertThisInitialized4.default(_this), "previousEvent", {});
      return _this;
    }
    createClass7.default(Key2, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        this.handler = function(event) {
          _this2.event = event;
          _this2.trigger(_this2.props);
        };
        document.addEventListener("keydown", this.handler, {
          passive: false
        });
        document.addEventListener("keyup", this.handler, {
          passive: false
        });
      }
    }, {
      key: "kill",
      value: function kill() {
        document.removeEventListener("keydown", this.handler);
        document.removeEventListener("keyup", this.handler);
      }
    }, {
      key: "props",
      get: function get() {
        var _this3 = this;
        var keys = Object.entries(keyCodes_default).reduce(function(acc, _ref) {
          var _ref2 = slicedToArray3.default(_ref, 2), name = _ref2[0], code = _ref2[1];
          acc[name] = code === _this3.event.keyCode;
          return acc;
        }, {});
        if (!this.previousEvent.type) {
          this.triggered = 0;
        }
        if (this.event.type === "keydown" && this.previousEvent.type === "keydown") {
          this.triggered += 1;
        } else {
          this.triggered = 1;
        }
        this.previousEvent = this.event;
        return _objectSpread({
          event: this.event,
          triggered: this.triggered,
          direction: this.event.type === "keydown" ? "down" : "up",
          isUp: this.event.type === "keyup",
          isDown: this.event.type === "keydown"
        }, keys);
      }
    }]);
    return Key2;
  }(Service);
  var key = null;
  var key_default = function() {
    if (!key) {
      key = new Key();
    }
    var add = key.add.bind(key);
    var remove = key.remove.bind(key);
    var has = key.has.bind(key);
    var props = function props2() {
      return key.props;
    };
    return {
      add,
      remove,
      has,
      props
    };
  };

  // node_modules/@studiometa/js-toolkit/abstracts/Base/services.js
  function initService(instance2, method, service) {
    if (!hasMethod(instance2, method)) {
      return function() {
      };
    }
    var _service = service(), add = _service.add, remove = _service.remove;
    add(instance2.$id, function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callMethod.apply(void 0, [instance2, method].concat(args));
    });
    return function() {
      return remove(instance2.$id);
    };
  }
  function bindServices(instance2) {
    var unbindMethods = [initService(instance2, "scrolled", scroll_default), initService(instance2, "resized", resize_default), initService(instance2, "ticked", raf_default), initService(instance2, "moved", pointer_default), initService(instance2, "keyed", key_default)];
    if (hasMethod(instance2, "loaded")) {
      var loadedHandler = function loadedHandler2(event) {
        callMethod(instance2, "loaded", {
          event
        });
      };
      window.addEventListener("load", loadedHandler);
      unbindMethods.push(function() {
        window.removeEventListener("load", loadedHandler);
      });
    }
    return unbindMethods;
  }

  // node_modules/@studiometa/js-toolkit/abstracts/Base/events.js
  const toConsumableArray2 = __toModule(require_toConsumableArray());
  const slicedToArray4 = __toModule(require_slicedToArray());
  function bindRootEvents(instance2, eventMethods) {
    return eventMethods.map(function(eventMethod) {
      var eventName = eventMethod.replace(/^on/, "").toLowerCase();
      var handler = function handler2() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        debug.apply(void 0, [instance2, eventMethod, instance2.$el].concat(args));
        instance2[eventMethod].apply(instance2, args);
      };
      instance2.$el.addEventListener(eventName, handler);
      return function() {
        instance2.$el.removeEventListener(eventName, handler);
      };
    });
  }
  function bindRefsEvents(instance2, eventMethods) {
    var unbindMethods = [];
    Object.entries(instance2.$refs).forEach(function(_ref) {
      var _ref2 = slicedToArray4.default(_ref, 2), refName = _ref2[0], $refOrRefs = _ref2[1];
      var $refs = Array.isArray($refOrRefs) ? $refOrRefs : [$refOrRefs];
      var refEventMethod = "on".concat(refName.replace(/^\w/, function(c) {
        return c.toUpperCase();
      }));
      eventMethods.filter(function(eventMethod) {
        return eventMethod.startsWith(refEventMethod);
      }).forEach(function(eventMethod) {
        $refs.forEach(function($ref, index) {
          var eventName = eventMethod.replace(refEventMethod, "").toLowerCase();
          var handler = function handler2() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            debug.apply(void 0, [instance2, eventMethod, $ref].concat(args, [index]));
            instance2[eventMethod].apply(instance2, args.concat([index]));
          };
          debug(instance2, "binding ref event", refName, eventName);
          if ($ref.constructor && $ref.constructor.__isBase__) {
            $ref = $ref.$el;
          }
          $ref.addEventListener(eventName, handler);
          var unbindMethod = function unbindMethod2() {
            debug(instance2, "unbinding ref event", eventMethods);
            $ref.removeEventListener(eventName, handler);
          };
          unbindMethods.push(unbindMethod);
        });
      });
    });
    return unbindMethods;
  }
  function bindChildrenEvents(instance2, eventMethods) {
    var unbindMethods = [];
    Object.entries(instance2.$children).forEach(function(_ref3) {
      var _ref4 = slicedToArray4.default(_ref3, 2), childName = _ref4[0], $children = _ref4[1];
      var childEventMethod = "on".concat(childName.replace(/^\w/, function(c) {
        return c.toUpperCase();
      }));
      eventMethods.filter(function(eventMethod) {
        return eventMethod.startsWith(childEventMethod);
      }).forEach(function(eventMethod) {
        $children.forEach(function($child, index) {
          var eventName = eventMethod.replace(childEventMethod, "").toLowerCase();
          var handler = function handler2() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }
            debug.apply(void 0, [instance2, eventMethod, $child].concat(args, [index]));
            instance2[eventMethod].apply(instance2, args.concat([index]));
          };
          debug(instance2, "binding child event", childName, eventName);
          var unbindMethod = $child.$on(eventName, handler);
          unbindMethods.push(function() {
            debug(instance2, "unbinding child event", childName, eventName);
            unbindMethod();
          });
        });
      });
    });
    return unbindMethods;
  }
  function bindEvents(instance2) {
    var ROOT_EVENT_REGEX = /^on[A-Z][a-z]+$/;
    var REFS_CHILDREN_EVENT_REGEX = /^on([A-Z][a-z]+)([A-Z][a-z]+)+$/;
    var eventMethods = getAllProperties(instance2).reduce(function(acc, _ref5) {
      var _ref6 = slicedToArray4.default(_ref5, 1), name = _ref6[0];
      if (ROOT_EVENT_REGEX.test(name)) {
        acc.root.push(name);
        return acc;
      }
      if (REFS_CHILDREN_EVENT_REGEX.test(name)) {
        acc.refsOrChildren.push(name);
      }
      return acc;
    }, {
      root: [],
      refsOrChildren: []
    });
    var unbindMethods = [].concat(toConsumableArray2.default(bindRootEvents(instance2, eventMethods.root)), toConsumableArray2.default(bindRefsEvents(instance2, eventMethods.refsOrChildren)), toConsumableArray2.default(bindChildrenEvents(instance2, eventMethods.refsOrChildren)));
    return unbindMethods;
  }

  // node_modules/@studiometa/js-toolkit/abstracts/Base/index.js
  function _createSuper6(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct6();
    return function _createSuperInternal() {
      var Super = getPrototypeOf6.default(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = getPrototypeOf6.default(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn6.default(this, result);
    };
  }
  function _isNativeReflectConstruct6() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var Base = /* @__PURE__ */ function(_EventManager) {
    inherits6.default(Base3, _EventManager);
    var _super = _createSuper6(Base3);
    createClass8.default(Base3, [{
      key: "$refs",
      get: function get() {
        return getRefs(this, this.$el);
      }
    }, {
      key: "$children",
      get: function get() {
        return getChildren(this, this.$el, this.config.components || {});
      }
    }, {
      key: "$options",
      get: function get() {
        return getOptions(this, this.$el, this.config);
      },
      set: function set(newOptions) {
        setOptions(this, this.$el, newOptions);
      }
    }]);
    function Base3(element) {
      var _this;
      classCallCheck8.default(this, Base3);
      _this = _super.call(this);
      if (!_this.config) {
        throw new Error("The `config` getter must be defined.");
      }
      if (!_this.config.name) {
        throw new Error("The `config.name` property is required.");
      }
      if (!element) {
        throw new Error("The root element must be defined.");
      }
      Object.defineProperties(assertThisInitialized5.default(_this), {
        $id: {
          value: "".concat(_this.config.name, "-").concat(non_secure.default())
        },
        $isMounted: {
          value: false,
          writable: true
        },
        $el: {
          value: element
        }
      });
      if (!_this.$el.__base__) {
        Object.defineProperty(_this.$el, "__base__", {
          get: function get() {
            return assertThisInitialized5.default(_this);
          },
          configurable: true
        });
      }
      autoBind(assertThisInitialized5.default(_this), {
        exclude: ["$mount", "$update", "$destroy", "$terminate", "$log", "$on", "$once", "$off", "$emit", "mounted", "loaded", "ticked", "resized", "moved", "keyed", "scrolled", "destroyed", "terminated"].concat(toConsumableArray3.default(_this._excludeFromAutoBind || []))
      });
      var unbindMethods = [];
      _this.$on("mounted", function() {
        mountComponents(assertThisInitialized5.default(_this));
        unbindMethods = [].concat(toConsumableArray3.default(bindServices(assertThisInitialized5.default(_this))), toConsumableArray3.default(bindEvents(assertThisInitialized5.default(_this))));
        _this.$isMounted = true;
      });
      _this.$on("updated", function() {
        unbindMethods.forEach(function(method) {
          return method();
        });
        mountComponents(assertThisInitialized5.default(_this));
        unbindMethods = [].concat(toConsumableArray3.default(bindServices(assertThisInitialized5.default(_this))), toConsumableArray3.default(bindEvents(assertThisInitialized5.default(_this))));
      });
      _this.$on("destroyed", function() {
        _this.$isMounted = false;
        unbindMethods.forEach(function(method) {
          return method();
        });
        destroyComponents(assertThisInitialized5.default(_this));
      });
      if (!_this.__isChild__) {
        _this.$mount();
        Object.defineProperty(assertThisInitialized5.default(_this), "$parent", {
          get: function get() {
            return null;
          }
        });
      }
      debug(assertThisInitialized5.default(_this), "constructor", assertThisInitialized5.default(_this));
      return possibleConstructorReturn6.default(_this, assertThisInitialized5.default(_this));
    }
    createClass8.default(Base3, [{
      key: "$log",
      value: function $log() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return this.$options.log ? window.console.log.apply(window, [this.config.name].concat(args)) : function() {
        };
      }
    }, {
      key: "$mount",
      value: function $mount() {
        debug(this, "$mount");
        callMethod(this, "mounted");
        return this;
      }
    }, {
      key: "$update",
      value: function $update() {
        debug(this, "$update");
        callMethod(this, "updated");
        return this;
      }
    }, {
      key: "$destroy",
      value: function $destroy() {
        debug(this, "$destroy");
        callMethod(this, "destroyed");
        return this;
      }
    }, {
      key: "$terminate",
      value: function $terminate() {
        debug(this, "$terminate");
        this.$destroy();
        callMethod(this, "terminated");
        delete this.$el.__base__;
        Object.defineProperty(this.$el, "__base__", {
          value: "terminated",
          configurable: false,
          writable: false
        });
      }
    }], [{
      key: "$factory",
      value: function $factory(nameOrSelector) {
        var _this2 = this;
        if (!nameOrSelector) {
          throw new Error("The $factory method requires a component\u2019s name or selector to be specified.");
        }
        return getComponentElements(nameOrSelector).map(function(el) {
          return new _this2(el);
        });
      }
    }]);
    return Base3;
  }(EventManager);
  Base.__isBase__ = true;

  // node_modules/@studiometa/js-toolkit/index.js
  var js_toolkit_default = Base;
  require_app();
})();
//# sourceMappingURL=app.js.map
