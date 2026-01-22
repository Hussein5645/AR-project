export function createWebGLContext(opts = {}) {
  const canvas = document.createElement('canvas');
  // create a lightweight dummy context if possible
  try {
    canvas.getContext('webgl2') || canvas.getContext('webgl');
  } catch (e) {}
  return { canvas };
}

export class Renderer {
  constructor(gl) {
    this.gl = gl;
  }
}
