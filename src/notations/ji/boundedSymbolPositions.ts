import { Cents, Id } from "../../general"
import { LEVELS_SYMBOL_IDS } from "./levelsSymbolIds"
import { computeNeighborPositions } from "./neighborPositions"
import { JiSymbol, Level } from "./types"
import { getSymbol } from "./symbol"

const computeBoundedSymbolPositions = (position: Cents, level: Level): [Cents | undefined, Cents | undefined] => {
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
