const {ourCandidateMetric} = require("./candidateMetric")

const computeOurPopularities = (realPopularities, k, a) => {
    return realPopularities.map((popularity, index) => {
        return { index, value: ourCandidateMetric(popularity.ratio, k, a) }
    })
}

module.exports = {
    computeOurPopularities,
}
