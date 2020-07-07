const {computeRatioSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/ratioSubmetricAntivotes")
const {computeSubmetricAntivotes} = require("../../../../../src/scripts/unpopularityMetric/antivotes/submetricAntivotes")
const {computeLog} = require("../../../../../src/utilities/log")

describe("computeRatioSubmetricAntivotes", () => {
    it("splits the ratio into numerator and denominator, computes their submetric antivotes separately, then adjusts the diminuator (the lesser of the two) by k", () => {
        const k = 0.46
        const fiveRoughRatio = [11, 7]
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1], submetric) +
            k * computeSubmetricAntivotes([0, 0, 0, 1], submetric),
        )
    })

    it("works when the input ratio's denominator will be the numinator (the greater of the two)", () => {
        const k = 0.46
        const fiveRoughRatio = [25, 11] // 10:11
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1], submetric) +
            k * computeSubmetricAntivotes([0, 0, 2], submetric),
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

    it("supports deciding the numinator and diminuator by the input numerator and denominator", () => {
        const k = 0.46
        const fiveRoughRatio = [25, 11] // 10:11
        const numeratorIsNuminator = true
        const submetric = {k, numeratorIsNuminator}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 2], submetric) +
            k * computeSubmetricAntivotes([0, 0, 0, 0, 1], submetric),
        )
    })

    it("works when k = 0 (and j = 1) therefore it only looks at the numinator", () => {
        const k = 0
        const fiveRoughRatio = [5, 7]
        const submetric = {k}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 1], submetric),
        )
    })

    it("works when j = 0 (and k = 1) therefore it only looks at the diminuator", () => {
        const j = 0
        const fiveRoughRatio = [5, 7]
        const submetric = {j}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1, 0], submetric),
        )
    })

    it("works when k is a base", () => {
        const k = 2
        const kIsBase = true
        const fiveRoughRatio = [5, 7]
        const submetric = {k, kIsBase}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 1], submetric) +
            computeLog(computeSubmetricAntivotes([0, 0, 1, 0], submetric), 2),
        )
    })

    it("works when k is an exponent", () => {
        const k = 2
        const kIsExponent = true
        const fiveRoughRatio = [5, 7]
        const submetric = {k, kIsExponent}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 1], submetric) +
            computeSubmetricAntivotes([0, 0, 1, 0], submetric) ** 2,
        )
    })

    it("works when j is a base", () => {
        const j = 2
        const jIsBase = true
        const fiveRoughRatio = [5, 7]
        const submetric = {j, jIsBase}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1, 0], submetric) +
            computeLog(computeSubmetricAntivotes([0, 0, 0, 1], submetric), 2),
        )
    })

    it("works when j is an exponent", () => {
        const j = 2
        const jIsExponent = true
        const fiveRoughRatio = [5, 7]
        const submetric = {j, jIsExponent}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1, 0], submetric) +
            computeSubmetricAntivotes([0, 0, 0, 1], submetric) ** 2,
        )
    })
})
