import { merge } from "../../../src/utilities/merge"

describe("merge", () => {
    it("merges the objects on top of each other, in the order given", () => {
        const objects = [
            { a: 1 },
            { a: 2, b: 4 },
            { a: 3, c: 5 },
        ]

        const result = merge(...objects)

        expect(result).toEqual({
            a: 3,
            b: 4,
            c: 5,
        })
    })
})
