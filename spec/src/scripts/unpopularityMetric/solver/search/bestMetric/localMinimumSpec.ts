import { Sum } from "../../../../../../../src/general"
import { getSumOfSquaresAtSamplePointIfLocalMinimum } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/localMinimum"
import { setSumOfSquaresAtSamplePoint } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/setSumOfSquaresAtSamplePoint"
import { SumsOfSquares } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/types"
import { SamplePoint } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/types"

describe("getSumOfSquaresAtSamplePointIfLocalMinimum", () => {
    let sumsOfSquares: SumsOfSquares
    beforeEach(() => {
        sumsOfSquares = []

        for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 4; y++) {
                for (let z = 0; z < 4; z++) {
                    for (let w = 0; w < 4; w++) {
                        setSumOfSquaresAtSamplePoint(0.00454 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [x, y, z, w] as SamplePoint)
                    }
                }
            }
        }

        setSumOfSquaresAtSamplePoint(0.00422 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [1, 0, 3, 2] as SamplePoint)

        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [1, 2, 2, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [3, 2, 2, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [2, 1, 2, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [2, 3, 2, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [2, 2, 1, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [2, 2, 3, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [2, 2, 2, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [2, 2, 2, 3] as SamplePoint)

        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [0, 1, 1, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [2, 1, 1, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [1, 0, 1, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [1, 2, 1, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [1, 1, 0, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [1, 1, 2, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [1, 1, 1, 0] as SamplePoint)
        // setSumOfSquaresAtSamplePoint(0.00666 as Sum<"SquaredWeightedRankDifferences">, sumsOfSquares, [1, 1, 1, 2]) this example is NOT QUITE a local minimum!
    })

    it("returns the sum-of-squares if it is lower at the sample point than at every adjacent sample point", () => {
        const samplePoint = [1, 0, 3, 2] as SamplePoint

        const result = getSumOfSquaresAtSamplePointIfLocalMinimum(sumsOfSquares, samplePoint)

        expect(result).toEqual(0.00422 as Sum<"SquaredWeightedRankDifferences">)
    })

    it("another example of a local minimum", () => {
        const samplePoint = [2, 2, 2, 2] as SamplePoint

        const result = getSumOfSquaresAtSamplePointIfLocalMinimum(sumsOfSquares, samplePoint)

        expect(result).toEqual(0.00454 as Sum<"SquaredWeightedRankDifferences">)
    })

    it("returns undefined if the sum-of-squares is not lower at the sample point than at every adjacent sample point", () => {
        const samplePoint = [1, 1, 1, 1] as SamplePoint

        const result = getSumOfSquaresAtSamplePointIfLocalMinimum(sumsOfSquares, samplePoint)

        expect(result).toEqual(undefined)
    })

    it("another example of not local minimum", () => {
        const samplePoint = [0, 3, 3, 1] as SamplePoint

        const result = getSumOfSquaresAtSamplePointIfLocalMinimum(sumsOfSquares, samplePoint)

        expect(result).toEqual(undefined)
    })
})
