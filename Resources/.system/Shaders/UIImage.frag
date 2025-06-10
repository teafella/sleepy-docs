#include "Global.frag"

uniform sampler2D sampled_frame;
uniform float context_resolution_x;
uniform float context_resolution_y;

uniform vec3 line_color;
uniform vec3 background_color;
uniform float opacity;
uniform float flip;// 0 or 1 : 1 is rotate 90 deg

//Displays a UI Image

void main( void ) {
	vec2 uv = tcoord;
	// uv = CorrectAspectRatio(uv, vec2(context_resolution_x, context_resolution_y));
	
	if(flip == 1.0){ //usually have to do this
		uv = rotate2D(uv, PI*1.5); //should def be CPU side matrix
		// uv = vec2(uv.x + .2, uv.y + .2);
		uv = vec2(1.-uv.x, uv.y ); 
	}
	else{
		uv = vec2(uv.x, uv.y ); 
	}
	
	
    vec4 sample_color =  texture2D( sampled_frame, uv);
	gl_FragColor = sample_color;// * sampled;

}