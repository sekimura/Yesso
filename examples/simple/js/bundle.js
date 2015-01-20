(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var YS = _interopRequire(require("../../../to5"));

var AppDelegate = _interopRequire(require("./app-delegate"));

YS.ApplicationMain(null, new AppDelegate());
},{"../../../to5":16,"./app-delegate":11}],2:[function(require,module,exports){
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
},{"./label":6,"./view":9}],5:[function(require,module,exports){
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
},{"./app-delegate":2,"./application":3,"./button":4,"./label":6,"./main":7,"./view":9,"./view-controller":8,"./window":10}],6:[function(require,module,exports){
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
},{"./view":9}],7:[function(require,module,exports){
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
},{"./application":3}],8:[function(require,module,exports){
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
},{"./view":9}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
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

var YS = _interopRequire(require("../../../to5"));

var ViewController = _interopRequire(require("./view-controller"));

var AppDelegate = (function (_YS$AppDelegate) {
  function AppDelegate() {
    if (Object.getPrototypeOf(AppDelegate) !== null) {
      Object.getPrototypeOf(AppDelegate).apply(this, arguments);
    }
  }

  _inherits(AppDelegate, _YS$AppDelegate);

  _prototypeProperties(AppDelegate, null, {
    application: {
      value: function application(launchOptions) {
        var vc = new ViewController();

        this.window = new YS.Window({});
        this.window.backgroundColor = "black";
        this.window.rootViewController = vc;
        this.window.makeKeyAndVisible();

        return true;
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return AppDelegate;
})(YS.AppDelegate);

module.exports = AppDelegate;
},{"../../../to5":16,"./view-controller":12}],12:[function(require,module,exports){
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

var YS = _interopRequire(require("../../../dist"));

var ViewController = (function (_YS$ViewController) {
  function ViewController() {
    if (Object.getPrototypeOf(ViewController) !== null) {
      Object.getPrototypeOf(ViewController).apply(this, arguments);
    }
  }

  _inherits(ViewController, _YS$ViewController);

  _prototypeProperties(ViewController, null, {
    viewDidLoad: {
      value: function viewDidLoad() {
        _get(Object.getPrototypeOf(ViewController.prototype), "viewDidLoad", this).call(this);
        this.title = "Hello";
        var btn = new YS.Button();
        btn.titleLabel.text = "Boo";
        //btn.pinEdgeToSuperviewEdge('top');
        //btn.pinEdgeToSuperviewEdge('left');
        btn.alignAxisToSuperviewAxis("vertical");
        btn.alignAxisToSuperviewAxis("horizontal");

        this.view.addSubview(btn);
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return ViewController;
})(YS.ViewController);

module.exports = ViewController;
},{"../../../dist":5}],13:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],14:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],15:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"./label":17,"./view":20,"dup":4}],16:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"./app-delegate":13,"./application":14,"./button":15,"./label":17,"./main":18,"./view":20,"./view-controller":19,"./window":21,"dup":5}],17:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"./view":20,"dup":6}],18:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"./application":14,"dup":7}],19:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"./view":20,"dup":8}],20:[function(require,module,exports){
arguments[4][9][0].apply(exports,arguments)
},{"dup":9}],21:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"dup":10}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0bzUvbWFpbi5qcyIsIi4uLy4uL2Rpc3QvYXBwLWRlbGVnYXRlLmpzIiwiLi4vLi4vZGlzdC9hcHBsaWNhdGlvbi5qcyIsIi4uLy4uL2Rpc3QvYnV0dG9uLmpzIiwiLi4vLi4vZGlzdC9pbmRleC5qcyIsIi4uLy4uL2Rpc3QvbGFiZWwuanMiLCIuLi8uLi9kaXN0L21haW4uanMiLCIuLi8uLi9kaXN0L3ZpZXctY29udHJvbGxlci5qcyIsIi4uLy4uL2Rpc3Qvdmlldy5qcyIsIi4uLy4uL2Rpc3Qvd2luZG93LmpzIiwidG81L2FwcC1kZWxlZ2F0ZS5qcyIsInRvNS92aWV3LWNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAob2JqW1wiZGVmYXVsdFwiXSB8fCBvYmopO1xufTtcblxudmFyIFlTID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuLi8uLi8uLi90bzVcIikpO1xuXG52YXIgQXBwRGVsZWdhdGUgPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vYXBwLWRlbGVnYXRlXCIpKTtcblxuWVMuQXBwbGljYXRpb25NYWluKG51bGwsIG5ldyBBcHBEZWxlZ2F0ZSgpKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEFwcERlbGVnYXRlID0gZnVuY3Rpb24gQXBwRGVsZWdhdGUoKSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBEZWxlZ2F0ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9wcm90b3R5cGVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKGNoaWxkLCBzdGF0aWNQcm9wcywgaW5zdGFuY2VQcm9wcykge1xuICBpZiAoc3RhdGljUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLCBzdGF0aWNQcm9wcyk7XG4gIGlmIChpbnN0YW5jZVByb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZC5wcm90b3R5cGUsIGluc3RhbmNlUHJvcHMpO1xufTtcblxudmFyIEFwcGxpY2F0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXBwbGljYXRpb24oKSB7fVxuXG4gIF9wcm90b3R5cGVQcm9wZXJ0aWVzKEFwcGxpY2F0aW9uLCBudWxsLCB7XG4gICAgcnVuOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcnVuKCkge1xuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZSAmJiB0eXBlb2YgdGhpcy5kZWxlZ2F0ZS5hcHBsaWNhdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hcHBsaWNhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gQXBwbGljYXRpb247XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcGxpY2F0aW9uOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3Byb3RvdHlwZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAoY2hpbGQsIHN0YXRpY1Byb3BzLCBpbnN0YW5jZVByb3BzKSB7XG4gIGlmIChzdGF0aWNQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQsIHN0YXRpY1Byb3BzKTtcbiAgaWYgKGluc3RhbmNlUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLnByb3RvdHlwZSwgaW5zdGFuY2VQcm9wcyk7XG59O1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYyAmJiBkZXNjLndyaXRhYmxlKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBfaW50ZXJvcFJlcXVpcmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKG9ialtcImRlZmF1bHRcIl0gfHwgb2JqKTtcbn07XG5cbnZhciBWaWV3ID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL3ZpZXdcIikpO1xuXG52YXIgTGFiZWwgPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vbGFiZWxcIikpO1xuXG52YXIgQnV0dG9uID0gKGZ1bmN0aW9uIChWaWV3KSB7XG4gIGZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihCdXR0b24ucHJvdG90eXBlKSwgXCJjb25zdHJ1Y3RvclwiLCB0aGlzKS5jYWxsKHRoaXMsIFwiYnV0dG9uXCIpO1xuICAgIHRoaXMuc3Vidmlld3MucHVzaChuZXcgTGFiZWwoKSk7XG4gIH1cblxuICBfaW5oZXJpdHMoQnV0dG9uLCBWaWV3KTtcblxuICBfcHJvdG90eXBlUHJvcGVydGllcyhCdXR0b24sIG51bGwsIHtcbiAgICB0aXRsZUxhYmVsOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3Vidmlld3NbMF07XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIEJ1dHRvbjtcbn0pKFZpZXcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1dHRvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAob2JqW1wiZGVmYXVsdFwiXSB8fCBvYmopO1xufTtcblxudmFyIEFwcERlbGVnYXRlID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL2FwcC1kZWxlZ2F0ZVwiKSk7XG5cbnZhciBBcHBsaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9hcHBsaWNhdGlvblwiKSk7XG5cbnZhciBBcHBsaWNhdGlvbk1haW4gPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vbWFpblwiKSk7XG5cbnZhciBCdXR0b24gPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vYnV0dG9uXCIpKTtcblxudmFyIExhYmVsID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL2xhYmVsXCIpKTtcblxudmFyIFZpZXcgPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vdmlld1wiKSk7XG5cbnZhciBWaWV3Q29udHJvbGxlciA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi92aWV3LWNvbnRyb2xsZXJcIikpO1xuXG52YXIgV2luZG93ID0gX2ludGVyb3BSZXF1aXJlKHJlcXVpcmUoXCIuL3dpbmRvd1wiKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBBcHBEZWxlZ2F0ZTogQXBwRGVsZWdhdGUsXG4gIEFwcGxpY2F0aW9uOiBBcHBsaWNhdGlvbixcbiAgQXBwbGljYXRpb25NYWluOiBBcHBsaWNhdGlvbk1haW4sXG4gIEJ1dHRvbjogQnV0dG9uLFxuICBMYWJlbDogTGFiZWwsXG4gIFZpZXc6IFZpZXcsXG4gIFZpZXdDb250cm9sbGVyOiBWaWV3Q29udHJvbGxlcixcbiAgV2luZG93OiBXaW5kb3dcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcHJvdG90eXBlUHJvcGVydGllcyA9IGZ1bmN0aW9uIChjaGlsZCwgc3RhdGljUHJvcHMsIGluc3RhbmNlUHJvcHMpIHtcbiAgaWYgKHN0YXRpY1Byb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZCwgc3RhdGljUHJvcHMpO1xuICBpZiAoaW5zdGFuY2VQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQucHJvdG90eXBlLCBpbnN0YW5jZVByb3BzKTtcbn07XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjICYmIGRlc2Mud3JpdGFibGUpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG52YXIgX2luaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAob2JqW1wiZGVmYXVsdFwiXSB8fCBvYmopO1xufTtcblxudmFyIFZpZXcgPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4vdmlld1wiKSk7XG5cbnZhciBMYWJlbCA9IChmdW5jdGlvbiAoVmlldykge1xuICBmdW5jdGlvbiBMYWJlbCgpIHtcbiAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihMYWJlbC5wcm90b3R5cGUpLCBcImNvbnN0cnVjdG9yXCIsIHRoaXMpLmNhbGwodGhpcywgXCJzcGFuXCIpO1xuICB9XG5cbiAgX2luaGVyaXRzKExhYmVsLCBWaWV3KTtcblxuICBfcHJvdG90eXBlUHJvcGVydGllcyhMYWJlbCwgbnVsbCwge1xuICAgIHRleHQ6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbC5pbm5lclRleHQ7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuaW5uZXJUZXh0ID0gbmV3VmFsdWU7XG4gICAgICB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIExhYmVsO1xufSkoVmlldyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGFiZWw7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKG9ialtcImRlZmF1bHRcIl0gfHwgb2JqKTtcbn07XG5cbnZhciBBcHBsaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi9hcHBsaWNhdGlvblwiKSk7XG5cbmZ1bmN0aW9uIEFwcGxpY2F0aW9uTWFpbihwcmluY2lwYWxDbGFzc05hbWUsIGRlbGVnYXRlQ2xhc3NOYW1lKSB7XG4gIC8vICBwcmluY2lwYWxDbGFzc05hbWUgPSBwcmluY2lwYWxDbGFzc05hbWUgfHwgJ0FwcGxpY2F0aW9uJztcbiAgLy8gIHZhciBwcmluY2lwYWxDbGFzcyA9IHdpbmRvd1twcmluY2lwYWxDbGFzc05hbWVdO1xuICAvLyAgdmFyIGFwcCA9IE9iamVjdC5jcmVhdGUocHJpbmNpcGFsQ2xhc3MucHJvdG90eXBlKTtcbiAgLy9cbiAgLy8gIGlmIChkZWxlZ2F0ZUNsYXNzTmFtZSAmJiB3aW5kb3dbZGVsZWdhdGVDbGFzc05hbWVdKSB7XG4gIC8vICAgIHZhciBkZWxlZ2F0ZUNsYXNzID0gd2luZG93W2RlbGVnYXRlQ2xhc3NOYW1lXTtcbiAgLy8gICAgdmFyIGRlbGVnYXRlID0gT2JqZWN0LmNyZWF0ZShkZWxlZ2F0ZUNsYXNzLnByb3RvdHlwZSk7XG4gIC8vICAgIGFwcC5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAvLyAgfVxuICB2YXIgYXBwID0gcHJpbmNpcGFsQ2xhc3NOYW1lIHx8IG5ldyBBcHBsaWNhdGlvbigpO1xuICBhcHAuZGVsZWdhdGUgPSBkZWxlZ2F0ZUNsYXNzTmFtZTtcblxuICBhcHAucnVuKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwbGljYXRpb25NYWluOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3Byb3RvdHlwZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAoY2hpbGQsIHN0YXRpY1Byb3BzLCBpbnN0YW5jZVByb3BzKSB7XG4gIGlmIChzdGF0aWNQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQsIHN0YXRpY1Byb3BzKTtcbiAgaWYgKGluc3RhbmNlUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLnByb3RvdHlwZSwgaW5zdGFuY2VQcm9wcyk7XG59O1xuXG52YXIgX2ludGVyb3BSZXF1aXJlID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIChvYmpbXCJkZWZhdWx0XCJdIHx8IG9iaik7XG59O1xuXG52YXIgVmlldyA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi92aWV3XCIpKTtcblxudmFyIFZpZXdDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmlld0NvbnRyb2xsZXIoKSB7XG4gICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoKTtcbiAgICB0aGlzLnZpZXcuZWwuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XG4gICAgdGhpcy52aWV3LmVsLnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgfVxuXG4gIF9wcm90b3R5cGVQcm9wZXJ0aWVzKFZpZXdDb250cm9sbGVyLCBudWxsLCB7XG4gICAgX3JlbmRlcjoge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIFJlbmRlcigpIHtcbiAgICAgICAgdGhpcy52aWV3Ll9yZW5kZXIoKTtcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LFxuICAgIHZpZXdEaWRMb2FkOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmlld0RpZExvYWQoKSB7fSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFZpZXdDb250cm9sbGVyO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3Q29udHJvbGxlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9wcm90b3R5cGVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKGNoaWxkLCBzdGF0aWNQcm9wcywgaW5zdGFuY2VQcm9wcykge1xuICBpZiAoc3RhdGljUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLCBzdGF0aWNQcm9wcyk7XG4gIGlmIChpbnN0YW5jZVByb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZC5wcm90b3R5cGUsIGluc3RhbmNlUHJvcHMpO1xufTtcblxudmFyIFZpZXcgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWaWV3KHRhZ05hbWVPckVsZW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIHRhZ05hbWVPckVsZW1lbnQgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIHRhZ05hbWVPckVsZW1lbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRhZ05hbWVPckVsZW1lbnQgPSB0YWdOYW1lT3JFbGVtZW50IHx8IFwiZGl2XCI7XG4gICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYXNzdW1lIGl0J3MgYW4gRWxlbWVudFxuICAgICAgdGhpcy5lbCA9IHRhZ05hbWVPckVsZW1lbnQ7XG4gICAgfVxuICAgIHRoaXMuc3Vidmlld3MgPSBbXTtcbiAgfVxuXG4gIF9wcm90b3R5cGVQcm9wZXJ0aWVzKFZpZXcsIG51bGwsIHtcbiAgICBhZGRTdWJ2aWV3OiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkU3Vidmlldyh2aWV3KSB7XG4gICAgICAgIHZpZXcuZWwuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuc3Vidmlld3MucHVzaCh2aWV3KTtcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LFxuICAgIHBpbkVkZ2VUb1N1cGVydmlld0VkZ2U6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwaW5FZGdlVG9TdXBlcnZpZXdFZGdlKGVkZ2UpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZVtlZGdlXSA9IFwiMFwiO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgYWxpZ25BeGlzVG9TdXBlcnZpZXdBeGlzOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWxpZ25BeGlzVG9TdXBlcnZpZXdBeGlzKGF4aXMpIHtcbiAgICAgICAgaWYgKGF4aXMgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcImFsaWduQXhpc1RvU3VwZXJ2aWV3QXhpcy0tdmVydGljYWxcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFwiYWxpZ25BeGlzVG9TdXBlcnZpZXdBeGlzLS1ob3Jpem9udGFsXCIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBfcmVuZGVyOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gUmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdWJ2aWV3cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJ2aWV3cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRvY0ZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMuc3Vidmlld3NbaV0uX3JlbmRlcigpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGRvY0ZyYWdtZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWw7XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gVmlldztcbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldzsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9wcm90b3R5cGVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKGNoaWxkLCBzdGF0aWNQcm9wcywgaW5zdGFuY2VQcm9wcykge1xuICBpZiAoc3RhdGljUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLCBzdGF0aWNQcm9wcyk7XG4gIGlmIChpbnN0YW5jZVByb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZC5wcm90b3R5cGUsIGluc3RhbmNlUHJvcHMpO1xufTtcblxudmFyIFdpbmRvdyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFdpbmRvdyhzaXplKSB7XG4gICAgdmFyIHcgPSBzaXplLndpZHRoIHx8IFwiMTAwdndcIjtcbiAgICB2YXIgaCA9IHNpemUuaGVpZ2h0IHx8IFwiMTAwdmhcIjtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLmVsLnN0eWxlLndpZHRoID0gdztcbiAgICB0aGlzLmVsLnN0eWxlLmhlaWdodCA9IGg7XG4gIH1cblxuICBfcHJvdG90eXBlUHJvcGVydGllcyhXaW5kb3csIG51bGwsIHtcbiAgICBtYWtlS2V5QW5kVmlzaWJsZToge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VLZXlBbmRWaXNpYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5yb290Vmlld0NvbnRyb2xsZXIpIHtcbiAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucm9vdFZpZXdDb250cm9sbGVyLnZpZXcuZWwpO1xuICAgICAgICAgIHRoaXMucm9vdFZpZXdDb250cm9sbGVyLnZpZXdEaWRMb2FkKCk7XG4gICAgICAgICAgdGhpcy5yb290Vmlld0NvbnRyb2xsZXIuX3JlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gV2luZG93O1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXaW5kb3c7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcHJvdG90eXBlUHJvcGVydGllcyA9IGZ1bmN0aW9uIChjaGlsZCwgc3RhdGljUHJvcHMsIGluc3RhbmNlUHJvcHMpIHtcbiAgaWYgKHN0YXRpY1Byb3BzKSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjaGlsZCwgc3RhdGljUHJvcHMpO1xuICBpZiAoaW5zdGFuY2VQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQucHJvdG90eXBlLCBpbnN0YW5jZVByb3BzKTtcbn07XG5cbnZhciBfaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgX2ludGVyb3BSZXF1aXJlID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIChvYmpbXCJkZWZhdWx0XCJdIHx8IG9iaik7XG59O1xuXG52YXIgWVMgPSBfaW50ZXJvcFJlcXVpcmUocmVxdWlyZShcIi4uLy4uLy4uL3RvNVwiKSk7XG5cbnZhciBWaWV3Q29udHJvbGxlciA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi92aWV3LWNvbnRyb2xsZXJcIikpO1xuXG52YXIgQXBwRGVsZWdhdGUgPSAoZnVuY3Rpb24gKF9ZUyRBcHBEZWxlZ2F0ZSkge1xuICBmdW5jdGlvbiBBcHBEZWxlZ2F0ZSgpIHtcbiAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKEFwcERlbGVnYXRlKSAhPT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFwcERlbGVnYXRlKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIF9pbmhlcml0cyhBcHBEZWxlZ2F0ZSwgX1lTJEFwcERlbGVnYXRlKTtcblxuICBfcHJvdG90eXBlUHJvcGVydGllcyhBcHBEZWxlZ2F0ZSwgbnVsbCwge1xuICAgIGFwcGxpY2F0aW9uOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwbGljYXRpb24obGF1bmNoT3B0aW9ucykge1xuICAgICAgICB2YXIgdmMgPSBuZXcgVmlld0NvbnRyb2xsZXIoKTtcblxuICAgICAgICB0aGlzLndpbmRvdyA9IG5ldyBZUy5XaW5kb3coe30pO1xuICAgICAgICB0aGlzLndpbmRvdy5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMud2luZG93LnJvb3RWaWV3Q29udHJvbGxlciA9IHZjO1xuICAgICAgICB0aGlzLndpbmRvdy5tYWtlS2V5QW5kVmlzaWJsZSgpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIEFwcERlbGVnYXRlO1xufSkoWVMuQXBwRGVsZWdhdGUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcERlbGVnYXRlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3Byb3RvdHlwZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAoY2hpbGQsIHN0YXRpY1Byb3BzLCBpbnN0YW5jZVByb3BzKSB7XG4gIGlmIChzdGF0aWNQcm9wcykgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY2hpbGQsIHN0YXRpY1Byb3BzKTtcbiAgaWYgKGluc3RhbmNlUHJvcHMpIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNoaWxkLnByb3RvdHlwZSwgaW5zdGFuY2VQcm9wcyk7XG59O1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYyAmJiBkZXNjLndyaXRhYmxlKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxudmFyIF9pbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBfaW50ZXJvcFJlcXVpcmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKG9ialtcImRlZmF1bHRcIl0gfHwgb2JqKTtcbn07XG5cbnZhciBZUyA9IF9pbnRlcm9wUmVxdWlyZShyZXF1aXJlKFwiLi4vLi4vLi4vZGlzdFwiKSk7XG5cbnZhciBWaWV3Q29udHJvbGxlciA9IChmdW5jdGlvbiAoX1lTJFZpZXdDb250cm9sbGVyKSB7XG4gIGZ1bmN0aW9uIFZpZXdDb250cm9sbGVyKCkge1xuICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoVmlld0NvbnRyb2xsZXIpICE9PSBudWxsKSB7XG4gICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVmlld0NvbnRyb2xsZXIpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgX2luaGVyaXRzKFZpZXdDb250cm9sbGVyLCBfWVMkVmlld0NvbnRyb2xsZXIpO1xuXG4gIF9wcm90b3R5cGVQcm9wZXJ0aWVzKFZpZXdDb250cm9sbGVyLCBudWxsLCB7XG4gICAgdmlld0RpZExvYWQ6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2aWV3RGlkTG9hZCgpIHtcbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoVmlld0NvbnRyb2xsZXIucHJvdG90eXBlKSwgXCJ2aWV3RGlkTG9hZFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnRpdGxlID0gXCJIZWxsb1wiO1xuICAgICAgICB2YXIgYnRuID0gbmV3IFlTLkJ1dHRvbigpO1xuICAgICAgICBidG4udGl0bGVMYWJlbC50ZXh0ID0gXCJCb29cIjtcbiAgICAgICAgLy9idG4ucGluRWRnZVRvU3VwZXJ2aWV3RWRnZSgndG9wJyk7XG4gICAgICAgIC8vYnRuLnBpbkVkZ2VUb1N1cGVydmlld0VkZ2UoJ2xlZnQnKTtcbiAgICAgICAgYnRuLmFsaWduQXhpc1RvU3VwZXJ2aWV3QXhpcyhcInZlcnRpY2FsXCIpO1xuICAgICAgICBidG4uYWxpZ25BeGlzVG9TdXBlcnZpZXdBeGlzKFwiaG9yaXpvbnRhbFwiKTtcblxuICAgICAgICB0aGlzLnZpZXcuYWRkU3VidmlldyhidG4pO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIFZpZXdDb250cm9sbGVyO1xufSkoWVMuVmlld0NvbnRyb2xsZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXdDb250cm9sbGVyOyJdfQ==
