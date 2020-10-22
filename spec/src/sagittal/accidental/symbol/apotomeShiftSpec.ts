import {AccentName, ACCENT_GLYPHS, CoreName, CORE_GLYPHS, Symbol} from "../../../../../src/sagittal/accidental"
import {apotomeShift} from "../../../../../src/sagittal/accidental/symbol"

describe("apotomeShift", (): void => {
    it("takes a symbol and shifts it by an apotome (adds 2 shafts)", (): void => {
        const symbol: Symbol = {                                                        // ,')|(
            accents: [
                ACCENT_GLYPHS[AccentName.WING_DOWN],
                ACCENT_GLYPHS[AccentName.TICK_UP],
            ],
            core: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_UP],
        }

        const actual = apotomeShift(symbol)

        const expected: Symbol = {                                                      // ,')|||(
            accents: [
                ACCENT_GLYPHS[AccentName.WING_DOWN],
                ACCENT_GLYPHS[AccentName.TICK_UP],
            ],
            core: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_TRIPLE_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with a glyph which already has multiple shafts", (): void => {
        const symbol: Symbol = {core: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_DOUBLE_UP]}      // )||(

        const actual = apotomeShift(symbol)

        const expected = {core: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_EX_UP]}                // )X(
        expect(actual).toEqual(expected)
    })

    it("works for a symbol which is a bare shaft with accents", (): void => {
        const symbol: Symbol = {                                                        // `|
            accents: [
                ACCENT_GLYPHS[AccentName.WING_UP],
            ],
            core: CORE_GLYPHS[CoreName.BARE_SHAFT_UP],
        }

        const actual = apotomeShift(symbol)

        const expected = {                                                              // `/||\
            accents: [
                ACCENT_GLYPHS[AccentName.WING_UP],
            ],
            core: CORE_GLYPHS[CoreName.DOUBLE_BARB_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("works for the absence of a symbol (the parenthetical natural)", (): void => {
        const symbol: Symbol = {}

        const actual = apotomeShift(symbol)

        const expected = {                                                              // /||\
            core: CORE_GLYPHS[CoreName.DOUBLE_BARB_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })
})
