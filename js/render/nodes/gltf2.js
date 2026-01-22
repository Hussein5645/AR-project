export class Gltf2Node {
  constructor(opts = {}) {
    this.url = opts.url || null;
    this.scale = opts.scale || [1, 1, 1];
    this.matrix = null;
    this.visible = true;
    this.anchor = null;
  }
}
