const {computePlusOrMinusRange} = require("../../utilities/plusOrMinusRange")
const {computeMonzoInRange} = require("../../utilities/comma/monzoInRange")
const {analyzeComma} = require("../../utilities/comma/comma")

const computeCommasFromFiveMonzo = (fiveRoughMonzo, options) => {
    const {
        lowerBound,
        upperBound,
        maximumAbsoluteThreeExponent,
        maximumApotomeSlope = Infinity,             // optional
    } = options || {}

    if (typeof lowerBound === "undefined") throw new Error("Lower bound must be supplied.")
    if (typeof upperBound === "undefined") throw new Error("Upper bound must be supplied.")
    if (typeof maximumAbsoluteThreeExponent === "undefined") throw new Error("Maximum absolute three exponent must be supplied.")

    const analyzedCommas = []

    computePlusOrMinusRange(maximumAbsoluteThreeExponent).forEach(three => {
        const monzo = computeMonzoInRange([three, ...fiveRoughMonzo], lowerBound, upperBound)

        if (monzo) {
            const analyzedComma = analyzeComma(monzo)

            if (Math.abs(analyzedComma.apotomeSlope) > maximumApotomeSlope) return

            analyzedCommas.push(analyzedComma)
        }
    })

    return analyzedCommas
}

module.exports = {
    computeCommasFromFiveMonzo,
}
