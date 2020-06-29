const {computeSopfgtt} = require("./sopfgtt")
const {ourCandidateMetric} = require("../../scripts/notationalCommaPopularityMetric/candidateMetric")
const {computeCommaName} = require("./commaName")
const {computeApotomeSlope} = require("./apotomeSlope")
const {computeRatioFromMonzo} = require("./ratioFromMonzo")
const {computeCentsFromRatio} = require("./centsFromRatio")
const {computeLimit} = require("./limit")

const IDEAL_PARAMETERS = {k: 0.368, j: 1, a: 0.624, b: 1, s: 0.171, u: 0.127}

const analyzeComma = monzo => {
    const apotomeSlope = computeApotomeSlope(monzo)
    const commaName = computeCommaName(monzo) // todo: wait am I supposed to be getting stuff like 1:2873s
    const ratio = computeRatioFromMonzo(monzo)
    const sopfgtt = computeSopfgtt(monzo)
    // const sopfgtt = ourCandidateMetric(ratio, IDEAL_PARAMETERS)
    const limit = computeLimit(monzo)
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
