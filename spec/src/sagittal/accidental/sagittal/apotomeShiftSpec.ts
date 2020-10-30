import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {apotomeShift, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {computeAccidental} from "../../../../helpers/src/sagittal/accidental/accidental"

describe("apotomeShift", (): void => {
    it("takes a symbol and shifts it by an apotome (adds 2 shafts)", (): void => {
        const sagittal = computeAccidental({                          // ,')|(
            armId: ArmId.WING_AGAINST_TICK,
            headId: HeadId.DOUBLE_SCROLL,
        })

        const actual = apotomeShift(sagittal)

        const expected = computeAccidental({                          // ,')|||(
            armId: ArmId.WING_AGAINST_TICK,
            headId: HeadId.DOUBLE_SCROLL,
            shafts: Shafts.TRIPLE,
        })
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with a core with 2 shafts", (): void => {
        const sagittal = computeAccidental({headId: HeadId.DOUBLE_SCROLL, shafts: Shafts.DOUBLE})     // )||(

        const actual = apotomeShift(sagittal)

        const expected = computeAccidental({headId: HeadId.DOUBLE_SCROLL, shafts: Shafts.EX})         // )X(
        expect(actual).toEqual(expected)
    })

    it("works for a symbol which is a bare shaft with arm", (): void => {
        const sagittal = computeAccidental({armId: ArmId.WING, headId: HeadId.BARE_SHAFT})            // `|

        const actual = apotomeShift(sagittal)

        const expected = computeAccidental({                                                          // `/||\
            armId: ArmId.WING,
            headId: HeadId.DOUBLE_BARB,
            shafts: Shafts.DOUBLE,
        })
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal = undefined

        const actual = apotomeShift(sagittal)

        const expected = computeAccidental({headId: HeadId.DOUBLE_BARB, shafts: Shafts.DOUBLE})       // /||\
        expect(actual).toEqual(expected)
    })
})
