import { computeRatioSubmetricAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/ratioSubmetricAntivotes"
import { computeSubmetricAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/submetricAntivotes"
import { computeLog } from "../../../../../../src/utilities/log"
import { Ratio } from "../../../../../../src/utilities/types"
import { Monzo } from "../../../../../../src/utilities/comma/types"
import { Antivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { DynamicParameterValue } from "../../../../../../src/scripts/unpopularityMetric/types"

describe("computeRatioSubmetricAntivotes", () => {
    it("splits the ratio into numerator and denominator, computes their submetric antivotes separately, then adjusts the denominator by k", () => {
        const k = 0.46 as DynamicParameterValue
        const fiveRoughRatio = [11, 7] as Ratio
        const submetric = { k }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo, submetric) as Antivotes +
            k * computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("another example", () => {
        const k = 0.46 as DynamicParameterValue
        const fiveRoughRatio = [25, 11] as Ratio // 10:11
        const submetric = { k }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 2] as Monzo, submetric) as Antivotes +
            k * computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("defaults k and j to 1", () => {
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = {}

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1, -1] as Monzo, submetric),
        )
    })

    it("supports deciding the numinator and diminuator by which is the greater of the two", () => {
        const k = 0.46 as DynamicParameterValue
        const fiveRoughRatio = [25, 11] as Ratio // 10:11
        const numeratorIsNuminator = false
        const submetric = { k, numeratorIsNuminator }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 0, 1] as Monzo, submetric) as Antivotes +
            k * computeSubmetricAntivotes([0, 0, 2] as Monzo, submetric) as Antivotes,
        )
    })

    it("works when k = 0 (and j = 1) therefore it only looks at the numerator", () => {
        const k = 0 as DynamicParameterValue
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { k }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric),
        )
    })

    it("works when j = 0 (and k = 1) therefore it only looks at the denominator", () => {
        const j = 0 as DynamicParameterValue
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { j }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric),
        )
    })

    it("works when k is a base", () => {
        const k = 2 as DynamicParameterValue
        const kIsBase = true
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { k, kIsBase }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) as Antivotes +
            computeLog(computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric), 2) as Antivotes,
        )
    })

    it("works when k is an exponent", () => {
        const k = 2 as DynamicParameterValue
        const kIsExponent = true
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { k, kIsExponent }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) ** 2 as Antivotes,
        )
    })

    it("works when j is a base", () => {
        const j = 2 as DynamicParameterValue
        const jIsBase = true
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { j, jIsBase }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeLog(computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric), 2) as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })

    it("works when j is an exponent", () => {
        const j = 2 as DynamicParameterValue
        const jIsExponent = true
        const fiveRoughRatio = [5, 7] as Ratio
        const submetric = { j, jIsExponent }

        const result = computeRatioSubmetricAntivotes(fiveRoughRatio, submetric)

        expect(result).toBe(
            computeSubmetricAntivotes([0, 0, 1] as Monzo, submetric) ** 2 as Antivotes +
            computeSubmetricAntivotes([0, 0, 0, 1] as Monzo, submetric) as Antivotes,
        )
    })
})
