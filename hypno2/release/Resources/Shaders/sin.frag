//includes
#include "ShapeUtil.frag"

uniform sampler2D cross_mod_shape; //input from other oscillator
uniform sampler2D feedback_frame; //final frame for feedback

// Shader specific uniforms (Not Updated By Default put these in manually )

uniform sampler2D uv_in;
uniform float frequency;
uniform float rotation;
// uniform float rotation_drift;
uniform mat2 rotation_mat;

uniform float cross_mod_toggle;
uniform float cross_mod_scale;
uniform float feedback_mod_toggle;
uniform float feedback_mod_scale;

// uniform float mirror_amt;
uniform float axis_rotation;

// uniform float x_crop;
// uniform float y_crop;
// uniform float aspect_adjust;

#define NATIVE_BLENDING 1

// sin oscillator
void main( void ) {

	vec2 position = CorrectAspectRatio(tcoord) ;

	float x_offset = cc0;
	float frequency = cc1;//frequency ;
	float y_offset = cc2;

	float fold_axis = cc3;
	float rotation = cc4; //just for the label
	float fold_shape = cc5;
	float aspect_x = cc6;	
	float polarization = cc7;//polarization;
	float aspect_y = cc8;
	

	float luma_min = cc9;
	
	float luma_max = cc11;

	float mirror_amt = cc12;
	float mirror_rotation = cc13;



	position = mirror(position, mirror_amt, rotation_1);

	//cross mod params
	float this_cross_scale = (((cross_mod_scale - 0.5) * .5) * 1.2) ;

	//frequency
	//no limits bro
	float upper_bound = .99;
	if (frequency > upper_bound){
		frequency = upper_bound;
	}

	frequency = (log(1.-frequency) * 15.0) +.7; //(log(1. - frequency) * 15.0) + .7;
	// if(frequency > 0.){
	// 	frequency = 0.;
	// }
	//scan
	vec2 scn_pos = vec2( position.x, position.y ) ;
	vec2 fb_pos = tcoord.xy;
	//feedback mod scaling
	float fb_mod_scale_shifted = feedback_mod_scale - 0.5;
	float this_fb_mod_scale = ((fb_mod_scale_shifted) * .5) * 2.5 * float(abs(fb_mod_scale_shifted) > .08);
	scn_pos += texture2D( feedback_frame , fb_pos  ).xy * feedback_mod_toggle * this_fb_mod_scale ;
	scn_pos = rotate2D(scn_pos, rotation_0 ); //rotate (needs to b re implemented for new vknobs)
	scn_pos = AspectNudge(scn_pos, aspect_x, aspect_y);

	scn_pos += cross_mod_toggle * this_cross_scale * ((texture2D( cross_mod_shape , tcoord.xy  ).x + texture2D( cross_mod_shape , tcoord.xy  ).y + texture2D( cross_mod_shape , tcoord.xy  ).z) - 1.);


	// if there isnt mirroring, apply internal modulation to polarization
	// float drift_constant = (axis_rotation_drift - .5) *2.;
	// float polarization_drift = sin((time/150. * (TWO_PI) * (drift_constant * float(abs(drift_constant) > .07) * float(mirror_amt < .1) ) ) );
	
	// float this_polar_drift = 0.0;
	if (mirror_amt < 0.1) {
		if (polarization < .099) {
			polarization = 0.0;
		}
		else if (abs((polarization_drift - .5) * 2.) > 0.1) {
			// this_polar_drift = tri(y_phase);//( mirror_rotation_mat[1][0] ) ;
			// polarization += this_polar_drift * polarization;
		}
	}

	// if (polarization >= 1.) {
	// 	polarization = 1.;
	// }
	
	vec2 scan = getScan2D(scn_pos , (polarization) ) ; //

	//cross mod scaling

	//cross modulation
	// scan += ((texture2D( cross_mod_shape , position  ).x - texture2D( cross_mod_shape , position  ).y) - 1.) * cross_mod_toggle * this_cross_scale;

	//shape
	
	float x_phase = ((y_offset * 10.) - PI / 2. );
	float y_phase = ((x_offset * 10.) - PI / 2. );
	
	float coef_x = scan.x * (frequency) + x_phase;
	float coef_y = scan.y * (frequency) + y_phase;
	float sin_wave_x = sin(PI * coef_x);
	float sin_wave_y = sin(PI * coef_y);
	float tri_sat_x = tri(coef_x);
	float tri_sat_y = tri(coef_y);
	// float exp_sat = pcurve(sin_wave, x_crop, y_crop);
    // sin_coef_x /= crop_mod;

	// float colorX = sin(sin_coef_x + (tri_sat) * crop_mod) ;
	float x_component = mix(sin_wave_x, tri_sat_x , fold_shape );
	float y_component = mix(sin_wave_y, tri_sat_y , fold_shape );
	float colorX = mix(x_component, y_component , fold_axis);

	//LumaKey (Sampled from original frame)
	colorX *=  luma_key(abs(colorX) , luma_min,  luma_max+1.) ;// keep! can do something with transparency here also

	//GAIN (blending mode only)

	// float gain = clamp((cv3 * 2.) - 1., -0.6, 0.6) / .6; //knob scaling n junk
	// colorX *= gain;

	// colorX = clamp(colorX, 0., 1.);

	// float alpha = 1.0 * abs(colorX); ;

	float colorY = colorX + 1.; // split range into 2 channels for more bit depth
	float colorZ = 0.0;
	// gl_FragColor = vec4(drawImage(tcoord , vec2(0.,0.), vec2(1.)), 1.0);

	gl_FragColor = vec4( colorX , colorY , colorZ , 1.);

	// gl_FragColor = vec4( cc1 , cc2 , colorZ , 1.);

	
}
