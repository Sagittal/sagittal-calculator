const {computeSopfgtt} = require("./sopfgtt")
const {computeCommaName} = require("./commaName")
const {computeApotomeSlope} = require("./apotomeSlope")
const {computeRatioFromMonzo} = require("./ratioFromMonzo")
const {computeCentsFromRatio} = require("./centsFromRatio")
const {computeLimit} = require("./limit")

const analyzeComma = monzo => {
    const apotomeSlope = computeApotomeSlope(monzo)
    const commaName = computeCommaName(monzo)
    const sopfgtt = computeSopfgtt(monzo)
    const limit = computeLimit(monzo)
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromRatio(ratio)

    return {
        cents,
        monzo,
        ratio,
        commaName,
        limit,
        apotomeSlope,
        sopfgtt,
    }
}

module.exports = {
    analyzeComma,
}
