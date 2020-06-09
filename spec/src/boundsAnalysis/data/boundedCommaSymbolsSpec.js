const {computeBoundedCommaSymbols} = require("../../../../src/boundsAnalysis/data/boundedCommaSymbols")

describe("computeBoundedCommaSymbols", () => {
    it("gives the symbols of the commas immediately lesser and greater than the position at that level", () => {
        expect(computeBoundedCommaSymbols(45, "VERY_HIGH")).toEqual([
            "'//|",
            ")//|",
        ])
    })
})
