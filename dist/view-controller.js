"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var View = _interopRequire(require("./view"));

var ViewController = (function () {
  function ViewController() {
    this.view = new View();
    this.view.el.style.width = "100vw";
    this.view.el.style.height = "100vh";
  }

  _prototypeProperties(ViewController, null, {
    _render: {
      value: function Render() {
        this.view._render();
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    viewDidLoad: {
      value: function viewDidLoad() {},
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return ViewController;
})();

module.exports = ViewController;