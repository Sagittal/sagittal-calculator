const computePlusOrMinusRange = value =>
    [...Array(value * 2 + 1).keys()].map(element => element - value)


module.exports = {
    computePlusOrMinusRange,
}
