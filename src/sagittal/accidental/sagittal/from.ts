import {isUndefined} from "../../../general"
import {getSymbolClass, SymbolClassId} from "../../notation"
import {Flacco, getFlacco} from "../flacco"
import {NULL_SAGITTAL} from "./constants"
import {NullSagittal, Sagittal, Shafts} from "./types"

const computeSagittalFromSymbolClassId = (symbolClassId: SymbolClassId): Sagittal | NullSagittal => {
    const symbolClass = getSymbolClass(symbolClassId)
    const flacco = getFlacco(symbolClass.flaccoId)

    return computeSagittalFromFlacco(flacco)
}

const computeSagittalFromFlacco = (flacco: Flacco): Sagittal | NullSagittal => {
    if (isUndefined(flacco.arm) && isUndefined(flacco.left) && isUndefined(flacco.right)) return NULL_SAGITTAL

    return {
        ...flacco,
        shafts: Shafts.SINGLE,
    }
}

export {
    computeSagittalFromSymbolClassId,
    computeSagittalFromFlacco,
}
