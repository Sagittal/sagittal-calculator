import {AccentId, ArmId, FlagId, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {Accidental, Compatible} from "../../../../../src/sagittal/accidental/flavor"
import {Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {computeAccidental} from "./accidental"

describe("computeAccidental", (): void => {
    it("returns the accidental", (): void => {
        const headId = HeadId.BARB_AND_ARC
        const shafts = Shafts.TRIPLE
        const down = true
        const armId = ArmId.BIRD
        const anti = true

        const actual = computeAccidental({headId, shafts, down, armId, anti})

        const expected = {
            left: [FlagId.BARB],
            right: [FlagId.ARC],
            arm: [{id: AccentId.BIRD, anti: true}],
            down: true,
            shafts: Shafts.TRIPLE,
        } as Accidental
        expect(actual).toEqual(expected)
    })

    it("understands that sagittals just beyond the double apotome are invalid", (): void => {
        const headId = HeadId.DOUBLE_BARB
        const armId = ArmId.WING
        const shafts = Shafts.EX

        expect(true).toBe(false)

        expect((): void => {
            computeAccidental({headId, armId, shafts})
        }).toThrowError("Invalid sagittal due to being beyond the double apotome: `/X\\")
        expect((): void => {
            computeAccidental({headId, armId, shafts, down: true})
        }).toThrowError("Invalid sagittal due to being beyond the double apotome: ,\\Y/")
    })

    it("understands that sagittals way beyond the double apotome are invalid (but catches it at the core level)            ", (): void => {
        const headId = HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB
        const armId = ArmId.BIRD
        const shafts = Shafts.EX

        expect((): void => {
            computeAccidental({headId, armId, shafts})
        }).toThrowError("A core with flag combo leftScrollDoubleRightBarb does not exist for even shaft counts.")
    })

    // See: http://forum.sagittal.org/viewtopic.php?p=2549#p2549
    it("understands that some flaccos are valid for some shaft counts but not for others", (): void => {
        const headId = HeadId.DOUBLE_SCROLL
        const armId = ArmId.BIRD
        const anti = true

        const actual = computeAccidental({headId, armId, anti, shafts: Shafts.DOUBLE})

        const expected = {
            left: [FlagId.SCROLL],
            right: [FlagId.SCROLL],
            arm: [{id: AccentId.BIRD, anti: true}],
            shafts: Shafts.DOUBLE,
        } as Accidental
        expect(actual).toEqual(expected)

        expect((): void => {
            computeAccidental({headId, armId, anti})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: ,,)|(")
    })

    it("has the same validity results for sagittals whether their accents are against (anti-) their apotome or not               ", (): void => {
        const headId = HeadId.DOUBLE_BARB
        const shafts = Shafts.DOUBLE

        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.WING_AND_TICK, anti: true})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.TICK, anti: true})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.ANTIWING_AND_TICK, anti: true})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: `./||\\")
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.BIRD, anti: true})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.WING, anti: true})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.WING})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.BIRD})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.ANTIWING_AND_TICK})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: ,'/||\\")
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.TICK})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.WING_AND_TICK})
        }).not.toThrow()
    })

    it("understands that some single-shaft symbols can be against their Sagittal-compatible symbols, while others cannot         ", (): void => {
        const headId = HeadId.DOUBLE_ARC
        const compatible = Compatible.SHARP

        const actual = computeAccidental({headId, compatible})

        const expected = {
            left: [FlagId.ARC],
            right: [FlagId.ARC],
            shafts: Shafts.SINGLE,
            compatible: Compatible.SHARP,
        } as Accidental
        expect(actual).toEqual(expected)

        expect((): void => {
            computeAccidental({headId, down: true, compatible})
        }).toThrowError(`You are using too large of a single-shaft symbol against this Sagittal-compatible: (!)# You should instead use the compatible closer to the natural and a single-shaft symbol which goes in its same direction`)
    })

    it("returns an empty object if passed nothing", (): void => {
        expect(computeAccidental()).toEqual({} as Accidental)
    })

    it("works for a plain compatible", (): void => {
        const actual = computeAccidental({compatible: Compatible.DOUBLE_FLAT})

        const expected = {compatible: Compatible.DOUBLE_FLAT} as Accidental
        expect(actual).toEqual(expected)
    })

    it("understands that you can't combine a multi-shaft symbol with a Sagittal-compatible symbol", (): void => {
        const headId = HeadId.BOATHOOK_AND_ARC
        const shafts = Shafts.DOUBLE
        const compatible = Compatible.FLAT

        expect((): void => {
            computeAccidental({headId, shafts, compatible})
        }).toThrowError("Cannot combine Sagittal-compatible symbols with multi-shaft sagittals: ~||)b")
    })

    it("understands that you can't combine a double-sharp or double-flat with sagittals going beyond the double apotome      ", (): void => {
        const headId = HeadId.BARE_SHAFT
        const armId = ArmId.WING

        expect((): void => {
            computeAccidental({headId, armId, compatible: Compatible.DOUBLE_SHARP})
        }).toThrowError("Invalid sagittal due to being beyond the double apotome: `|x")
        expect((): void => {
            computeAccidental({headId, armId, down: true, compatible: Compatible.DOUBLE_FLAT})
        }).toThrowError("Invalid sagittal due to being beyond the double apotome: ,!bb")
    })
})
