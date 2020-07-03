const {computeFiveRoughCommaUnpopularity} = require("./fiveRoughCommaUnpopularity")

const computeOurPopularities = (realPopularities, parameters) => {
    return realPopularities.map((popularity, index) => {
        return { index, antivotes: computeFiveRoughCommaUnpopularity(popularity.fiveRoughRatio, parameters) }
    })
}

module.exports = {
    computeOurPopularities,
}
