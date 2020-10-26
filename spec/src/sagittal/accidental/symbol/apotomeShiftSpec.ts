import {NullSagittal, Sagittal} from "../../../../../src/sagittal/accidental"
import {ArmId, getArm, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {apotomeShift, getCore, Shafts} from "../../../../../src/sagittal/accidental/symbol"

describe("apotomeShift", (): void => {
    it("takes a symbol and shifts it by an apotome (adds 2 shafts)", (): void => {
        const sagittal: Sagittal = {                                                                    // ,')|(
            arm: getArm(ArmId.WING_FROM_TICK),
            ...getCore(HeadId.DOUBLE_SCROLL),
        }

        const actual = apotomeShift(sagittal)

        const expected: Sagittal = {                                                                  // ,')|||(
            arm: getArm(ArmId.WING_FROM_TICK),
            ...getCore(HeadId.DOUBLE_SCROLL, Shafts.TRIPLE),
        }
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with a core with 2 shafts", (): void => {
        const sagittal: Sagittal = {...getCore(HeadId.DOUBLE_SCROLL, Shafts.DOUBLE)}               // )||(

        const actual = apotomeShift(sagittal)

        const expected = {...getCore(HeadId.DOUBLE_SCROLL, Shafts.EX)}                         // )X(
        expect(actual).toEqual(expected)
    })

    it("works for a symbol which is a bare shaft with arm", (): void => {
        const sagittal: Sagittal = {                                                                    // `|
            arm: getArm(ArmId.WING),
            ...getCore(HeadId.BARE_SHAFT),
        }

        const actual = apotomeShift(sagittal)

        const expected = {                                                                          // `/||\
            arm: getArm(ArmId.WING),
            ...getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal: NullSagittal = {}

        const actual = apotomeShift(sagittal)

        const expected = {                                                                          // /||\
            ...getCore(HeadId.DOUBLE_BARB, Shafts.DOUBLE),
        }
        expect(actual).toEqual(expected)
    })
})
