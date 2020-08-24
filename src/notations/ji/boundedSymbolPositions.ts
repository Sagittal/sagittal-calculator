import { Cents, Id } from "../../general"
import { LEVELS_SYMBOL_IDS } from "./levelsSymbolIds"
import { computeNeighborPositions } from "./neighborPositions"
import { getSymbol } from "./symbol"
import { BoundedSymbolPositions, JiSymbol, Level } from "./types"

const computeBoundedSymbolPositions = (position: Cents, level: Level): BoundedSymbolPositions => {
    const levelSymbolIds: Array<Id<JiSymbol>> = LEVELS_SYMBOL_IDS[ level ]

    const levelSymbolPositions: Cents[] = levelSymbolIds.map(levelSymbolId => {
        const symbol = getSymbol(levelSymbolId)

        return symbol.primaryComma.cents
    })

    return computeNeighborPositions(position, levelSymbolPositions)
}

export {
    computeBoundedSymbolPositions,
}
