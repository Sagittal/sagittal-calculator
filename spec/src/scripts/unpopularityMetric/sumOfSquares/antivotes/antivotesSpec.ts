import { Combination, Ratio, round } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/music"
import { Parameter, ParameterValue, Submetric } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { computeAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes"
import { computeSubmetricAntivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/antivotes/submetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"

describe("computeAntivotes", () => {
    it("when k = 1 (default), and two 5-rough ratios have the same sopfr, but one has its primes all lopsided on one side, they still get ranked the same", () => {
        const balancedFiveRoughRatio: Ratio = [11, 7] as Ratio
        const lopsidedFiveRoughRatio = [77, 1] as Ratio
        const submetrics: Combination<Submetric> = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K_AS_COEFFICIENT ]: 1 as ParameterValue,
            },
        ] as Combination<Submetric>

        const balancedResult = computeAntivotes(balancedFiveRoughRatio, submetrics)
        const lopsidedResult = computeAntivotes(lopsidedFiveRoughRatio, submetrics)

        expect(balancedResult).toBe(lopsidedResult)
    })

    it("when k < 1, two 5-rough ratios have the same sopfr, but one has its primes all lopsided on one side, it gets ranked worse", () => {
        const balancedFiveRoughRatio = [11, 7] as Ratio
        const lopsidedFiveRoughRatio = [77, 1] as Ratio
        const submetrics: Combination<Submetric> = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K_AS_COEFFICIENT ]: 0.9 as ParameterValue,
            },
        ] as Combination<Submetric>

        const balancedResult = computeAntivotes(balancedFiveRoughRatio, submetrics)
        const lopsidedResult = computeAntivotes(lopsidedFiveRoughRatio, submetrics)

        expect(balancedResult).toBeLessThan(lopsidedResult)
    })

    it("applies weights to each submetric", () => {
        const fiveRoughRatio = [77, 1] as Ratio
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.5 as ParameterValue,
            },
            {
                [ Parameter.SUM ]: true,
                [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0.3 as ParameterValue,
            },
        ] as Combination<Submetric>

        const actual = computeAntivotes(fiveRoughRatio, submetrics)

        const expected =
            0.5 * computeSubmetricAntivotes([0, 0, 0, 1, 1] as Monzo, { [ Parameter.SUM ]: true }) as Antivotes +
            0.3 * computeSubmetricAntivotes([0, 0, 0, 1, 1] as Monzo, { [ Parameter.SUM ]: true }) as Antivotes
        expect(actual).toBe(round(expected, 9))
    })

    it("should not return NaN", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.WEIGHT_AS_COEFFICIENT ]: 1 as ParameterValue,
                [ Parameter.K_AS_COEFFICIENT ]: 0 as ParameterValue,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                [ Parameter.W ]: -6 as ParameterValue,
                [ Parameter.X ]: -2 as ParameterValue,
                [ Parameter.Y ]: 0.14285714285714285 as ParameterValue,
            },
        ] as Combination<Submetric>
        const fiveRoughRatio = [5, 1] as Ratio

        const actual = computeAntivotes(fiveRoughRatio, submetrics)

        expect(actual).not.toBeNaN()
    })

    it("should round results to billionths", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                [ Parameter.W ]: -2 as ParameterValue,
            },
        ] as Combination<Submetric>
        const fiveRoughRatio = [5, 1] as Ratio

        const actual = computeAntivotes(fiveRoughRatio, submetrics)

        const expected = 0.321928095 as Antivotes
        expect(actual).toBe(expected)
    })
})
