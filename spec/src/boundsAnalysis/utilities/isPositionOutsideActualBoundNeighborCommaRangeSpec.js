const {isPositionOutsideActualBoundNeighborCommaRange} = require("../../../../src/boundsAnalysis/utilities/isPositionOutsideActualBoundNeighborCommaRange")

describe("isPositionOutsideActualBoundNeighborCommaRange", () => {
    it("returns true if the position of this history is outside the range between the commas neighbor the actual bound at this level", () => {
        const position = 7.5
        const level = "VeryHigh"
        const actualBoundPosition = 6.5 // so the range is from 5.7578022033852 to 6.77587576937045 which are |( and .~| respectively

        const result = isPositionOutsideActualBoundNeighborCommaRange(position, actualBoundPosition, level)

        expect(result).toBe(true)
    })

    it("returns false if the position of this history is inside the range between the commas neighbor the actual bound at this level", () => {
        const position = 6.6
        const level = "VeryHigh"
        const actualBoundPosition = 6.5 // so the range is from 5.7578022033852 to 6.77587576937045 which are |( and .~| respectively

        const result = isPositionOutsideActualBoundNeighborCommaRange(position, actualBoundPosition, level)

        expect(result).toBe(false)
    })
})
