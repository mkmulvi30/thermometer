let temp = 0
// If the temp is too hot or too cold, show an led alert
// 
basic.forever(function () {
    temp = input.temperature()
    basic.showNumber(temp)
    if (temp > 30) {
        basic.showIcon(IconNames.Asleep)
    } else if (temp < 0) {
        basic.showIcon(IconNames.Surprised)
    }
})
