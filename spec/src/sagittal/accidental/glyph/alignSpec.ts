import { Ascii } from "../../../../../src/sagittal"
import { alignAscii } from "../../../../../src/sagittal/accidental"

describe("alignAscii", (): void => {
    it("shifts the ascii so that its shaft aligns with all the others' shafts, making it 8 total chars wide                  ", (): void => {
        expect(alignAscii(",,)//|" as Ascii)).toEqual(",,)//|  ")
        expect(alignAscii(",)|)" as Ascii)).toEqual("   ,)|) ")
        expect(alignAscii("|\\" as Ascii)).toEqual("     |\\ ")
        expect(alignAscii(")|\\\\" as Ascii)).toEqual("    )|\\\\")
    })

    it("centers the parenthetical natural symbol in a different way", (): void => {
        expect(alignAscii("(|//|)" as Ascii)).toEqual(" (|//|) ")
    })
})
