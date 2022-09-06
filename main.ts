input.onButtonPressed(Button.A, function () {
    A_Score += 1
    basic.showString("A -")
    basic.showString("" + (A_Score))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Point_Tied += 1
    basic.showString("Games Tied -")
    basic.showString("" + (Point_Tied))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    B_Score += 1
    basic.showString("B -")
    basic.showString("" + (B_Score))
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A -")
    basic.showString("" + (A_Score))
    basic.clearScreen()
    basic.showString("B -")
    basic.showString("" + (B_Score))
    basic.clearScreen()
    basic.showString("Games Tied -")
    basic.showString("" + (Point_Tied))
    basic.clearScreen()
})
let Point_Tied = 0
let B_Score = 0
let A_Score = 0
A_Score = 0
B_Score = 0
Point_Tied = 0
