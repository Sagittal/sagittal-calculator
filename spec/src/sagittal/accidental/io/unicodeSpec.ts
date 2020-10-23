import {
    Accidental,
    Aim,
    Compatible,
    computeAccidentalUnicode,
    computeSymbolUnicode,
    Flavor,
    Symbol,
    Unicode,
} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName, FlagComboName} from "../../../../../src/sagittal/accidental/flacco/types"
import {Shafts} from "../../../../../src/sagittal/accidental/symbol"
import {getCore} from "../../../../../src/sagittal/accidental/symbol/core"

describe("computeSymbolUnicode", (): void => {
    it("given a symbol, returns its unicode representation", (): void => {
        const symbol: Symbol = {                                // ``)|
            arm: getArm(ArmName.BIRD),
            core: getCore(FlagComboName.LEFT_SCROLL),
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
            core: getCore(FlagComboName.RIGHT_ARC, Shafts.SINGLE, Aim.DOWN),
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
