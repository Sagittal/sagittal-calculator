import {isUndefined} from "../../../general"
import {Flacco} from "../flacco"
import {Aim, NULL_SAGITTAL, Sagittal, Shafts} from "../symbol"

const computeSagittalFromFlacco = (flacco: Flacco): Sagittal => {
    if (isUndefined(flacco.arm) && isUndefined(flacco.core)) return NULL_SAGITTAL

    return {
        ...flacco,
        core: {
            ...flacco.core,
            aim: Aim.UP,
            shafts: Shafts.SINGLE,
        },
    }
}

export {
    computeSagittalFromFlacco,
}
