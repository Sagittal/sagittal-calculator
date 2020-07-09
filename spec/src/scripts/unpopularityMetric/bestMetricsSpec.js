const bestMetrics = require("../../../../src/scripts/unpopularityMetric/bestMetrics")
const {computeSumOfSquaresForSubmetrics} = require("../../../../src/scripts/unpopularityMetric/sumOfSquares/sumOfSquaresForSubmetrics")

describe("best metrics", () => {
    it("verifies all of the best metrics", () => {
        Object.entries(bestMetrics).forEach(([bestMetricName, bestMetric]) => {
            const sumOfSquares = computeSumOfSquaresForSubmetrics(bestMetric.submetrics)
            expect(bestMetric.sumOfSquares).toBe(sumOfSquares, `${bestMetricName} failed, has SoS ${bestMetric.sumOfSquares} but just computed ${sumOfSquares}`)
        })
    })
})
