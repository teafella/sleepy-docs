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

uniform float mirror_amt;
uniform float axis_rotation;
uniform float axis_rotation_drift;

uniform float x_crop;
uniform float y_crop;
uniform float aspect_adjust;

uniform float luma_min;
uniform float luma_max;


float fbm (in vec2 st, float val, float amp , float freq, float _octaves ) {
	// Initial values
	float value = val;
	float amplitude = amp;
	float frequency = freq;

	if(_octaves < 0. ){
		_octaves = 0.;
	}
	if(_octaves > 2. ){
		_octaves = 2.;
	}

	//
	// Loop of octaves
	for (int i = 0; i < int(_octaves * 4. + 1.); i++) {
		value += amplitude * noise(st) ;
		st *= 2.;
		amplitude *= .5;
	}
	return value;
}


// oscillator
void main( void ) {
	vec2 position = CorrectAspectRatio(tcoord);

	float x_offset = cc0;
	float frequency = cc1;//frequency ;
	float y_offset = cc2;

	float aspect_x = cc3;
	float rotation = cc4; //just for the label
	float aspect_y = cc5;
	
	
	//cc6;
	float octaves = cc7;
	//cc8;	
	float luma_min = cc9;
	float polarization = cc10;//polarization;
	float luma_max = cc11;

	float mirror_amt = cc12;
	float mirror_rotation = cc13;


	position = mirror(position, mirror_amt, rotation_1 );

	//frequency
	float this_frequency = frequency * 20.0 ; //log(1.-frequency)  ;
	if(this_frequency <0.){
		this_frequency = 0.;
	}
	//scan
	vec2 scn_pos = vec2( position.x, position.y );
	vec2 fb_pos = tcoord;//, rotation_mat);

	scn_pos = rotate2D(scn_pos, rotation_0 ); //rotate

	//second correction for user nudge of aspect adjust
	
	scn_pos = AspectNudge(scn_pos, aspect_x, aspect_y);

	//-----

	//cropping
	bool  MIRROR_HORIZONTAL = true;
	bool  MIRROR_VERTICAL = MIRROR_HORIZONTAL;

	if (mirror_amt < .1) { //if mirroring is disabled rotation knob controls texture repeat mode
		if(axis_rotation > 0.5){
			MIRROR_HORIZONTAL = false;
			MIRROR_VERTICAL = false;
		}
	}

	float this_cross_scale = ((cross_mod_scale - 0.5) * .5) * 1.2;
	//cross modulation
	scn_pos += cross_mod_toggle * this_cross_scale * ((texture2D( cross_mod_shape , tcoord.xy  ).x + texture2D( cross_mod_shape , tcoord.xy  ).y) - 1.);

	// scan *= (this_frequency + .85) + ( float(!MIRROR_VERTICAL || !MIRROR_HORIZONTAL) * .86 ); // +.95

	float fb_mod_scale_shifted = feedback_mod_scale;// - 0.5;
	float this_fb_mod_scale = ((fb_mod_scale_shifted) * .5) * 2.5 * float(abs(fb_mod_scale_shifted) > .08);
	scn_pos += texture2D( feedback_frame , fb_pos  ).xy * feedback_mod_toggle * this_fb_mod_scale;

	//----

	float this_polarization = polarization;
	float this_polar_drift = 0.0;
	if (mirror_amt < 0.1) {
		if (this_polarization < .099) {
			this_polarization = 0.0;
		}
		else if (abs((polarization_drift - .5) * 2.) > 0.1) {
			this_polar_drift = tri(y_phase);//( mirror_rotation_mat[1][0] ) ;
			this_polarization += this_polar_drift * this_polarization;
		}
	}

	if (this_polarization >= 1.) {
		this_polarization = 1.;
	}

	vec2 scan = getScan2D(scn_pos , abs(this_polarization) ); //
	
	
	//shape
	
	// scan = scan + (.5 + (.5 * float(!MIRROR_VERTICAL || !MIRROR_HORIZONTAL))) ;
	//calculate scan cropping info
	// float x_origin = .5 * (x_crop) ;//(2.- preset_pot_1_6*2.) - .5 ;
	// float x_size = (2.- float(!MIRROR_HORIZONTAL) ) - (2.0- float(!MIRROR_HORIZONTAL)) * (x_crop) -0.001;//(0.5 - (.5 * preset_pot_1_4)) + 1. ;//(1.0-preset_pot_1_6)-0.01;
	// float y_origin = .5 * (y_crop) ;
	// float y_size = (2.- float(!MIRROR_VERTICAL) ) - (2.0- float(!MIRROR_VERTICAL)) * (y_crop) -0.001;

	//zoom in to preserve image size
	// scan *= x_size/2.;
	// scan.y += x_origin;

	// scan.y += (polarization*2. - 1.) + (y_phase/1.5) ;///Y Phase/drift

	// zoom in constant
	// float y_origin_adjust_scalar = 1.;
	// scan.y -= y_origin  ; //* y_origin_adjust_scalar;// * 1.58;

	//cropping
	
	//X
	
	// float x_is_odd = step(x_size/2., mod(scan.x, x_size) );
	// x_is_odd *= float(MIRROR_HORIZONTAL);
	// scan.x = mod(scan.x, (x_size));
	// scan.x = mix(scan.x , x_size - scan.x , x_is_odd); // MIRROR_HORIZONTAL
	// scan.x += x_origin;


	//Y

	// float y_is_odd = step(y_size/2., mod(scan.y, y_size) );
	// y_is_odd *= float(MIRROR_VERTICAL);
	// scan.y = mod(scan.y,  y_size);
	// scan.y = mix(scan.y , y_size - (scan.y * float(MIRROR_VERTICAL)), y_is_odd); //flip flop? MIRROR_VERTICAL
	// scan.y += y_origin;
		

	//color out
	float colorX = fbm( (scan * (2.* this_frequency)) + vec2(-x_offset*10., -y_offset*10.) ,  0.05 , 1. , 0.2, octaves ) ; //noise(scan * this_frequency + vec2(this_drift * time / 2.));//
	colorX = colorX * 2. - 1.;

	colorX *= luma_key( abs(colorX), luma_min,  luma_max + 1.);


	float colorY = colorX + 1.; // split range into 2 channels for more bit depth
	float colorZ = 0.0;

	gl_FragColor = vec4( colorX, colorY, colorZ , 1.0);

	//GAIN
	// float gain = clamp((cv3 * 2.) - 1., -0.6, 0.6) / .6; //knob scaling n junk
	// // float abs_gain = abs(gain);
	// colorX *= gain;
	// colorX = clamp(colorX, 0., 1.);

	// // float alpha_thresh = .001;
	// float alpha = 1.0 * abs(colorX);
	// gl_FragColor = vec4( my_color , alpha);
}
