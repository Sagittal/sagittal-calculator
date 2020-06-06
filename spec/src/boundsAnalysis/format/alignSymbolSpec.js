const {alignSymbol} = require("../../../../src/boundsAnalysis/format/alignSymbol")

describe("alignSymbol", () => {
    it("shifts the symbol so that its shaft aligns with all the others' shafts", () => {
        expect(alignSymbol(",,)//|"))
            .toEqual(",,)//|  ")
        expect(alignSymbol(",)|)"))
            .toEqual("   ,)|) ")
        expect(alignSymbol("|\\"))
            .toEqual("     |\\ ")
        expect(alignSymbol(")|\\\\"))
            .toEqual("    )|\\\\")
    })
})
