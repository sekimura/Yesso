"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Application = (function () {
  function Application() {}

  _prototypeProperties(Application, null, {
    run: {
      value: function run() {
        if (this.delegate && typeof this.delegate.application === "function") {
          this.delegate.application();
        }
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Application;
})();

module.exports = Application;