import { Cents, Id } from "../../general"
import { LEVELS_SYMBOL_IDS } from "./levelsJiSymbolIds"
import { computeNeighborPositions } from "./neighborPositions"
import { getJiSymbol } from "./jiSymbol"
import { BoundedSymbolPositions, JiSymbol, Level } from "./types"

const computeBoundedJiSymbolPositions = (position: Cents, level: Level): BoundedSymbolPositions => {
    const levelSymbolIds: Array<Id<JiSymbol>> = LEVELS_SYMBOL_IDS[ level ]

    const levelSymbolPositions: Cents[] = levelSymbolIds.map(levelSymbolId => {
        const symbol = getJiSymbol(levelSymbolId)

        return symbol.primaryComma.cents
    })

    return computeNeighborPositions(position, levelSymbolPositions)
}

export {
    computeBoundedJiSymbolPositions,
}
