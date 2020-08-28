import { SymbolLongAscii } from "../../../../../../src/notations"
import { formatSymbolAscii } from "../../../../../../src/scripts/analyzeBounds/io/text/symbolAscii"

describe("formatSymbolAscii", () => {
    it("shifts the ascii so that its shaft aligns with all the others' shafts", () => {
        expect(formatSymbolAscii(",,)//|" as SymbolLongAscii))
            .toEqual(",,)//|  ")
        expect(formatSymbolAscii(",)|)" as SymbolLongAscii))
            .toEqual("   ,)|) ")
        expect(formatSymbolAscii("|\\" as SymbolLongAscii))
            .toEqual("     |\\ ")
        expect(formatSymbolAscii(")|\\\\" as SymbolLongAscii))
            .toEqual("    )|\\\\")
    })
})
