#include "Global.frag"

uniform float context_resolution_x;
uniform float context_resolution_y;

uniform vec3 color;
uniform vec2 size;
uniform float outline;
uniform vec3 outline_color;
uniform float opacity;
uniform float is_touched;
uniform vec4 corner_radius;
uniform float flip;// 0 or 1 : 1 is rotate 90 deg'

// Ron Sardarian @ Sleepy Circuits LLC
// Made to be used by ShapeRenderer.cpp

float sdCircle( vec2 p, float r )
{
    return length(p) - r;
}

float sdRoundedBox( vec2 p, vec2 b, vec4 r )
{
    r.xy = (p.x>0.0)?r.xy : r.zw;
    r.x  = (p.y>0.0)?r.x  : r.y;
    vec2 q = abs(p)-b+r.x;
    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r.x;
}

//Displays a Basic UI Shape

void main( void ) {
	vec2 uv = tcoord;
	// uv = CorrectAspectRatio(uv, vec2(context_resolution_x, context_resolution_y));
	if(flip == 1.0){
		uv = rotate2D(uv, PI*1.5); //should def be CPU side matrix
		// uv = vec2(uv.x + .2, uv.y + .2);
	}
	else{
		
	}
	// uv = vec2(1.-uv.x, 1.-uv.y ); 
	// uv.x/=3.;

	//draw the shape
	float radius = .46;
	vec2 bounds = vec2(.5, .8);
	float dist;
	if(corner_radius.x != 1.){
		dist = sdRoundedBox(uv - vec2(.5, .5) , bounds , vec4(corner_radius.z, corner_radius.x, corner_radius.a,corner_radius.y) );
	}
	else{
		dist = sdCircle(uv - vec2(.5 , .5) , radius);
	}


	float outline_thickness = .0;
	float outline_softness = .01;
	float outline_mix = dist+.2;//smoothstep(outline_thickness + outline_softness, outline_thickness - outline_softness, -dist );
	// if(outline == 0.){
		outline_mix = 0.0;
	// } 
	
	// float sample_opacity = step( uv.y, this_sample + thickness ) - step( uv.y , this_sample - thickness) ;// float( uv.y > (signal_sample.x - thickness) );
	// vec3 a_color = mix( color, vec3(1.0), 1.0-smoothstep(0.0,0.01,abs(dist)) );
	vec3 a_color = mix(color, outline_color , outline_mix) ;
	//outline flag just inverts the colors for now
	if(is_touched == 1.){
		a_color = InvertColor(a_color);
	}
	
	gl_FragColor = vec4( a_color , (1.-smoothstep(0.0,0.01,(dist))) * opacity );
	// gl_FragColor = vec4( color  , smoothstep(.0, .005, -dist ));// * sampled;
}