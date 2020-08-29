import { SymbolLongAscii } from "../../../../src/sagittal"
import { formatSymbolAscii } from "../../../../src/sagittal/io/symbolAscii"

describe("formatSymbolAscii", () => {
    it("shifts the ascii so that its shaft aligns with all the others' shafts, making it 8 total chars wide", () => {
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
