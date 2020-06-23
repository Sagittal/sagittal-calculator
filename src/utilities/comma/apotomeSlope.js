const {APOTOME} = require("../../notations/intervals")
const {computeRatioFromMonzo} = require("./ratioFromMonzo")
const {computeCentsFromRatio} = require("./centsFromRatio")

const APOTOME_THREE_EXPONENT = 7

const computeApotomeSlope = monzo => {
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromRatio(ratio)

    const monzoThreeExponent = monzo[1]

    return monzoThreeExponent - APOTOME_THREE_EXPONENT * cents / APOTOME
}

module.exports = {
    computeApotomeSlope,
}
