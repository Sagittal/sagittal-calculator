import { computeRoughNumberMonzo, deepEquals, Id, invertMonzo, Monzo } from "../../general"
import { JI_SYMBOLS } from "./jiSymbols"
import { JiSymbol } from "./types"

const computeNotatingJiSymbolIds = (monzo: Monzo): Array<Id<JiSymbol>> => {
    const notatingJiSymbols: Array<Id<JiSymbol>> = []
    const fiveRoughMonzo = computeRoughNumberMonzo(monzo, 5)

    JI_SYMBOLS.forEach(symbol => {
        const fiveRoughPrimaryCommaMonzo = computeRoughNumberMonzo(symbol.primaryComma.monzo, 5)

        if (deepEquals(fiveRoughMonzo, fiveRoughPrimaryCommaMonzo) || deepEquals(fiveRoughMonzo, invertMonzo(fiveRoughPrimaryCommaMonzo))) {
            notatingJiSymbols.push(symbol.id)
        }
    })

    return notatingJiSymbols
}

export {
    computeNotatingJiSymbolIds,
}
