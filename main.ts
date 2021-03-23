let Player_Y = 4
let Player_X = 2
let Points = 1
let Point_y = 0
let Point_X = randint(0, 4)
led.toggle(Player_X, Player_Y)
led.plot(Point_X, Point_y)
basic.forever(function () {
    led.plotBrightness(Player_X, Player_Y, Points * 10.5)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.unplot(Player_X, Player_Y)
        Player_X += -1
        led.plot(Player_X, Player_Y)
        basic.pause(100)
    } else if (Player_X == -1) {
        led.unplot(Player_X, Player_Y)
        Player_X = 0
        led.plot(Player_X, Player_Y)
        basic.pause(100)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        led.unplot(Player_X, Player_Y)
        Player_X += 1
        led.plot(Player_X, Player_Y)
        basic.pause(100)
    } else if (Player_X == 5) {
        led.unplot(Player_X, Player_Y)
        Player_X = 4
        led.plot(Player_X, Player_Y)
        basic.pause(100)
    }
})
basic.forever(function () {
    if (Player_X == Point_X && Player_Y == Point_y) {
        Points += 1
        basic.pause(19 / Points * 175)
        Point_X = randint(0, 4)
        Point_y = 0
        led.plot(Point_X, Point_y)
    } else if (Point_y == 5) {
        led.setBrightness(255)
        led.unplot(Player_X, Player_Y)
        led.unplot(Point_X, Point_y)
        Player_X = 100
        Player_Y = 100
        basic.showString("GAME")
    } else {
        basic.pause(500)
        led.unplot(Point_X, Point_y)
        Point_y += 1
        led.plot(Point_X, Point_y)
        basic.pause(200)
    }
})
