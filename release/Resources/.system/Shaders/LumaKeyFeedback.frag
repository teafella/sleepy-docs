#include "FeedbackUtil.frag"

uniform sampler2D sampled_frame;
uniform sampler2D feedback_frame;

uniform sampler2D shape1;
uniform sampler2D shape2;

uniform mat2 rotation_mat1;
uniform float gain;

uniform float hue_shift;
uniform float fb_x;
uniform float fb_y;
uniform float fb_rotate_;
uniform mat2 fb_rotation_matrix_;
uniform float zoom_;


float edge_detect(vec2 st, sampler2D tex, vec3 frame_color){
	float threshold = .02;//0.02;
	float thickness = .00;

	float this_sample = 0.0;
	float sample_magnitude = .25;
	// this_sample += luma(texture2D( tex, st + vec2(-resolution_step.x, -resolution_step.y) )) * sample_magnitude;
    this_sample += luma(texture2D( tex, st + vec2(-resolution_step.x, 0) ) ) * sample_magnitude;
    // this_sample += luma(texture2D( tex, st + vec2(-resolution_step.x, resolution_step.y))) * sample_magnitude;
    this_sample += luma(texture2D( tex, st + vec2(0, -resolution_step.y)) ) * sample_magnitude;
    
    // this_sample += luma(texture2D( tex, st + vec2(resolution_step.x, -resolution_step.y))) * sample_magnitude;
    
    // this_sample += luma(texture2D( tex, st + vec2(resolution_step.x, resolution_step.y))) * sample_magnitude;
    this_sample += luma(texture2D( tex, st + vec2(0, resolution_step.y))) * sample_magnitude;
    this_sample += luma(texture2D( tex, st + vec2(resolution_step.x, 0))) * sample_magnitude;

    // vec4 this_color = texture2D( tex, st );

   	float distance = abs((luma(frame_color) - this_sample));//distance(frame_color, this_sample.xyz ) ;

    return step(threshold,  distance);
}

float edge_detect_fake(vec2 st, sampler2D tex, vec3 frame_color){
	float black_thresh = .3;

	float this_sample = 0.0;
	float sample = luma(texture2D( tex, st + vec2(-resolution_step.x, 0)).xyz);
    this_sample += float(sample  < black_thresh);
    
    
	sample = luma(texture2D( tex, st + vec2(0, -resolution_step.y)).xyz );
    this_sample += float(sample  < black_thresh);
    
    sample = luma(texture2D( tex, st + vec2(0, resolution_step.y)).xyz);
    this_sample += float(sample  < black_thresh);
    sample = luma(texture2D( tex, st + vec2(resolution_step.x, 0)).xyz);
    this_sample += float(sample  < black_thresh);

    // vec4 this_color = texture2D( tex, st );

   	float distance = float( this_sample > 0. && luma(frame_color) > 0.);//distance(frame_color, this_sample.xyz ) ;

    return distance;
}

void main( void ) {
	float feedback = cc1;
	float fb_x = cc3;
	float fb_y = cc5;
	
	float fb_zoom = cc4;
	float fb_rotate = cc6;
	float back_key = cc7;


	float feedback_amp = .95 * feedback;

	vec3 frame_color= texture2D( sampled_frame  , tcoord  ).xyz;

	vec2 fbPos = UVPage(tcoord, fb_zoom,  rotation_0, fb_y, fb_x);
	
	vec3 feedback_color = linear_srgb_from_srgb( texture2D( feedback_frame  , fbPos).xyz );


	float edge = edge_detect_fake(tcoord, sampled_frame, frame_color);
	frame_color = frame_color * edge ;

	// float decay = .5;
	// float color_mag = abs(length(feedback_color ) );
	// float color_clamp = (step(1., color_mag ) );
	
	// feedback_color = mix( feedback_color , normalize(feedback_color) * color_mag , color_clamp   );

	//keep new info in the foreground

	//keep new info in the foreground
	feedback_color = KeepForeground(frame_color, feedback_color, back_key/2.);

	feedback_color = HueShift(frame_color, feedback_color, hue_shift);
	feedback_color *= feedback_amp;

	feedback_color = ColorClamp(feedback_color);

	// frame_color += feedback_color * feedback_scalar * feedback_amp * edge; //* float(!(frame_color.x  > 0.1 || frame_color.y  > 0.1 || frame_color.z  > 0.1)) ;

	frame_color += feedback_color;
	// else{
	// 	feedback_color = vec3(1.,0.,0.);
	// }

	// // // frame_color += mix( feedback_color * feedback_scalar , vec3(0.0) , float(!(frame_color.x  < 0.1 || frame_color.y  < 0.1 || frame_color.z  < 0.1)) );

	frame_color = srgb_from_linear_srgb(frame_color);
	gl_FragColor = vec4(frame_color, 1.);
}
