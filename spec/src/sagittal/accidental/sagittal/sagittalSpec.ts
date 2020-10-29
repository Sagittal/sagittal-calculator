import {AccentId, ArmId, FlagId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Aim, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {getSagittal} from "../../../../../src/sagittal/accidental/sagittal/sagittal"

describe("getSagittal", (): void => {
    it("returns the sagittal", (): void => {
        const headId = HeadId.BARB_AND_ARC
        const shafts = Shafts.TRIPLE
        const aim = Aim.DOWN
        const armId = ArmId.BIRD
        const against = true

        const actual = getSagittal({headId, shafts, aim, armId, against})

        const expected = {
            left: [FlagId.BARB],
            right: [FlagId.ARC],
            arm: [{id: AccentId.BIRD, against: true}],
            aim: Aim.DOWN,
            shafts: Shafts.TRIPLE,
        }
        expect(actual).toEqual(expected)
    })

    it("throws an error if the flacco for this sagittal is not valid", (): void => {
        const headId = HeadId.DOUBLE_SCROLL
        const armId = ArmId.WING_AND_TICK

        expect((): void => {
            getSagittal({headId, armId})
        }).toThrowError(`Attempted to get invalid sagittal: wingAndTick and doubleScroll with single-shaft`)
    })
})
