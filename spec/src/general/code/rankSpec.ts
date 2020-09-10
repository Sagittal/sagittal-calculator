import { ACCURACY_THRESHOLD, deepClone, RankStrategy } from "../../../../src/general"
import { rank, Rank } from "../../../../src/general/code"

describe("rank", () => {
    const arrayOfObjects: Array<unknown> = [
        { value: 1, otherValue: 1 },
        { value: 4, otherValue: 3 },
        { value: 2, otherValue: 2 },
        { value: 4, otherValue: 2 },
        { value: 1, otherValue: 2 },
    ]

    it("takes the existing array of objects, sorts and ranks it by the requested field, and adds a rank field; defaults to ranking by the value field and a competition strategy", () => {
        const actual = rank(arrayOfObjects)

        const expected = [
            { value: 1, otherValue: 1, rank: 1 as Rank<unknown> },
            { value: 1, otherValue: 2, rank: 1 as Rank<unknown> },
            { value: 2, otherValue: 2, rank: 3 as Rank<unknown> },
            { value: 4, otherValue: 3, rank: 4 as Rank<unknown> },
            { value: 4, otherValue: 2, rank: 4 as Rank<unknown> },
        ]
        expect(actual).toEqual(expected)
    })

    it("does not mutate the original array", () => {
        const originalArrayOfObjects = deepClone(arrayOfObjects)

        rank(arrayOfObjects)

        expect(arrayOfObjects).toEqual(originalArrayOfObjects)
    })

    describe("when the strategy is fractional", () => {
        it("splits the ranks across ties", () => {
            const actual = rank(arrayOfObjects, { by: "value", strategy: RankStrategy.FRACTIONAL })

            const expected = [
                { value: 1, otherValue: 1, rank: 1.5 as Rank<unknown> },
                { value: 1, otherValue: 2, rank: 1.5 as Rank<unknown> },
                { value: 2, otherValue: 2, rank: 3 as Rank<unknown> },
                { value: 4, otherValue: 3, rank: 4.5 as Rank<unknown> },
                { value: 4, otherValue: 2, rank: 4.5 as Rank<unknown> },
            ]
            expect(actual).toEqual(expected)
        })

        it("another example", () => {
            const actual = rank(arrayOfObjects, { by: "otherValue", strategy: RankStrategy.FRACTIONAL })

            const expected = [
                { value: 1, otherValue: 1, rank: 1 as Rank<unknown> },
                { value: 2, otherValue: 2, rank: 3 as Rank<unknown> },
                { value: 4, otherValue: 2, rank: 3 as Rank<unknown> },
                { value: 1, otherValue: 2, rank: 3 as Rank<unknown> },
                { value: 4, otherValue: 3, rank: 5 as Rank<unknown> },
            ]
            expect(actual).toEqual(expected)
        })
    })

    describe("when the strategy is dense", () => {
        it("it is like competition ranking, but does not skip ranks", () => {
            const actual = rank(arrayOfObjects, { strategy: RankStrategy.DENSE })

            const expected = [
                { value: 1, otherValue: 1, rank: 1 as Rank<unknown> },
                { value: 1, otherValue: 2, rank: 1 as Rank<unknown> },
                { value: 2, otherValue: 2, rank: 2 as Rank<unknown> },
                { value: 4, otherValue: 3, rank: 3 as Rank<unknown> },
                { value: 4, otherValue: 2, rank: 3 as Rank<unknown> },
            ]
            expect(actual).toEqual(expected)
        })
    })

    describe("when the strategy is ordinal", () => {
        it("ties do not receive the same rank; the rank must go up", () => {
            const actual = rank(arrayOfObjects, { strategy: RankStrategy.ORDINAL })

            const expected = [
                { value: 1, otherValue: 1, rank: 1 as Rank<unknown> },
                { value: 1, otherValue: 2, rank: 2 as Rank<unknown> },
                { value: 2, otherValue: 2, rank: 3 as Rank<unknown> },
                { value: 4, otherValue: 3, rank: 4 as Rank<unknown> },
                { value: 4, otherValue: 2, rank: 5 as Rank<unknown> },
            ]
            expect(actual).toEqual(expected)
        })
    })

    it("supports precision when comparing", () => {
        const arrayOfObjects: Array<unknown> = [
            { value: 1, otherValue: 1 },
            { value: 4, otherValue: 3 },
            { value: 2, otherValue: 2 },
            { value: 3.999999999999, otherValue: 2 },
            { value: 1, otherValue: 2 },
        ]

        const actual = rank(arrayOfObjects, { precision: ACCURACY_THRESHOLD })

        const expected = [
            { value: 1, otherValue: 1, rank: 1 as Rank<unknown> },
            { value: 1, otherValue: 2, rank: 1 as Rank<unknown> },
            { value: 2, otherValue: 2, rank: 3 as Rank<unknown> },
            { value: 4, otherValue: 3, rank: 4 as Rank<unknown> },
            { value: 3.999999999999, otherValue: 2, rank: 4 as Rank<unknown> },
        ]
        expect(actual).toEqual(expected)
    })
})
