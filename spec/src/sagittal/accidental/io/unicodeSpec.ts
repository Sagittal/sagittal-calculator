import {
    Accidental,
    Compatible,
    computeAccidentalUnicode,
    computeSymbolUnicode,
    CoreName,
    CORES,
    Flavor,
    Symbol,
    Unicode,
} from "../../../../../src/sagittal/accidental"
import {ARMS} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName} from "../../../../../src/sagittal/accidental/flacco/types"

describe("computeSymbolUnicode", (): void => {
    it("given a symbol, returns its unicode representation", (): void => {
        const symbol: Symbol = {                                // ``)|
            arm: ARMS[ArmName.BIRD_WITH],
            core: CORES[CoreName.LEFT_SCROLL_UP],
        }

        const actual = computeSymbolUnicode(symbol)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })

    it("works for the absence of a symbol (the parenthetical natural)", (): void => {
        const symbol: Symbol = {}

        const actual = computeSymbolUnicode(symbol)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })
})

describe("computeAccidentalUnicode", (): void => {
    it("works for accidentals with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            core: CORES[CoreName.RIGHT_ARC_DOWN],
            compatible: Compatible.FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalUnicode(accidental)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })

    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.DOUBLE_FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalUnicode(accidental)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })
})
