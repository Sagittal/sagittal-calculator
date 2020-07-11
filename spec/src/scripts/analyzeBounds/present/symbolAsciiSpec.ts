import { presentSymbolAscii } from "../../../../../src/scripts/analyzeBounds/present/symbolAscii"
import { SymbolLongAscii } from "../../../../../src/notations/ji/types"

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
