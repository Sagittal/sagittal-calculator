import {isUndefined, Maybe} from "../../../general"
import {getSymbolClass, SymbolClassId} from "../../notation"
import {Flacco, getFlacco} from "../flacco"
import {Sagittal, Shafts} from "./types"

const computeSagittalFromSymbolClassId = (symbolClassId: SymbolClassId): Maybe<Sagittal> => {
    const symbolClass = getSymbolClass(symbolClassId)
    const flacco = getFlacco(symbolClass.flaccoId)

    return computeSagittalFromFlacco(flacco)
}

const computeSagittalFromFlacco = (flacco: Flacco): Maybe<Sagittal> => {
    if (isUndefined(flacco.arm) && isUndefined(flacco.left) && isUndefined(flacco.right)) return

    return {
        ...flacco,
        shafts: Shafts.SINGLE,
    }
}

export {
    computeSagittalFromSymbolClassId,
    computeSagittalFromFlacco,
}
