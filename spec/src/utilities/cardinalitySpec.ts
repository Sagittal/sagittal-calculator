import {computeCardinality} from "../../../src/utilities/cardinality"

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

        const result = computeCardinality(array)

        expect(result).toEqual([3, 2, 3])
    })
})
