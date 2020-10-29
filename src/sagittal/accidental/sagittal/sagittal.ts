import {deepEquals, isUndefined} from "../../../general"
import {Flacco, FLACCOS, getArm, getHead, HeadId} from "../flacco"
import {computeApotomeComplement} from "./apotomeComplement"
import {getCore} from "./core"
import {GetSagittalOptions, Sagittal, Shafts} from "./types"

const isFlaccoValid = (flacco: Flacco): boolean =>
    !!Object.values(FLACCOS).find((validFlacco: Flacco): boolean =>
        deepEquals(flacco, validFlacco))

const checkSagittalValidity = (sagittal: Sagittal, options: Required<GetSagittalOptions>): void => {
    const {shafts, armId, against, headId} = options

    const adjustedSagittalForCheckingFlaccoValidity: Sagittal = shafts === Shafts.DOUBLE || shafts === Shafts.EX ?
        // TODO: search for other DOUBLE_BARB exceptional cases and try to make sense of it;
        //  This module probably needs more testing to make sure you can't request stuff beyond ex-shafted edge, etc.
        //  Cuz like this logic is starting to get crazy town. Way more complex than I expected. But then again we are
        //  Basically here setting up a totally parallel mechanism to how it's accomplished by going from a flacco
        //  To a symbol and then apotome shifting...
        (shafts === Shafts.DOUBLE && headId === HeadId.DOUBLE_BARB && !against) ?
            {...sagittal, ...getHead(HeadId.BARE_SHAFT)} :
            computeApotomeComplement({...sagittal, down: false, shafts: Shafts.DOUBLE}) :
        sagittal
    const {down: discardDown, shafts: discardShafts, ...flacco} = adjustedSagittalForCheckingFlaccoValidity
    if (!isFlaccoValid(flacco)) {
        throw new Error(`Attempted to get invalid sagittal: ${armId} ${against ? "against" : "and"} ${headId} with ${shafts}-shaft`)
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

    checkSagittalValidity(sagittal, {armId, against, headId, shafts, down})

    return sagittal
}

export {
    getSagittal,
}
