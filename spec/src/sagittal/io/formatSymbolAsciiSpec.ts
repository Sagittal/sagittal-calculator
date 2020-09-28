import { SymbolLongAscii } from "../../../../src/sagittal"
import { formatSymbolAscii } from "../../../../src/sagittal/io"

describe("formatSymbolAscii", (): void => {
    it(
        "shifts the ascii so that its shaft aligns with all the others' shafts, making it 8 total chars wide",
        (): void => {
            expect(formatSymbolAscii(",,)//|" as SymbolLongAscii)).toEqual(",,)//|  ")
            expect(formatSymbolAscii(",)|)" as SymbolLongAscii)).toEqual("   ,)|) ")
            expect(formatSymbolAscii("|\\" as SymbolLongAscii)).toEqual("     |\\ ")
            expect(formatSymbolAscii(")|\\\\" as SymbolLongAscii)).toEqual("    )|\\\\")
        },
    )

    it("centers the parenthetical natural symbol in a different way", (): void => {
        expect(formatSymbolAscii("(|//|)" as SymbolLongAscii)).toEqual(" (|//|) ")
    })
})
