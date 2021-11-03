radio.onReceivedString(function (receivedString) {
    if (receivedString == "washroom") {
        music.playTone(262, music.beat(BeatFraction.Breve))
        basic.showString("He wants to go washroom")
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("washroom")
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("Hungry")
    }
})
