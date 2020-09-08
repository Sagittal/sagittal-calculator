import { Combination, Monzo } from "../../../../../../src/general/math"
import { TwoThreeFreeClass } from "../../../../../../src/sagittal/comma"
import { Parameter, ParameterValue, Submetric } from "../../../../../../src/scripts/lfc/sumOfSquares"
import { computeAntivotes } from "../../../../../../src/scripts/lfc/sumOfSquares/antivotes"
import { ANTIVOTES_PRECISION } from "../../../../../../src/scripts/lfc/sumOfSquares/antivotes/constants"
import { computeSubmetricAntivotes } from "../../../../../../src/scripts/lfc/sumOfSquares/antivotes/submetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/lfc/sumOfSquares/types"

describe("computeAntivotes", () => {
    it("when k = 1 (default), and two 2,3-free ratios have the same sopfr, but one has its primes all lopsided on one side, they still get ranked the same", () => {
        const balancedTwoThreeFreeRatio = [11, 7] as TwoThreeFreeClass
        const lopsidedTwoThreeFreeRatio = [77, 1] as TwoThreeFreeClass
        const submetrics: Combination<Submetric> = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K_AS_COEFFICIENT ]: 1 as ParameterValue,
            },
        ] as Combination<Submetric>

        const balancedResult = computeAntivotes(balancedTwoThreeFreeRatio, submetrics)
        const lopsidedResult = computeAntivotes(lopsidedTwoThreeFreeRatio, submetrics)

        expect(balancedResult).toBeCloseToTyped(lopsidedResult, ANTIVOTES_PRECISION)
    })

    it("when k < 1, two 2,3-free ratios have the same sopfr, but one has its primes all lopsided on one side, it gets ranked worse", () => {
        const balancedTwoThreeFreeRatio = [11, 7] as TwoThreeFreeClass
        const lopsidedTwoThreeFreeRatio = [77, 1] as TwoThreeFreeClass
        const submetrics: Combination<Submetric> = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K_AS_COEFFICIENT ]: 0.9 as ParameterValue,
            },
        ] as Combination<Submetric>

        const balancedResult = computeAntivotes(balancedTwoThreeFreeRatio, submetrics)
        const lopsidedResult = computeAntivotes(lopsidedTwoThreeFreeRatio, submetrics)

        expect(balancedResult).toBeLessThan(lopsidedResult)
    })

    it("applies weights to each submetric", () => {
        const twoThreeFreeClass = [77, 1] as TwoThreeFreeClass
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

        const actual = computeAntivotes(twoThreeFreeClass, submetrics)

        const expected =
            0.5 * computeSubmetricAntivotes([0, 0, 0, 1, 1] as Monzo, { [ Parameter.SUM ]: true }) as Antivotes +
            0.3 * computeSubmetricAntivotes([0, 0, 0, 1, 1] as Monzo, { [ Parameter.SUM ]: true }) as Antivotes
        expect(actual).toBeCloseToTyped(expected, ANTIVOTES_PRECISION)
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
        const twoThreeFreeClass = [5, 1] as TwoThreeFreeClass

        const actual = computeAntivotes(twoThreeFreeClass, submetrics)

        expect(actual).not.toBeNaN()
    })

    it("antivotes precision should round results to billionths", () => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                [ Parameter.W ]: -2 as ParameterValue,
            },
        ] as Combination<Submetric>
        const twoThreeFreeClass = [5, 1] as TwoThreeFreeClass

        const actual = computeAntivotes(twoThreeFreeClass, submetrics)

        const expected = 0.321928095 as Antivotes
        expect(actual).toBe(expected)
    })
})
