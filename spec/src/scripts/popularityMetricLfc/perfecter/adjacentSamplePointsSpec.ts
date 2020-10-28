import {SamplePoint} from "../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import {computeAdjacentSamplePoints} from "../../../../../src/scripts/popularityMetricLfc/perfecter/adjacentSamplePoints"

describe("computeAdjacentSamplePoints", (): void => {
    it("returns the list of sample points adjacent to a given sample point", (): void => {
        const samplePoint = [1, 2, 3] as SamplePoint

        const actual = computeAdjacentSamplePoints(samplePoint)

        const expected = [
            [0, 2, 3],
            [2, 2, 3],
            [1, 1, 3],
            [1, 3, 3],
            [1, 2, 2],
            [1, 2, 4],
        ] as SamplePoint[]
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })

    it("blindly returns sample points that are off the edge, but that's okay because getSumOfSquaresAtSamplePointIfLocalMin can handle that, and it has no concept of the upper edge of any dimension so it might as well not deal with it", (): void => {
        const samplePoint = [0, 0] as SamplePoint

        const actual = computeAdjacentSamplePoints(samplePoint)

        const expected = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ] as SamplePoint[]
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })
})
