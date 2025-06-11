varying vec2 tcoord;
uniform sampler2D text_tex;
uniform vec4 color0;

void main(void) {
	// vec2 uv = (tcoord - 0.5) / 0.5;
	vec2 uv = tcoord;
	// gl_FragColor = vec4(1, 0, 1, 1.);
	vec4 text_sample = texture2D(text_tex, uv);
	gl_FragColor = vec4(sin(uv.x),sin(uv.y), text_sample.y , text_sample.a );
}