const {computeRatioSubmetricUnpopularity} = require("../../../../../src/scripts/unpopularityMetric/metric/ratioSubmetricUnpopularity")
const {computeSubmetricUnpopularity} = require("../../../../../src/scripts/unpopularityMetric/metric/submetricUnpopularity")

describe("computeRatioSubmetricUnpopularity", () => {
    it("splits the ratio into numerator and denominator, computes their submetric unpopularity separately, then adjusts the diminuator (the lesser of the two) by k", () => {
        const k = 0.46
        const fiveRoughRatio = [22, 21] // 11:7
        const adjustments = {k}

        const result = computeRatioSubmetricUnpopularity(fiveRoughRatio, adjustments)

        expect(result).toBe(
            computeSubmetricUnpopularity([1, 0, 0, 0, 1], adjustments) +
            k * computeSubmetricUnpopularity([0, 1, 0, 1], adjustments)
        )
    })

    it("works when the input ratio's denominator will be the numinator (the greater of the two)", () => {
        const k = 0.46
        const fiveRoughRatio = [100, 99] // 25:11 -> 10:11
        const adjustments = {k}

        const result = computeRatioSubmetricUnpopularity(fiveRoughRatio, adjustments)

        expect(result).toBe(
            computeSubmetricUnpopularity([0, 2, 0, 0, 1], adjustments) +
            k * computeSubmetricUnpopularity([2, 0, 2], adjustments)
        )
    })

    it("works when k = 1", () => {
        const k = 1
        const fiveRoughRatio = [15, 14]
        const adjustments = {k}

        const result = computeRatioSubmetricUnpopularity(fiveRoughRatio, adjustments)

        expect(result).toBe(
            computeSubmetricUnpopularity([-1, 1, 1, -1], adjustments)
        )
    })

    it("supports deciding the numinator and diminuator by the input numerator and denominator", () => {
        const k = 0.46
        const fiveRoughRatio = [100, 99] // 25:11 -> 10:11
        const numeratorIsNuminator = 1
        const adjustments = {k, numeratorIsNuminator}

        const result = computeRatioSubmetricUnpopularity(fiveRoughRatio, adjustments)

        expect(result).toBe(
            computeSubmetricUnpopularity([2, 0, 2], adjustments) +
            k * computeSubmetricUnpopularity([0, 2, 0, 0, 1], adjustments)
        )
    })
})
