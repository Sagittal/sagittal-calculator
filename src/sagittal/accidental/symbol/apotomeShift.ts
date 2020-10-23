import {deepEquals, isUndefined, stringify} from "../../../general"
import {FlagComboName} from "../flacco"
import {getCore} from "./core"
import {Aim, Shafts, Symbol} from "./types"

const apotomeShift = (symbol: Symbol): Symbol => {
    if (symbol.core?.aim === Aim.DOWN) {
        throw new Error(`Do not shift symbols aiming down; tried to shift ${stringify(symbol)}`)
    }
    if (symbol.core?.shafts === Shafts.TRIPLE || symbol.core?.shafts === Shafts.EX) {
        throw new Error(`Do not shift symbols which are already in the 2nd apotome section ${stringify(symbol)}`)
    }

    if (isUndefined(symbol.core) || deepEquals(symbol.core, getCore(FlagComboName.BARE_SHAFT))) {
        return {...symbol, core: getCore(FlagComboName.DOUBLE_BARB, Shafts.DOUBLE)}
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
