"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var View = (function () {
  function View(tagNameOrElement) {
    if (typeof tagNameOrElement === "undefined" || typeof tagNameOrElement === "string") {
      tagNameOrElement = tagNameOrElement || "div";
      this.el = document.createElement(tagNameOrElement);
    } else {
      // assume it's an Element
      this.el = tagNameOrElement;
    }
    this.subviews = [];
  }

  _prototypeProperties(View, null, {
    addSubview: {
      value: function addSubview(view) {
        view.el.style.position = "absolute";
        this.subviews.push(view);
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    pinEdgeToSuperviewEdge: {
      value: function pinEdgeToSuperviewEdge(edge) {
        this.el.style[edge] = "0";
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    alignAxisToSuperviewAxis: {
      value: function alignAxisToSuperviewAxis(axis) {
        if (axis === "vertical") {
          this.el.classList.add("alignAxisToSuperviewAxis--vertical");
        }
        if (axis === "horizontal") {
          this.el.classList.add("alignAxisToSuperviewAxis--horizontal");
        }
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    _render: {
      value: function Render() {
        if (this.subviews.length === 0) {
          return this.el;
        }
        var docFragment = document.createDocumentFragment();
        for (var i = 0; i < this.subviews.length; i++) {
          docFragment.appendChild(this.subviews[i]._render());
        }
        this.el.appendChild(docFragment);
        return this.el;
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return View;
})();

module.exports = View;