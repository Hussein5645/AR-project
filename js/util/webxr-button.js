export class WebXRButton {
  constructor(opts = {}) {
    this.opts = opts;
    this.domElement = document.createElement('button');
    this.domElement.textContent = opts.textEnterXRTitle || 'ENTER XR';
    this._enabled = false;
  }

  set enabled(v) {
    this._enabled = !!v;
    this.domElement.disabled = !this._enabled;
  }

  get enabled() {
    return this._enabled;
  }

  setSession(session) {
    this._session = session;
    if (session) {
      this.domElement.textContent = this.opts.textExitXRTitle || 'EXIT XR';
    } else {
      this.domElement.textContent = this.opts.textEnterXRTitle || 'ENTER XR';
    }
  }
}
