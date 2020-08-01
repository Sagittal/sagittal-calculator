import { computeLog, Ratio } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/music"
import { ParameterValue } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { computeRatioSubmetricAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/ratioSubmetricAntivotes"
import { computeSubmetricAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/submetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"

describe("computeRatioSubmetricAntivotes", () => {
    it("splits the ratio into numerator and denominator, computes their submetric antivotes separately, then adjusts the denominator by k", () => {
        const kAsCoefficient = 0.46 as ParameterValue
        const fiveRoughRatio = [11, 7] as Ratio
        const submetric = { kAsCoefficient, sum: true }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo, submetric) as Antivotes +
            kAsCoefficient * computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("another example", () => {
        const kAsCoefficient = 0.46 as ParameterValue
        const fiveRoughRatio = [25, 11] as Ratio // 10:11
        const submetric = { kAsCoefficient, sum: true }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 2] as Monzo, submetric) as Antivotes +
            kAsCoefficient * computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("defaults k and j to 1", () => {
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { sum: true }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1, -1] as Monzo, submetric),
        )
    })

    it("supports deciding the numinator and diminuator by which is the greater of the two", () => {
        const kAsCoefficient = 0.46 as ParameterValue
        const fiveRoughRatio = [25, 11] as Ratio // 10:11
        const useNuminator = true
        const submetric = { kAsCoefficient, useNuminator, sum: true }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo, submetric) as Antivotes +
            kAsCoefficient * computeSubmetricAntivotes([0, 0, 2] as Monzo, submetric) as Antivotes,
        )
    })

    it("works when k = 0 (and j = 1) therefore it only looks at the numerator", () => {
        const kAsCoefficient = 0 as ParameterValue
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { kAsCoefficient, sum: true }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric),
        )
    })

    it("works when j = 0 (and k = 1) therefore it only looks at the denominator", () => {
        const jAsCoefficient = 0 as ParameterValue
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { jAsCoefficient, sum: true }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric),
        )
    })

    it("works when k is a base", () => {
        const kAsBase = 2 as ParameterValue
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { kAsBase, sum: true }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) as Antivotes +
            computeLog(computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric), 2) as Antivotes,
        )
    })

    it("works when k is an exponent", () => {
        const kAsExponent = 2 as ParameterValue
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { kAsExponent, sum: true }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) ** 2 as Antivotes,
        )
    })

    it("works when j is a base", () => {
        const jAsBase = 2 as ParameterValue
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { jAsBase, sum: true }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeLog(computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric), 2) as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("works when j is an exponent", () => {
        const jAsExponent = 2 as ParameterValue
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { jAsExponent, sum: true }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) ** 2 as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })
})
