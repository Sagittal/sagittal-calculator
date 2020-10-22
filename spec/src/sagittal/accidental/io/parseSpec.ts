import {Ascii, parseAscii} from "../../../../../src/sagittal/accidental/io"
import {AccentName, ACCENT_GLYPHS, CoreName, CORE_GLYPHS, Symbol} from "../../../../../src/sagittal/accidental/symbol"

describe("parseAscii", (): void => {
    it("parses a symbol correctly into its accents and core, and those glyphs' aims and elements", (): void => {
        const ascii = ",'/|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = {
            accents: [
                ACCENT_GLYPHS[AccentName.WING_DOWN],
                ACCENT_GLYPHS[AccentName.TICK_UP],
            ],
            core: CORE_GLYPHS[CoreName.BARB_AND_ARC_UP],
        } as Symbol
        expect(actual).toEqual(expected)
    })

    it("works for the parenthetical natural symbol (the absense of a symbol)", (): void => {
        const ascii = "(|//|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = {} as Symbol
        expect(actual).toEqual(expected)
    })
})
