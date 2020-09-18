//  Kebabize
//  https://www.codewars.com/kata/57f8ff867a28db569e000c4a

function kebabize(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const numbers = '0123456789'.split('')
    let string = str.split('')
    let solution = ''
    string.forEach(function (word) {
        for (let i = 0; i < alphabet.length; i++) {
            if (word == alphabet[i] && word == string[0]) {
                let myWord = word.toLowerCase()
                return solution += myWord
                console.log(1)
            } else if (word == alphabet[i]) {
                let myWord = word.toLowerCase()
                return solution += '-' + myWord
            }
        }
        for (let i = 0; i < numbers.length; i++) {
            if (word == numbers[i]) {
                return solution
            }
        }
        return solution += word
    })
    return solution
}