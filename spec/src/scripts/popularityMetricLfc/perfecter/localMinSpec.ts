import { SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { SamplePoint } from "../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import { setSumOfSquaresAtSamplePoint } from "../../../../../src/scripts/popularityMetricLfc/bestMetric/setSumOfSquaresAtSamplePoint"
import { getSumOfSquaresAtSamplePointIfLocalMin } from "../../../../../src/scripts/popularityMetricLfc/perfecter/localMin"

describe("getSumOfSquaresAtSamplePointIfLocalMin", () => {
    let sumsOfSquares: SumsOfSquares
    beforeEach(() => {
        sumsOfSquares = []

        for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 4; y++) {
                for (let z = 0; z < 4; z++) {
                    for (let w = 0; w < 4; w++) {
                        setSumOfSquaresAtSamplePoint(
                            0.00454 as SumOfSquares,
                            sumsOfSquares,
                            [x, y, z, w] as SamplePoint,
                        )
                    }
                }
            }
        }

        setSumOfSquaresAtSamplePoint(0.00422 as SumOfSquares, sumsOfSquares, [1, 0, 3, 2] as SamplePoint)

        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 2, 2, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [3, 2, 2, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 1, 2, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 3, 2, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 2, 1, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 2, 3, 2] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 2, 2, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 2, 2, 3] as SamplePoint)

        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [0, 1, 1, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [2, 1, 1, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 0, 1, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 2, 1, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 1, 0, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 1, 2, 1] as SamplePoint)
        setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 1, 1, 0] as SamplePoint)
        // this example is NOT QUITE a local min!
        // setSumOfSquaresAtSamplePoint(0.00666 as SumOfSquares, sumsOfSquares, [1, 1, 1, 2])
    })

    it("returns the sum-of-squares if it is lesser at the sample point than at every adjacent one", () => {
        const samplePoint = [1, 0, 3, 2] as SamplePoint

        const actual = getSumOfSquaresAtSamplePointIfLocalMin(sumsOfSquares, samplePoint)

        expect(actual).toEqual(0.00422 as SumOfSquares)
    })

    it("another example of a local min", () => {
        const samplePoint = [2, 2, 2, 2] as SamplePoint

        const actual = getSumOfSquaresAtSamplePointIfLocalMin(sumsOfSquares, samplePoint)

        expect(actual).toEqual(0.00454 as SumOfSquares)
    })

    it("returns undefined if the sum-of-squares is not less at the sample point than at every adjacent one", () => {
        const samplePoint = [1, 1, 1, 1] as SamplePoint

        const actual = getSumOfSquaresAtSamplePointIfLocalMin(sumsOfSquares, samplePoint)

        expect(actual).toBeUndefined()
    })

    it("another example of not local min", () => {
        const samplePoint = [0, 3, 3, 1] as SamplePoint

        const actual = getSumOfSquaresAtSamplePointIfLocalMin(sumsOfSquares, samplePoint)

        expect(actual).toBeUndefined()
    })
})
