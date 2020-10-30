import {AccentId, ArmId, FlagId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {getSagittal} from "../../../../../src/sagittal/accidental/sagittal/sagittal"

describe("getSagittal", (): void => {
    it("returns the sagittal", (): void => {
        const headId = HeadId.BARB_AND_ARC
        const shafts = Shafts.TRIPLE
        const down = true
        const armId = ArmId.BIRD
        const against = true

        const actual = getSagittal({headId, shafts, down, armId, against})

        const expected = {
            left: [FlagId.BARB],
            right: [FlagId.ARC],
            arm: [{id: AccentId.BIRD, against: true}],
            down: true,
            shafts: Shafts.TRIPLE,
        }
        expect(actual).toEqual(expected)
    })

    it("understands that sagittals just beyond the double apotome are invalid", (): void => {
        const headId = HeadId.DOUBLE_BARB
        const armId = ArmId.WING
        const shafts = Shafts.EX

        expect((): void => {
            getSagittal({headId, armId, shafts})
        }).toThrowError("Invalid sagittal due to being beyond the double apotome: `/X\\")
    })

    it("understands that sagittals way beyond the double apotome are invalid (but catches it at the core level)            ", (): void => {
        const headId = HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB
        const armId = ArmId.BIRD
        const shafts = Shafts.EX

        expect((): void => {
            getSagittal({headId, armId, shafts})
        }).toThrowError("A core with flag combo leftScrollDoubleRightBarb does not exist for even shaft counts.")
    })

    // See: http://forum.sagittal.org/viewtopic.php?p=2549#p2549
    it("understands that some flaccos are valid for some shaft counts but not for others", (): void => {
        const headId = HeadId.DOUBLE_SCROLL
        const armId = ArmId.BIRD
        const against = true

        const actual = getSagittal({headId, armId, against, shafts: Shafts.DOUBLE})

        const expected = {
            left: [FlagId.SCROLL],
            right: [FlagId.SCROLL],
            arm: [{id: AccentId.BIRD, against: true}],
            shafts: Shafts.DOUBLE,
        }
        expect(actual).toEqual(expected)

        expect((): void => {
            getSagittal({headId, armId, against})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: ,,)|(")
    })

    it("has the same valid sagittals for accent alterations with and against the apotome", (): void => {
        const headId = HeadId.DOUBLE_BARB
        const shafts = Shafts.DOUBLE

        expect((): void => {
            getSagittal({headId, shafts, armId: ArmId.WING_AND_TICK, against: true})
        }).not.toThrow()
        expect((): void => {
            getSagittal({headId, shafts, armId: ArmId.TICK, against: true})
        }).not.toThrow()
        expect((): void => {
            getSagittal({headId, shafts, armId: ArmId.WING_AGAINST_TICK, against: true})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: `./||\\")
        expect((): void => {
            getSagittal({headId, shafts, armId: ArmId.BIRD, against: true})
        }).not.toThrow()
        expect((): void => {
            getSagittal({headId, shafts, armId: ArmId.WING, against: true})
        }).not.toThrow()
        expect((): void => {
            getSagittal({headId, shafts, armId: ArmId.WING})
        }).not.toThrow()
        expect((): void => {
            getSagittal({headId, shafts, armId: ArmId.BIRD})
        }).not.toThrow()
        expect((): void => {
            getSagittal({headId, shafts, armId: ArmId.WING_AGAINST_TICK})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: ,'/||\\")
        expect((): void => {
            getSagittal({headId, shafts, armId: ArmId.TICK})
        }).not.toThrow()
        expect((): void => {
            getSagittal({headId, shafts, armId: ArmId.WING_AND_TICK})
        }).not.toThrow()
    })
})
