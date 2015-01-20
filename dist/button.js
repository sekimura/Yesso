"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _get = function get(object, property, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    return desc.value;
  } else {
    var getter = desc.get;
    if (getter === undefined) {
      return undefined;
    }
    return getter.call(receiver);
  }
};

var _inherits = function (subClass, superClass) {
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
  if (superClass) subClass.__proto__ = superClass;
};

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var View = _interopRequire(require("./view"));

var Label = _interopRequire(require("./label"));

var Button = (function (View) {
  function Button() {
    _get(Object.getPrototypeOf(Button.prototype), "constructor", this).call(this, "button");
    this.subviews.push(new Label());
  }

  _inherits(Button, View);

  _prototypeProperties(Button, null, {
    titleLabel: {
      get: function () {
        return this.subviews[0];
      },
      enumerable: true,
      configurable: true
    }
  });

  return Button;
})(View);

module.exports = Button;