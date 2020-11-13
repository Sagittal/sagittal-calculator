import {deepEquals, finalElement, isUndefined, Maybe} from "../../../../../src/general/code"
import {
    AccentId,
    Arm,
    ArmId,
    Flacco,
    FlagId,
    getArm,
    getHead,
    Head,
    HeadId,
} from "../../../../../src/sagittal/accidental/flacco"
import {FLACCOS} from "../../../../../src/sagittal/accidental/flacco/flacco"
import {Accidental, Compatible} from "../../../../../src/sagittal/accidental/flavor"
import {formatAccidental} from "../../../../../src/sagittal/accidental/glyph"
import {computeApotomeComplement, getCore, Sagittal, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {areShaftsEven, isMultiShaft} from "../../../../../src/sagittal/accidental/sagittal/shafts"
import {AccidentalOptions} from "./types"

const armContributesAdditionalValueInSameDirection = (arm: Maybe<Arm>): boolean =>
    !isUndefined(arm) && !finalElement(arm).anti

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
        anti = false,
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

    const arm = getArm(armId, {anti})
    const accidental = {arm, ...core} as Accidental
    if (!isUndefined(compatible)) accidental.compatible = compatible

    checkAccidentalValidity(accidental)

    return accidental
}

export {
    computeAccidental,
}
