const {computePrimeContentUnpopularityAccountingForRatioImbalance} = require("../../../../../src/scripts/notationalCommaPopularityMetric/metric/primeContentUnpopularityAccountingForRatioImbalance")
const {computePrimeContentUnpopularity} = require("../../../../../src/scripts/notationalCommaPopularityMetric/metric/primeContentUnpopularity")

describe("computePrimeContentUnpopularityAccountingForRatioImbalance", () => {
    it("splits the ratio into numerator and denominator, computes their prime content unpopularity separately, then adjusts the diminuator (the lesser of the two) by k", () => {
        const k = 0.46
        const fiveRoughRatio = [22, 21] // 11:7
        const adjustments = {k}

        const result = computePrimeContentUnpopularityAccountingForRatioImbalance(fiveRoughRatio, adjustments)

        expect(result).toBe(
            computePrimeContentUnpopularity([1, 0, 0, 0, 1], adjustments) +
            k * computePrimeContentUnpopularity([0, 1, 0, 1], adjustments)
        )
    })

    it("works when the input ratio's denominator will be the numinator (the greater of the two)", () => {
        const k = 0.46
        const fiveRoughRatio = [100, 99] // 25:11 -> 10:11
        const adjustments = {k}

        const result = computePrimeContentUnpopularityAccountingForRatioImbalance(fiveRoughRatio, adjustments)

        expect(result).toBe(
            computePrimeContentUnpopularity([0, 2, 0, 0, 1], adjustments) +
            k * computePrimeContentUnpopularity([2, 0, 2], adjustments)
        )
    })

    it("works when k = 1", () => {
        const k = 1
        const fiveRoughRatio = [15, 14]
        const adjustments = {k}

        const result = computePrimeContentUnpopularityAccountingForRatioImbalance(fiveRoughRatio, adjustments)

        expect(result).toBe(
            computePrimeContentUnpopularity([-1, 1, 1, -1], adjustments)
        )
    })

    it("supports deciding the numinator and diminuator by the input numerator and denominator", () => {
        const k = 0.46
        const fiveRoughRatio = [100, 99] // 25:11 -> 10:11
        const numeratorIsNuminator = 1
        const adjustments = {k, numeratorIsNuminator}

        const result = computePrimeContentUnpopularityAccountingForRatioImbalance(fiveRoughRatio, adjustments)

        expect(result).toBe(
            computePrimeContentUnpopularity([2, 0, 2], adjustments) +
            k * computePrimeContentUnpopularity([0, 2, 0, 0, 1], adjustments)
        )
    })
})
