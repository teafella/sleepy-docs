#include "Global.frag"

uniform float sample_;
uniform float context_resolution_x;
uniform float context_resolution_y;

uniform vec3 led_color;
uniform vec3 background_color;
uniform float opacity;
uniform float flip;// 0 or 1 : 1 is rotate 90 deg

//Displays an LED readout
void main( void ) {
	vec2 uv = tcoord;
	// uv = CorrectAspectRatio(uv, vec2(context_resolution_x, context_resolution_y));
	
	//symetric so this shouldn't do anything
	// if(flip == 1.0){
	// 	uv = rotate2D(uv, PI*1.5); //should def be CPU side matrix
	// 	// uv = vec2(uv.x + .2, uv.y + .2);
	// }
	// else{
		
	// }
	uv = vec2(1.-uv.x, 1.-uv.y ); 
	uv += vec2(-.5);
	uv *= 2.; 

    float radius = .40;
    float outline = .2;
	float dist = length(uv) - radius - outline;

	// float outline = smoothstep(outline_thickness - outline_softness, outline_thickness + outline_softness, text_alpha);
	// if(outline_ == false){
	// 	outline = 0.0;
	// }
	// text_alpha = smoothstep(1.0-thickness - softness, 1.0- thickness + softness, text_alpha);//>= thresh
	//float thickness = .005;

	// float this_sample = sample_;
    
    float thickness = .1;
	float alpha = 1. - smoothstep(radius-(radius*thickness),
                         radius+(radius*thickness),
                         dist) ;// float( uv.y > (signal_sample.x - thickness) );

	//gl_FragColor = vec4( mix( vec3(0.0,1.,0.0) , vec3(0.1), 1.-sample_opacity )  , opacity  );
	// gl_FragColor = vec4( led_color * sample_  , opacity);// * sampled;
    
    vec3 out_color = mix(vec3(sample_) * led_color, background_color, smoothstep(thickness  , thickness + outline,  dist ) );
	gl_FragColor = vec4(  out_color  , alpha);

}