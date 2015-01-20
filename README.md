# Yesso

> An experiment to write web applications with [6to5](http://6to5.org/) and UIKit like framework.

## Install 

```
$ npm install yesso
```

## Status

**Incomplete.**

## Usage

![](example/simple/ScreenShot.png)


```js
// view-controller.js

import YS from 'yesso';

class ViewController extends YS.ViewController {

  viewDidLoad() {
    super.viewDidLoad();
    this.title = "Hello";
    var btn = new YS.Button();
    btn.titleLabel.text = "Boo";
    btn.alignAxisToSuperviewAxis('vertical');
    btn.alignAxisToSuperviewAxis('horizontal');

    this.view.addSubview(btn);
  }

}

export default ViewController;
```

```js
// app-delegate.js
import YS from 'yesso';
import ViewController from './view-controller';

class AppDelegate extends YS.AppDelegate {

  application(launchOptions) {
    var vc = new ViewController();

    this.window = new YS.Window({});
    this.window.backgroundColor = 'black';
    this.window.rootViewController = vc;
    this.window.makeKeyAndVisible();

    return true;
  }

}

export default AppDelegate;
```

```js
// main.js
import YS from 'yesso';
import AppDelegate from './app-delegate';

YS.ApplicationMain(null, new AppDelegate());
```

## License

MIT © [Masayoshi Sekimura](http://sekimura.org)
