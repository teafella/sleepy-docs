#include "ShapeUtil.frag"
uniform sampler2D cross_mod_shape; //input from other oscillator
uniform sampler2D feedback_frame; //final frame for feedback

// Shader specific uniforms (Not Updated By Default put these in manually )
uniform sampler2D uv_in;
uniform float frequency;
uniform float rotation;
uniform mat2 rotation_mat;
uniform float polarization;

uniform float cross_mod_toggle;
uniform float cross_mod_scale;
uniform float feedback_mod_toggle;
uniform float feedback_mod_scale;
uniform float polar_flip;

// uniform float mirror_amt;
uniform float axis_rotation;
uniform float axis_rotation_drift;

// uniform float y_stretch;
// uniform float x_stretch;
// uniform float num_sides;

// uniform float luma_min;
// uniform float luma_max;


float polygon(vec2 st, float _frequency, float phase_x, float phase_y, float n, float _y_stretch, float _x_stretch, float _luma_min, float  _luma_max) { // n is num sides
	float d = 0.0;
	float size_x = 1.-_y_stretch + .1;
	float size_y = 1.-_x_stretch + .1;
	// Remap the space to -1. to 1.
	st += vec2(-.5, -.5); //makes frequency setting center based
	st *= (_frequency/2.);
	st.x += (phase_x*5.) ;
	st.y +=  (phase_y*5.); //Y phase/offset
	st = fract(st) * 3. - 1.;

	st.x *= size_x *2.;
    st.y *= size_y *2.;

	// st += .1;
	//basic square
	// d = step(size_x, abs(st.x) ) + step(size_y, abs(st.y) );

	 // Angle and radius from the current pixel
	float a = atan(st.x,st.y)+PI;
	float r = TWO_PI/float(n);

	// Shaping function that modulate the distance
	d = cos(floor(.5+a/r)*r-a)*length(st);

	d = smoothstep(.4- _luma_min,0.410 + _luma_max,d);
	
	return 1.-d;
}


void main( void ) {
	float x_offset = cc0;
	float frequency = cc1;
	float y_offset = cc2;
	
	float x_stretch = cc3;
	float rotation = cc4;
	float y_stretch = cc5;
	float aspect_x = cc6;
	float num_sides = cc7;
	float aspect_y = cc8;
	
	

	float luma_min = cc9;

	float luma_max = cc11 + 1.;

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
	vec2 scn_pos = vec2( position.x, position.y ) ;//+ vec2(-.2, +.36);
	vec2 fb_pos = tcoord.xy ;//, rotation_mat);
	scn_pos = rotate2D(scn_pos, rotation_0 ); //rotate
	scn_pos = AspectNudge(scn_pos, aspect_x, aspect_y) ;


	float fb_mod_scale_shifted = feedback_mod_scale - 0.5;
	float this_fb_mod_scale = ((fb_mod_scale_shifted) * .5) * 2.5 * float(abs(fb_mod_scale_shifted) > .075);
	scn_pos += texture2D( feedback_frame , fb_pos  ).xy * feedback_mod_toggle * this_fb_mod_scale ;
	
	// float this_polarization = polarization;
	// float this_polar_drift = 0.0;
	// if (mirror_amt < 0.1) {
	// 	if (this_polarization < .07) {
	// 		this_polarization = 0.0;
	// 	}
	// 	else if (abs((polarization_drift - .5) * 2.) > 0.1) {
	// 		this_polar_drift = (mirror_rotation_mat[1][0] ) ;
	// 		this_polarization += this_polar_drift * this_polarization;
	// 	}
	// }
	

	// vec2 scan = getScan2D(scn_pos , abs(this_polarization) ); //
	

	//cross mod scaling
	float this_cross_scale = cross_mod_scale-.5;
	//cross modulation
	scn_pos += ((texture2D( cross_mod_shape , tcoord.xy  ).x + texture2D( cross_mod_shape , tcoord.xy  ).y) - 1.) *  cross_mod_toggle * this_cross_scale;

	//shape
	float colorX = polygon(scn_pos, this_frequency, (x_offset), y_offset,  ceil(7. * num_sides + 3.), y_stretch, x_stretch, luma_min, luma_max ) * 2. - 1. ;

	float colorY = colorX + 1.; // split range into 2 channels for more bit depth
	float colorZ = 0.0;

	gl_FragColor = vec4( colorX, colorY, colorZ , 1.0);

	//GAIN
	// float gain = clamp((cv3 * 2.) - 1., -0.6, 0.6) / .6; //knob scaling n junk
	// // float abs_gain = abs(gain);
	// colorX *= gain;
	// colorX = clamp(colorX, 0., 1.);

	// float alpha = 1.0 * abs(colorX);//* float(colorX > alpha_thresh || colorX < -alpha_thresh ) ;
	// gl_FragColor = vec4( my_color , alpha);

}
