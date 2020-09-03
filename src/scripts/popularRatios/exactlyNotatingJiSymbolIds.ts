import { computeRoughNumberMonzo, deepEquals, FIVE_ROUGHNESS, Id, invertMonzo, Monzo } from "../../general"
import { getSagittalComma, JiSymbol, JI_SYMBOLS } from "../../sagittal"

// TODO: perhaps this needs to be reconciled with computeNotatingCommas
const computeExactlyNotatingJiSymbolIds = (monzo: Monzo): Array<Id<JiSymbol>> => {
    const notatingJiSymbols: Array<Id<JiSymbol>> = []
    const fiveRoughMonzo = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS)

    JI_SYMBOLS.forEach(jiSymbol => {
        const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)
        const fiveRoughPrimaryCommaMonzo = computeRoughNumberMonzo(primaryComma.monzo, FIVE_ROUGHNESS)

        if (
            deepEquals(fiveRoughMonzo, fiveRoughPrimaryCommaMonzo) ||
            deepEquals(fiveRoughMonzo, invertMonzo(fiveRoughPrimaryCommaMonzo))
        ) {
            notatingJiSymbols.push(jiSymbol.id)
        }
    })

    return notatingJiSymbols
}

export {
    computeExactlyNotatingJiSymbolIds,
}
