const {computeAntivotes} = require("../antivotes/antivotes")

const computeUnpopularities = (realPopularities, submetricCombination) => {
    return realPopularities.map(({fiveRoughRatio}, index) => {
        return {
            index,
            antivotes: computeAntivotes(fiveRoughRatio, submetricCombination),
            fiveRoughRatio,
        }
    })
}

module.exports = {
    computeUnpopularities,
}
