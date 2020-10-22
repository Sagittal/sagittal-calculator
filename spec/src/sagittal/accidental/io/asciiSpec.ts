import {
    AccentName,
    ACCENT_GLYPHS,
    Accidental,
    Ascii,
    Compatible,
    computeAsciiFromAccidental,
    computeAsciiFromSymbol,
    CoreName,
    CORE_GLYPHS,
    Flavor,
    Symbol,
} from "../../../../../src/sagittal/accidental"

describe("computeAsciiFromSymbol", (): void => {
    it("given a symbol, returns its ASCII representation", (): void => {
        const symbol: Symbol = {
            accents: [ACCENT_GLYPHS[AccentName.BIRD_UP]],
            core: CORE_GLYPHS[CoreName.LEFT_SCROLL_UP],
        }

        const actual = computeAsciiFromSymbol(symbol)

        const expected = "``)|" as Ascii
        expect(actual).toBe(expected)
    })

    it("converts 4 shafts up into an ex up", (): void => {
        const symbol: Symbol = {core: CORE_GLYPHS[CoreName.LEFT_SCROLL_AND_BARB_EX_UP]}

        const actual = computeAsciiFromSymbol(symbol)

        const expected = ")/X" as Ascii
        expect(actual).toBe(expected)
    })

    it("converts 4 shafts down into an ex down", (): void => {
        const symbol: Symbol = {core: CORE_GLYPHS[CoreName.ARC_AND_BOATHOOK_EX_DOWN]}

        const actual = computeAsciiFromSymbol(symbol)

        const expected = "(Y~" as Ascii
        expect(actual).toBe(expected)
    })


    it("works for the absence of a symbol (the parenthetical natural)", (): void => {
        const symbol: Symbol = {}

        const actual = computeAsciiFromSymbol(symbol)

        const expected = "(|//|)" as Ascii
        expect(actual).toBe(expected)
    })
})

describe("computeAsciiFromAccidental", (): void => {
    it("works for accidentals with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            core: CORE_GLYPHS[CoreName.LEFT_BARB_UP],
            compatible: Compatible.SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeAsciiFromAccidental(accidental)

        const expected = "/|#" as Ascii
        expect(actual).toBe(expected)
    })

    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeAsciiFromAccidental(accidental)

        const expected = "b" as Ascii
        expect(actual).toBe(expected)
    })
})
