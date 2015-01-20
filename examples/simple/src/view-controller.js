import YS from '../../../dist';

class ViewController extends YS.ViewController {

  viewDidLoad() {
    super.viewDidLoad();
    this.title = "Hello";
    var btn = new YS.Button();
    btn.titleLabel.text = "Boo";
    //btn.pinEdgeToSuperviewEdge('top');
    //btn.pinEdgeToSuperviewEdge('left');
    btn.alignAxisToSuperviewAxis('vertical');
    btn.alignAxisToSuperviewAxis('horizontal');

    this.view.addSubview(btn);
  }

}

export default ViewController;
