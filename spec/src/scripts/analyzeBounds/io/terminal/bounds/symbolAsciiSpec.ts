import { SymbolLongAscii } from "../../../../../../../src/sagittal"
import { formatSymbolAscii } from "../../../../../../../src/scripts/analyzeBounds/io/terminal/bounds/symbolAscii"

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
