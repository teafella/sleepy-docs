#include "ShapeUtil.frag"

uniform sampler2D cross_mod_shape; //input from other oscillator
uniform sampler2D feedback_frame; //final frame for feedback

// Shader specific uniforms (Not Updated By Default put these in manually )
uniform sampler2D uv_in;
uniform float frequency;
uniform float drift;
uniform float rotation;
uniform mat2 rotation_mat;
uniform float polarization;

uniform float cross_mod_toggle;
uniform float cross_mod_scale;
uniform float feedback_mod_toggle;
uniform float feedback_mod_scale;
uniform float polar_flip;

uniform float mirror_amt;
uniform float axis_rotation;
uniform float axis_rotation_drift;

// uniform float x_crop;
// uniform float y_crop;
uniform float aspect_adjust;

uniform float luma_min;
uniform float luma_max;

float circle(vec2 st, float frequency, float _phase_x, float _phase_y, float _x_crop, float _y_crop, float r) {
	r = TWO_PI / r;
	float d = 0.0;
	// Remap the space to -1. to 1.
	
	st *= (frequency/3.);
	st += .5;
	st.x += (_phase_x/1.5) ;
	st.y += (polarization*2.) - 1. + (_phase_y/1.5); //Y phase/offset
	st = fract(st) * 2. - 1.;

	st.y /= (1.-_y_crop) ; //more like a y scale, kinda looks like eye closing
	
	// Angle and radius from the current pixel
	float a = atan(st.x, st.y) + PI ;

	// Shaping function that modulate the distance
	// d = cos(floor(.5 + a / r) * r - a) * length(st) ;

	d = length(st) - (_x_crop);

	//return 1.0 - step(0.5, d);
	return 1.0 - d;

}

// oscillator
void main( void ) {

	float x_offset = cc0;
	float frequency = cc1;
	float y_offset = cc2;
	// float rotation = cc3; //just for the label
	float x_crop = cc3;
	float rotation = cc4;
	float y_crop = cc5;
	float aspect_x = cc6;

	float aspect_y = cc8;

	float luma_min = cc9;
	float luma_max = cc10 + 1.;

	float mirror_amt = cc12;
	float mirror_rotation = cc13;

	vec2 position = CorrectAspectRatio(tcoord);
	position = mirror(position, mirror_amt, rotation_1);

	//frequency
	float this_frequency = frequency  * 15.0;
	if(this_frequency <0.){
		this_frequency = 0.;
	}
	//scan
	vec2 scn_pos = vec2( position.x, position.y );
	vec2 fb_pos = tcoord;//, rotation_mat);
	scn_pos = rotate2D(scn_pos, rotation_0 ); //rotate

	scn_pos = AspectNudge(scn_pos, aspect_x, aspect_y);


	float fb_mod_scale_shifted = feedback_mod_scale - 0.5;
	float this_fb_mod_scale = ((fb_mod_scale_shifted) * .5) * 2.5 * float(abs(fb_mod_scale_shifted) > .075);
	scn_pos += texture2D( feedback_frame , fb_pos  ).xy * feedback_mod_toggle * this_fb_mod_scale ;

	// float this_polarization = polarization;
	// float this_polar_drift = 0.0;
	// if(this_polarization < .07){
	// 	this_polarization = 0.0;
	// }
	// else if(abs((polarization_drift - .5) *2.) > 0.1){
	// 	this_polar_drift = (mirror_rotation_mat[1][0] ) ;
	// 	this_polarization += this_polar_drift * this_polarization;
	// }

	// vec2 scan = getScan2D(scn_pos , abs(this_polarization) ); //

	vec2 scan = getScan2D(scn_pos);

	//cross mod scaling
	float this_cross_scale = cross_mod_scale-.5;


	//cross modulation
	scan += ((texture2D( cross_mod_shape , tcoord.xy  ).x + texture2D( cross_mod_shape , tcoord.xy ).y) - 1.) *  cross_mod_toggle * this_cross_scale;

	
	//shape
	float colorX = circle(scan, this_frequency, (x_offset*5.), (y_offset*5.), x_crop, y_crop, 4.) * 2. - 1. ;

	//LumaKey
	colorX *= luma_key(abs(colorX), luma_min, luma_max +.01 );


	float colorY = colorX + 1.; // split range into 2 channels for more bit depth
	float colorZ = 0.0;

	gl_FragColor = vec4( colorX, colorY, colorZ , 1.0);


	
	//GAIN
	// float gain = clamp((cv3 * 2.) - 1., -0.6, 0.6) / .6; //knob scaling n junk
	// colorX *= gain;
	// colorX = clamp(colorX, 0., 1.);


	// float alpha = 1.0 * abs(colorX);
	// gl_FragColor = vec4( my_color , alpha);

	// gl_FragColor = vec4(vec3(polar_flip), 1.0);
}
