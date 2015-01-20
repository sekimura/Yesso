import YS from '../../../to5';
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
