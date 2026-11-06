input.onButtonPressed(Button.A, function () {
    motor.motorStopAll()
    basic.pause(100)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 50)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 50)
})
input.onButtonPressed(Button.B, function () {
    motor.motorStopAll()
    basic.pause(100)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 50)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 50)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    motor.motorStopAll()
})
motor.servo(motor.Servos.S1, 0)
basic.forever(function () {
	
})
