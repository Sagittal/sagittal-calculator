import { computeDeepDistinct } from "../../../../src/general/code"

describe("computeDeepDistinct", () => {
    it("removes duplicate objects from the array", () => {
        const array = [{ a: 1 }, { a: 1 }, { a: 0 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 2 }]

        const actual = computeDeepDistinct(array)

        const expected = [{ a: 1 }, { a: 0 }, { a: 2 }, { a: 3 }, { a: 4 }]
        expect(actual).toEqual(expected)
    })
})
