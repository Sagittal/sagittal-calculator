import { Combination, Index, Popularity, Rank, Ranked, TwoThreeFreeClassAsRatio } from "../../../../../src/general"
import { Votes } from "../../../../../src/general/music"
import {
    computeUnpopularities,
    Parameter,
    ParameterValue,
    Submetric,
} from "../../../../../src/scripts/lfc/sumOfSquares"
import { Antivotes, Unpopularity } from "../../../../../src/scripts/lfc/sumOfSquares/types"

describe("computeUnpopularities", () => {
    it("given a list of real popularities and submetric combinations, returns our estimated unpopularities, which have antivotes instead of votes", () => {
        const realPopularities: Array<Ranked<Popularity>> = [
            {
                rank: 5 as Rank<Popularity>,
                twoThreeFreeClassAsRatio: [7, 5] as TwoThreeFreeClassAsRatio,
                votes: 1318 as Votes,
            },
            {
                rank: 8 as Rank<Popularity>,
                twoThreeFreeClassAsRatio: [125, 1] as TwoThreeFreeClassAsRatio,
                votes: 492 as Votes,
            },
            {
                rank: 39 as Rank<Popularity>,
                twoThreeFreeClassAsRatio: [55, 49] as TwoThreeFreeClassAsRatio,
                votes: 51 as Votes,
            },
        ]
        const submetrics: Combination<Submetric> = [
            {
                [ Parameter.SUM ]: true,
                [ Parameter.WEIGHT_AS_COEFFICIENT ]: 0 as ParameterValue,
            },
            {
                [ Parameter.COUNT ]: true,
                [ Parameter.WITHOUT_REPETITION ]: true,
                [ Parameter.WEIGHT_AS_COEFFICIENT ]: 1 as ParameterValue,
            },
        ] as Combination<Submetric>

        const actual = computeUnpopularities(realPopularities, submetrics)

        const expected: Unpopularity[] = [
            {
                antivotes: 2 as Antivotes,
                twoThreeFreeClassAsRatio: [7, 5] as TwoThreeFreeClassAsRatio,
                index: 0 as Index<Unpopularity>,
            },
            {
                antivotes: 1 as Antivotes,
                twoThreeFreeClassAsRatio: [125, 1] as TwoThreeFreeClassAsRatio,
                index: 1 as Index<Unpopularity>,
            },
            {
                antivotes: 3 as Antivotes,
                twoThreeFreeClassAsRatio: [55, 49] as TwoThreeFreeClassAsRatio,
                index: 2 as Index<Unpopularity>,
            },
        ]
        expect(actual).toEqual(expected)
    })
})
