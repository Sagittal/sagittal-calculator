const {computeUnpopularity} = require("../metric/unpopularity")

const computeUnpopularities = (realPopularities, parameters) => {
    return realPopularities.map(({fiveRoughRatio}, index) => {
        return {
            index,
            antivotes: computeUnpopularity(fiveRoughRatio, parameters),
            fiveRoughRatio,
        }
    })
}

module.exports = {
    computeUnpopularities,
}
