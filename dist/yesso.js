(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var AppDelegate = _interopRequire(require("./app-delegate"));

var Application = _interopRequire(require("./application"));

var ApplicationMain = _interopRequire(require("./main"));

var Button = _interopRequire(require("./button"));

var Label = _interopRequire(require("./label"));

var View = _interopRequire(require("./view"));

var ViewController = _interopRequire(require("./view-controller"));

var Window = _interopRequire(require("./window"));

module.exports = {
  AppDelegate: AppDelegate,
  Application: Application,
  ApplicationMain: ApplicationMain,
  Button: Button,
  Label: Label,
  View: View,
  ViewController: ViewController,
  Window: Window
};
},{"./app-delegate":2,"./application":3,"./button":4,"./label":5,"./main":6,"./view":8,"./view-controller":7,"./window":9}],2:[function(require,module,exports){
"use strict";

var AppDelegate = function AppDelegate() {};

module.exports = AppDelegate;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{"./label":5,"./view":8}],5:[function(require,module,exports){
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

var Label = (function (View) {
  function Label() {
    _get(Object.getPrototypeOf(Label.prototype), "constructor", this).call(this, "span");
  }

  _inherits(Label, View);

  _prototypeProperties(Label, null, {
    text: {
      get: function () {
        return this.el.innerText;
      },
      set: function (newValue) {
        return this.el.innerText = newValue;
      },
      enumerable: true,
      configurable: true
    }
  });

  return Label;
})(View);

module.exports = Label;
},{"./view":8}],6:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var Application = _interopRequire(require("./application"));

function ApplicationMain(principalClassName, delegateClassName) {
  //  principalClassName = principalClassName || 'Application';
  //  var principalClass = window[principalClassName];
  //  var app = Object.create(principalClass.prototype);
  //
  //  if (delegateClassName && window[delegateClassName]) {
  //    var delegateClass = window[delegateClassName];
  //    var delegate = Object.create(delegateClass.prototype);
  //    app.delegate = delegate;
  //  }
  var app = principalClassName || new Application();
  app.delegate = delegateClassName;

  app.run();
}

module.exports = ApplicationMain;
},{"./application":3}],7:[function(require,module,exports){
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
},{"./view":8}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0bzUvaW5kZXguanMiLCJ0bzUvYXBwLWRlbGVnYXRlLmpzIiwidG81L2FwcGxpY2F0aW9uLmpzIiwidG81L2J1dHRvbi5qcyIsInRvNS9sYWJlbC5qcyIsInRvNS9tYWluLmpzIiwidG81L3ZpZXctY29udHJvbGxlci5qcyIsInRvNS92aWV3LmpzIiwidG81L3dpbmRvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIChvYmpbXCJkZWZhdWx0XCJdIHx8IG9iaik7XG59O1xuXG52YXIgQXBwRGVsZWdhdGUgPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vYXBwLWRlbGVnYXRlXCIpKTtcblxudmFyIEFwcGxpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL2FwcGxpY2F0aW9uXCIpKTtcblxudmFyIEFwcGxpY2F0aW9uTWFpbiA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9tYWluXCIpKTtcblxudmFyIEJ1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9idXR0b25cIikpO1xuXG52YXIgTGFiZWwgPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vbGFiZWxcIikpO1xuXG52YXIgVmlldyA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi92aWV3XCIpKTtcblxudmFyIFZpZXdDb250cm9sbGVyID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL3ZpZXctY29udHJvbGxlclwiKSk7XG5cbnZhciBXaW5kb3cgPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vd2luZG93XCIpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFwcERlbGVnYXRlOiBBcHBEZWxlZ2F0ZSxcbiAgQXBwbGljYXRpb246IEFwcGxpY2F0aW9uLFxuICBBcHBsaWNhdGlvbk1haW46IEFwcGxpY2F0aW9uTWFpbixcbiAgQnV0dG9uOiBCdXR0b24sXG4gIExhYmVsOiBMYWJlbCxcbiAgVmlldzogVmlldyxcbiAgVmlld0NvbnRyb2xsZXI6IFZpZXdDb250cm9sbGVyLFxuICBXaW5kb3c6IFdpbmRvd1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEFwcERlbGVnYXRlID0gZnVuY3Rpb24gQXBwRGVsZWdhdGUoKSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBEZWxlZ2F0ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9wcm90b3R5cGVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKGNoaWxkLCBzdGF0aWNQcm9wcywgaW5zdGFuY2VQcm9wcykge1xuICBpZiAoc3RhdGljUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLCBzdGF0aWNQcm9wcyk7XG4gIGlmIChpbnN0YW5jZVByb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZC5wcm90b3R5cGUsIGluc3RhbmNlUHJvcHMpO1xufTtcblxudmFyIEFwcGxpY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXBwbGljYXRpb24oKSB7fVxuXG4gIF9wcm90b3R5cGVQcm9wZXJ0aWVzKEFwcGxpY2F0aW9uLCBudWxsLCB7XG4gICAgcnVuOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcnVuKCkge1xuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZSAmJiB0eXBlb2YgdGhpcy5kZWxlZ2F0ZS5hcHBsaWNhdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hcHBsaWNhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQXBwbGljYXRpb247XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcGxpY2F0aW9uOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3Byb3RvdHlwZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAoY2hpbGQsIHN0YXRpY1Byb3BzLCBpbnN0YW5jZVByb3BzKSB7XG4gIGlmIChzdGF0aWNQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQsIHN0YXRpY1Byb3BzKTtcbiAgaWYgKGluc3RhbmNlUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLnByb3RvdHlwZSwgaW5zdGFuY2VQcm9wcyk7XG59O1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYyAmJiBkZXNjLndyaXRhYmxlKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBfaW50ZXJvcFJlcXVpcmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKG9ialtcImRlZmF1bHRcIl0gfHwgb2JqKTtcbn07XG5cbnZhciBWaWV3ID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL3ZpZXdcIikpO1xuXG52YXIgTGFiZWwgPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vbGFiZWxcIikpO1xuXG52YXIgQnV0dG9uID0gKGZ1bmN0aW9uIChWaWV3KSB7XG4gIGZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihCdXR0b24ucHJvdG90eXBlKSwgXCJjb25zdHJ1Y3RvclwiLCB0aGlzKS5jYWxsKHRoaXMsIFwiYnV0dG9uXCIpO1xuICAgIHRoaXMuc3Vidmlld3MucHVzaChuZXcgTGFiZWwoKSk7XG4gIH1cblxuICBfaW5oZXJpdHMoQnV0dG9uLCBWaWV3KTtcblxuICBfcHJvdG90eXBlUHJvcGVydGllcyhCdXR0b24sIG51bGwsIHtcbiAgICB0aXRsZUxhYmVsOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vidmlld3NbMF07XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIEJ1dHRvbjtcbn0pKFZpZXcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9wcm90b3R5cGVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKGNoaWxkLCBzdGF0aWNQcm9wcywgaW5zdGFuY2VQcm9wcykge1xuICBpZiAoc3RhdGljUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLCBzdGF0aWNQcm9wcyk7XG4gIGlmIChpbnN0YW5jZVByb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZC5wcm90b3R5cGUsIGluc3RhbmNlUHJvcHMpO1xufTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MgJiYgZGVzYy53cml0YWJsZSkge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgX2ludGVyb3BSZXF1aXJlID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIChvYmpbXCJkZWZhdWx0XCJdIHx8IG9iaik7XG59O1xuXG52YXIgVmlldyA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi92aWV3XCIpKTtcblxudmFyIExhYmVsID0gKGZ1bmN0aW9uIChWaWV3KSB7XG4gIGZ1bmN0aW9uIExhYmVsKCkge1xuICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKExhYmVsLnByb3RvdHlwZSksIFwiY29uc3RydWN0b3JcIiwgdGhpcykuY2FsbCh0aGlzLCBcInNwYW5cIik7XG4gIH1cblxuICBfaW5oZXJpdHMoTGFiZWwsIFZpZXcpO1xuXG4gIF9wcm90b3R5cGVQcm9wZXJ0aWVzKExhYmVsLCBudWxsLCB7XG4gICAgdGV4dDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLmlubmVyVGV4dDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5pbm5lclRleHQgPSBuZXdWYWx1ZTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gTGFiZWw7XG59KShWaWV3KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYWJlbDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAob2JqW1wiZGVmYXVsdFwiXSB8fCBvYmopO1xufTtcblxudmFyIEFwcGxpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL2FwcGxpY2F0aW9uXCIpKTtcblxuZnVuY3Rpb24gQXBwbGljYXRpb25NYWluKHByaW5jaXBhbENsYXNzTmFtZSwgZGVsZWdhdGVDbGFzc05hbWUpIHtcbiAgLy8gIHByaW5jaXBhbENsYXNzTmFtZSA9IHByaW5jaXBhbENsYXNzTmFtZSB8fCAnQXBwbGljYXRpb24nO1xuICAvLyAgdmFyIHByaW5jaXBhbENsYXNzID0gd2luZG93W3ByaW5jaXBhbENsYXNzTmFtZV07XG4gIC8vICB2YXIgYXBwID0gT2JqZWN0LmNyZWF0ZShwcmluY2lwYWxDbGFzcy5wcm90b3R5cGUpO1xuICAvL1xuICAvLyAgaWYgKGRlbGVnYXRlQ2xhc3NOYW1lICYmIHdpbmRvd1tkZWxlZ2F0ZUNsYXNzTmFtZV0pIHtcbiAgLy8gICAgdmFyIGRlbGVnYXRlQ2xhc3MgPSB3aW5kb3dbZGVsZWdhdGVDbGFzc05hbWVdO1xuICAvLyAgICB2YXIgZGVsZWdhdGUgPSBPYmplY3QuY3JlYXRlKGRlbGVnYXRlQ2xhc3MucHJvdG90eXBlKTtcbiAgLy8gICAgYXBwLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gIC8vICB9XG4gIHZhciBhcHAgPSBwcmluY2lwYWxDbGFzc05hbWUgfHwgbmV3IEFwcGxpY2F0aW9uKCk7XG4gIGFwcC5kZWxlZ2F0ZSA9IGRlbGVnYXRlQ2xhc3NOYW1lO1xuXG4gIGFwcC5ydW4oKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHBsaWNhdGlvbk1haW47IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcHJvdG90eXBlUHJvcGVydGllcyA9IGZ1bmN0aW9uIChjaGlsZCwgc3RhdGljUHJvcHMsIGluc3RhbmNlUHJvcHMpIHtcbiAgaWYgKHN0YXRpY1Byb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZCwgc3RhdGljUHJvcHMpO1xuICBpZiAoaW5zdGFuY2VQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQucHJvdG90eXBlLCBpbnN0YW5jZVByb3BzKTtcbn07XG5cbnZhciBfaW50ZXJvcFJlcXVpcmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKG9ialtcImRlZmF1bHRcIl0gfHwgb2JqKTtcbn07XG5cbnZhciBWaWV3ID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL3ZpZXdcIikpO1xuXG52YXIgVmlld0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWaWV3Q29udHJvbGxlcigpIHtcbiAgICB0aGlzLnZpZXcgPSBuZXcgVmlldygpO1xuICAgIHRoaXMudmlldy5lbC5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcbiAgICB0aGlzLnZpZXcuZWwuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICB9XG5cbiAgX3Byb3RvdHlwZVByb3BlcnRpZXMoVmlld0NvbnRyb2xsZXIsIG51bGwsIHtcbiAgICBfcmVuZGVyOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gUmVuZGVyKCkge1xuICAgICAgICB0aGlzLnZpZXcuX3JlbmRlcigpO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgdmlld0RpZExvYWQ6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2aWV3RGlkTG9hZCgpIHt9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gVmlld0NvbnRyb2xsZXI7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdDb250cm9sbGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3Byb3RvdHlwZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAoY2hpbGQsIHN0YXRpY1Byb3BzLCBpbnN0YW5jZVByb3BzKSB7XG4gIGlmIChzdGF0aWNQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQsIHN0YXRpY1Byb3BzKTtcbiAgaWYgKGluc3RhbmNlUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLnByb3RvdHlwZSwgaW5zdGFuY2VQcm9wcyk7XG59O1xuXG52YXIgVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFZpZXcodGFnTmFtZU9yRWxlbWVudCkge1xuICAgIGlmICh0eXBlb2YgdGFnTmFtZU9yRWxlbWVudCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgdGFnTmFtZU9yRWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGFnTmFtZU9yRWxlbWVudCA9IHRhZ05hbWVPckVsZW1lbnQgfHwgXCJkaXZcIjtcbiAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWVPckVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhc3N1bWUgaXQncyBhbiBFbGVtZW50XG4gICAgICB0aGlzLmVsID0gdGFnTmFtZU9yRWxlbWVudDtcbiAgICB9XG4gICAgdGhpcy5zdWJ2aWV3cyA9IFtdO1xuICB9XG5cbiAgX3Byb3RvdHlwZVByb3BlcnRpZXMoVmlldywgbnVsbCwge1xuICAgIGFkZFN1YnZpZXc6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRTdWJ2aWV3KHZpZXcpIHtcbiAgICAgICAgdmlldy5lbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5zdWJ2aWV3cy5wdXNoKHZpZXcpO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgcGluRWRnZVRvU3VwZXJ2aWV3RWRnZToge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHBpbkVkZ2VUb1N1cGVydmlld0VkZ2UoZWRnZSkge1xuICAgICAgICB0aGlzLmVsLnN0eWxlW2VkZ2VdID0gXCIwXCI7XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBhbGlnbkF4aXNUb1N1cGVydmlld0F4aXM6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkF4aXNUb1N1cGVydmlld0F4aXMoYXhpcykge1xuICAgICAgICBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiYWxpZ25BeGlzVG9TdXBlcnZpZXdBeGlzLS12ZXJ0aWNhbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoXCJhbGlnbkF4aXNUb1N1cGVydmlld0F4aXMtLWhvcml6b250YWxcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LFxuICAgIF9yZW5kZXI6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBSZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnZpZXdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkb2NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnZpZXdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5zdWJ2aWV3c1tpXS5fcmVuZGVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZG9jRnJhZ21lbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBWaWV3O1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3Byb3RvdHlwZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAoY2hpbGQsIHN0YXRpY1Byb3BzLCBpbnN0YW5jZVByb3BzKSB7XG4gIGlmIChzdGF0aWNQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQsIHN0YXRpY1Byb3BzKTtcbiAgaWYgKGluc3RhbmNlUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLnByb3RvdHlwZSwgaW5zdGFuY2VQcm9wcyk7XG59O1xuXG52YXIgV2luZG93ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gV2luZG93KHNpemUpIHtcbiAgICB2YXIgdyA9IHNpemUud2lkdGggfHwgXCIxMDB2d1wiO1xuICAgIHZhciBoID0gc2l6ZS5oZWlnaHQgfHwgXCIxMDB2aFwiO1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5ib2R5O1xuICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSB3O1xuICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gaDtcbiAgfVxuXG4gIF9wcm90b3R5cGVQcm9wZXJ0aWVzKFdpbmRvdywgbnVsbCwge1xuICAgIG1ha2VLZXlBbmRWaXNpYmxlOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbWFrZUtleUFuZFZpc2libGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3RWaWV3Q29udHJvbGxlcikge1xuICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5yb290Vmlld0NvbnRyb2xsZXIudmlldy5lbCk7XG4gICAgICAgICAgdGhpcy5yb290Vmlld0NvbnRyb2xsZXIudmlld0RpZExvYWQoKTtcbiAgICAgICAgICB0aGlzLnJvb3RWaWV3Q29udHJvbGxlci5fcmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBXaW5kb3c7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbmRvdzsiXX0=
