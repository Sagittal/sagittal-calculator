import {addRankToUnpopularities} from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/rank"

describe("addRankToUnpopularities", () => {
    it("adds rank to unpopularities", () => {
        const unpopularities = [
            {index: 0, antivotes: 10},
            {index: 1, antivotes: 5},
            {index: 2, antivotes: 20},
        ]

        const result = addRankToUnpopularities(unpopularities)

        expect(result).toEqual([
            {index: 0, antivotes: 10, rank: 2},
            {index: 1, antivotes: 5, rank: 1},
            {index: 2, antivotes: 20, rank: 3},
        ])
    })

    it("uses fractional ranks if some are tied", () => {
        const unpopularities = [
            {index: 0, antivotes: 10},
            {index: 1, antivotes: 5},
            {index: 2, antivotes: 20},
            {index: 3, antivotes: 10},
        ]

        const result = addRankToUnpopularities(unpopularities)

        expect(result).toEqual([
            {index: 0, antivotes: 10, rank: 2.5},
            {index: 1, antivotes: 5, rank: 1},
            {index: 2, antivotes: 20, rank: 4},
            {index: 3, antivotes: 10, rank: 2.5},
        ])
    })

    it("another example of fractional ranks", () => {
        const unpopularities = [
            {index: 0, antivotes: 10},
            {index: 1, antivotes: 5},
            {index: 2, antivotes: 20},
            {index: 3, antivotes: 10},
            {index: 4, antivotes: 10},
        ]

        const result = addRankToUnpopularities(unpopularities)

        expect(result).toEqual([
            {index: 0, antivotes: 10, rank: 3},
            {index: 1, antivotes: 5, rank: 1},
            {index: 2, antivotes: 20, rank: 5},
            {index: 3, antivotes: 10, rank: 3},
            {index: 4, antivotes: 10, rank: 3},
        ])
    })
})
