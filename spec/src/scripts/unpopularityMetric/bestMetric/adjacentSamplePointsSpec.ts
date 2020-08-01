import { computeAdjacentSamplePoints } from "../../../../../src/scripts/unpopularityMetric/bestMetric/adjacentSamplePoints"
import { SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"

describe("computeAdjacentSamplePoints", () => {
    it("returns the list of sample points adjacent to a given sample point", () => {
        const samplePoint = [1, 2, 3] as SamplePoint

        const result = computeAdjacentSamplePoints(samplePoint)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [0, 2, 3],
            [2, 2, 3],
            [1, 1, 3],
            [1, 3, 3],
            [1, 2, 2],
            [1, 2, 4],
        ]))
    })

    it("blindly returns sample points that are off the edge, but that's parameterValueCombinationIsInvalid because getSumOfSquaresAtSamplePointIfLocalMinimum can handle that, and it has no concept of the upper edge of any dimension so it might as well not deal with it", () => {
        const samplePoint = [0, 0] as SamplePoint

        const result = computeAdjacentSamplePoints(samplePoint)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ]))
    })
})
