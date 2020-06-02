const {calculateNeighborPositions} = require("../../../../src/boundsAnalysis/utilities/calculateNeighborPositions.js")

describe("calculateNeighborPositions", () => {
    it("returns the two positions in the list of sorted targets which are on either side of the position", () => {
        const position = 0.433
        const sortedTargets = [0.000, 0.100, 0.500, 0.660]

        const result = calculateNeighborPositions(position, sortedTargets)

        expect(result).toEqual([
            0.100,
            0.500,
        ])
    })
})
