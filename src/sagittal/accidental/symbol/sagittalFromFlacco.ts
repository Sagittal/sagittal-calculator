import {isUndefined} from "../../../general"
import {Flacco} from "../flacco"
import {Aim, NULL_SAGITTAL, Sagittal, Shafts} from "../symbol"

const computeSagittalFromFlacco = ({id, ...symbolicProperties}: Flacco): Sagittal => {
    if (isUndefined(symbolicProperties.arm) && isUndefined(symbolicProperties.core)) return NULL_SAGITTAL

    return {
        ...symbolicProperties,
        core: {
            ...symbolicProperties.core,
            aim: Aim.UP,
            shafts: Shafts.SINGLE,
        },
    }
}

export {
    computeSagittalFromFlacco,
}
