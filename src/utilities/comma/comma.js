const {computeSopfr} = require("./sopfr")
const {computeCommaName} = require("./name")
const {computeApotomeSlope} = require("./apotomeSlope")
const {computeRatioFromMonzo} = require("./ratioFromMonzo")
const {computeCentsFromRatio} = require("./centsFromRatio")
const {computeRoughMonzo} = require("./rough")
const {computeGpf} = require("./gpf")

const analyzeComma = monzo => {
    const apotomeSlope = computeApotomeSlope(monzo)
    const commaName = computeCommaName(monzo)
    const ratio = computeRatioFromMonzo(monzo)
    const fiveRoughSopfr = computeSopfr(computeRoughMonzo(monzo,5)) // TODO: one day replace this with the improved fiveRoughCommaUnpopularity metric
    const limit = computeGpf(monzo)
    const cents = computeCentsFromRatio(ratio)

    return {
        cents,
        monzo,
        ratio,
        commaName,
        limit,
        apotomeSlope,
        fiveRoughSopfr,
    }
}

module.exports = {
    analyzeComma,
}
