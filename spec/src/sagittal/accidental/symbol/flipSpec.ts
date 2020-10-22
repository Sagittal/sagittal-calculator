import {AccentName, ACCENT_GLYPHS, CoreName, CORE_GLYPHS, Symbol} from "../../../../../src/sagittal/accidental"
import {flipSymbol} from "../../../../../src/sagittal/accidental/symbol"
import {flipGlyph} from "../../../../../src/sagittal/accidental/symbol/flip"

describe("flipGlyph", (): void => {
    describe("cores", (): void => {
        it("flips the glyph", (): void => {
            expect(flipGlyph(CORE_GLYPHS[CoreName.DOUBLE_ARC_DOWN])).toEqual(CORE_GLYPHS[CoreName.DOUBLE_ARC_UP])
        })

        it("works the other way", (): void => {
            expect(flipGlyph(CORE_GLYPHS[CoreName.DOUBLE_ARC_UP])).toEqual(CORE_GLYPHS[CoreName.DOUBLE_ARC_DOWN])
        })
    })

    describe("accents", (): void => {
        it("flips the glyph", (): void => {
            expect(flipGlyph(ACCENT_GLYPHS[AccentName.WING_DOWN])).toEqual(ACCENT_GLYPHS[AccentName.WING_UP])
        })

        it("works the other way", (): void => {
            expect(flipGlyph(ACCENT_GLYPHS[AccentName.WING_UP])).toEqual(ACCENT_GLYPHS[AccentName.WING_DOWN])
        })
    })
})

describe("flipSymbol", (): void => {
    it("flips the entire symbol from up to down", (): void => {
        const symbol: Symbol = {                                    // `./|||\\
            accents: [
                ACCENT_GLYPHS[AccentName.WING_UP],
                ACCENT_GLYPHS[AccentName.TICK_DOWN],
            ],
            core: CORE_GLYPHS[CoreName.DOUBLE_BARB_TRIPLE_UP],
        }

        const actual = flipSymbol(symbol)

        const expected = {                                          // ,'\\!!!/
            accents: [
                ACCENT_GLYPHS[AccentName.WING_DOWN],
                ACCENT_GLYPHS[AccentName.TICK_UP],
            ],
            core: CORE_GLYPHS[CoreName.DOUBLE_BARB_TRIPLE_DOWN],
        }
        expect(actual).toEqual(expected)
    })
})
