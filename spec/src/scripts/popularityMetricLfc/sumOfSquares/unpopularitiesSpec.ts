import {
    Combination,
    Decimal,
    Grade,
    Index,
    Parameter,
    Rank,
    Ranked,
    ScalaPopularityStat,
    Two3FreeClass,
} from "@sagittal/general"
import {
    computeUnpopularities,
    LfcUnpopularityEstimate,
    PopularityParameterId,
    Submetric,
} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeUnpopularities", (): void => {
    it("given a list of actual popularities and submetric combinations, returns our estimated unpopularities, which have antivotes instead of votes", (): void => {
        const popularities: Array<Ranked<ScalaPopularityStat>> = [
            {
                rank: 5 as Rank<ScalaPopularityStat>,
                two3FreeClass: {monzo: [0, 0, -1, 1]} as Two3FreeClass,
                votes: 1318 as Decimal<{integer: true}> & Grade<ScalaPopularityStat>,
            },
            {
                rank: 8 as Rank<ScalaPopularityStat>,
                two3FreeClass: {monzo: [0, 0, 3]} as Two3FreeClass,
                votes: 492 as Decimal<{integer: true}> & Grade<ScalaPopularityStat>,
            },
            {
                rank: 39 as Rank<ScalaPopularityStat>,
                two3FreeClass: {monzo: [0, 0, 1, -2, 1]} as Two3FreeClass,
                votes: 51 as Decimal<{integer: true}> & Grade<ScalaPopularityStat>,
            },
        ]
        const submetrics: Combination<Submetric> = [
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 0 as Parameter,
            },
            {
                [PopularityParameterId.COUNT]: true,
                [PopularityParameterId.WITHOUT_REPETITION]: true,
                [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: 1 as Parameter,
            },
        ] as Combination<Submetric>

        const actual = computeUnpopularities(popularities, submetrics)

        const expected: LfcUnpopularityEstimate[] = [
            {
                antivotes: 2 as Grade<LfcUnpopularityEstimate>,
                two3FreeClass: {monzo: [0, 0, -1, 1]} as Two3FreeClass,
                index: 0 as Index<LfcUnpopularityEstimate>,
            },
            {
                antivotes: 1 as Grade<LfcUnpopularityEstimate>,
                two3FreeClass: {monzo: [0, 0, 3]} as Two3FreeClass,
                index: 1 as Index<LfcUnpopularityEstimate>,
            },
            {
                antivotes: 3 as Grade<LfcUnpopularityEstimate>,
                two3FreeClass: {monzo: [0, 0, 1, -2, 1]} as Two3FreeClass,
                index: 2 as Index<LfcUnpopularityEstimate>,
            },
        ]
        expect(actual).toEqual(expected)
    })
})
