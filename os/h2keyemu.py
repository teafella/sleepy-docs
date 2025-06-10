from evdev import UInput, ecodes as e
import serial, time, math

capabilities = {
    e.EV_REL : (e.REL_X, e.REL_Y, e.REL_WHEEL  ), #REL_WHEEL_HI_RES doesnt seem to work
    e.EV_KEY : (e.BTN_LEFT, e.BTN_RIGHT, e.BTN_MIDDLE, e.KEY_SPACE, e.KEY_ENTER, e.KEY_ESC),
}


# make a Serial loop that reads hypno ctl board encoders/buttons
ser = serial.Serial('/dev/ttyACM0')  # open serial port #usually ttyACM but could be another number
ui = UInput(capabilities) #open keyboard input emulator

max_increment = 14.0
min_increment = 1.
exponent = 10. #curve that shit

while 1:
    line = ' '
    line = ser.readline()
    #process events recieved from serial and turn them into mouse/keyboard inputs
    # print(line)

    #left button
    if b'/bt 0 1' in line:
        ui.write(e.EV_KEY, e.KEY_ESC, 1) 
    if b'/bt 0 0' in line:
        ui.write(e.EV_KEY, e.KEY_ESC, 0)  
    #center button
    if b'/bt 1 1' in line:
        ui.write(e.EV_KEY, e.KEY_SPACE, 1)
    if b'/bt 1 0' in line:
        ui.write(e.EV_KEY, e.KEY_SPACE, 0)  
    if b'/bt 2 1' in line:
        ui.write(e.EV_KEY, e.KEY_ENTER, 1)  
    if b'/bt 2 0' in line:
        ui.write(e.EV_KEY, e.KEY_ENTER, 0) 
    #incdices are skipped on prototype, change later
    if b'/bt 3 1' in line:
        ui.write(e.EV_KEY, e.BTN_RIGHT, 1)
    if b'/bt 3 0' in line:
        ui.write(e.EV_KEY, e.BTN_RIGHT, 0)
    if b'/bt 4 1' in line:
        ui.write(e.EV_KEY, e.BTN_MIDDLE, 1)
    if b'/bt 4 0' in line:
        ui.write(e.EV_KEY, e.BTN_MIDDLE, 0) 
    if b'/bt 5 1' in line:
        ui.write(e.EV_KEY, e.BTN_LEFT, 1)
    if b'/bt 5 0' in line:
        ui.write(e.EV_KEY, e.BTN_LEFT, 0)
        # ui.syn()
    if b'/enc 0 0' in line:
        vel = pow(float(line[len(b'/enc 0 0'):]), exponent) * float(max_increment) + min_increment
        ui.write(e.EV_REL, e.REL_X, int(-vel))
    if b'/enc 0 1' in line:
        vel = pow(float(line[len(b'/enc 0 1'):]), exponent)* float(max_increment) + min_increment
        ui.write(e.EV_REL, e.REL_X, int(vel))
    if b'/enc 2 1' in line:
        vel = pow(float(line[len(b'/enc 2 1'):]), exponent)* float(max_increment) + min_increment
        ui.write(e.EV_REL, e.REL_Y, int(-vel))
    if b'/enc 2 0' in line:
        vel = pow(float(line[len(b'/enc 2 0'):]), exponent)* float(max_increment) + min_increment
        ui.write(e.EV_REL, e.REL_Y, int(vel))

    #scrolling already seems very touchy so not using velocity for this event
    if b'/enc 1 1' in line:
        ui.write(e.EV_REL, e. REL_WHEEL, -1)
    if b'/enc 1 0' in line:
        ui.write(e.EV_REL, e. REL_WHEEL, 1)
    ui.syn() #syn send everythang
        

    # time.sleep(.01)
    # else: time.sleep(10)
 
    # if len(line) > 1:
        
        #all this stuff seems to work just fine
        #ui.write(e.EV_REL, e.REL_X, 100)
        #ui.write(e.EV_REL, e.REL_Y, 10)
        #ui.write(e.EV_KEY, e.BTN_LEFT, 1)
        #ui.syn()

#Other EV codes: BTN_LEFT BTN_RIGHT



ui.close()
ser.close()

# other useful desktop stuff
# fan control (resets to default curve on boot)
# pinctrl FAN_PWM op dh #off
# pinctrl FAN_PWM op dl #max fan
