const {computeBoundedSymbols} = require("../../../../src/notations/ji/boundedSymbols")

describe("computeBoundedSymbols", () => {
    it("gives the symbols of the symbols immediately lesser and greater than the position at that level", () => {
        expect(computeBoundedSymbols(45, "ULTRA")).toEqual([
            "'//|",
            ")//|",
        ])
    })
})
