const {computeLocalMinima} = require("../../../../../src/scripts/unpopularityMetric/automator/localMinima")

describe("computeLocalMinima", () => {
    const submetricCombinations = [
        {coordinate: [0, 0, 0], submetrics: []},
        {coordinate: [0, 0, 1], submetrics: []},
        {coordinate: [0, 0, 2], submetrics: []},
        {coordinate: [0, 1, 0], submetrics: []},
        {coordinate: [0, 1, 1], submetrics: []},
        {coordinate: [0, 1, 2], submetrics: []},
        {coordinate: [1, 0, 0], submetrics: []},
        {coordinate: [1, 0, 1], submetrics: []},
        {coordinate: [1, 0, 2], submetrics: []},
        {coordinate: [1, 1, 0], submetrics: []},
        {coordinate: [1, 1, 1], submetrics: []},
        {coordinate: [1, 1, 2], submetrics: []},
        {coordinate: [2, 0, 0], submetrics: []},
        {coordinate: [2, 0, 1], submetrics: []},
        {coordinate: [2, 0, 2], submetrics: []},
        {coordinate: [2, 1, 0], submetrics: []},
        {coordinate: [2, 1, 1], submetrics: []},
        {coordinate: [2, 1, 2], submetrics: []},
    ]

    it("returns an empty array if all the values are the same", () => {
        const sumsOfSquares = [
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

        const result = computeLocalMinima(submetricCombinations, sumsOfSquares)

        expect(result).toEqual([])
    })

    it("returns an empty area if it is just a boundary between two values", () => {
        const sumsOfSquares = [
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.004],
            ],
            [
                [0.003, 0.004, 0.004],
                [0.003, 0.003, 0.004],
            ],
            [
                [0.003, 0.003, 0.003],
                [0.003, 0.003, 0.003],
            ],
        ]

        const result = computeLocalMinima(submetricCombinations, sumsOfSquares)

        expect(result).toEqual([])
    })

    it("returns an empty array if it is an area surrounded by another area (this one I'm less sure about, but the issue might be precluded if we used a count of 2)", () => {
        const sumsOfSquares = [
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.004],
            ],
            [
                [0.004, 0.003, 0.004],
                [0.004, 0.003, 0.004],
            ],
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.004],
            ],
        ]

        const result = computeLocalMinima(submetricCombinations, sumsOfSquares)

        expect(result).toEqual([])
    })

    it("returns a result if there are local minima", () => {
        const sumsOfSquares = [
            [
                [0.004, 0.004, 0.004],
                [0.003, 0.004, 0.004],
            ],
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.002],
            ],
            [
                [0.004, 0.004, 0.004],
                [0.004, 0.004, 0.004],
            ],
        ]

        const result = computeLocalMinima(submetricCombinations, sumsOfSquares)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {sumOfSquares: 0.003, coordinate: [0, 1, 0], submetrics: []},
            {sumOfSquares: 0.002, coordinate: [1, 1, 2], submetrics: []},
        ]))
    })
})
