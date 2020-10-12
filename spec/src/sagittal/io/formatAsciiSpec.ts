import { Ascii } from "../../../../src/sagittal"
import { formatAscii } from "../../../../src/sagittal/io"

describe("formatAscii", (): void => {
    it("shifts the ascii so that its shaft aligns with all the others' shafts, making it 8 total chars wide                  ", (): void => {
        expect(formatAscii(",,)//|" as Ascii)).toEqual(",,)//|  ")
        expect(formatAscii(",)|)" as Ascii)).toEqual("   ,)|) ")
        expect(formatAscii("|\\" as Ascii)).toEqual("     |\\ ")
        expect(formatAscii(")|\\\\" as Ascii)).toEqual("    )|\\\\")
    })

    it("centers the parenthetical natural symbol in a different way", (): void => {
        expect(formatAscii("(|//|)" as Ascii)).toEqual(" (|//|) ")
    })
})
