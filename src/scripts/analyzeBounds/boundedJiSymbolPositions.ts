import { Cents, Id } from "../../general"
import {
    getJiSymbol,
    getSagittalComma,
    JiSymbol,
    Level,
    LEVELS_SYMBOL_IDS,
} from "../../sagittal"
import { computeNeighborPositions } from "./neighborPositions"
import { BoundedSymbolPositions } from "./types"

const computeBoundedJiSymbolPositions = (position: Cents, level: Level): BoundedSymbolPositions => {
    const levelSymbolIds: Array<Id<JiSymbol>> = LEVELS_SYMBOL_IDS[ level ]

    const levelSymbolPositions: Cents[] = levelSymbolIds.map(levelSymbolId => {
        const jiSymbol = getJiSymbol(levelSymbolId)
        const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)

        return primaryComma.cents
    })

    return computeNeighborPositions(position, levelSymbolPositions)
}

export {
    computeBoundedJiSymbolPositions,
}
