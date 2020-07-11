import { computeDeepDistinct } from "../../../src/utilities/deepDistinct"

describe("computeDeepDistinct", () => {
    it("removes duplicate objects from the array", () => {
        const array = [{ a: 1 }, { a: 1 }, { a: 0 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 2 }]

        const result = computeDeepDistinct(array)

        expect(result).toEqual([{ a: 1 }, { a: 0 }, { a: 2 }, { a: 3 }, { a: 4 }])
    })
})
