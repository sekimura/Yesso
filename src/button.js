import View from './view';
import Label from './label';

class Button extends View {
  constructor() {
    super('button')
    this.subviews.push(new Label());
  }

  get titleLabel() {
    return this.subviews[0];
  }
}

export default Button;
