import {AccentName, ACCENT_GLYPHS, CoreName, CORE_GLYPHS, Symbol} from "../../../../../src/sagittal/accidental"
import {computeApotomeComplement} from "../../../../../src/sagittal/accidental/symbol"

describe("computeApotomeComplement", (): void => {
    it("returns the apotome complement of the given symbol", (): void => {
        const symbol: Symbol = {core: CORE_GLYPHS[CoreName.LEFT_BARB_UP]}                           //  /|

        const actual = computeApotomeComplement(symbol)

        const expected = {core: CORE_GLYPHS[CoreName.RIGHT_BARB_DOUBLE_UP]}                         // ||\\
        expect(actual).toEqual(expected)
    })

    it("can go from a multi-shaft symbol to the single-shaft symbol", (): void => {
        const symbol: Symbol = {core: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_UP]}   // )~||

        const actual = computeApotomeComplement(symbol)

        const expected = {core: CORE_GLYPHS[CoreName.BOATHOOK_AND_BARB_UP]}                         // ~|\\
        expect(actual).toEqual(expected)
    })

    it("is smart enough to flip the accents", (): void => {
        const symbol: Symbol = {                                                                // ,'|(
            accents: [
                ACCENT_GLYPHS[AccentName.WING_DOWN],
                ACCENT_GLYPHS[AccentName.TICK_UP],
            ],
            core: CORE_GLYPHS[CoreName.RIGHT_SCROLL_UP],
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                      // `./||)
            accents: [
                ACCENT_GLYPHS[AccentName.WING_UP],
                ACCENT_GLYPHS[AccentName.TICK_DOWN],
            ],
            core: CORE_GLYPHS[CoreName.BARB_AND_ARC_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("is smart enough to flip accents the other way", (): void => {
        const symbol: Symbol = {                                                                // `./||)
            accents: [
                ACCENT_GLYPHS[AccentName.WING_UP],
                ACCENT_GLYPHS[AccentName.TICK_DOWN],
            ],
            core: CORE_GLYPHS[CoreName.BARB_AND_ARC_DOUBLE_UP],
        }


        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                      // ,'|(
            accents: [
                ACCENT_GLYPHS[AccentName.WING_DOWN],
                ACCENT_GLYPHS[AccentName.TICK_UP],
            ],
            core: CORE_GLYPHS[CoreName.RIGHT_SCROLL_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("works for the absence of a symbol (the parenthetical natural), mapping it to the apotome", (): void => {
        const symbol: Symbol = {}

        const actual = computeApotomeComplement(symbol)

        const expected = {
            core: CORE_GLYPHS[CoreName.DOUBLE_BARB_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })

    it("maps a bare shaft with accents to the apotome with flipped accents", (): void => {
        const symbol: Symbol = {                                                                // `'|
            accents: [
                ACCENT_GLYPHS[AccentName.WING_UP],
                ACCENT_GLYPHS[AccentName.TICK_UP],
            ],
            core: CORE_GLYPHS[CoreName.BARE_SHAFT_UP],
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                      // ,./||\\
            accents: [
                ACCENT_GLYPHS[AccentName.WING_DOWN],
                ACCENT_GLYPHS[AccentName.TICK_DOWN],
            ],
            core: CORE_GLYPHS[CoreName.DOUBLE_BARB_DOUBLE_UP],
        }
        expect(actual).toEqual(expected)
    })
})
