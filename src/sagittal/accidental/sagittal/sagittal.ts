import {deepEquals, finalElement, isUndefined} from "../../../general"
import {Flacco, FLACCOS, getArm, getHead, HeadId} from "../flacco"
import {formatSagittal} from "../glyph"
import {computeApotomeComplement} from "./apotomeComplement"
import {getCore} from "./core"
import {areShaftsEven} from "./even"
import {GetSagittalOptions, Sagittal, Shafts} from "./types"

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

const getSagittal = (options?: GetSagittalOptions): Sagittal => {
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

export {
    getSagittal,
}
