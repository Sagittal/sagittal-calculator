import {ArmId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {apotomeShift, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {getSagittal} from "../../../../../src/sagittal/accidental/sagittal/sagittal"

describe("apotomeShift", (): void => {
    it("takes a symbol and shifts it by an apotome (adds 2 shafts)", (): void => {
        const sagittal = getSagittal({                          // ,')|(
            armId: ArmId.WING_AGAINST_TICK,
            headId: HeadId.DOUBLE_SCROLL,
        })

        const actual = apotomeShift(sagittal)

        const expected = getSagittal({                          // ,')|||(
            armId: ArmId.WING_AGAINST_TICK,
            headId: HeadId.DOUBLE_SCROLL,
            shafts: Shafts.TRIPLE,
        })
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with a core with 2 shafts", (): void => {
        const sagittal = getSagittal({headId: HeadId.DOUBLE_SCROLL, shafts: Shafts.DOUBLE})     // )||(

        const actual = apotomeShift(sagittal)

        const expected = getSagittal({headId: HeadId.DOUBLE_SCROLL, shafts: Shafts.EX})         // )X(
        expect(actual).toEqual(expected)
    })

    it("works for a symbol which is a bare shaft with arm", (): void => {
        const sagittal = getSagittal({armId: ArmId.WING, headId: HeadId.BARE_SHAFT})            // `|

        const actual = apotomeShift(sagittal)

        const expected = getSagittal({                                                          // `/||\
            armId: ArmId.WING,
            headId: HeadId.DOUBLE_BARB,
            shafts: Shafts.DOUBLE,
        })
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal = undefined

        const actual = apotomeShift(sagittal)

        const expected = getSagittal({headId: HeadId.DOUBLE_BARB, shafts: Shafts.DOUBLE})       // /||\
        expect(actual).toEqual(expected)
    })
})
