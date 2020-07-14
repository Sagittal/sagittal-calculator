import { SymbolLongAscii } from "../../../../../src/notations/ji"
import { presentSymbolAscii } from "../../../../../src/scripts/analyzeBounds/present/symbolAscii"

describe("presentSymbolAscii", () => {
    it("shifts the ascii so that its shaft aligns with all the others' shafts", () => {
        expect(presentSymbolAscii(",,)//|" as SymbolLongAscii))
            .toEqual(",,)//|  ")
        expect(presentSymbolAscii(",)|)" as SymbolLongAscii))
            .toEqual("   ,)|) ")
        expect(presentSymbolAscii("|\\" as SymbolLongAscii))
            .toEqual("     |\\ ")
        expect(presentSymbolAscii(")|\\\\" as SymbolLongAscii))
            .toEqual("    )|\\\\")
    })
})
