import View from './view';

class ViewController {
  constructor() {
    this.view = new View();
    this.view.el.style.width = '100vw';
    this.view.el.style.height = '100vh';
  }

  _render() {
    this.view._render();
  }

  viewDidLoad() {
  }

}

export default ViewController;
