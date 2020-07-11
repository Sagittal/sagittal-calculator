import { addRankToUnpopularities } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/rank"
import {
    Antivotes,
    RankedUnpopularity,
    Unpopularity,
    UnpopularityRank,
} from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"

describe("addRankToUnpopularities", () => {
    it("adds rank to unpopularities", () => {
        const unpopularities: Unpopularity[] = [
            { index: 0, antivotes: 10 as Antivotes },
            { index: 1, antivotes: 5 as Antivotes },
            { index: 2, antivotes: 20 as Antivotes },
        ] as Unpopularity[]

        const result = addRankToUnpopularities(unpopularities)

        expect(result).toEqual([
            { index: 0, antivotes: 10 as Antivotes, rank: 2 as UnpopularityRank },
            { index: 1, antivotes: 5 as Antivotes, rank: 1 as UnpopularityRank },
            { index: 2, antivotes: 20 as Antivotes, rank: 3 as UnpopularityRank },
        ] as RankedUnpopularity[])
    })

    it("uses fractional ranks if some are tied", () => {
        const unpopularities = [
            { index: 0, antivotes: 10 as Antivotes },
            { index: 1, antivotes: 5 as Antivotes },
            { index: 2, antivotes: 20 as Antivotes },
            { index: 3, antivotes: 10 as Antivotes },
        ] as Unpopularity[]

        const result = addRankToUnpopularities(unpopularities)

        expect(result).toEqual([
            { index: 0, antivotes: 10 as Antivotes, rank: 2.5 as UnpopularityRank },
            { index: 1, antivotes: 5 as Antivotes, rank: 1 as UnpopularityRank },
            { index: 2, antivotes: 20 as Antivotes, rank: 4 as UnpopularityRank },
            { index: 3, antivotes: 10 as Antivotes, rank: 2.5 as UnpopularityRank },
        ] as RankedUnpopularity[])
    })

    it("another example of fractional ranks", () => {
        const unpopularities = [
            { index: 0, antivotes: 10 as Antivotes },
            { index: 1, antivotes: 5 as Antivotes },
            { index: 2, antivotes: 20 as Antivotes },
            { index: 3, antivotes: 10 as Antivotes },
            { index: 4, antivotes: 10 as Antivotes },
        ] as Unpopularity[]

        const result = addRankToUnpopularities(unpopularities)

        expect(result).toEqual([
            { index: 0, antivotes: 10 as Antivotes, rank: 3 as UnpopularityRank },
            { index: 1, antivotes: 5 as Antivotes, rank: 1 as UnpopularityRank },
            { index: 2, antivotes: 20 as Antivotes, rank: 5 as UnpopularityRank },
            { index: 3, antivotes: 10 as Antivotes, rank: 3 as UnpopularityRank },
            { index: 4, antivotes: 10 as Antivotes, rank: 3 as UnpopularityRank },
        ] as RankedUnpopularity[])
    })
})
