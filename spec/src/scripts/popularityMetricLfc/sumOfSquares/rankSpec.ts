import { Rank, Ranked } from "../../../../../src/general"
import { addRankToUnpopularities } from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares/rank"
import { Antivotes, Unpopularity } from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares/types"

describe("addRankToUnpopularities", (): void => {
    it("adds rank to unpopularities", (): void => {
        const unpopularities: Unpopularity[] = [
            { index: 0, antivotes: 10 as Antivotes },
            { index: 1, antivotes: 5 as Antivotes },
            { index: 2, antivotes: 20 as Antivotes },
        ] as Unpopularity[]

        const actual = addRankToUnpopularities(unpopularities)

        const expected = [
            { index: 0, antivotes: 10 as Antivotes, rank: 2 as Rank<Unpopularity> },
            { index: 1, antivotes: 5 as Antivotes, rank: 1 as Rank<Unpopularity> },
            { index: 2, antivotes: 20 as Antivotes, rank: 3 as Rank<Unpopularity> },
        ] as Array<Ranked<Unpopularity>>
        expect(actual).toEqual(expected)
    })

    it("uses fractional ranks if some are tied", (): void => {
        const unpopularities = [
            { index: 0, antivotes: 10 as Antivotes },
            { index: 1, antivotes: 5 as Antivotes },
            { index: 2, antivotes: 20 as Antivotes },
            { index: 3, antivotes: 10 as Antivotes },
        ] as Unpopularity[]

        const actual = addRankToUnpopularities(unpopularities)

        const expected = [
            { index: 0, antivotes: 10 as Antivotes, rank: 2.5 as Rank<Unpopularity> },
            { index: 1, antivotes: 5 as Antivotes, rank: 1 as Rank<Unpopularity> },
            { index: 2, antivotes: 20 as Antivotes, rank: 4 as Rank<Unpopularity> },
            { index: 3, antivotes: 10 as Antivotes, rank: 2.5 as Rank<Unpopularity> },
        ] as Array<Ranked<Unpopularity>>
        expect(actual).toEqual(expected)
    })

    it("another example of fractional ranks", (): void => {
        const unpopularities = [
            { index: 0, antivotes: 10 as Antivotes },
            { index: 1, antivotes: 5 as Antivotes },
            { index: 2, antivotes: 20 as Antivotes },
            { index: 3, antivotes: 10 as Antivotes },
            { index: 4, antivotes: 10 as Antivotes },
        ] as Unpopularity[]

        const actual = addRankToUnpopularities(unpopularities)

        const expected = [
            { index: 0, antivotes: 10 as Antivotes, rank: 3 as Rank<Unpopularity> },
            { index: 1, antivotes: 5 as Antivotes, rank: 1 as Rank<Unpopularity> },
            { index: 2, antivotes: 20 as Antivotes, rank: 5 as Rank<Unpopularity> },
            { index: 3, antivotes: 10 as Antivotes, rank: 3 as Rank<Unpopularity> },
            { index: 4, antivotes: 10 as Antivotes, rank: 3 as Rank<Unpopularity> },
        ] as Array<Ranked<Unpopularity>>
        expect(actual).toEqual(expected)
    })
})
