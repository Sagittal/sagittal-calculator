const {ourCandidateMetric} = require("./candidateMetric")

const computeOurPopularities = (realPopularities, parameters) => {
    return realPopularities.map((popularity, index) => {
        return { index, value: ourCandidateMetric(popularity.ratio, parameters) }
    })
}

module.exports = {
    computeOurPopularities,
}
