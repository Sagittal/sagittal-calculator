const {computeRatioSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/ratioSubmetricAntivotes")
const {computeSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/submetricAntivotes")
const {computeLog} = require("../../../../../src/utilities/log")

describe("computeRatioSubmetricAntivotes", () => {
    it("splits the ratio into numerator and denominator, computes their submetric antivotes separately, then adjusts the denominator by k", () => {
        const k = 0.46
        const fiveRoughRatio = [11, 7]
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1], submetric) +
            k * computeSubmetricAntivotes([0, 0, 0, 1], submetric),
        )
    })

    it("another example", () => {
        const k = 0.46
        const fiveRoughRatio = [25, 11] // 10:11
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 2], submetric) +
            k * computeSubmetricAntivotes([0, 0, 0, 0, 1], submetric),
        )
    })

    it("defaults k and j to 1", () => {
        const fiveRoughRatio = [5, 7]
        const submetric = {}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1, -1], submetric),
        )
    })

    it("supports deciding the numinator and diminuator by which is the greater of the two", () => {
        const k = 0.46
        const fiveRoughRatio = [25, 11] // 10:11
        const numeratorIsNuminator = false
        const submetric = {k, numeratorIsNuminator}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1], submetric) +
            k * computeSubmetricAntivotes([0, 0, 2], submetric),
        )
    })

    it("works when k = 0 (and j = 1) therefore it only looks at the numerator", () => {
        const k = 0
        const fiveRoughRatio = [5, 7]
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1], submetric),
        )
    })

    it("works when j = 0 (and k = 1) therefore it only looks at the denominator", () => {
        const j = 0
        const fiveRoughRatio = [5, 7]
        const submetric = {j}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 1], submetric),
        )
    })

    it("works when k is a base", () => {
        const k = 2
        const kIsBase = true
        const fiveRoughRatio = [5, 7]
        const submetric = {k, kIsBase}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1], submetric) +
            computeLog(computeSubmetricAntivotes([0, 0, 0, 1], submetric), 2),
        )
    })

    it("works when k is an exponent", () => {
        const k = 2
        const kIsExponent = true
        const fiveRoughRatio = [5, 7]
        const submetric = {k, kIsExponent}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1], submetric) +
            computeSubmetricAntivotes([0, 0, 0, 1], submetric) ** 2,
        )
    })

    it("works when j is a base", () => {
        const j = 2
        const jIsBase = true
        const fiveRoughRatio = [5, 7]
        const submetric = {j, jIsBase}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeLog(computeSubmetricAntivotes([0, 0, 1], submetric), 2) +
            computeSubmetricAntivotes([0, 0, 0, 1], submetric),
        )
    })

    it("works when j is an exponent", () => {
        const j = 2
        const jIsExponent = true
        const fiveRoughRatio = [5, 7]
        const submetric = {j, jIsExponent}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1], submetric) ** 2 +
            computeSubmetricAntivotes([0, 0, 0, 1], submetric),
        )
    })
})
