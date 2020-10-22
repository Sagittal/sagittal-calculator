import {
    Accidental,
    Ascii,
    Compatible,
    computeAccidentalAscii,
    computeSymbolAscii,
    CoreName,
    CORES,
    Flavor,
    Symbol,
} from "../../../../../src/sagittal/accidental"
import {Accent} from "../../../../../src/sagittal/accidental/flacco"

describe("computeSymbolAscii", (): void => {
    it("given a symbol, returns its ASCII representation", (): void => {
        const symbol: Symbol = {
            accents: [Accent.BIRD_WITH],
            core: CORES[CoreName.LEFT_SCROLL_UP],
        }

        const actual = computeSymbolAscii(symbol)

        const expected = "``)|" as Ascii
        expect(actual).toBe(expected)
    })

    it("converts 4 shafts up into an ex up", (): void => {
        const symbol: Symbol = {core: CORES[CoreName.LEFT_SCROLL_AND_BARB_EX_UP]}

        const actual = computeSymbolAscii(symbol)

        const expected = ")/X" as Ascii
        expect(actual).toBe(expected)
    })

    it("converts 4 shafts down into an ex down", (): void => {
        const symbol: Symbol = {core: CORES[CoreName.ARC_AND_BOATHOOK_EX_DOWN]}

        const actual = computeSymbolAscii(symbol)

        const expected = "(Y~" as Ascii
        expect(actual).toBe(expected)
    })


    it("works for the absence of a symbol (the parenthetical natural)", (): void => {
        const symbol: Symbol = {}

        const actual = computeSymbolAscii(symbol)

        const expected = "(|//|)" as Ascii
        expect(actual).toBe(expected)
    })
})

describe("computeAccidentalAscii", (): void => {
    it("works for accidentals with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            core: CORES[CoreName.LEFT_BARB_UP],
            compatible: Compatible.SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalAscii(accidental)

        const expected = "/|#" as Ascii
        expect(actual).toBe(expected)
    })

    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalAscii(accidental)

        const expected = "b" as Ascii
        expect(actual).toBe(expected)
    })
})
