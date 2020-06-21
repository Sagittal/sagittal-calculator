const {computeSopfgtt} = require("./sopfgtt")
const {computePlusOrMinusRange} = require("./plusOrMinusRange")
const {computeCommaName} = require("./commaName")
const {computeApotomeSlope} = require("./apotomeSlope")
const {computeRatioFromMonzo} = require("./ratioFromMonzo")
const {computeCentsFromRatio} = require("./centsFromRatio")
const {computeLimit} = require("./limit")

const MAXIMUM_TWO_EXPONENT_FOR_NO_REASON_MAYBE = 30
const MAXIMUM_ABSOLUTE_THREE_EXPONENT = 15

const computeCommasFromFiveMonzo = (fiveMonzo, {lowerBound, upperBound}) => {
    const commas = []

    computePlusOrMinusRange(MAXIMUM_TWO_EXPONENT_FOR_NO_REASON_MAYBE).forEach(two => {
        computePlusOrMinusRange(MAXIMUM_ABSOLUTE_THREE_EXPONENT).forEach(three => {
            const monzo = [two, three, ...fiveMonzo]
            const ratio = computeRatioFromMonzo(monzo)
            const cents = computeCentsFromRatio(ratio)

            if (cents > lowerBound && cents < upperBound) {
                const commaName = computeCommaName(monzo)
                const sopfgtt = computeSopfgtt(monzo)
                const apotomeSlope = computeApotomeSlope(monzo)
                const limit = computeLimit(monzo)

                const formattedOutput = `${cents}\t[${monzo.join(' ')}⟩\t\t${ratio.join("/")}\t\t${commaName}\t\t${limit}\t\t${apotomeSlope}\t\t${sopfgtt}` // TODO: formatRatio in a couple palces, and formatMonzo
                commas.push({sopfgtt, formattedOutput})
            }
        })
    })

    return commas
}

module.exports = {
    computeCommasFromFiveMonzo,
}
