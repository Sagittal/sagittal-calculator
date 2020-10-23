import {Accidental, Aim, Compatible, Flavor, Smiley, Symbol} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName, FlagComboName, Orientation} from "../../../../../src/sagittal/accidental/flacco/types"
import {computeAccidentalSmiley, computeSymbolSmiley} from "../../../../../src/sagittal/accidental/io"
import {Shafts} from "../../../../../src/sagittal/accidental/symbol"
import {getCore} from "../../../../../src/sagittal/accidental/symbol/core"

describe("computeSymbolSmiley", (): void => {
    it("converts a symbol to smiley code", (): void => {
        const symbol: Symbol = {                                                                            // `'|)
            arm: getArm(ArmName.WING_AND_TICK),
            core: getCore(FlagComboName.RIGHT_ARC),
        }

        const actual = computeSymbolSmiley(symbol)

        const expected = ":`::'::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into //, per forum-specific limitations", (): void => {
        const symbol: Symbol = {core: getCore(FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB)}                  // )//|

        const actual = computeSymbolSmiley(symbol)

        const expected = ":)/ /|:" as Smiley
        expect(actual).toBe(expected)
    })

    it("handles the space that needs to be inserted into \\\\, per forum-specific limitations", (): void => {
        const symbol: Symbol = {core: getCore(FlagComboName.DOUBLE_RIGHT_BARB)}                             // |\\


        const actual = computeSymbolSmiley(symbol)

        const expected = ":|\\ \\:" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double ticks", (): void => {
        const symbol: Symbol = {                                                                            // ``|)
            arm: getArm(ArmName.BIRD),
            core: getCore(FlagComboName.RIGHT_ARC),
        }

        const actual = computeSymbolSmiley(symbol)

        const expected = ":``::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("does the correct thing with double down ticks", (): void => {
        const symbol: Symbol = {                                                                            // ,,|)
            arm: getArm(ArmName.BIRD, Orientation.AGAINST),
            core: getCore(FlagComboName.RIGHT_ARC),
        }

        const actual = computeSymbolSmiley(symbol)

        const expected = ":,,::|):" as Smiley
        expect(actual).toBe(expected)
    })

    it("works for a symbol with four shafts", (): void => {
        const symbol: Symbol = {                                                                            // )X(
            core: getCore(FlagComboName.DOUBLE_SCROLL, Shafts.EX),
        }

        const actual = computeSymbolSmiley(symbol)

        const expected = ":)X(:" as Smiley
        expect(actual).toBe(expected)
    })


    it("works for the absence of a symbol (the parenthetical natural)", (): void => {
        const symbol: Symbol = {}

        const actual = computeSymbolSmiley(symbol)

        const expected = "(:h:)" as Smiley
        expect(actual).toBe(expected)
    })
})


describe("computeAccidentalSmiley", (): void => {
    it("works for an accidental with a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {                                                    // )\!x
            core: getCore(FlagComboName.LEFT_SCROLL_AND_BARB, Shafts.SINGLE, Aim.DOWN),
            compatible: Compatible.DOUBLE_SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalSmiley(accidental)

        const expected = ":)\\!::x:" as Smiley
        expect(actual).toBe(expected)
    })


    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.DOUBLE_SHARP,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalSmiley(accidental)

        const expected = ":x:" as Smiley
        expect(actual).toBe(expected)
    })
})

