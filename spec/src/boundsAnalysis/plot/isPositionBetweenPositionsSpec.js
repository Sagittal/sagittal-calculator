const {computeIsPositionBetweenPositions} = require("../../../../src/boundsAnalysis/plot/isPositionBetweenPositions")

describe("computeIsPositionBetweenPositions", () => {
    it("returns false if the position is not between the two positions", () => {
        const position = 7.5

        const result = computeIsPositionBetweenPositions(position, [5.7578022033852, 6.77587576937045])

        expect(result).toBe(false)
    })

    it("returns true if the position is between the two positions", () => {
        const position = 6.6

        const result = computeIsPositionBetweenPositions(position, [5.7578022033852, 6.77587576937045])

        expect(result).toBe(true)
    })

    it("returns true if the position is greater than the lesser position and the greater position is undefined", () => {
        const position = 6.6

        const result = computeIsPositionBetweenPositions(position, [5.7578022033852, undefined])

        expect(result).toBe(true)
    })
})
