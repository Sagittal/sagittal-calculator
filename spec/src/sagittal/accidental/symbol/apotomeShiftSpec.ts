import {Sagittal} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arm"
import {ArmName, HeadName} from "../../../../../src/sagittal/accidental/flacco/types"
import {apotomeShift, getCore, Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("apotomeShift", (): void => {
    it("takes a symbol and shifts it by an apotome (adds 2 shafts)", (): void => {
        const sagittal: Sagittal = {                                                                    // ,')|(
            arm: getArm(ArmName.WING_FROM_TICK),
            core: getCore(HeadName.DOUBLE_SCROLL),
        }

        const actual = apotomeShift(sagittal)

        const expected: Sagittal = {                                                                  // ,')|||(
            arm: getArm(ArmName.WING_FROM_TICK),
            core: getCore(HeadName.DOUBLE_SCROLL, Shafts.TRIPLE),
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with a core with 2 shafts", (): void => {
        const sagittal: Sagittal = {core: getCore(HeadName.DOUBLE_SCROLL, Shafts.DOUBLE)}               // )||(

        const actual = apotomeShift(sagittal)

        const expected = {core: getCore(HeadName.DOUBLE_SCROLL, Shafts.EX)}                         // )X(
        expect(actual).toEqual(expected)
    })

    it("works for a symbol which is a bare shaft with arm", (): void => {
        const sagittal: Sagittal = {                                                                    // `|
            arm: getArm(ArmName.WING),
            core: getCore(HeadName.BARE_SHAFT),
        }

        const actual = apotomeShift(sagittal)

        const expected = {                                                                          // `/||\
            arm: getArm(ArmName.WING),
            core: getCore(HeadName.DOUBLE_BARB, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal: Sagittal = {}

        const actual = apotomeShift(sagittal)

        const expected = {                                                                          // /||\
            core: getCore(HeadName.DOUBLE_BARB, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })
})
