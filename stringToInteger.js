var myAtoi = function(s) {
    let string = s.trim().split('')
    let number = []
    
    if (string[0] === '-') {
        number.push('-')
        string.shift()
    } else if (string[0] === '+') {
        string.shift()
    }

    if (isNaN(string[0])) {
        return 0
    }

    for (i = 0; i < string.length; i++) {
        if (isNaN(string[i]) || string[i] === ' ') {
            break
        } else {
            number.push(string[i])
        }
    }
    
    let answer = Number(number.join(''))
    
    if (answer >= 2147483648) {
        return 2147483647
    } else if (answer < -2147483648) {
        return -2147483648
    } else {
        return answer
    }
};

console.log(myAtoi('  +0 12'))