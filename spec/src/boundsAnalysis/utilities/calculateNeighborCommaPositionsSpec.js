const {calculateNeighborCommaPositions} = require("../../../../src/boundsAnalysis/utilities/calculateNeighborCommaPositions")

describe("calculateNeighborCommaPositions", () => {
    it("gives the positions of the commas immediately lesser and greater than the position at that level", () => {
        expect(calculateNeighborCommaPositions(9, "Medium")).toEqual([
            5.7578022033852, // |(
            9.6879606428187, // )|(
        ])
    })

    it("when the position is greater than the greatest comma at the level, gives the position of the greatest comma for the lesser comma and undefined for the greater comma", () => {
        expect(calculateNeighborCommaPositions(68.4, "VeryHigh")).toEqual([
            67.2910616147857, // )|\\
            undefined,
        ])
    })
})
