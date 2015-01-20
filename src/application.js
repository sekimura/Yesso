class Application {
  run() {
    if (this.delegate && typeof this.delegate.application === 'function') {
      this.delegate.application();
    }
  }
}

export default Application;
