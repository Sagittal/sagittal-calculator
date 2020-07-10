import {computeNeighborPositionIndices} from "../../../../src/notations/ji/neighborPositionIndices"

describe("computeNeighborPositionIndices", () => {
    it("returns the indices of the positions in the list of sorted targets which are on either side of the position", () => {
        const position = 0.433
        const sortedTargets = [
            0.00,
            0.10,
            0.50,
            0.66,
        ]

        const result = computeNeighborPositionIndices(position, sortedTargets)

        expect(result).toEqual([
            1,
            2,
        ])
    })
})
