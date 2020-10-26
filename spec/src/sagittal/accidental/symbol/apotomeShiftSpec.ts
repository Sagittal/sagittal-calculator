import {Sagittal} from "../../../../../src/sagittal/accidental"
import {getArm} from "../../../../../src/sagittal/accidental/flacco/arm"
import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco/types"
import {apotomeShift, getCore, Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("apotomeShift", (): void => {
    it("takes a symbol and shifts it by an apotome (adds 2 shafts)", (): void => {
        const sagittal: Sagittal = {                                                                    // ,')|(
            arm: getArm(ArmId.WING_FROM_TICK),
            core: getCore(HeadId.DOUBLE_SCROLL),
        }

        const actual = apotomeShift(sagittal)

        const expected: Sagittal = {                                                                  // ,')|||(
            arm: getArm(ArmId.WING_FROM_TICK),
            core: getCore(HeadId.DOUBLE_SCROLL, Shafts.TRIPLE),
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with a core with 2 shafts", (): void => {
        const sagittal: Sagittal = {core: getCore(HeadId.DOUBLE_SCROLL, Shafts.DOUBLE)}               // )||(

        const actual = apotomeShift(sagittal)

        const expected = {core: getCore(HeadId.DOUBLE_SCROLL, Shafts.EX)}                         // )X(
        expect(actual).toEqual(expected)
    })

    it("works for a symbol which is a bare shaft with arm", (): void => {
        const sagittal: Sagittal = {                                                                    // `|
            arm: getArm(ArmId.WING),
            core: getCore(HeadId.BARE_SHAFT),
        }

        const actual = apotomeShift(sagittal)

        const expected = {                                                                          // `/||\
            arm: getArm(ArmId.WING),
            core: getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal: Sagittal = {}

        const actual = apotomeShift(sagittal)

        const expected = {                                                                          // /||\
            core: getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })
})
