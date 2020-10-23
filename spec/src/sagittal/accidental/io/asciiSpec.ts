import {
    Accidental,
    Aim,
    Ascii,
    Compatible,
    computeAccidentalAscii,
    computeSymbolAscii,
    Flavor,
    Symbol,
} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName, FlagComboName} from "../../../../../src/sagittal/accidental/flacco/types"
import {Shafts} from "../../../../../src/sagittal/accidental/symbol"
import {getCore} from "../../../../../src/sagittal/accidental/symbol/core"

describe("computeSymbolAscii", (): void => {
    it("given a symbol, returns its ASCII representation", (): void => {
        const symbol: Symbol = {
            arm: getArm(ArmName.BIRD),
            core: getCore(FlagComboName.LEFT_SCROLL),
        }

        const actual = computeSymbolAscii(symbol)

        const expected = "``)|" as Ascii
        expect(actual).toBe(expected)
    })

    it("converts 4 shafts up into an ex up", (): void => {
        const symbol: Symbol = {core: getCore(FlagComboName.LEFT_SCROLL_AND_BARB, Shafts.EX)}

        const actual = computeSymbolAscii(symbol)

        const expected = ")/X" as Ascii
        expect(actual).toBe(expected)
    })

    it("converts 4 shafts down into an ex down", (): void => {
        const symbol: Symbol = {core: getCore(FlagComboName.ARC_AND_BOATHOOK, Shafts.EX, Aim.DOWN)}

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
            core: getCore(FlagComboName.LEFT_BARB),
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
