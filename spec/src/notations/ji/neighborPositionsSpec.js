const {computeNeighborPositions} = require("../../../../src/notations/ji/neighborPositions.js")

describe("computeNeighborPositions", () => {
    it("returns the two positions in the list of sorted targets which are on either side of the position", () => {
        const position = 0.433
        const sortedTargets = [
            0.00,
            0.10,
            0.50,
            0.66,
        ]

        const result = computeNeighborPositions(position, sortedTargets)

        expect(result).toEqual([
            0.10,
            0.50,
        ])
    })
})
