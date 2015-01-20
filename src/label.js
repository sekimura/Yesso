import View from './view';

class Label extends View {
  constructor() {
    super('span')
  }

  get text() {
    return this.el.innerText;
  }
  set text(newValue) {
    return this.el.innerText = newValue;
  }
}

export default Label;
