import {Symbol} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arms"
import {ArmName, FlagComboName, Orientation} from "../../../../../src/sagittal/accidental/flacco/types"
import {computeApotomeComplement, Shafts} from "../../../../../src/sagittal/accidental/symbol"
import {getCore} from "../../../../../src/sagittal/accidental/symbol/core"

describe("computeApotomeComplement", (): void => {
    it("returns the apotome complement of the given symbol", (): void => {
        const symbol: Symbol = {core: getCore(FlagComboName.LEFT_BARB)}                                     //  /|

        const actual = computeApotomeComplement(symbol)

        const expected = {core: getCore(FlagComboName.RIGHT_BARB, Shafts.DOUBLE)}                           // ||\\
        expect(actual).toEqual(expected)
    })

    it("can go from a multi-shaft symbol to the single-shaft symbol", (): void => {
        const symbol: Symbol = {core: getCore(FlagComboName.LEFT_SCROLL_AND_BOATHOOK, Shafts.DOUBLE)}       // )~||

        const actual = computeApotomeComplement(symbol)

        const expected = {core: getCore(FlagComboName.BOATHOOK_AND_BARB)}                                   // ~|\\
        expect(actual).toEqual(expected)
    })

    it("reorients the arm, so that they will cancel each other out", (): void => {
        const symbol: Symbol = {                                                                            // ,'|(
            arm: getArm(ArmName.WING_FROM_TICK),
            core: getCore(FlagComboName.RIGHT_SCROLL),
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                                  // `./||)
            arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
            core: getCore(FlagComboName.BARB_AND_ARC, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })

    it("can reorient arm the other way", (): void => {
        const symbol: Symbol = {                                                                            // `./||)
            arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
            core: getCore(FlagComboName.BARB_AND_ARC, Shafts.DOUBLE),
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                                  // ,'|(
            arm: getArm(ArmName.WING_FROM_TICK),
            core: getCore(FlagComboName.RIGHT_SCROLL),
        }
        expect(actual).toEqual(expected)
    })

    it("works for the absence of a symbol (the parenthetical natural), mapping it to the apotome", (): void => {
        const symbol: Symbol = {}

        const actual = computeApotomeComplement(symbol)

        const expected = {
            core: getCore(FlagComboName.DOUBLE_BARB, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })

    it("maps a bare shaft with arm to the apotome with a reoriented arm", (): void => {
        const symbol: Symbol = {                                                                            // `'|
            arm: getArm(ArmName.WING_AND_TICK),
            core: getCore(FlagComboName.BARE_SHAFT),
        }

        const actual = computeApotomeComplement(symbol)

        const expected = {                                                                                  // ,./||\\
            arm: getArm(ArmName.WING_AND_TICK, Orientation.AGAINST),
            core: getCore(FlagComboName.DOUBLE_BARB, Shafts.DOUBLE),
        }

        expect(actual).toEqual(expected)
    })
})
