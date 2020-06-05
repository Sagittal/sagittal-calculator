const {calculateNeighborPositions} = require("../../../../src/boundsAnalysis/utilities/calculateNeighborPositions.js")

describe("calculateNeighborPositions", () => {
    it("returns the two positions in the list of sorted targets which are on either side of the position", () => {
        const position = 0.433
        const sortedTargets = [
            0.00,
            0.10,
            0.50,
            0.66,
        ]

        const result = calculateNeighborPositions(position, sortedTargets)

        expect(result).toEqual([
            0.10,
            0.50,
        ])
    })
})
