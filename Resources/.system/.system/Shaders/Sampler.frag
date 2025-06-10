#include "ShapeUtil.frag"

uniform sampler2D cross_mod_shape; //input from other oscillator
uniform sampler2D feedback_frame; //final frame for feedback

// Shader specific uniforms (Not Updated By Default put these in manually )
uniform sampler2D sampled_frame;

uniform float drift;
// uniform float rotation;
// uniform mat2 rotation_mat;
// uniform float polarization;

uniform float cross_mod_toggle;
uniform float cross_mod_scale;
uniform float feedback_mod_toggle;
uniform float feedback_mod_scale;

uniform float mirror_amt;
uniform float axis_rotation;
uniform float axis_rotation_drift;

uniform float context_resolution_x;
uniform float context_resolution_y;
uniform float input_resolution_x;
uniform float input_resolution_y;


uniform float saturation;
uniform float hue_shift;
uniform float gain;

uniform float x_crop;
uniform float y_crop;
uniform float aspect_adjust;

uniform float bgr_input;



float myclamp(float value, float min, float max){
	if(value > max){
		return max;
	}
	else if(value < min){
		return min;
	}
	return value;
}


void main( void ) {
	float x_offset = cc0;
	float frequency = cc1;
	float y_offset = cc2;
	
	float x_crop_min = cc3 ;
	float rotation = cc4;
	float x_crop_max = cc5 + 1.;
	
	float y_crop_min = cc6 ;

	float y_crop_max = cc8 + 1.;


	float aspect_x = cc9;

	float aspect_y = cc11;
	
	

	float luma_min = cc12;
	float polarization = cc13;
	float luma_max = cc14 + 1.;

	float mirror_amt = cc15;
	float mirror_rotation = cc16;

	vec2 uv = tcoord;
	uv = vec2(uv.x, 1.-uv.y) ;
	uv = CorrectAspectRatio(uv, vec2(context_resolution_x, context_resolution_y));
	uv = rotate2D(uv, PI*1.5); //should def be CPU side matrix (need to flip since we on a wierd screen)

	// uv *= .5;
	// uv.x = uv.x + .25;
	// uv.y = uv.y + .25;

	
	
	uv = mirror(uv, mirror_amt, rotation_1 );

	//frequency
	float this_frequency = (frequency *2.) ;
	// uv.x *= aspect_x;
	// uv.y *= aspect_y;

	//scan
	vec2 scn_pos = vec2( uv.x, uv.y);

	//second correction for user nudge

	float aspect_control_x = aspect_x + ( (input_resolution_x / input_resolution_y)) * (1.-float(input_resolution_x == input_resolution_y)) ; // cancel out auto offset for square images (hack? maybe)
	float aspect_control_y = aspect_y + ( (input_resolution_y / input_resolution_x)) * (1.-float(input_resolution_x == input_resolution_y)) ; // cancel out auto offset for square images (hack? maybe)
	float aspect_adjust_x = ((aspect_control_x * 1.5) + 1.) * 2. - 2.5; //-2.5 to 2.5 range
	float aspect_adjust_y = ((aspect_control_y * 1.5) + 1.) * 2. - 2.5; //-2.5 to 2.5 range


	// float y_adjust =  2. - aspect_adjust_xy ;
	// float x_adjust =;
	// if( aspect_control > 0.5 ){
		
	// }


	vec2 fb_pos = tcoord.xy;//, rotation_mat);
	scn_pos = rotate2D(scn_pos, rotation_0 ); //rotate
	scn_pos = RectifyAspectRatio(scn_pos, vec2(input_resolution_x, input_resolution_y) );

	scn_pos.x = CorrectAspectRatio(scn_pos.x, 1. - aspect_x );
	scn_pos.y = CorrectAspectRatio(scn_pos.y, 1.- aspect_y );

	// scn_pos.x = 1. - scn_pos.x;
	// if( aspect_control > 0.5 ){
	// 	scn_pos.x = RectifyAspectRatio(scn_pos.x, aspect_adjust_xy);
	// }
	// else{
	// 	scn_pos.y = RectifyAspectRatio(scn_pos.y, y_adjust);
	// }
	// scn_pos.y = RectifyAspectRatio(scn_pos.y, aspect_adjust_xy);

	// float this_fb_mod_scale = ((feedback_mod_scale - 0.5) * .5) * 2.5;
	// scn_pos += texture2D( feedback_frame , fb_pos  ).xy * feedback_mod_toggle * this_fb_mod_scale ;
	

	// polarization (disabled for sampler)
	float this_polarization = polarization;
	float this_polar_drift = 0.0;
	if (mirror_amt < 0.1) {
		if (this_polarization < .099) {
			this_polarization = 0.0;
		}
		else if (abs((polarization_drift - .5) * 2.) > 0.1) {
			this_polar_drift = (mirror_rotation_mat[1][0] ) ;
			this_polarization += this_polar_drift * this_polarization;
		}
	}

	// vec2 scan = getScan2D(scn_pos , abs(this_polarization) ); //

	// scn_pos.y += polarization/2.;
	vec2 scan = getScan2D(scn_pos, polarization );//
	
	bool  MIRROR_HORIZONTAL = true;
	bool  MIRROR_VERTICAL = MIRROR_HORIZONTAL;

	// if (this_frequency >= 0.) { //if mirroring is disabled rotation knob controls texture repeat mode
	// 	MIRROR_HORIZONTAL = false;
	// 	MIRROR_VERTICAL = false;
	// 	if(axis_rotation > 0.5){
	// 		MIRROR_HORIZONTAL = false;
	// 		MIRROR_VERTICAL = false;
	// 	}
	// }
	// else{
	// 	scan.y *= -1.;
	// }

	//cross mod scaling
	// float this_cross_scale = cross_mod_scale-.5;
	//cross modulation
	// scan += cross_mod_toggle * this_cross_scale * ((texture2D( cross_mod_shape , tcoord.xy  ).x + texture2D( cross_mod_shape , tcoord.xy  ).y) - 1.) ;
	// scan *= (this_frequency +.8) + ( float(!MIRROR_VERTICAL || !MIRROR_HORIZONTAL) *.85 ); // +.95
	scan *= abs(this_frequency+.8);// + input_resolution_y/context_resolution_y;
	scan.x -= x_offset/2. ;

	

	scan = scan + (.5 + (.5 * float(!MIRROR_VERTICAL || !MIRROR_HORIZONTAL))) -.001 ;
	// scan = scan + .5;
	//calculate scan cropping info
	float x_origin =  0.;//.5 * (x_crop) ;//(2.- preset_pot_1_6*2.) - .5 ;
	float x_size = (2.- float(!MIRROR_HORIZONTAL) ) - (2.0- float(!MIRROR_HORIZONTAL)) * (x_crop) -0.001 ;//(0.5 - (.5 * preset_pot_1_4)) + 1. ;//(1.0-preset_pot_1_6)-0.01;
	float y_origin = 0.;//.5* (y_crop) ;
	float y_size = (2.- float(!MIRROR_VERTICAL) ) - (2.0- float(!MIRROR_VERTICAL)) * (y_crop) -0.001;

	// scan.y -= x_origin;
	//zoom in to preserve image size
	// scan *= x_size/2.;
	// scan.y += x_origin;

	scan.y += (polarization*2. - 1.) + (y_offset/2. +1.) ;///Y Phase/drift

	// zoom in constant
	float y_origin_adjust_scalar = 1.;
	scan.y -= y_origin  ; //* y_origin_adjust_scalar;// * 1.58;

	

	// scan.y += y_size;


	
	//cropping
	
	//X
	float x_is_odd = step(x_size/2., mod(scan.x, x_size) );
	x_is_odd *= float(MIRROR_HORIZONTAL);

		// scan.x = abs(scan.x);
		// scan.x = mod(scan.x,  x_size) ;
		// scan.x = mix(scan.x , x_size - (scan.x * float(MIRROR_HORIZONTAL)) , x_is_odd); // MIRROR_HORIZONTAL
		// scan.x += x_origin;

	
	
	// // //Y
	float y_is_odd = step(y_size/2., mod(scan.y, y_size) );
	y_is_odd *= float(MIRROR_VERTICAL);

		// scan.y = abs(scan.y/2.);
		// scan.y = mod(scan.y,  y_size) ;
		// scan.y = mix(scan.y  , y_size - (scan.y * float(MIRROR_VERTICAL)), y_is_odd); //flip flop? MIRROR_VERTICAL
		// scan.y += y_origin;



	// if (this_frequency > 0.) {
	// 	if(scan.x > 1.){
	// 		scan.x = mod(scan.x, 1.);
	// 	}
	// }

	vec4 sample_color =  texture2D( sampled_frame, scan  ); //scan + phase
	if (this_frequency >= -0.8) {
		if( !(x_crop_min < -1. ) ){
			if( scan.x < x_crop_min){
				sample_color = vec4(0.);
			}
			
		}
		if(! (x_crop_max > 2.)){
			if(scan.x > x_crop_max ){
				sample_color = vec4(0.);
			}
		}
		if( !(y_crop_min < -1. ) ){
			if( scan.y < y_crop_min){
				sample_color = vec4(0.);
			}
			
		}
		if(! (y_crop_max > 2.)){
			if(scan.y > y_crop_max ){
				sample_color = vec4(0.);
			}
		}
	}


	vec3 linear_sample_color = linear_srgb_from_srgb(sample_color.xyz);
	vec3 sample_for_recolor;
	//Recolor
	//if bgr swap values
	// if( bgr_input > 0.0){
	// 	sample_for_recolor = linear_sample_color.zyx;
	// }
	// else{
		sample_for_recolor = linear_sample_color.xyz;
	// }


	// // //full color (video in)
	// vec3 recolor = (HSVRecolor(sample_for_recolor, hue_shift, saturation)) ;

	// // //full color video needs inversion on negative gain
	// float this_gain = clamp((gain * 2.) - 1., -0.6, 0.6) / .6;
	// float gain_is_positive = float(this_gain > -0.05);
	// vec3 out_color = mix( InvertColor(recolor) , (recolor) , gain_is_positive);
	vec3 out_color = sample_for_recolor;
	//LumaKey (Sampled from original frame)
	out_color *= luma_key(luma(linear_sample_color), luma_min, luma_max +.0001);

	
	//actual gain calculated later in mixer shader
	// gl_FragColor = vec4(texture2D( sampled_frame, scn_pos ).xyz  , 1.);
	
	gl_FragColor = vec4(out_color.xyz * sample_color.a, sample_color.a); //fake alphas, real alphas used later in mixer
}
