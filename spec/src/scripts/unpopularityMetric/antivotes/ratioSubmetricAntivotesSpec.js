const {computeRatioSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/ratioSubmetricAntivotes")
const {computeSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/submetricAntivotes")

describe("computeRatioSubmetricAntivotes", () => {
    it("splits the ratio into numerator and denominator, computes their submetric antivotes separately, then adjusts the diminuator (the lesser of the two) by k", () => {
        const k = 0.46
        const fiveRoughRatio = [22, 21] // 11:7
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([1, 0, 0, 0, 1], submetric) +
            k * computeSubmetricAntivotes([0, 1, 0, 1], submetric)
        )
    })

    it("works when the input ratio's denominator will be the numinator (the greater of the two)", () => {
        const k = 0.46
        const fiveRoughRatio = [100, 99] // 25:11 -> 10:11
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 2, 0, 0, 1], submetric) +
            k * computeSubmetricAntivotes([2, 0, 2], submetric)
        )
    })

    it("works when k = 1", () => {
        const k = 1
        const fiveRoughRatio = [15, 14]
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([-1, 1, 1, -1], submetric)
        )
    })

    it("supports deciding the numinator and diminuator by the input numerator and denominator", () => {
        const k = 0.46
        const fiveRoughRatio = [100, 99] // 25:11 -> 10:11
        const numeratorIsNuminator = 1
        const submetric = {k, numeratorIsNuminator}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([2, 0, 2], submetric) +
            k * computeSubmetricAntivotes([0, 2, 0, 0, 1], submetric)
        )
    })
})
