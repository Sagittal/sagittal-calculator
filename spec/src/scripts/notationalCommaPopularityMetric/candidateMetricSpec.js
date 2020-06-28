const {ourCandidateMetric} = require("../../../../src/scripts/notationalCommaPopularityMetric/candidateMetric")

describe("ourCandidateMetric", () => { // todo: should be "compute" something. await forum feedback on "notationalUnpopularity"
    it("rates ratios with the same SoPF>3 but with their primes all lopsided to one side worse", () => {
        const parameters = {k: 0.368, a: 0.264, s: 0.171, u: 0.127, j: 1, b: 1, i: false, h: false}
        const balancedRatio = [11, 7]
        const lopsidedRatio = [77, 1]

        const balancedResult = ourCandidateMetric(balancedRatio, parameters)
        const lopsidedResult = ourCandidateMetric(lopsidedRatio, parameters)

        console.log(balancedResult, lopsidedResult)

        expect(balancedResult).toBeLessThan(lopsidedResult)
    })
})
