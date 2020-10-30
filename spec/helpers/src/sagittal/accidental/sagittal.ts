import {deepEquals, finalElement, isUndefined} from "../../../../../src/general/code"
import {AccentId, ArmId, Flacco, FlagId, getArm, getHead, HeadId} from "../../../../../src/sagittal/accidental/flacco"
import {FLACCOS} from "../../../../../src/sagittal/accidental/flacco/flacco"
import {formatSagittal} from "../../../../../src/sagittal/accidental/glyph"
import {computeApotomeComplement, getCore, Sagittal, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {areShaftsEven} from "../../../../../src/sagittal/accidental/sagittal/even"
import {GetSagittalOptions} from "../../../../../src/sagittal/accidental/sagittal/types"

const isFlaccoValid = (flacco: Flacco): boolean =>
    !!Object.values(FLACCOS).find((validFlacco: Flacco): boolean =>
        deepEquals(flacco, validFlacco))

const checkSagittalValidity = (sagittal: Sagittal): void => {
    const {arm, down, shafts, ...head} = sagittal

    let adjustedSagittal = sagittal
    if (areShaftsEven(shafts)) {
        if (deepEquals(head, getHead(HeadId.DOUBLE_BARB))) {
            if (!isUndefined(arm) && !finalElement(arm).against) {
                if (shafts === Shafts.EX) {
                    throw new Error(`Invalid sagittal due to being beyond the double apotome: ${formatSagittal(sagittal, {align: false})}`)
                }
                adjustedSagittal = { arm, shafts: Shafts.SINGLE }
            } else {
                adjustedSagittal =
                    computeApotomeComplement({arm, ...head, shafts: Shafts.DOUBLE}) as Sagittal
            }
        } else {
            adjustedSagittal =
                computeApotomeComplement({arm, ...head, shafts: Shafts.DOUBLE}) as Sagittal
        }
    }
    const {down: discardDown, shafts: discardShafts, ...flacco} = adjustedSagittal

    if (!isFlaccoValid(flacco)) {
        throw new Error(`Invalid sagittal due to incorrect flag, arm, and shaft combo: ${formatSagittal(sagittal, {align: false})}`)
    }
}

const computeSagittal = (options?: GetSagittalOptions): Sagittal => {
    const {armId, against = false, headId = HeadId.BARE_SHAFT, shafts = Shafts.SINGLE, down = false} = options || {}

    const core = getCore(headId, {shafts, down})

    if (isUndefined(armId)) {
        if (headId === HeadId.BARE_SHAFT) {
            throw new Error(`Do not use getSagittal for the null sagittal.`)
        }

        return core
    }

    const arm = getArm(armId, {against})
    const sagittal = {arm, ...core}

    checkSagittalValidity(sagittal)

    return sagittal
}

describe("computeSagittal", (): void => {
    it("returns the sagittal", (): void => {
        const headId = HeadId.BARB_AND_ARC
        const shafts = Shafts.TRIPLE
        const down = true
        const armId = ArmId.BIRD
        const against = true

        const actual = computeSagittal({headId, shafts, down, armId, against})

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
            computeSagittal({headId, armId, shafts})
        }).toThrowError("Invalid sagittal due to being beyond the double apotome: `/X\\")
    })

    it("understands that sagittals way beyond the double apotome are invalid (but catches it at the core level)            ", (): void => {
        const headId = HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB
        const armId = ArmId.BIRD
        const shafts = Shafts.EX

        expect((): void => {
            computeSagittal({headId, armId, shafts})
        }).toThrowError("A core with flag combo leftScrollDoubleRightBarb does not exist for even shaft counts.")
    })

    // See: http://forum.sagittal.org/viewtopic.php?p=2549#p2549
    it("understands that some flaccos are valid for some shaft counts but not for others", (): void => {
        const headId = HeadId.DOUBLE_SCROLL
        const armId = ArmId.BIRD
        const against = true

        const actual = computeSagittal({headId, armId, against, shafts: Shafts.DOUBLE})

        const expected = {
            left: [FlagId.SCROLL],
            right: [FlagId.SCROLL],
            arm: [{id: AccentId.BIRD, against: true}],
            shafts: Shafts.DOUBLE,
        }
        expect(actual).toEqual(expected)

        expect((): void => {
            computeSagittal({headId, armId, against})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: ,,)|(")
    })

    it("has the same valid sagittals for accent alterations with and against the apotome", (): void => {
        const headId = HeadId.DOUBLE_BARB
        const shafts = Shafts.DOUBLE

        expect((): void => {
            computeSagittal({headId, shafts, armId: ArmId.WING_AND_TICK, against: true})
        }).not.toThrow()
        expect((): void => {
            computeSagittal({headId, shafts, armId: ArmId.TICK, against: true})
        }).not.toThrow()
        expect((): void => {
            computeSagittal({headId, shafts, armId: ArmId.WING_AGAINST_TICK, against: true})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: `./||\\")
        expect((): void => {
            computeSagittal({headId, shafts, armId: ArmId.BIRD, against: true})
        }).not.toThrow()
        expect((): void => {
            computeSagittal({headId, shafts, armId: ArmId.WING, against: true})
        }).not.toThrow()
        expect((): void => {
            computeSagittal({headId, shafts, armId: ArmId.WING})
        }).not.toThrow()
        expect((): void => {
            computeSagittal({headId, shafts, armId: ArmId.BIRD})
        }).not.toThrow()
        expect((): void => {
            computeSagittal({headId, shafts, armId: ArmId.WING_AGAINST_TICK})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: ,'/||\\")
        expect((): void => {
            computeSagittal({headId, shafts, armId: ArmId.TICK})
        }).not.toThrow()
        expect((): void => {
            computeSagittal({headId, shafts, armId: ArmId.WING_AND_TICK})
        }).not.toThrow()
    })
})

export {
    computeSagittal,
}

