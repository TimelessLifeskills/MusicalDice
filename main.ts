let number = 0
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 6)
    if (number == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (number == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . . . . .
            . . . . .
            `)
        for (let index = 0; index < 2; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.pause(100)
        }
    } else if (number == 3) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            `)
        for (let index = 0; index < 3; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.pause(100)
        }
    } else if (number == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        for (let index = 0; index < 4; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.pause(100)
        }
    } else if (number == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        for (let index = 0; index < 5; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.pause(100)
        }
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        for (let index = 0; index < 6; index++) {
            music.playTone(262, music.beat(BeatFraction.Quarter))
            basic.pause(100)
        }
    }
})
