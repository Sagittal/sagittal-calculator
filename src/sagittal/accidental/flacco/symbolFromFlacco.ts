import {isUndefined} from "../../../general"
import {ABSENCE_OF_A_SYMBOL, Aim, Shafts, Symbol} from "../symbol"
import {Flacco} from "./types"

const computeSymbolFromFlacco = ({id, ...symbolicProperties}: Flacco): Symbol => {
    if (isUndefined(symbolicProperties.accents) && isUndefined(symbolicProperties.core)) return ABSENCE_OF_A_SYMBOL

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
