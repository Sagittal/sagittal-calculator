import {Sagittal} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arm"
import {ArmName, HeadName, Orientation} from "../../../../../src/sagittal/accidental/flacco/types"
import {computeApotomeComplement, getCore, Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("computeApotomeComplement", (): void => {
    it("returns the apotome complement of the given symbol", (): void => {
        const sagittal: Sagittal = {core: getCore(HeadName.LEFT_BARB)}                                     //  /|

        const actual = computeApotomeComplement(sagittal)

        const expected = {core: getCore(HeadName.RIGHT_BARB, Shafts.DOUBLE)}                           // ||\\
        expect(actual).toEqual(expected)
    })

    it("can go from a multi-shaft symbol to the single-shaft symbol", (): void => {
        const sagittal: Sagittal = {core: getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK, Shafts.DOUBLE)}       // )~||

        const actual = computeApotomeComplement(sagittal)

        const expected = {core: getCore(HeadName.BOATHOOK_AND_BARB)}                                   // ~|\\
        expect(actual).toEqual(expected)
    })

    it("reorients the arm, so that they will cancel each other out", (): void => {
        const sagittal: Sagittal = {                                                                       // ,'|(
            arm: getArm(ArmName.WING_FROM_TICK),
            core: getCore(HeadName.RIGHT_SCROLL),
        }

        const actual = computeApotomeComplement(sagittal)

        const expected = {                                                                             // `./||)
            arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
            core: getCore(HeadName.BARB_AND_ARC, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })

    it("can reorient arm the other way", (): void => {
        const sagittal: Sagittal = {                                                                       // `./||)
            arm: getArm(ArmName.WING_FROM_TICK, Orientation.AGAINST),
            core: getCore(HeadName.BARB_AND_ARC, Shafts.DOUBLE),
        }

        const actual = computeApotomeComplement(sagittal)

        const expected = {                                                                             // ,'|(
            arm: getArm(ArmName.WING_FROM_TICK),
            core: getCore(HeadName.RIGHT_SCROLL),
        }
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural), mapping it to the apotome", (): void => {
        const sagittal: Sagittal = {}

        const actual = computeApotomeComplement(sagittal)

        const expected = {
            core: getCore(HeadName.DOUBLE_BARB, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })

    it("maps a bare shaft with arm to the apotome with a reoriented arm", (): void => {
        const sagittal: Sagittal = {                                                                       // `'|
            arm: getArm(ArmName.WING_AND_TICK),
            core: getCore(HeadName.BARE_SHAFT),
        }

        const actual = computeApotomeComplement(sagittal)

        const expected = {                                                                             // ,./||\\
            arm: getArm(ArmName.WING_AND_TICK, Orientation.AGAINST),
            core: getCore(HeadName.DOUBLE_BARB, Shafts.DOUBLE),
        }

        expect(actual).toEqual(expected)
    })
})
