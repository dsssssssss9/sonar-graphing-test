basic.forever(function () {
    basic.showString("" + (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P16,
    PingUnit.Centimeters
    )))
    basic.pause(500)
})
