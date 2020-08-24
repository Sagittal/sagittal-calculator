import { Combination, Index, Rank, Ratio } from "../../../../../src/general"
import {
    computeUnpopularities,
    Parameter,
    ParameterValue,
    Submetric,
} from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import {
    Antivotes,
    Popularity,
    Unpopularity,
    Votes,
} from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"

describe("computeUnpopularities", () => {
    it("given a list of real popularities and submetric combinations, returns our estimated unpopularities, which have antivotes instead of votes", () => {
        const realPopularities: Popularity[] = [
            { rank: 5 as Rank<Popularity>, fiveRoughRatio: [7, 5] as Ratio, votes: 1318 as Votes },
            { rank: 8 as Rank<Popularity>, fiveRoughRatio: [125, 1] as Ratio, votes: 492 as Votes },
            { rank: 39 as Rank<Popularity>, fiveRoughRatio: [55, 49] as Ratio, votes: 51 as Votes },
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

        const expected = [
            { antivotes: 2 as Antivotes, fiveRoughRatio: [7, 5] as Ratio, index: 0 as Index<Unpopularity> },
            { antivotes: 1 as Antivotes, fiveRoughRatio: [125, 1] as Ratio, index: 1 as Index<Unpopularity> },
            { antivotes: 3 as Antivotes, fiveRoughRatio: [55, 49] as Ratio, index: 2 as Index<Unpopularity> },
        ]
        expect(actual).toEqual(expected)
    })
})
