import { Combination, Index, Ratio } from "../../../../../src/general"
import {
    Antivotes,
    Popularity,
    PopularityRank,
    Unpopularity,
    Votes,
} from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { computeUnpopularities } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/unpopularities"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/types"

describe("computeUnpopularities", () => {
    it("given a list of real popularities and submetric combinations, returns our estimated unpopularities, which have antivotes instead of votes", () => {
        const realPopularities: Popularity[] = [
            { rank: 5 as PopularityRank, fiveRoughRatio: [7, 5] as Ratio, votes: 1318 as Votes },
            { rank: 8 as PopularityRank, fiveRoughRatio: [125, 1] as Ratio, votes: 492 as Votes },
            { rank: 39 as PopularityRank, fiveRoughRatio: [55, 49] as Ratio, votes: 51 as Votes },
        ]
        const submetrics: Combination<Submetric> = [
            {
                [ Parameter.WEIGHT ]: 0 as ParameterValue,
            },
            {
                [ Parameter.COUNT ]: true,
                [ Parameter.WITHOUT_REPETITION ]: true,
                [ Parameter.WEIGHT ]: 1 as ParameterValue,
            },
        ] as Combination<Submetric>

        const result = computeUnpopularities(realPopularities, submetrics)

        expect(result).toEqual([
            { antivotes: 2 as Antivotes, fiveRoughRatio: [7, 5] as Ratio, index: 0 as Index<Unpopularity> },
            { antivotes: 1 as Antivotes, fiveRoughRatio: [125, 1] as Ratio, index: 1 as Index<Unpopularity> },
            { antivotes: 3 as Antivotes, fiveRoughRatio: [55, 49] as Ratio, index: 2 as Index<Unpopularity> },
        ])
    })
})
