import { Combination, Monzo } from "../../../../../../src/general/math"
import { TwoThreeFreeClass } from "../../../../../../src/general/music"
import { Parameter, ParameterValue, Submetric } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import { computeAntivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes"
import { ANTIVOTES_PRECISION } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/constants"
import { computeSubmetricAntivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/submetricAntivotes"
import { Antivotes } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/types"

describe("computeAntivotes", (): void => {
    it("when k = 1 (default), and two 2,3-free ratios have the same SoPFR, but one has its primes all lopsided on one side, they still get ranked the same", (): void => {
        const balanced23FreeClass = { ratio: [11, 7] } as TwoThreeFreeClass
        const lopsided23FreeClass = { ratio: [77, 1] } as TwoThreeFreeClass
        const submetrics: Combination<Submetric> = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K_AS_COEFFICIENT ]: 1 as ParameterValue,
            },
        ] as Combination<Submetric>

        const balancedResult = computeAntivotes(balanced23FreeClass, submetrics)
        const lopsidedResult = computeAntivotes(lopsided23FreeClass, submetrics)

        expect(balancedResult).toBeCloseToTyped(lopsidedResult, ANTIVOTES_PRECISION)
    })

    it("when k < 1, two 2,3-free ratios have the same SoPFR, but one has its primes all lopsided on one side, it gets ranked worse", (): void => {
        const balanced23FreeClass = { ratio: [11, 7] } as TwoThreeFreeClass
        const lopsided23FreeClass = { ratio: [77, 1] } as TwoThreeFreeClass
        const submetrics: Combination<Submetric> = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.K_AS_COEFFICIENT ]: 0.9 as ParameterValue,
            },
        ] as Combination<Submetric>

        const balancedResult = computeAntivotes(balanced23FreeClass, submetrics)
        const lopsidedResult = computeAntivotes(lopsided23FreeClass, submetrics)

        expect(balancedResult).toBeLessThan(lopsidedResult)
    })

    it("applies weights to each submetric", (): void => {
        const twoThreeFreeClass = { ratio: [77, 1] } as TwoThreeFreeClass
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

    it("should not return NaN", (): void => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.WEIGHT_AS_COEFFICIENT ]: 1 as ParameterValue,
                [ Parameter.K_AS_COEFFICIENT ]: 0 as ParameterValue,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                [ Parameter.W ]: -6 as ParameterValue,
                [ Parameter.X ]: -2 as ParameterValue,
                [ Parameter.Y ]: 0.142857 as ParameterValue,
            },
        ] as Combination<Submetric>
        const twoThreeFreeClass = { ratio: [5, 1] } as TwoThreeFreeClass

        const actual = computeAntivotes(twoThreeFreeClass, submetrics)

        expect(actual).not.toBeNaN()
    })

    it("antivotes precision should round results to billionths", (): void => {
        const submetrics = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_LOGARITHM_BASE ]: 2 as ParameterValue,
                [ Parameter.W ]: -2 as ParameterValue,
            },
        ] as Combination<Submetric>
        const twoThreeFreeClass = { ratio: [5, 1] } as TwoThreeFreeClass

        const actual = computeAntivotes(twoThreeFreeClass, submetrics)

        const expected = 0.321928 as Antivotes
        expect(actual).toBeCloseToTyped(expected)
    })
})
