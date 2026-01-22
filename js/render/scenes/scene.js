export class Scene {
  constructor() {
    this.nodes = [];
    this.renderer = null;
    this.inputRenderer = {
      useProfileControllerMeshes: () => {}
    };
  }

  addNode(node) {
    this.nodes.push(node);
  }

  removeNode(node) {
    const i = this.nodes.indexOf(node);
    if (i !== -1) this.nodes.splice(i, 1);
  }

  setRenderer(r) {
    this.renderer = r;
  }

  updateInputSources(frame, refSpace) {}
  startFrame() {}
  drawXRFrame(frame, pose) {}
  endFrame() {}
}
