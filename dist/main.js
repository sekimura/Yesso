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