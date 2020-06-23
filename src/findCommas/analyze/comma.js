const {computeSopfgtt} = require("../utilities/sopfgtt")
const {computeCommaName} = require("../utilities/commaName")
const {computeApotomeSlope} = require("../utilities/apotomeSlope")
const {computeRatioFromMonzo} = require("../utilities/ratioFromMonzo")
const {computeCentsFromRatio} = require("../utilities/centsFromRatio")
const {computeLimit} = require("../utilities/limit")

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
