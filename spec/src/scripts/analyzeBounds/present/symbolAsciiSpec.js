const {presentSymbolAscii} = require("../../../../../src/scripts/analyzeBounds/present/symbolAscii")

describe("presentSymbolAscii", () => {
    it("shifts the ascii so that its shaft aligns with all the others' shafts", () => {
        expect(presentSymbolAscii(",,)//|"))
            .toEqual(",,)//|  ")
        expect(presentSymbolAscii(",)|)"))
            .toEqual("   ,)|) ")
        expect(presentSymbolAscii("|\\"))
            .toEqual("     |\\ ")
        expect(presentSymbolAscii(")|\\\\"))
            .toEqual("    )|\\\\")
    })
})
