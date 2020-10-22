import {deepEquals, isUndefined, stringify} from "../../../general"
import {CORES} from "./cores"
import {Aim, CoreName, Shafts, Symbol} from "./types"

const apotomeShift = (symbol: Symbol): Symbol => {
    if (symbol.core?.aim === Aim.DOWN) {
        throw new Error(`Do not shift symbols aiming down; tried to shift ${stringify(symbol)}`)
    }
    if (symbol.core?.shafts === Shafts.TRIPLE || symbol.core?.shafts === Shafts.EX) {
        throw new Error(`Do not shift symbols which are already in the 2nd apotome section ${stringify(symbol)}`)
    }

    if (isUndefined(symbol.core) || deepEquals(symbol.core, CORES[CoreName.BARE_SHAFT_UP])) {
        return {...symbol, core: CORES[CoreName.DOUBLE_BARB_DOUBLE_UP]}
    }

    return {
        ...symbol,
        core: {
            ...symbol.core,
            shafts: symbol.core.shafts === Shafts.SINGLE ? Shafts.TRIPLE : Shafts.EX,
        },
    }
}

export {
    apotomeShift,
}
