const {computeAntivotes} = require("../antivotes/antivotes")

const computeUnpopularities = (realPopularities, submetrics) => {
    return realPopularities.map(({fiveRoughRatio}, index) => {
        return {
            index,
            antivotes: computeAntivotes(fiveRoughRatio, submetrics),
            fiveRoughRatio,
        }
    })
}

module.exports = {
    computeUnpopularities,
}
