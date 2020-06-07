const {calculateNeighborPositionIndices} = require("../../../../src/boundsAnalysis/utilities/calculateNeighborPositionIndices.js")

describe("calculateNeighborPositionIndices", () => {
    it("returns the indices of the positions in the list of sorted targets which are on either side of the position", () => {
        const position = 0.433
        const sortedTargets = [
            0.00,
            0.10,
            0.50,
            0.66,
        ]

        const result = calculateNeighborPositionIndices(position, sortedTargets)

        expect(result).toEqual([
            1,
            2,
        ])
    })
})
