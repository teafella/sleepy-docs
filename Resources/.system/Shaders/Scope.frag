#include "Global.frag"

uniform sampler2D samples_;
uniform float context_resolution_x;
uniform float context_resolution_y;

uniform vec3 line_color;
uniform vec3 background_color;
uniform float opacity;
uniform float flip;// 0 or 1 : 1 is rotate 90 deg

float line_segment(vec2 p, vec2 a, vec2 b) {
	vec2 ba = b - a;
	vec2 pa = p - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
	return length(pa - h * ba);
}

//Displays a Modulation Scope

void main( void ) {
	vec2 uv = tcoord;
	// uv = CorrectAspectRatio(uv, vec2(context_resolution_x, context_resolution_y));
	
	if(flip == 1.0){
		uv = rotate2D(uv, PI*1.5); //should def be CPU side matrix
		// uv = vec2(uv.x + .2, uv.y + .2);
	}
	else{
		
	}
	uv = vec2(1.-uv.x, 1.-uv.y ); 
	uv.x += .0;
	uv.x/=3.; 

	
	// float thickness = .51;
	vec4 signal_sample = texture2D(samples_, vec2(uv.x, 0.) );
	//float last_sample = texture2D(samples_, uv - resolution_step ).x;
	//float line_thickness = 0.3;
	//float dist = line_segment(uv, vec2(uv.x - resolution_step.x , last_sample), vec2(uv.x, signal_sample.x)) - line_thickness;

	// float outline = smoothstep(outline_thickness - outline_softness, outline_thickness + outline_softness, text_alpha);
	// if(outline_ == false){
	// 	outline = 0.0;
	// }
	// text_alpha = smoothstep(1.0-thickness - softness, 1.0- thickness + softness, text_alpha);//>= thresh
	//float thickness = .005;

	float this_sample = signal_sample.x;
	// float sample_opacity = step( uv.y, this_sample + thickness ) - step( uv.y , this_sample - thickness) ;// float( uv.y > (signal_sample.x - thickness) );

	vec3 a_color = mix(line_color, background_color, float(signal_sample.x < uv.y) )  ;

	//gl_FragColor = vec4( mix( vec3(0.0,1.,0.0) , vec3(0.1), 1.-sample_opacity )  , opacity  );
	gl_FragColor = vec4( a_color  , 1.);// * sampled;

}