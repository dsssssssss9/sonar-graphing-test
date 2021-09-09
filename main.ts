input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Dist = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
    basic.pause(50)
    kitronik_VIEW128x64.show(Dist, 1, kitronik_VIEW128x64.ShowAlign.Left)
    kitronik_VIEW128x64.plot(Dist)
})
let Dist = 0
kitronik_VIEW128x64.clear()
basic.forever(function () {
	
})
