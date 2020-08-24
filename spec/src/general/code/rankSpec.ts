import { computeDeepClone } from "../../../../src/general"
import { fractionallyRank, Rank } from "../../../../src/general/code"

// TODO: probably it would be better if this was just a general ranking function
//  which took fractional ranking as an option, along with the other ranking strategies listed on Wikipedia
describe("fractionallyRank", () => {
    const arrayOfObjects: Array<{ [ index: string ]: number }> = [
        { a: 1, b: 1 },
        { a: 4, b: 3 },
        { a: 2, b: 2 },
        { a: 4, b: 2 },
        { a: 1, b: 2 },
    ]

    it("takes the existing array of objects, sorts and ranks it by the requested field, and adds a rank field", () => {
        const actual = fractionallyRank(arrayOfObjects, "a")

        const expected = [
            { a: 1, b: 1, rank: 1.5 as Rank<{ [ index: string ]: number }> },
            { a: 1, b: 2, rank: 1.5 as Rank<{ [ index: string ]: number }> },
            { a: 2, b: 2, rank: 3 as Rank<{ [ index: string ]: number }> },
            { a: 4, b: 3, rank: 4.5 as Rank<{ [ index: string ]: number }> },
            { a: 4, b: 2, rank: 4.5 as Rank<{ [ index: string ]: number }> },
        ]
        expect(actual).toEqual(expected)
    })

    it("another example", () => {
        const actual = fractionallyRank(arrayOfObjects, "b")

        const expected = [
            { a: 1, b: 1, rank: 1 as Rank<{ [ index: string ]: number }> },
            { a: 2, b: 2, rank: 3 as Rank<{ [ index: string ]: number }> },
            { a: 4, b: 2, rank: 3 as Rank<{ [ index: string ]: number }> },
            { a: 1, b: 2, rank: 3 as Rank<{ [ index: string ]: number }> },
            { a: 4, b: 3, rank: 5 as Rank<{ [ index: string ]: number }> },
        ]
        expect(actual).toEqual(expected)
    })

    it("does not mutate the original array", () => {
        const originalArrayOfObjects = computeDeepClone(arrayOfObjects)

        fractionallyRank(arrayOfObjects, "b")

        expect(arrayOfObjects).toEqual(originalArrayOfObjects)
    })
})
