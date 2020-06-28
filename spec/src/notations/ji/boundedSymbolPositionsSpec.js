const {computeBoundedSymbolPositions} = require("../../../../src/notations/ji/boundedSymbolPositions")

describe("computeBoundedSymbolPositions", () => {
    it("gives the positions of the symbol immediately lesser and greater than the position at that level", () => {
        expect(computeBoundedSymbolPositions(9, "MEDIUM")).toEqual([
            5.7578022033852, // |(
            9.6879606428187, // )|(
        ])
    })

    it("when the position is greater than the greatest symbol at the level, gives the position of the greatest symbol for the lesser symbol and undefined for the greater symbol", () => {
        expect(computeBoundedSymbolPositions(68.4, "ULTRA")).toEqual([
            67.2910616147857, // )|\\
            undefined,
        ])
    })
})
