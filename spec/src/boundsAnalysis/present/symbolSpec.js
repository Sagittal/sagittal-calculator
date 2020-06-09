const {presentSymbol} = require("../../../../src/boundsAnalysis/present/symbol")

describe("presentSymbol", () => {
    it("shifts the symbol so that its shaft aligns with all the others' shafts", () => {
        expect(presentSymbol(",,)//|"))
            .toEqual(",,)//|  ")
        expect(presentSymbol(",)|)"))
            .toEqual("   ,)|) ")
        expect(presentSymbol("|\\"))
            .toEqual("     |\\ ")
        expect(presentSymbol(")|\\\\"))
            .toEqual("    )|\\\\")
    })
})
