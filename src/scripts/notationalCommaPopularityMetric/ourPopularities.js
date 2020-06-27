const {ourCandidateMetric} = require("./candidateMetric")

const computeOurPopularities = (realPopularities, k, a, s, u) => {
    return realPopularities.map((popularity, index) => {
        return { index, value: ourCandidateMetric(popularity.ratio, k, a, s, u) }
    })
}

module.exports = {
    computeOurPopularities,
}
