const {computePlusOrMinusRange} = require("./plusOrMinusRange")
const {computeTwoMonzoInCentsRange} = require("./twoMonzoInCentsRange")
const {analyzeComma} = require("../analyze/comma")

const computeCommasFromFiveMonzo = (fiveMonzo, options) => {
    const {
        lowerBound,
        upperBound,
        maximumAbsoluteThreeExponent,
        maximumApotomeSlope = Infinity,             // optional
    } = options || {}

    if (typeof lowerBound === 'undefined') throw new Error("Lower bound must be supplied.")
    if (typeof upperBound === 'undefined') throw new Error("Upper bound must be supplied.")
    if (typeof maximumAbsoluteThreeExponent === 'undefined') throw new Error("Maximum absolute three exponent must be supplied.")

    const analyzedCommas = []

    computePlusOrMinusRange(maximumAbsoluteThreeExponent).forEach(three => {
        const monzo = computeTwoMonzoInCentsRange([three, ...fiveMonzo], lowerBound, upperBound)

        if (monzo) {
            const analyzedComma = analyzeComma(monzo)

            if (analyzedComma.apotomeSlope > maximumApotomeSlope) return

            analyzedCommas.push(analyzedComma)
        }
    })

    return analyzedCommas
}

module.exports = {
    computeCommasFromFiveMonzo,
}
