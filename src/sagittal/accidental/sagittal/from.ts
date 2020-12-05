import {isUndefined, Maybe} from "@sagittal/general"
import {getSymbolClass, SymbolClass, SymbolClassId} from "../../notation"
import {Flacco, getFlacco} from "../flacco"
import {Sagittal, Shafts} from "./types"

const computeSagittalFromSymbolClassId = (symbolClassId: SymbolClassId): Maybe<Sagittal> => {
    const symbolClass = getSymbolClass(symbolClassId)

    return computeSagittalFromSymbolClass(symbolClass)
}

const computeSagittalFromFlacco = (flacco: Flacco): Maybe<Sagittal> => {
    if (isUndefined(flacco.arm) && isUndefined(flacco.left) && isUndefined(flacco.right)) return

    return {
        ...flacco,
        shafts: Shafts.SINGLE,
    }
}

const computeSagittalFromSymbolClass = (symbolClass: SymbolClass): Maybe<Sagittal> => {
    const flacco = getFlacco(symbolClass.flaccoId)

    return computeSagittalFromFlacco(flacco)
}

export {
    computeSagittalFromSymbolClassId,
    computeSagittalFromFlacco,
    computeSagittalFromSymbolClass,
}
