#include "FeedbackUtil.frag"

uniform sampler2D sampled_frame;
uniform sampler2D feedback_frame;

uniform float gain;

uniform sampler2D shape1;
uniform sampler2D shape2;
uniform float shape1_mod_toggle;
uniform float shape2_mod_toggle;

uniform float hue_shift;

uniform float fb_x;
uniform float fb_y;
uniform float fb_rotate_;
uniform mat2 fb_rotation_matrix_;
uniform float zoom_;


void main( void ) {
	float feedback = cc1;
	float fb_x = cc3;
	float fb_y = cc5;
	
	float fb_zoom = cc4;
	float fb_rotate = cc6;

	float black_key = cc7;

	

	//frame in color
	vec3 frame_color= texture2D( sampled_frame  , tcoord  ).xyz;

	vec2 fbPos = UVPage(tcoord, fb_zoom,  rotation_0 , fb_y, fb_x);
	
	vec3 feedback_color = linear_srgb_from_srgb( texture2D( feedback_frame  , fbPos).xyz );



	feedback_color = HueShift(frame_color, feedback_color, hue_shift);

	//keep new info in the foreground
	feedback_color = KeepForeground(frame_color, feedback_color, black_key/2.);
	// try to preserve feedback color
	feedback_color = ColorClamp(feedback_color);


	//Hyper-Digital Feedback Mode

	frame_color /= (feedback_color * feedback);

	frame_color = srgb_from_linear_srgb(frame_color);
	gl_FragColor = vec4(frame_color, 1.0);
}
