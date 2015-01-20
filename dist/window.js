"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Window = (function () {
  function Window(size) {
    var w = size.width || "100vw";
    var h = size.height || "100vh";
    this.el = document.body;
    this.el.style.width = w;
    this.el.style.height = h;
  }

  _prototypeProperties(Window, null, {
    makeKeyAndVisible: {
      value: function makeKeyAndVisible() {
        if (this.rootViewController) {
          this.el.appendChild(this.rootViewController.view.el);
          this.rootViewController.viewDidLoad();
          this.rootViewController._render();
        }
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Window;
})();

module.exports = Window;