const {computeWeightedPrimeContentUnpopularitySubmetric} = require("../../../../../src/scripts/notationalCommaPopularityMetric/metric/weightedPrimeContentUnpopularitySubmetric")
const {computePrimeContentUnpopularityAccountingForRatioImbalance} = require("../../../../../src/scripts/notationalCommaPopularityMetric/metric/primeContentUnpopularityAccountingForRatioImbalance")
const primeContentUnpopularityAccountingForRatioImbalance = require("../../../../../src/scripts/notationalCommaPopularityMetric/metric/primeContentUnpopularityAccountingForRatioImbalance")

describe("computeWeightedPrimeContentUnpopularitySubmetric", () => {
    it("returns 0 when the weight is 0", () => {
        const fiveRoughRatio = [15,14]
        const weight = 0

        const result = computeWeightedPrimeContentUnpopularitySubmetric(fiveRoughRatio, {weight})

        expect(result).toBe(0)
    })

    it("does not waste resources calling computePrimeContentUnpopularityAccountingForRatioImbalance when the weight is 0", () => {
        spyOn(primeContentUnpopularityAccountingForRatioImbalance, "computePrimeContentUnpopularityAccountingForRatioImbalance")

        const fiveRoughRatio = [15,14]
        const weight = 0

        computeWeightedPrimeContentUnpopularitySubmetric(fiveRoughRatio, {weight})

        expect(primeContentUnpopularityAccountingForRatioImbalance.computePrimeContentUnpopularityAccountingForRatioImbalance).not.toHaveBeenCalled()
    })

    it("returns the full value of the prime content unpopularity submetric when the weight is 1", () => {
        const fiveRoughRatio = [15,14]
        const weight = 1

        const result = computeWeightedPrimeContentUnpopularitySubmetric(fiveRoughRatio, {weight})

        expect(result).toBe(computePrimeContentUnpopularityAccountingForRatioImbalance(fiveRoughRatio))
    })

    it("returns the weighted value of the prime content unpopularity submetric", () => {
        const fiveRoughRatio = [15,14]
        const weight = 0.5

        const result = computeWeightedPrimeContentUnpopularitySubmetric(fiveRoughRatio, {weight})

        expect(result).toBe(0.5 * computePrimeContentUnpopularityAccountingForRatioImbalance(fiveRoughRatio))
    })
})
