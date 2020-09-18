//  Reverse or rotate?
//  https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991
function revrot(str, sz) {
    if (sz == 0) {
        return ''
    }
    let whole = Math.floor(str.length / sz)
    console.log(whole)
    let wholeSplitted = []
    let solution = ''
    if (whole < 1) {
        return ''
    }
    for (let i = 0; i < whole; i++) {
        wholeSplitted.push(str.substr(i * sz, sz))
    }
    for (let i = 0; i < wholeSplitted.length; i++) {
        let temporarily = wholeSplitted[i].split('')
        let sumOfSquares = 0
        for (let k = 0; k < temporarily.length; k++) {
            sumOfSquares = sumOfSquares + (temporarily[k] ** 2)
        }
        if (sumOfSquares % 2 == 0) {
            temporarily.reverse()
            for (let k = 0; k < temporarily.length; k++) {
                solution += temporarily[k]
            }
        } else {
            let first = temporarily.shift()
            temporarily.push(first)
            for (let k = 0; k < temporarily.length; k++) {
                solution += temporarily[k]
            }
        }
    }
    console.log(solution)
    return solution
}