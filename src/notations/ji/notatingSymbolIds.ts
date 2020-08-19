import { computeRoughNumberMonzo, deepEquals, Id, invertMonzo, Monzo } from "../../general"
import { JiSymbol } from "./types"
import { JI_SYMBOLS } from "./symbols"

const computeNotatingSymbolIds = (monzo: Monzo): Array<Id<JiSymbol>> => {
    const notatingSymbols: Array<Id<JiSymbol>> = []
    const fiveRoughMonzo = computeRoughNumberMonzo(monzo, 5)

    JI_SYMBOLS.forEach(symbol => {
        const fiveRoughPrimaryCommaMonzo = computeRoughNumberMonzo(symbol.primaryComma.monzo, 5)

        if (deepEquals(fiveRoughMonzo, fiveRoughPrimaryCommaMonzo) || deepEquals(fiveRoughMonzo, invertMonzo(fiveRoughPrimaryCommaMonzo))) {
            notatingSymbols.push(symbol.id)
        }
    })

    return notatingSymbols
}

export {
    computeNotatingSymbolIds,
}
