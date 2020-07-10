import {computeAdjacentCoordinates} from "../../../../../src/scripts/unpopularityMetric/automator/adjacentCoodinates"

describe("computeAdjacentCoordinates", () => {
    it("returns the list of coordinates adjacent to a given coordinate", () => {
        const coordinate = [1,2,3]

        const result = computeAdjacentCoordinates(coordinate)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [0,2,3],
            [2,2,3],
            [1,1,3],
            [1,3,3],
            [1,2,2],
            [1,2,4],
        ]))
    })

    it("blindly returns coordinates that are off the edge, but that's okay because getSumOfSquaresAtCoordinateIfLocalMinimum can handle that, and it has no concept of the upper edge of any dimension so it might as well not deal with it", () => {
        const coordinate = [0,0]

        const result = computeAdjacentCoordinates(coordinate)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [-1,0],
            [1,0],
            [0,-1],
            [0,1],
        ]))
    })
})
