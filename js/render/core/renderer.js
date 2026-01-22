export function createWebGLContext(opts = {}) {
  const canvas = document.createElement('canvas');
  let gl = null;
  try {
    gl = canvas.getContext('webgl2', { xrCompatible: !!opts.xrCompatible }) ||
         canvas.getContext('webgl', { xrCompatible: !!opts.xrCompatible });
  } catch (e) {
    gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  }
  if (!gl) {
    throw new Error('Unable to create WebGL context');
  }
  gl.canvas = canvas;
  return gl;
}

export class Renderer {
  constructor(gl) {
    this.gl = gl;
  }
}
