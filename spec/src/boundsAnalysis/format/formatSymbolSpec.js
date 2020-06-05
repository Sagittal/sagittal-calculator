const {formatSymbol} = require("../../../../src/boundsAnalysis/format/formatSymbol")

describe("formatSymbol", () => {
    it("shifts the symbol so that its shaft aligns with all the others' shafts", () => {
        expect(formatSymbol(",,)//|"))
            .toEqual(",,)//|  ")
        expect(formatSymbol(",)|)"))
            .toEqual("   ,)|) ")
        expect(formatSymbol("|\\"))
            .toEqual("     |\\ ")
        expect(formatSymbol(")|\\\\"))
            .toEqual("    )|\\\\")
    })
})
