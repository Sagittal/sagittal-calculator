import {
    AccentName,
    ACCENT_GLYPHS,
    Accidental,
    Compatible,
    computeUnicodeFromAccidental,
    computeUnicodeFromSymbol,
    CoreName,
    CORE_GLYPHS,
    Flavor,
    Symbol, Unicode,
} from "../../../../../src/sagittal/accidental"

describe("computeUnicodeFromSymbol", (): void => {
    it("given a symbol, returns its unicode representation", (): void => {
        const symbol: Symbol = {                                // ``)|
            accents: [ACCENT_GLYPHS[AccentName.BIRD_UP]],
            core: CORE_GLYPHS[CoreName.LEFT_SCROLL_UP],
        }

        const actual = computeUnicodeFromSymbol(symbol)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })

    it("works for the absence of a symbol (the parenthetical natural)", (): void => {
        const symbol: Symbol = {}

        const actual = computeUnicodeFromSymbol(symbol)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })
})

describe("computeUnicodeFromAccidental", (): void => {
    it("works for accidentals with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            core: CORE_GLYPHS[CoreName.RIGHT_ARC_DOWN],
            compatible: Compatible.FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeUnicodeFromAccidental(accidental)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })

    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.DOUBLE_FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeUnicodeFromAccidental(accidental)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })
})
