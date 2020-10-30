import {deepEquals, finalElement, isUndefined, Maybe} from "../../../../../src/general/code"
import {
    AccentId,
    Arm,
    ArmId,
    Flacco,
    FlagId,
    getArm,
    getHead, Head,
    HeadId,
} from "../../../../../src/sagittal/accidental/flacco"
import {FLACCOS} from "../../../../../src/sagittal/accidental/flacco/flacco"
import {Accidental, Compatible} from "../../../../../src/sagittal/accidental/flavor"
import {formatAccidental} from "../../../../../src/sagittal/accidental/glyph"
import {computeApotomeComplement, getCore, Sagittal, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {areShaftsEven, isMultiShaft} from "../../../../../src/sagittal/accidental/sagittal/shafts"
import {AccidentalOptions} from "./types"

const armContributesAdditionalValueInSameDirection = (arm: Maybe<Arm>): boolean =>
    !isUndefined(arm) && !finalElement(arm).against

const headContributesAdditionalValue = (head: Head): boolean =>
    !deepEquals(head, getHead(HeadId.BARE_SHAFT))

const isFlaccoValid = (flacco: Flacco): boolean =>
    !!Object.values(FLACCOS).find((validFlacco: Flacco): boolean =>
        deepEquals(flacco, validFlacco))

const checkSagittalValidity = (sagittal: Sagittal): void => {
    const {arm, down, shafts, ...head} = sagittal

    let adjustedSagittal = sagittal
    if (areShaftsEven(shafts)) {
        if (deepEquals(head, getHead(HeadId.DOUBLE_BARB))) {
            if (armContributesAdditionalValueInSameDirection(arm)) {
                if (shafts === Shafts.EX) {
                    throw new Error(`Invalid sagittal due to being beyond the double apotome: ${formatAccidental(sagittal, {align: false})}`)
                }
                adjustedSagittal = {arm, shafts: Shafts.SINGLE} as Accidental
            } else {
                adjustedSagittal =
                    computeApotomeComplement({arm, ...head, shafts: Shafts.DOUBLE}) as Accidental
            }
        } else {
            adjustedSagittal =
                computeApotomeComplement({arm, ...head, shafts: Shafts.DOUBLE}) as Accidental
        }
    }
    const {down: discardDown, shafts: discardShafts, ...flacco} = adjustedSagittal

    if (!isFlaccoValid(flacco)) {
        throw new Error(`Invalid sagittal due to incorrect flag, arm, and shaft combo: ${formatAccidental(sagittal, {align: false})}`)
    }
}

const checkAccidentalWithCompatibleValidity = (accidental: Accidental): void => {
    const {arm, down, shafts, compatible, ...head} = accidental

    if (isMultiShaft(shafts)) {
        throw new Error(`Cannot combine Sagittal-compatible symbols with multi-shaft sagittals: ${formatAccidental(accidental, {align: false})}`)
    }

    if (
        compatible === Compatible.DOUBLE_FLAT
        && (armContributesAdditionalValueInSameDirection(arm) || (down && headContributesAdditionalValue(head)))
    ) {
        throw new Error(`Invalid sagittal due to being beyond the double apotome: ${formatAccidental(accidental, {align: false})}`)
    } else if (
        compatible === Compatible.DOUBLE_SHARP
        && (armContributesAdditionalValueInSameDirection(arm) || (!down && headContributesAdditionalValue(head)))
    ) {
        throw new Error(`Invalid sagittal due to being beyond the double apotome: ${formatAccidental(accidental, {align: false})}`)
    }

    if (
        (compatible === Compatible.SHARP || compatible == Compatible.DOUBLE_SHARP)
        && (down && headContributesAdditionalValue(head))
    ) {
        const apotomeComplement = computeApotomeComplement({...head, shafts})
        if (apotomeComplement?.shafts !== Shafts.DOUBLE) {
            throw new Error(`You are using too large of a single-shaft symbol against this Sagittal-compatible: ${formatAccidental(accidental, {align: false})} You should instead use the compatible closer to the natural and a single-shaft symbol which goes in its same direction`)
        }
    } else if (
        (compatible === Compatible.FLAT || compatible == Compatible.DOUBLE_FLAT)
        && (!down && headContributesAdditionalValue(head))
    ) {
        const apotomeComplement = computeApotomeComplement({...head, shafts})
        if (apotomeComplement?.shafts !== Shafts.DOUBLE) {
            throw new Error(`You are using too large of a single-shaft symbol against this Sagittal-compatible: ${formatAccidental(accidental, {align: false})} you should instead use the compatible closer to the natural and a single-shaft symbol which goes in its same direction`)
        }
    }
}

const checkAccidentalValidity = (accidental: Accidental): void => {
    if (!isUndefined(accidental.compatible)) {
        checkAccidentalWithCompatibleValidity(accidental)
    } else {
        checkSagittalValidity(accidental)
    }
}

const computeAccidental = (options: AccidentalOptions = {}): Accidental => {
    const {
        armId,
        against = false,
        headId = HeadId.BARE_SHAFT,
        shafts = Shafts.SINGLE,
        down = false,
        compatible,
    } = options

    const core = getCore(headId, {shafts, down})

    if (isUndefined(armId)) {
        if (headId === HeadId.BARE_SHAFT) {
            if (isUndefined(compatible)) {
                return {} as Accidental
            }

            const accidental = {compatible} as Accidental

            checkAccidentalValidity(accidental)

            return accidental
        }

        if (isUndefined(compatible)) {
            return core
        }

        const accidental = {compatible, ...core}

        checkAccidentalValidity(accidental)

        return accidental
    }

    const arm = getArm(armId, {against})
    const accidental = {arm, ...core} as Accidental
    if (!isUndefined(compatible)) accidental.compatible = compatible

    checkAccidentalValidity(accidental)

    return accidental
}

describe("computeAccidental", (): void => {
    it("returns the accidental", (): void => {
        const headId = HeadId.BARB_AND_ARC
        const shafts = Shafts.TRIPLE
        const down = true
        const armId = ArmId.BIRD
        const against = true

        const actual = computeAccidental({headId, shafts, down, armId, against})

        const expected = {
            left: [FlagId.BARB],
            right: [FlagId.ARC],
            arm: [{id: AccentId.BIRD, against: true}],
            down: true,
            shafts: Shafts.TRIPLE,
        } as Accidental
        expect(actual).toEqual(expected)
    })

    it("understands that sagittals just beyond the double apotome are invalid", (): void => {
        const headId = HeadId.DOUBLE_BARB
        const armId = ArmId.WING
        const shafts = Shafts.EX

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
        const against = true

        const actual = computeAccidental({headId, armId, against, shafts: Shafts.DOUBLE})

        const expected = {
            left: [FlagId.SCROLL],
            right: [FlagId.SCROLL],
            arm: [{id: AccentId.BIRD, against: true}],
            shafts: Shafts.DOUBLE,
        } as Accidental
        expect(actual).toEqual(expected)

        expect((): void => {
            computeAccidental({headId, armId, against})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: ,,)|(")
    })

    it("has the same validity results for sagittals whether their accents are against the apotome or not", (): void => {
        const headId = HeadId.DOUBLE_BARB
        const shafts = Shafts.DOUBLE

        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.WING_AND_TICK, against: true})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.TICK, against: true})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.WING_AGAINST_TICK, against: true})
        }).toThrowError("Invalid sagittal due to incorrect flag, arm, and shaft combo: `./||\\")
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.BIRD, against: true})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.WING, against: true})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.WING})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.BIRD})
        }).not.toThrow()
        expect((): void => {
            computeAccidental({headId, shafts, armId: ArmId.WING_AGAINST_TICK})
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

export {
    computeAccidental,
}
