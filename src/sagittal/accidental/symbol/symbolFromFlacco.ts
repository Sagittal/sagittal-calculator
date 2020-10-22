import {isUndefined} from "../../../general"
import {Flacco} from "../flacco"
import {ABSENCE_OF_A_SYMBOL, Aim, Shafts, Symbol} from "../symbol"

const computeSymbolFromFlacco = ({id, ...symbolicProperties}: Flacco): Symbol => {
    if (isUndefined(symbolicProperties.arm) && isUndefined(symbolicProperties.core)) return ABSENCE_OF_A_SYMBOL

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
    computeSymbolFromFlacco,
}
