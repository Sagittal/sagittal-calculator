import { SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import { computeAdjacentSamplePoints } from "../../../../../src/scripts/unpopularityMetric/perfecter/adjacentSamplePoints"

describe("computeAdjacentSamplePoints", () => {
    it("returns the list of sample points adjacent to a given sample point", () => {
        const samplePoint = [1, 2, 3] as SamplePoint

        const actual = computeAdjacentSamplePoints(samplePoint)

        const expected = jasmine.arrayWithExactContents([
            [0, 2, 3],
            [2, 2, 3],
            [1, 1, 3],
            [1, 3, 3],
            [1, 2, 2],
            [1, 2, 4],
        ])
        expect(actual).toEqual(expected)
    })

    it("blindly returns sample points that are off the edge, but that's okay because getSumOfSquaresAtSamplePointIfLocalMin can handle that, and it has no concept of the upper edge of any dimension so it might as well not deal with it", () => {
        const samplePoint = [0, 0] as SamplePoint

        const actual = computeAdjacentSamplePoints(samplePoint)

        const expected = jasmine.arrayWithExactContents([
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ])
        expect(actual).toEqual(expected)
    })
})
