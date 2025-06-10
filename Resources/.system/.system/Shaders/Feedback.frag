#include "FeedbackUtil.frag"

uniform sampler2D sampled_frame;
uniform sampler2D feedback_frame;

uniform sampler2D shape1;
uniform sampler2D shape2;

uniform float gain;

uniform float hue_shift;
uniform float hue_mod;

uniform mat2 fb_rotation_matrix_;
// uniform float zoom;

#define repeat(v) mod(p + 1., 2.) -1.
#define un(a, b) min(a, b)

//-----------------------------------------|

void main( void ) {
	float knob_boundary = 0.6;

	float feedback_amp = .78;
	float feedback = cc1;
	float fb_x =cc3;
	float fb_y =cc5;
	
	float fb_zoom = cc4;
	float fb_rotate = cc6;
	float black_key = cc7;

	// float hue_shift = cc8;
	
	//frame in color
	vec4 frame_color = texture2D( sampled_frame  , tcoord  );

	vec2 position = tcoord;
	
	vec2 fbPos = UVPage(position, fb_zoom,  rotation_0, fb_y, fb_x);
	vec4 feedback_color = texture2D( feedback_frame  , fbPos);
	vec3 feedback_color_linear = linear_srgb_from_srgb( feedback_color.xyz );

	// feedback_color_linear = HueShift(frame_color.xyz, feedback_color_linear, hue_shift);
	feedback_color_linear *= feedback;
	//keep new info in the foreground
	feedback_color_linear = KeepForeground(frame_color.xyz, feedback_color_linear, black_key/2.);
	// try to preserve feedback color
	feedback_color_linear = ColorClamp(feedback_color_linear);

	vec3 out_frame_color = srgb_from_linear_srgb(frame_color.xyz + feedback_color_linear);
	gl_FragColor = vec4(out_frame_color, 1.);
	
}


// if(re_polar_ >.07 ){
	// 	float dither_amount = min( ((re_polar) - .5) * 2. + .1 , 1.);
	// 	float thresh = bayer(1, uv * (resolution.xy * dither_amount) );
		
	// 	feedback_color_linear = feedback_color_linear * step(thresh, ( (feedback_color_linear.x + feedback_color_linear.y + feedback_color_linear.z) / 3.));
	// }