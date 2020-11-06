import {Parameter, Score} from "../../../../../../src/general/lfc"
import {Combination, Monzo} from "../../../../../../src/general/math"
import {Two3FreeClass} from "../../../../../../src/general/music"
import {
    LfcUnpopularityEstimate,
    PopularityParameterId,
    Submetric,
} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {computeAntivotes} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes"
import {ANTIVOTES_PRECISION} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/constants"
import {computeSubmetricAntivotes} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/submetricAntivotes"

describe("computeAntivotes", (): void => {
    it("when k = 1 (default), and two 2,3-free classes have the same SoPFR, but one has its primes all lopsided on one side, they still get ranked the same", (): void => {
        const balanced23FreeClass = {monzo: [0, 0, 0, -1, 1]} as Two3FreeClass
        const lopsided23FreeClass = {monzo: [0, 0, 0, 1, 1]} as Two3FreeClass
        const submetrics: Combination<Submetric> = [
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.K_AS_COEFFICIENT]: 1 as Parameter,
            },
        ] as Combination<Submetric>

        const balancedResult = computeAntivotes(balanced23FreeClass, submetrics)
        const lopsidedResult = computeAntivotes(lopsided23FreeClass, submetrics)

        expect(balancedResult).toBeCloseToTyped(lopsidedResult, ANTIVOTES_PRECISION)
    })

    it("when k < 1, two 2,3-free classes have the same SoPFR, but one has its primes all lopsided on one side, it gets ranked worse", (): void => {
        const balanced23FreeClass = {monzo: [0, 0, 0, -1, 1]} as Two3FreeClass
        const lopsided23FreeClass = {monzo: [0, 0, 0, 1, 1]} as Two3FreeClass
        const submetrics: Combination<Submetric> = [
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.K_AS_COEFFICIENT]: 0.9 as Parameter,
            },
        ] as Combination<Submetric>

        const balancedResult = computeAntivotes(balanced23FreeClass, submetrics)
        const lopsidedResult = computeAntivotes(lopsided23FreeClass, submetrics)

        expect(balancedResult).toBeLessThan(lopsidedResult)
    })

    it("applies weights to each submetric", (): void => {
        const two3FreeClass = {monzo: [0, 0, 0, 1, 1]} as Two3FreeClass
        const submetrics = [
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.5 as Parameter,
            },
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0.3 as Parameter,
            },
        ] as Combination<Submetric>

        const actual = computeAntivotes(two3FreeClass, submetrics)

        const expected =
            0.5 * computeSubmetricAntivotes(
                [0, 0, 0, 1, 1] as Monzo<{rational: true}>,
                {[PopularityParameterId.SUM]: true},
            ) as Score<LfcUnpopularityEstimate> +
            0.3 * computeSubmetricAntivotes(
                [0, 0, 0, 1, 1] as Monzo<{rational: true}>,
                {[PopularityParameterId.SUM]: true},
            ) as Score<LfcUnpopularityEstimate>
        expect(actual).toBeCloseToTyped(expected, ANTIVOTES_PRECISION)
    })

    it("should not return NaN", (): void => {
        const submetrics = [
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 1 as Parameter,
                [PopularityParameterId.K_AS_COEFFICIENT]: 0 as Parameter,
                [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2 as Parameter,
                [PopularityParameterId.W]: -6 as Parameter,
                [PopularityParameterId.X]: -2 as Parameter,
                [PopularityParameterId.Y]: 0.142857 as Parameter,
            },
        ] as Combination<Submetric>
        const two3FreeClass = {monzo: [0, 0, 1]} as Two3FreeClass

        const actual = computeAntivotes(two3FreeClass, submetrics)

        expect(actual).not.toBeNaN()
    })

    it("antivotes precision should round results to billionths", (): void => {
        const submetrics = [
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.A_AS_LOGARITHM_BASE]: 2 as Parameter,
                [PopularityParameterId.W]: -2 as Parameter,
            },
        ] as Combination<Submetric>
        const two3FreeClass = {monzo: [0, 0, 1]} as Two3FreeClass

        const actual = computeAntivotes(two3FreeClass, submetrics)

        const expected = 0.321928 as Score<LfcUnpopularityEstimate>
        expect(actual).toBeCloseToTyped(expected)
    })
})
