#include "Global.frag"
// uniform sampler2D frame_in_;

uniform sampler2D text;
uniform float context_resolution_x;
uniform float context_resolution_y;

uniform vec3 text_color;
uniform float flip;// 0 or 1 : 1 is rotate 90 deg

uniform bool outline_;

//Displays an SDF glyph (aquired from freetype usually)
//Used By Text Renderer

void main( void ) {
	float softness = 0.08;
	vec4 outline_color = vec4(1.,1.0, 1.,1.0);
	float outline_thickness = .58;
	float outline_softness = .05;


	vec2 uv = tcoord;
	// uv = CorrectAspectRatio(uv, vec2(context_resolution_x, context_resolution_y));
	uv = vec2(uv.x, 1.-uv.y);
	if(flip == 1.0){
		uv = rotate2D(uv, PI*1.5); //should def be CPU side matrix
		uv = vec2(uv.x + .2, uv.y + .2);
	}
	else{
		
	}


	vec4 frame_color;
	// vec4 passthrough_color = texture2D( passthrough_frame_, uv);
	float thresh = .50;//.9999; //higher is thinner

	// vec2 label_uv  = rotate2D(uv, PI*1.5) - vec2(0, .5); //should def be CPU side matrix
	vec2 label_uv  = uv/4.;//3.8//vec2(1.-label_uv.x , label_uv.y); //Glyphs are coming in inverted for some reason

	float thickness = .51;
	float dist = texture2D(text, label_uv).x;

	float outline = smoothstep(outline_thickness - outline_softness, outline_thickness + outline_softness, dist);
	if(outline_ == false){
		outline = 1.0;
	}
	dist = smoothstep(1.0-thickness - softness, 1.0- thickness + softness, dist);//>= thresh

	// vec4 label_0_color = vec4( vec3( dist >= thresh )  , 1.  );//texture2D( label_0_, uv);

	// if(uv.x > 1. || uv.y > 1.|| uv.x < 0. || uv.y < 0.){
	// 	discard;
	// }

	// gl_FragColor = vec4(texture2D( label_0_, tcoord).xyz, 1.);
	//frame_color.x += sin(uv.x * time/2.); //for some reason this reveals a crash when monitor priority is swapped
	// frame_color = vec4(1.,0,1.,1.);
	gl_FragColor = vec4( mix(outline_color.rgb, text_color , outline)  ,  dist  );
	// gl_FragColor = vec4( text_color  , 1.);// * sampled;

}