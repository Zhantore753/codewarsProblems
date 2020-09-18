//  Find the next perfect square!
//  https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
    let square = Math.sqrt(sq)
    if (Number.isInteger(square)) {
        let square1 = square + 1
        return Math.pow(square1, 2)
    } else {
        return -1
    }
}