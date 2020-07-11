import { computeAdjacentPoints } from "../../../../../src/scripts/unpopularityMetric/automator/adjacentPoints"
import { Point } from "../../../../../src/scripts/unpopularityMetric/automator/samples/types"

describe("computeAdjacentPoints", () => {
    it("returns the list of points adjacent to a given point", () => {
        const point = [1, 2, 3] as Point

        const result = computeAdjacentPoints(point)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [0, 2, 3],
            [2, 2, 3],
            [1, 1, 3],
            [1, 3, 3],
            [1, 2, 2],
            [1, 2, 4],
        ]))
    })

    it("blindly returns points that are off the edge, but that's okay because getSumOfSquaresAtPointIfLocalMinimum can handle that, and it has no concept of the upper edge of any dimension so it might as well not deal with it", () => {
        const point = [0, 0] as Point

        const result = computeAdjacentPoints(point)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ]))
    })
})
