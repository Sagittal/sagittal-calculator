import {isUndefined} from "../../../general"
import {Flacco} from "../flacco"
import {NULL_SAGITTAL} from "./constants"
import {Aim, NullSagittal, Sagittal, Shafts} from "./types"

const computeSagittalFromFlacco = (flacco: Flacco): Sagittal | NullSagittal => {
    if (isUndefined(flacco.arm) && isUndefined(flacco.left) && isUndefined(flacco.right)) return NULL_SAGITTAL

    return {
        ...flacco,
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
    }
}

export {
    computeSagittalFromFlacco,
}
