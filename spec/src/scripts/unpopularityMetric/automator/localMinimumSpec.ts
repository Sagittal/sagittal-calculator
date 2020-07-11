import { getSumOfSquaresAtPointIfLocalMinimum } from "../../../../../src/scripts/unpopularityMetric/automator/localMinimum"
import { setSumOfSquaresAtPoint } from "../../../../../src/scripts/unpopularityMetric/automator/setSumOfSquaresAtPoint"
import { SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares/types"
import { SamplePoint } from "../../../../../src/scripts/unpopularityMetric/automator/samples/types"

describe("getSumOfSquaresAtCoordinateIfLocalMinimum", () => {
    let sumsOfSquares: SumsOfSquares
    beforeEach(() => {
        sumsOfSquares = []

        for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 4; y++) {
                for (let z = 0; z < 4; z++) {
                    for (let w = 0; w < 4; w++) {
                        setSumOfSquaresAtPoint(0.00454 as SumOfSquares, sumsOfSquares, [x, y, z, w] as SamplePoint)
                    }
                }
            }
        }

        setSumOfSquaresAtPoint(0.00422 as SumOfSquares, sumsOfSquares, [1, 0, 3, 2] as SamplePoint)

        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 2, 2, 2] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [3, 2, 2, 2] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 1, 2, 2] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 3, 2, 2] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 2, 1, 2] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 2, 3, 2] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 2, 2, 1] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 2, 2, 3] as SamplePoint)

        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [0, 1, 1, 1] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 1, 1, 1] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 0, 1, 1] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 2, 1, 1] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 1, 0, 1] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 1, 2, 1] as SamplePoint)
        setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 1, 1, 0] as SamplePoint)
        // setSumOfSquaresAtPoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 1, 1, 2]) this example is NOT QUITE a local minimum!
    })

    it("returns the sum-of-squares if it is lower at the point than at every adjacent point", () => {
        const point = [1, 0, 3, 2] as SamplePoint

        const result = getSumOfSquaresAtPointIfLocalMinimum(sumsOfSquares, point)

        expect(result).toEqual(0.00422 as SumOfSquares)
    })

    it("another example of a local minimum", () => {
        const point = [2, 2, 2, 2] as SamplePoint

        const result = getSumOfSquaresAtPointIfLocalMinimum(sumsOfSquares, point)

        expect(result).toEqual(0.00454 as SumOfSquares)
    })

    it("returns undefined if the sum-of-squares is not lower at the point than at every adjacent point", () => {
        const point = [1, 1, 1, 1] as SamplePoint

        const result = getSumOfSquaresAtPointIfLocalMinimum(sumsOfSquares, point)

        expect(result).toEqual(undefined)
    })

    it("another example of not local minimum", () => {
        const point = [0, 3, 3, 1] as SamplePoint

        const result = getSumOfSquaresAtPointIfLocalMinimum(sumsOfSquares, point)

        expect(result).toEqual(undefined)
    })
})
