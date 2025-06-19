
precision mediump float;

uniform vec2 resolution;
uniform vec2 resolution_step;

uniform float cv0;
uniform float cv1;
uniform float cv2;
uniform float cv3;
uniform float cv4;
uniform float cv5;
uniform float cv6;
uniform float cv7;
uniform float cv8;


//palette colors
uniform vec3 color0;
uniform vec3 color1;
uniform vec3 color2;

//midi cc (New in 3)

uniform float cc0;
uniform float cc1;
uniform float cc2;
uniform float cc3;
uniform float cc4;
uniform float cc5;
uniform float cc6;
uniform float cc7;
uniform float cc8;
uniform float cc9;
uniform float cc10;
uniform float cc11;
uniform float cc12;
uniform float cc13;
uniform float cc14;
uniform float cc15;
uniform float cc16;
uniform float cc17;
uniform float cc18;
uniform float cc19;
uniform float cc20;
uniform float cc21;
uniform float cc22;
uniform float cc23;
uniform float cc24;
uniform float cc25;
uniform float cc26;
uniform float cc27;
uniform float cc28;
uniform float cc29;
uniform float cc30;
uniform float cc31;
uniform float cc32;
uniform float cc33;
uniform float cc34;
uniform float cc35;
uniform float cc36;
uniform float cc37;
uniform float cc38;
uniform float cc39;
uniform float cc40;
uniform float cc41;
uniform float cc42;
uniform float cc43;
uniform float cc44;
uniform float cc45;
uniform float cc46;
uniform float cc47;
uniform float cc48;
uniform float cc49;
uniform float cc50;
uniform float cc51;
uniform float cc52;
uniform float cc53;
uniform float cc54;
uniform float cc55;
uniform float cc56;
uniform float cc57;
uniform float cc58;
uniform float cc59;
uniform float cc60;
uniform float cc61;
uniform float cc62;
uniform float cc63;
uniform float cc64; //halfway phew
uniform float cc65;
uniform float cc66;
uniform float cc67;
uniform float cc68;
uniform float cc69;
uniform float cc70;
uniform float cc71;
uniform float cc72;
uniform float cc73;
uniform float cc74;
uniform float cc75;
uniform float cc76;
uniform float cc77;
uniform float cc78;
uniform float cc79;
uniform float cc80;
uniform float cc81;
uniform float cc82;
uniform float cc83;
uniform float cc84;
uniform float cc85;
uniform float cc86;
uniform float cc87;
uniform float cc88;
uniform float cc89;
uniform float cc90;
uniform float cc91;
uniform float cc92;
uniform float cc93;
uniform float cc94;
uniform float cc95;
uniform float cc96;
uniform float cc97;
uniform float cc98;
uniform float cc99;
uniform float cc100;
uniform float cc101;
uniform float cc102;
uniform float cc103;
uniform float cc104;
uniform float cc105;
uniform float cc106;
uniform float cc107;
uniform float cc108;
uniform float cc109;
uniform float cc110;
uniform float cc111;
uniform float cc112;
uniform float cc113;
uniform float cc114;
uniform float cc115;
uniform float cc116;
uniform float cc117;
uniform float cc118;
uniform float cc119;
uniform float cc120;
uniform float cc121;
uniform float cc122;
uniform float cc123;
uniform float cc124;
uniform float cc125;
uniform float cc126;
uniform float cc127;
uniform float cc128;
//up to 4 rotation matrices supported
uniform mat2 rotation_0;
uniform mat2 rotation_1;
uniform mat2 rotation_2;
uniform mat2 rotation_3;

varying vec2 tcoord;
uniform float time;

#define PI 3.14159265358979323846
#define TWO_PI 6.28318530718

//////////////////////////////////////////////////////////////////////
// sRGB color transform and inverse from 
// https://bottosson.github.io/posts/colorwrong/#what-can-we-do%3F

vec3 srgb_from_linear_srgb(vec3 x) {

    vec3 xlo = 12.92*x;
    vec3 xhi = 1.055 * pow(x, vec3(0.4166666666666667)) - 0.055;
    
    return mix(xlo, xhi, step(vec3(0.0031308), x));

}

vec3 linear_srgb_from_srgb(vec3 x) {

    vec3 xlo = x / 12.92;
    vec3 xhi = pow((x + 0.055)/(1.055), vec3(2.4));
    
    return mix(xlo, xhi, step(vec3(0.04045), x));

}

//////////////////////////////////////////////////////////////////////
// oklab transform and inverse from
// https://bottosson.github.io/posts/oklab/


const mat3 fwdA = mat3(1.0, 1.0, 1.0,
                       0.3963377774, -0.1055613458, -0.0894841775,
                       0.2158037573, -0.0638541728, -1.2914855480);
                       
const mat3 fwdB = mat3(4.0767245293, -1.2681437731, -0.0041119885,
                       -3.3072168827, 2.6093323231, -0.7034763098,
                       0.2307590544, -0.3411344290,  1.7068625689);

const mat3 invB = mat3(0.4121656120, 0.2118591070, 0.0883097947,
                       0.5362752080, 0.6807189584, 0.2818474174,
                       0.0514575653, 0.1074065790, 0.6302613616);
                       
const mat3 invA = mat3(0.2104542553, 1.9779984951, 0.0259040371,
                       0.7936177850, -2.4285922050, 0.7827717662,
                       -0.0040720468, 0.4505937099, -0.8086757660);

vec3 oklab_from_linear_srgb(vec3 c) {

    vec3 lms = invB * c;
            
    return invA * (sign(lms)*pow(abs(lms), vec3(0.3333333333333)));
    
}

vec3 linear_srgb_from_oklab(vec3 c) {

    vec3 lms = fwdA * c;
    
    return fwdB * (lms * lms * lms);
    
}

//////////////////////////////////////////////////////////////////////

// --------ASPECT RATIO-----------------------------------------|
vec2 CorrectAspectRatio(vec2 st){
	float aspect_x = (resolution.x / resolution.y);
	st.x *= aspect_x;
	st.x -= (aspect_x - 1. )/2.;
	return st;
}
//Attn: when using textures that are not thesame size as context you may need to pass context res and use below function overload
vec2 CorrectAspectRatio(vec2 st, vec2 this_resolution){
	float aspect_x = this_resolution.x / this_resolution.y;
	st.x *= aspect_x;
	st.x -= (aspect_x - 1. )/2.;
	return st;
}

vec2 CorrectAspectRatio(vec2 st, vec2 this_resolution, float aspect_nudge){ //expects 0-1 on aspect nudge
	float aspect_x = this_resolution.x / this_resolution.y + ((1.0 - aspect_nudge) *1.5);
	st.x *= aspect_x;
	st.x -= (aspect_x - 1. )/2.;
	return st;
}
float CorrectAspectRatio(float st, float aspect_scalar){
	float aspect_nudge = aspect_scalar;
	st *= aspect_nudge;
	st -= (aspect_nudge - 1. )/2.;
	return st;
}

vec2 RectifyAspectRatio(vec2 st){
	float aspect_x = resolution.x / resolution.y;
	st.x += (aspect_x - 1. )/2.;
	st.x /= aspect_x;
	return st;
}
//Attn: when using textures that are not thesame size as context you may need to pass context res and use below function overload 
vec2 RectifyAspectRatio(vec2 st, vec2 this_resolution){
	float aspect_x = this_resolution.x / this_resolution.y;
	st.x += (aspect_x - 1. )/2.;
	st.x /= aspect_x;
	return st;
}

vec2 RectifyAspectRatio(vec2 st, vec2 this_resolution, float aspect_nudge){
	float aspect_x = this_resolution.x / this_resolution.y + ((1.0 - aspect_nudge) *1.5);
	st.x += (aspect_x - 1. )/2.;
	st.x /= aspect_x;
	return st;
}

float RectifyAspectRatio(float st, float aspect_scalar){
	float aspect_nudge = aspect_scalar;
	st += (aspect_nudge - 1. )/2.;
	st /= aspect_nudge;
	return st;
}


vec2 AspectNudge(vec2 scn_pos, float aspect_control){
	float aspect_adjust_xy = ((aspect_control * 1.5) + 1.) * 2. - 2.5; //-2.5 to 2.5 range
	float y_adjust =  2. - aspect_adjust_xy ;
	

	if( aspect_control > 0.5 ){
		scn_pos.x = RectifyAspectRatio(scn_pos.x, aspect_adjust_xy);
	}
	else{
		scn_pos.y = RectifyAspectRatio(scn_pos.y, y_adjust);
	}

	return scn_pos;
}
vec2 AspectNudge(vec2 scn_pos, float aspect_x, float aspect_y){
	 //-2.5 to 2.5 range
	float y_adjust =  2. - aspect_y ;
	

	// if( aspect_control > 0.5 ){
	// 	scn_pos.x = RectifyAspectRatio(scn_pos.x, aspect_adjust_xy);
	// }
	// else{
	// 	scn_pos.y = RectifyAspectRatio(scn_pos.y, y_adjust);
	// }

	scn_pos.x = RectifyAspectRatio(scn_pos.x, 1. - aspect_x);
	scn_pos.y = RectifyAspectRatio(scn_pos.y, 1. - aspect_y);

	return scn_pos;
}


mat2 getRotationMatrix(float _angle) {
	return mat2(cos(_angle), -sin(_angle),
	            sin(_angle), cos(_angle));
}



vec2 rotate2D(vec2 _st, float _angle) {
	_st -= 0.5;
	_st =  mat2(cos(_angle), -sin(_angle),
	            sin(_angle), cos(_angle)) * _st;
	_st += 0.5;
	return _st;
}

vec2 rotate2D(vec2 _st, mat2 rotation_matrix ) {
	_st -= 0.5;
	_st *= rotation_matrix;
	_st += 0.5;
	return _st;
}

mat2 scale(vec2 _scale) {
	return mat2(_scale.x, 0.0,
	            0.0, _scale.y);
}

vec2 toPolar(vec2 st) { // Outputs distance 0 to 1 and Thet
	st = st * 2. - 1.;

	// Angle and radius from the current pixel
	float ang = ( atan(st.y, st.x) + PI ) / TWO_PI; // angle is scaled so you can use this to address stuff and be more shader like
	float rad = sqrt(dot(st, st)) ;

	st = vec2(ang, rad );

	return st;
}

//------Base Screen Scan for All Shapes-------|
vec2 getScan2D(vec2 position){
	return position * 2. -1.;
}
vec2 getScan2D(vec2 position, float polar) {
	vec2 ret;
	if(polar > .007){
		vec2 polarPos = toPolar(position) ;
		polarPos = vec2(polarPos.y);
		ret = mix( position, polarPos , polar ) ;
	}
	else{
		ret = position;
	}
	ret = ret * 2. - 1.;
	return ret;
}

vec2 getScan2DFlipped(vec2 position, float polar) {

	vec2 polarPos = toPolar(position) ;
	polarPos = vec2( sin((polarPos.x ) * PI)  , polarPos.y  );

	vec2 ret = mix( position, polarPos , polar);
	return ret;
}




// Color Space Conversion \-----------------------------|
vec3 rgb2hsv(vec3 c)
{
	vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
	vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
	vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

	float d = q.x - min(q.w, q.y);
	float e = 1.0e-10;
	return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
	vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
	vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
	return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float luma(vec3 color) {
	return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
	return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}

float okLuma(vec3 color) { //luminance based on okLab
	return oklab_from_linear_srgb(linear_srgb_from_srgb(color)).x;
}

vec3 ColorClamp(vec3 color) {
	// float color_mag = abs(length(color ) );
	// float color_clamp = (step(1., color_mag ) );
	// color = mix( color , normalize(color)  , color_clamp  );
	return color;
}


vec3 InvertColor(vec3 color) {
	return vec3(1.0 - color.r,1.0 -color.g,1.0 -color.b); 
}

vec3 HSVRecolor(vec3 color, float hue_shift, float saturation) {
	color = rgb2hsv(color);
	color.x = color.x + hue_shift;
	color.y = color.y * (saturation);
	color = hsv2rgb(color);
	return color;
}

// vec3 LabRecolor(vec3 color, float hue_shift, float saturation) {
// 	color = oklab_from_linear_srgb(linear_srgb_from_srgb(color));
	
// 	color.x = color.x + hue_shift;
// 	color.y = color.y * (saturation);
// 	color = hsv2rgb(color);
// 	return color;
// }

// Noise and random \-----------------------------|

float random (float x) {
	return fract(sin(x) * 1e4);
}

float random (in vec2 st) {
	return fract(sin(dot(st.xy,
	                     vec2(12.9898, 78.233))) *
	             43758.5453123);
}

float noise (in vec2 st) {
	vec2 i = floor(st);
	vec2 f = fract(st);

	// Four corners in 2D of a tile
	float a = random(i);
	float b = random(i + vec2(1.0, 0.0));
	float c = random(i + vec2(0.0, 1.0));
	float d = random(i + vec2(1.0, 1.0));

	vec2 u = f * f * (3.0 - 2.0 * f);

	return mix(a, b, u.x) +
	       (c - a) * u.y * (1.0 - u.x) +
	       (d - b) * u.x * u.y;
}

float PHI = 1.61803398874989484820459;  // Φ = Golden Ratio   

float gold_noise(vec2 xy){
	float seed = 123.;
    return fract(tan(distance(xy*PHI, xy))*xy.x);
}

float gold_gradient_value_noise(vec2 st) {
	vec2 i = floor(st);
	vec2 f = fract(st);

	// Four corners in 2D of a tile
	float a = gold_noise(i);
	float b = gold_noise(i + vec2(1.0, 0.0));
	float c = gold_noise(i + vec2(0.0, 1.0));
	float d = gold_noise(i + vec2(1.0, 1.0));

	vec2 u = f * f * (3.0 - 2.0 * f);

	return mix(a, b, u.x) +
	       (c - a) * u.y * (1.0 - u.x) +
	       (d - b) * u.x * u.y;
}


vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0

float snoise(vec2 v) {
    
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i); // Avoid truncation effects in permutation
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}



// mat3 rotateX(float a) {
// 	return mat3(
// 	           1.0, 0.0, 0.0,
// 	           0.0, cos(a), sin(a),
// 	           0.0, -sin(a), cos(a)
// 	       );
// }

// mat3 rotateY(float a) {
// 	return mat3(
// 	           cos(a), 0.0, sin(a),
// 	           0.0, 1.0, 0.0,
// 	           -sin(a), 0.0, cos(a)
// 	       );
// }
float HexDist(vec2 p) {
	p = abs(p);

	float c = dot(p, normalize(vec2(1, 1.73)));
	c = max(c, p.x);

	return c;
}

vec4 HexCoords(vec2 uv) {
	vec2 r = vec2(1, 1.73);
	vec2 h = r * .5;

	vec2 a = mod(uv, r) - h;
	vec2 b = mod(uv - h, r) - h;

	vec2 gv = dot(a, a) < dot(b, b) ? a : b;

	float x = atan(gv.x, gv.y);
	float y = .5 - HexDist(gv);
	vec2 id = uv - gv;
	return vec4(x, y, id.x, id.y);
}

vec2 mirror(vec2 st, float cv) {
	// rot = (1. - rot) *1.02 ;

	if (cv > 0.6) {
		// st = rotate2D(st, TWO_PI*rot );
		// st.x = abs(st.x * 2. - 1.);
		// st.y = abs(st.y * 2. - 1.);
		// st.x = st.x;
		// st.x = fract(st.x*4.);

		// st *= 2.;

		// vec2 r = vec2(1, 1.73);
		//    vec2 h = r * .5;

		//    vec2 a = abs(mod(st, r)-h);
		//    vec2 b = abs(mod(st-h, r)-h);

		//    vec2 gv = dot(a, a) < dot(b,b) ? a : b;

		//    vec2 id = st - gv;
		//    st = gv;
		//    st += .5;

	}
	else if (cv > 0.5) {

		// st.y =  abs(st.y * 2. - 1.);
		// st.y = st.y/2.;
		// st.y += .365;
		// st *= 3.;

		// vec2 r = vec2(1, 1.73);
		//    vec2 h = r * .5;

		//    vec2 a = mod(st, r)-h;
		//    vec2 b = mod(st-h, r)-h;

		//    vec2 gv = dot(a, a) < dot(b,b) ? a : b;

		//    vec2 id = st - gv;
		//    // id.y -= 2.;

		//    id.x *= 2.;

		//    gv.x =(HexDist(gv));


		//    if( mod(floor(id.x), 2.)  == 1. ){
		//    	// gv.y = gv.y;
		//    	// gv *= 10.;
		//    	gv.x = 1.-gv.x;
		//    	// gv.x = 0.5 - HexDist(st);
		//    	gv.y = abs(1.-gv.y);
		//    }
		//    // gv.y =atan(gv.x, gv.y);

		//    st = gv;


	}
	else if (cv > 0.4) {
		//    st.y += .365;
		// st *= 1.;

		// vec2 r = vec2(1, 1.73);
		//    vec2 h = r * .5;

		//    vec2 a = mod(st, r)-h;
		//    vec2 b = mod(st-h, r)-h;

		//    vec2 gv = dot(a, a) < dot(b,b) ? a : b;

		//    vec2 id = st - gv;
		//    // id.y -= 2.;

		//    id.x *= 2.;

		//    gv.x =(HexDist(gv));


		//    if( mod(floor(id.x), 2.)  == 1. ){
		//    	// gv.y = gv.y;
		//    	// gv *= 10.;
		//    	gv.x = 1.-gv.x;
		//    	// gv.x = 0.5 - HexDist(st);
		//    	// gv.y = abs(1.-gv.y);
		//    }
		//    gv.y =atan(gv.x, gv.y);

		//    gv.x = log(1.- gv.x)*.8;
		//    // gv.y = log(gv.y*2.);
		//    st = gv;

		st -= .5;
		float angle = cv5 * TWO_PI;
		vec2 n = vec2(sin(angle), cos(angle));

		float d = dot(st, n);

		st -= n * max(0., d) * 2.;
		st += .5;
		return st;

	}
	else if (cv > 0.3) {
		st = st * 4.;
		// st += .5;
	}
	else if (cv > 0.2) {
		st = st + .5;
	}
	else if (cv > 0.1) {
		st.x = st.x + .5;
	}
	return st;
}


vec2 mirror(vec2 st, float cv, mat2 rotation_mat) {
	vec2 n;
	float d;
	float re_scale = 0.;

	st -= .5;

	// angle = rot * TWO_PI;
	// n = vec2(sin(angle), cos(angle));

	// d = dot(st, n);

	// st -= n * max(0., d) * 2.;
	// st.y = 1.-st.y;


	if (cv > .1) {
		st.y = -st.y;


		if (cv > .4) {
			st.x = -abs(st.x);
		}

		if (cv > .8) {
			st.x = abs(st.x);
			// re_scale += 10.;
			re_scale += 1.;

		}
		if (cv > .9) {
			// st.x = fract(st.x *4.);
			// float rad = sqrt(dot(st, st)) ;
			st.y = abs(st.y);
			re_scale += 1.;

		}


		//
		// angle = (rot - .5 * 2.) * 1.5 * PI;
		//rot internal modulation
		// rot_drift = (rot_drift - .5) * 2.;
		// if (abs(rot_drift) > .07) { //dedzone
		// 	angle += (PI * time / 1000. * rot_drift );
		// }

		n = vec2(rotation_mat[0][1], rotation_mat[0][0]); // (sin, cos) from CPU uniform
		st -= n * max(0., dot(st, n)) * 2.;

		if (cv > 0.2) {
			st *= 3.;
			// st -= 1.5;
			st.x = abs(st.x);
			st.x -= .5;
			st -= n * max(0., dot(st, n)) * 2.;
			re_scale += 1.;
		}

		if (cv > 0.3) {
			st *= 3.;
			st -= 1.5;
			st.x = abs(st.x);
			st.x -= .5;
			st -= n * max(0., dot(st, n)) * 2.;
			re_scale += 1.;
		}

		if (cv > 0.4) {
			st *= 3.;
			st -= 1.5;
			st.x = abs(st.x);
			// st.x -= .5;
			st -= n * max(0., dot(st, n)) * 2.;
			re_scale += 1.;
		}

		if (cv > 0.5) {
			st *= 3.;
			st -= 1.5;
			st.x = abs(st.x);
			st.y = -abs(st.y);
			st.x -= .5;
			st -= n * max(0., dot(st, n)) * 2.;
			re_scale += 10.;
		}

		if (cv > 0.6 && cv < .8 ) {
			st *= 3.;
			st -= 1.5;
			st.x = abs(st.x);
			st.x -= .5;
			// st.y = abs(st.y);
			st -= n * max(0., dot(st, n)) * 2.;
			re_scale += 1.;
		}

		if (cv > .7 &&  cv < .8) {
			// st *= 3.;
			// st.x = log(HexDist(st));
			// st.x = abs(st.y);
			// st.x = -st.x;

			// st /= 3.;
			st -= 1.5;
			st.x = abs(st.x);
			st.x -= .5;

			st -= n * max(0., dot(st, n)) * 2.;
			re_scale += 10.;
		}

	}



	if (re_scale > 0.) {
		st /= (re_scale * 3.);
	}

	st += .5;
	
	return st;
}

 // bayer ( Useful for dither effect)
float bayer( int iter, vec2 rc )
{
	float sum = 0.0;
	for( int i=0; i<1; ++i )
	{
		if ( i >= iter ) break;
		vec2 bsize = vec2(pow(2.0, float(i+1)));
		vec2 t = mod(rc, bsize) / bsize;
		int idx = int(dot(floor(t*2.0), vec2(2.0,1.0)));
		float b = 0.0;
		if ( idx == 0 ) { b = 0.0; } else if ( idx==1 ) { b = 2.0; } else if ( idx==2 ) { b = 3.0; } else { b = 1.0; }
		sum += b * pow(4.0, float(iter-i-1));
	}
	float phi = pow(4.0, float(iter))+1.0;
	return (sum+1.0) / phi;
}

//lumakey
float luma_key(float luma, float min, float max){
	luma = clamp(luma, 0.0, 1.0); //ensure correct range
	// min = min * 1.1; //dilate inputs to add a bit of deadzone
	// max = max * 1.1; //leave pure whites in even if max is 1.
	return mix( float( (luma >= min) && (luma <= max ) ) , float( (luma >= min) || (luma <= max ) ) , float( min > max) );
}

//shaping functions
float tri(float x){
	return 1.- 4. * abs((.5) - fract(.5 * x + (.25)));
}


