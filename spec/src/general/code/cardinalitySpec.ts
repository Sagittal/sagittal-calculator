import { computeCardinality } from "../../../../src/general/code/cardinality"

describe("computeCardinality", () => {
    it("returns the cardinality of an array", () => {
        const array = [
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.004],
            ],
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.004],
            ],
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.004],
            ],
        ]

        const actual = computeCardinality(array)

        const expected = [3, 2, 3]
        expect(actual).toEqual(expected)
    })
})
