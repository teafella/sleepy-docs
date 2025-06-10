#include "Global.frag"

uniform sampler2D passthrough_frame_;

uniform float context_resolution_x;
uniform float context_resolution_y;

//The UI for vidos, should be displayed on the onboard display 


void main( void ) {
	vec2 uv = tcoord;
	// uv = CorrectAspectRatio(uv, vec2(context_resolution_x, context_resolution_y));
	uv = rotate2D(uv, PI*1.5); //should def be CPU side matrix
	
	// uv.x /= 10.;

	vec4 frame_color;
	vec4 passthrough_color = texture2D( passthrough_frame_, uv);
	frame_color = passthrough_color;

	// gl_FragColor = vec4(texture2D( label_0_, tcoord).xyz, 1.);
	//frame_color.x += sin(uv.x * time/2.); //for some reason this reveals a crash when monitor priority is swapped

	gl_FragColor = vec4( frame_color.xyz  ,  1. );

}