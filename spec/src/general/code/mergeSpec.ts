import { merge } from "../../../../src/general/code"

describe("merge", () => {
    it("merges the objects on top of each other, in the order given", () => {
        const objects = [
            { a: 1 },
            { a: 2, b: 4 },
            { a: 3, c: 5 },
        ]

        const actual = merge(...objects)

        const expected = {
            a: 3,
            b: 4,
            c: 5,
        }
        expect(actual).toEqual(expected)
    })
})
