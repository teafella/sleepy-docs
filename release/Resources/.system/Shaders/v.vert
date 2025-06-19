attribute vec4 vertex;
varying vec2 tcoord;

void main(void) {
  gl_Position = vec4(vertex.xy, 0, 1);
  tcoord = vertex.zw;
}