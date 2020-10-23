import {deepClone, isUndefined} from "../../../general"
import {Aim, Symbol} from "./types"

const flipSymbol = (symbol: Symbol): Symbol => {
    const flippedSymbol = deepClone(symbol)

    if (!isUndefined(flippedSymbol.core)) flippedSymbol.core.aim = flippedSymbol.core.aim === Aim.UP ? Aim.DOWN : Aim.UP

    return flippedSymbol
}

export {
    flipSymbol,
}
