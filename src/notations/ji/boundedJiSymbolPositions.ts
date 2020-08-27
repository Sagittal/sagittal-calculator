import { Cents, Id } from "../../general"
import { getSagittalComma } from "../getComma"
import { getJiSymbol } from "./jiSymbol"
import { LEVELS_SYMBOL_IDS } from "./levelsJiSymbolIds"
import { computeNeighborPositions } from "./neighborPositions"
import { BoundedSymbolPositions, JiSymbol, Level } from "./types"

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
