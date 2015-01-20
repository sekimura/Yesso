class View {
  constructor(tagNameOrElement) {
    if (typeof tagNameOrElement === 'undefined' || typeof tagNameOrElement === 'string') {
      tagNameOrElement = tagNameOrElement || 'div';
      this.el = document.createElement(tagNameOrElement);
    } else { // assume it's an Element
      this.el = tagNameOrElement;
    }
    this.subviews = [];
  }

  addSubview(view) {
    view.el.style.position = 'absolute';
    this.subviews.push(view);
  }

  pinEdgeToSuperviewEdge(edge) {
    this.el.style[edge] = '0';
  }

  alignAxisToSuperviewAxis(axis) {
    if (axis === 'vertical') {
      this.el.classList.add('alignAxisToSuperviewAxis--vertical');
    }
    if (axis === 'horizontal') {
      this.el.classList.add('alignAxisToSuperviewAxis--horizontal');
    }
  }

  _render() {
    if (this.subviews.length === 0) {
      return this.el;
    }
    var docFragment = document.createDocumentFragment();
    for (var i = 0; i < this.subviews.length; i++) {
      docFragment.appendChild(this.subviews[i]._render());
    }
    this.el.appendChild(docFragment);
    return this.el;
  }
}

export default View;
