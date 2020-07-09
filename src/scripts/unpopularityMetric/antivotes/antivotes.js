const {computeWeightedSubmetricAntivotes} = require("./weightedSubmetricAntivotes")
const {SUBMETRIC_TYPE, PARAMETER} = require("../constants")

const computeAntivotes = (fiveRoughRatio, submetrics, {logSubmetricAntivotes = false} = {}) => { // todo: should this now just be quiet true/false too?
    return submetrics.reduce(
        (totalAntivotes, submetric) => {
            const weightedSubmetricAntivotes = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

            if (logSubmetricAntivotes) console.log(`${submetric[PARAMETER.SUBMETRIC_TYPE] || SUBMETRIC_TYPE.SOAPFAR}: ${weightedSubmetricAntivotes}`)

            return totalAntivotes + weightedSubmetricAntivotes
        },
        0,
    )
}

module.exports = {
    computeAntivotes,
}
