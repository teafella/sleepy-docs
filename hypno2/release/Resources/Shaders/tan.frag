#include "ShapeUtil.frag"

uniform sampler2D cross_mod_shape; //input from other oscillator
uniform sampler2D feedback_frame; //final frame for feedback

// Shader specific uniforms (Not Updated By Default put these in manually )
uniform sampler2D uv_in;
uniform float rotation;
uniform mat2 rotation_mat;

uniform float cross_mod_toggle;
uniform float cross_mod_scale;
uniform float feedback_mod_toggle;
uniform float feedback_mod_scale;

uniform float axis_rotation;
uniform float axis_rotation_drift;

// uniform float aspect_adjust;



void main( void ) {
	// mat2 rotation_mat = getRotationMatrix(rotation * TWO_PI);
	float x_offset = cc0;
	float frequency = cc1;
	float y_offset = cc2;
	 
	
	
	float fold_axis = cc3;
	float rotation = cc4; //just for the label
	float fold_shape = cc5;
	float aspect_x = cc6;
	float polarization = cc7;
	float aspect_y = cc8;
	

	float luma_min = cc9;
	
	float luma_max = cc11;

	float mirror_amt = cc12;
	float mirror_rotation = cc13;



	vec2 position = CorrectAspectRatio(tcoord);
	position = mirror(position, mirror_amt, rotation_1);

	// float upper_bound = .99;
	// if (frequency > upper_bound){
	// 	frequency = upper_bound;
	// }

	//frequency
	frequency = (log(1. - frequency) * 7.5) + .35;//-frequency  * 20.0 + .35;
	if(frequency > 0.){
		frequency = 0.;
	}
	//scan
	vec2 scn_pos = vec2( position.x, position.y );
	vec2 fb_pos = tcoord.xy;//, rotation_mat);
	float this_cross_scale = ((cross_mod_scale - 0.5) * .5) * 1.2;
	scn_pos = rotate2D(scn_pos, rotation_0 ); //rotate

	scn_pos = AspectNudge(scn_pos, aspect_x, aspect_y);
	
	//cross modulation
	scn_pos += cross_mod_toggle * this_cross_scale * ((texture2D( cross_mod_shape , tcoord.xy  ).x + texture2D( cross_mod_shape , tcoord.xy  ).y) - 1.);

	//feedback mod scaling
	float fb_mod_scale_shifted = feedback_mod_scale - 0.5;
	float this_fb_mod_scale = ((fb_mod_scale_shifted) * .5) * 2.5 * float(abs(fb_mod_scale_shifted) > .08);
	scn_pos += texture2D( feedback_frame , fb_pos  ).xy * feedback_mod_toggle * this_fb_mod_scale ;
	


	float this_polar_drift = 0.0;
	if (mirror_amt < 0.1) {
		if (polarization < .099) {
			polarization = 0.0;
		}
		else if (abs((polarization_drift - .5) * 2.) > 0.1) {
			this_polar_drift = (mirror_rotation_mat[1][0] ) ;
			polarization += this_polar_drift * polarization;
		}
	}

	vec2 scan = getScan2D(scn_pos, (polarization) ); //
	
	//shape
	float crop_mod = (fold_axis) * 8. ;
	
	float xphase = (((y_offset * 2.) - PI / 2. ));
	float yphase = (((x_offset * 2.) - PI / 2. ));
	float coef_x = scan.x * (frequency) + xphase;
	float coef_y = scan.y * (frequency) + yphase;
	float base_wave_x = tan(PI * coef_x);
	float base_wave_y = tan(PI * coef_y);
	float saturator_x = tan(coef_x );
	float saturator_y = tan(coef_y );

	float x_component = mix(base_wave_x, saturator_x , fold_shape);
	float y_component = mix(base_wave_y, saturator_y , fold_shape);
	float colorX = mix(x_component, y_component , fold_axis);


	// float colorX = tan(PI * scan.x * frequency + (phase) - PI/4. ) ;
	colorX *= luma_key(abs(colorX), luma_min,  luma_max+1.);

	//GAIN
	// float gain = clamp((cv3 * 2.) - 1., -0.6, 0.6) / .6; //knob scaling n junk
	// // float abs_gain = abs(gain);
	// colorX *= gain;
	// colorX = clamp(colorX, 0., 1.);

	float colorY = colorX + 1.; // split range into 2 channels for more bit depth
	float colorZ = 0.0;
	
	gl_FragColor = vec4( colorX, colorY, colorZ , 1.);

	// float alpha_thresh = .001;
	// float alpha = 1.0 * abs(colorX) ;
	// gl_FragColor = vec4( my_color , alpha);

	// gl_FragColor = vec4(drawImage(tcoord , vec2(0.,0.), vec2(1.)), 1.0);
}
