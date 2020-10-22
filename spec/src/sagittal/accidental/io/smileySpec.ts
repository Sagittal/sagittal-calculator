import {
    AccentName,
    ACCENT_GLYPHS,
    Accidental,
    Compatible,
    CoreName,
    CORE_GLYPHS,
    Flavor,
    Smiley, Symbol,
} from "../../../../../src/sagittal/accidental"
import {computeSmileyFromAccidental, computeSmileyFromGlyph} from "../../../../../src/sagittal/accidental/io"
import {computeSmileyFromSymbol} from "../../../../../src/sagittal/accidental/io/smiley"

describe("computeSmileyFromSymbol", (): void => {
    it("converts a symbol to smiley code", (): void => {
        const symbol: Symbol = {                                                          // `'|)
            accents: [
                ACCENT_GLYPHS[AccentName.WING_UP],
                ACCENT_GLYPHS[AccentName.TICK_UP],
            ],
            core: CORE_GLYPHS[CoreName.RIGHT_ARC_UP],
        }

        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":`::'::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into //, per forum-specific limitations", (): void => {
        const symbol: Symbol = {core: CORE_GLYPHS[CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_UP]}  // )//|

        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":)/ /|:" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into \\\\, per forum-specific limitations", (): void => {
        const symbol: Symbol = {core: CORE_GLYPHS[CoreName.DOUBLE_RIGHT_BARB_UP]}             // |\\


        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":|\\ \\:" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double ticks", (): void => {
        const symbol: Symbol = {                                                          // ``|)
            accents: [
                ACCENT_GLYPHS[AccentName.BIRD_UP],
            ],
            core: CORE_GLYPHS[CoreName.RIGHT_ARC_UP],
        }

        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":``::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double down ticks", (): void => {
        const symbol: Symbol = {                                                         // ,,|)
            accents: [
                ACCENT_GLYPHS[AccentName.BIRD_DOWN],
            ],
            core: CORE_GLYPHS[CoreName.RIGHT_ARC_UP],
        }

        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":,,::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("works for a symbol with four shafts", (): void => {
        const symbol: Symbol = {                                                         // )X(
            core: CORE_GLYPHS[CoreName.DOUBLE_SCROLL_EX_UP],
        }

        const actual = computeSmileyFromSymbol(symbol)

        const expected = ":)X(:" as Smiley
        expect(actual).toBe(expected)
    })


    it("works for the absence of a symbol (the parenthetical natural)", (): void => {
        const symbol: Symbol = {}

        const actual = computeSmileyFromSymbol(symbol)

        const expected = "(:h:)" as Smiley
        expect(actual).toBe(expected)
    })
})


describe("computeSmileyFromAccidental", (): void => {
    it("works for an accidental with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {                                                 // )\!x
            core: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_DOWN],
            compatible: Compatible.DOUBLE_SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeSmileyFromAccidental(accidental)

        const expected = ":)\\!::x:" as Smiley
        expect(actual).toBe(expected)
    })


    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.DOUBLE_SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeSmileyFromAccidental(accidental)

        const expected = ":x:" as Smiley
        expect(actual).toBe(expected)
    })
})

describe("computeSmileyFromGlyph", (): void => {
    it("works for an accent glyph", (): void => {
        const glyph = ACCENT_GLYPHS[AccentName.TICK_UP]

        const actual = computeSmileyFromGlyph(glyph)

        const expected = ":':" as Smiley
        expect(actual).toBe(expected)
    })
})
