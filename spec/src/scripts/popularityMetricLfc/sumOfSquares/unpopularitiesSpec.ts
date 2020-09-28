import { Combination, Index, Popularity, Rank, Ranked, Two3FreeClass } from "../../../../../src/general"
import { Votes } from "../../../../../src/general/music"
import {
    computeUnpopularities,
    Parameter,
    ParameterValue,
    Submetric,
} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import { Antivotes, Unpopularity } from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares/types"

describe("computeUnpopularities", (): void => {
    it("given a list of real popularities and submetric combinations, returns our estimated unpopularities, which have antivotes instead of votes", (): void => {
        const realPopularities: Array<Ranked<Popularity>> = [
            {
                rank: 5 as Rank<Popularity>,
                two3FreeClass: { quotient: [7, 5] } as Two3FreeClass,
                votes: 1318 as Votes,
            },
            {
                rank: 8 as Rank<Popularity>,
                two3FreeClass: { quotient: [125, 1] } as Two3FreeClass,
                votes: 492 as Votes,
            },
            {
                rank: 39 as Rank<Popularity>,
                two3FreeClass: { quotient: [55, 49] } as Two3FreeClass,
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
                two3FreeClass: { quotient: [7, 5] } as Two3FreeClass,
                index: 0 as Index<Unpopularity>,
            },
            {
                antivotes: 1 as Antivotes,
                two3FreeClass: { quotient: [125, 1] } as Two3FreeClass,
                index: 1 as Index<Unpopularity>,
            },
            {
                antivotes: 3 as Antivotes,
                two3FreeClass: { quotient: [55, 49] } as Two3FreeClass,
                index: 2 as Index<Unpopularity>,
            },
        ]
        expect(actual).toEqual(expected)
    })
})
