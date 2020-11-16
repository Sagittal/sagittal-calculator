import {Grade, Rank, Ranked} from "../../../../../src/general"
import {LfcUnpopularityEstimate} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {addRankToUnpopularities} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares/rank"

describe("addRankToUnpopularities", (): void => {
    it("adds rank to unpopularities", (): void => {
        const unpopularities: LfcUnpopularityEstimate[] = [
            {index: 0, antivotes: 10 as Grade<LfcUnpopularityEstimate>},
            {index: 1, antivotes: 5 as Grade<LfcUnpopularityEstimate>},
            {index: 2, antivotes: 20 as Grade<LfcUnpopularityEstimate>},
        ] as LfcUnpopularityEstimate[]

        const actual = addRankToUnpopularities(unpopularities)

        const expected = [
            {index: 0, antivotes: 10 as Grade<LfcUnpopularityEstimate>, rank: 2 as Rank<LfcUnpopularityEstimate>},
            {index: 1, antivotes: 5 as Grade<LfcUnpopularityEstimate>, rank: 1 as Rank<LfcUnpopularityEstimate>},
            {index: 2, antivotes: 20 as Grade<LfcUnpopularityEstimate>, rank: 3 as Rank<LfcUnpopularityEstimate>},
        ] as Array<Ranked<LfcUnpopularityEstimate>>
        expect(actual).toEqual(expected)
    })

    it("uses fractional ranks if some are tied", (): void => {
        const unpopularities = [
            {index: 0, antivotes: 10 as Grade<LfcUnpopularityEstimate>},
            {index: 1, antivotes: 5 as Grade<LfcUnpopularityEstimate>},
            {index: 2, antivotes: 20 as Grade<LfcUnpopularityEstimate>},
            {index: 3, antivotes: 10 as Grade<LfcUnpopularityEstimate>},
        ] as LfcUnpopularityEstimate[]

        const actual = addRankToUnpopularities(unpopularities)

        const expected = [
            {index: 0, antivotes: 10 as Grade<LfcUnpopularityEstimate>, rank: 2.5 as Rank<LfcUnpopularityEstimate>},
            {index: 1, antivotes: 5 as Grade<LfcUnpopularityEstimate>, rank: 1 as Rank<LfcUnpopularityEstimate>},
            {index: 2, antivotes: 20 as Grade<LfcUnpopularityEstimate>, rank: 4 as Rank<LfcUnpopularityEstimate>},
            {index: 3, antivotes: 10 as Grade<LfcUnpopularityEstimate>, rank: 2.5 as Rank<LfcUnpopularityEstimate>},
        ] as Array<Ranked<LfcUnpopularityEstimate>>
        expect(actual).toEqual(expected)
    })

    it("another example of fractional ranks", (): void => {
        const unpopularities = [
            {index: 0, antivotes: 10 as Grade<LfcUnpopularityEstimate>},
            {index: 1, antivotes: 5 as Grade<LfcUnpopularityEstimate>},
            {index: 2, antivotes: 20 as Grade<LfcUnpopularityEstimate>},
            {index: 3, antivotes: 10 as Grade<LfcUnpopularityEstimate>},
            {index: 4, antivotes: 10 as Grade<LfcUnpopularityEstimate>},
        ] as LfcUnpopularityEstimate[]

        const actual = addRankToUnpopularities(unpopularities)

        const expected = [
            {index: 0, antivotes: 10 as Grade<LfcUnpopularityEstimate>, rank: 3 as Rank<LfcUnpopularityEstimate>},
            {index: 1, antivotes: 5 as Grade<LfcUnpopularityEstimate>, rank: 1 as Rank<LfcUnpopularityEstimate>},
            {index: 2, antivotes: 20 as Grade<LfcUnpopularityEstimate>, rank: 5 as Rank<LfcUnpopularityEstimate>},
            {index: 3, antivotes: 10 as Grade<LfcUnpopularityEstimate>, rank: 3 as Rank<LfcUnpopularityEstimate>},
            {index: 4, antivotes: 10 as Grade<LfcUnpopularityEstimate>, rank: 3 as Rank<LfcUnpopularityEstimate>},
        ] as Array<Ranked<LfcUnpopularityEstimate>>
        expect(actual).toEqual(expected)
    })
})
