let Dist = 0
basic.forever(function () {
    Dist = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P16,
    PingUnit.MicroSeconds
    )
    basic.pause(50)
    kitronik_VIEW128x64.show(Dist, 1, kitronik_VIEW128x64.ShowAlign.Left)
    kitronik_VIEW128x64.plot(Dist)
})
