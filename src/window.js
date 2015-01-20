class Window {
  constructor(size) {
    var w = size.width || '100vw';
    var h = size.height || '100vh';
    this.el = document.body;
    this.el.style.width = w;
    this.el.style.height = h;
  }

  makeKeyAndVisible() {
    if (this.rootViewController) {
      this.el.appendChild(this.rootViewController.view.el);
      this.rootViewController.viewDidLoad();
      this.rootViewController._render();
    }
  }
}

export default Window;
