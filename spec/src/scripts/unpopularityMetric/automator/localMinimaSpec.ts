import { computeLocalMinima } from "../../../../../src/scripts/unpopularityMetric/automator/localMinima"
import { SubmetricCombination } from "../../../../../src/scripts/unpopularityMetric/submetricCombinations/types"
import { Coordinate } from "../../../../../src/scripts/unpopularityMetric/automator/types"
import { SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"

describe("computeLocalMinima", () => {
    const submetricCombinations: SubmetricCombination[] = [
        { coordinate: [0, 0, 0] as Coordinate, submetrics: [] },
        { coordinate: [0, 0, 1] as Coordinate, submetrics: [] },
        { coordinate: [0, 0, 2] as Coordinate, submetrics: [] },
        { coordinate: [0, 1, 0] as Coordinate, submetrics: [] },
        { coordinate: [0, 1, 1] as Coordinate, submetrics: [] },
        { coordinate: [0, 1, 2] as Coordinate, submetrics: [] },
        { coordinate: [1, 0, 0] as Coordinate, submetrics: [] },
        { coordinate: [1, 0, 1] as Coordinate, submetrics: [] },
        { coordinate: [1, 0, 2] as Coordinate, submetrics: [] },
        { coordinate: [1, 1, 0] as Coordinate, submetrics: [] },
        { coordinate: [1, 1, 1] as Coordinate, submetrics: [] },
        { coordinate: [1, 1, 2] as Coordinate, submetrics: [] },
        { coordinate: [2, 0, 0] as Coordinate, submetrics: [] },
        { coordinate: [2, 0, 1] as Coordinate, submetrics: [] },
        { coordinate: [2, 0, 2] as Coordinate, submetrics: [] },
        { coordinate: [2, 1, 0] as Coordinate, submetrics: [] },
        { coordinate: [2, 1, 1] as Coordinate, submetrics: [] },
        { coordinate: [2, 1, 2] as Coordinate, submetrics: [] },
    ]

    it("returns an empty array if all the values are the same", () => {
        const sumsOfSquares: SumsOfSquares = [
            [
                [0.004, 0.004, 0.004] as SumOfSquares[],
                [0.004, 0.004, 0.004] as SumOfSquares[],
            ],
            [
                [0.004, 0.004, 0.004] as SumOfSquares[],
                [0.004, 0.004, 0.004] as SumOfSquares[],
            ],
            [
                [0.004, 0.004, 0.004] as SumOfSquares[],
                [0.004, 0.004, 0.004] as SumOfSquares[],
            ],
        ]

        const result = computeLocalMinima(submetricCombinations, sumsOfSquares)

        expect(result).toEqual([])
    })

    it("returns an empty area if it is just a boundary between two values", () => {
        const sumsOfSquares: SumsOfSquares = [
            [
                [0.004, 0.004, 0.004] as SumOfSquares[],
                [0.004, 0.004, 0.004] as SumOfSquares[],
            ],
            [
                [0.003, 0.004, 0.004] as SumOfSquares[],
                [0.003, 0.003, 0.004] as SumOfSquares[],
            ],
            [
                [0.003, 0.003, 0.003] as SumOfSquares[],
                [0.003, 0.003, 0.003] as SumOfSquares[],
            ],
        ]

        const result = computeLocalMinima(submetricCombinations, sumsOfSquares)

        expect(result).toEqual([])
    })

    it("returns an empty array if it is an area surrounded by another area (this one I'm less sure about, but the issue might be precluded if we used a count of 2)", () => {
        const sumsOfSquares: SumsOfSquares = [
            [
                [0.004, 0.004, 0.004] as SumOfSquares[],
                [0.004, 0.004, 0.004] as SumOfSquares[],
            ],
            [
                [0.004, 0.003, 0.004] as SumOfSquares[],
                [0.004, 0.003, 0.004] as SumOfSquares[],
            ],
            [
                [0.004, 0.004, 0.004] as SumOfSquares[],
                [0.004, 0.004, 0.004] as SumOfSquares[],
            ],
        ]

        const result = computeLocalMinima(submetricCombinations, sumsOfSquares)

        expect(result).toEqual([])
    })

    it("returns a result if there are local minima", () => {
        const sumsOfSquares: SumsOfSquares = [
            [
                [0.004, 0.004, 0.004] as SumOfSquares[],
                [0.003, 0.004, 0.004] as SumOfSquares[],
            ],
            [
                [0.004, 0.004, 0.004] as SumOfSquares[],
                [0.004, 0.004, 0.002] as SumOfSquares[],
            ],
            [
                [0.004, 0.004, 0.004] as SumOfSquares[],
                [0.004, 0.004, 0.004] as SumOfSquares[],
            ],
        ]

        const result = computeLocalMinima(submetricCombinations, sumsOfSquares)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { sumOfSquares: 0.003, coordinate: [0, 1, 0], submetrics: [] },
            { sumOfSquares: 0.002, coordinate: [1, 1, 2], submetrics: [] },
        ]))
    })
})
