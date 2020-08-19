import { Cents } from "../../general"
import { LEVELS_SYMBOL_IDS } from "./levelsSymbolIds"
import { computeNeighborPositionIndices } from "./neighborPositionIndices"
import { Level } from "./types"
import { getSymbol } from "./symbol"

const computeBoundedSymbols = (position: Cents, level: Level) => {
    const levelSymbolIds = LEVELS_SYMBOL_IDS[ level ]
    const levelSymbols = levelSymbolIds.map(getSymbol)
    const levelSymbolPositions = levelSymbols.map(levelSymbol => levelSymbol.primaryComma.cents)
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(position, levelSymbolPositions)

    return [
        levelSymbols[ lesserNeighborPositionIndex ] ? levelSymbols[ lesserNeighborPositionIndex ].ascii : "",
        levelSymbols[ greaterNeighborPositionIndex ] ? levelSymbols[ greaterNeighborPositionIndex ].ascii : "",
    ]
}

export {
    computeBoundedSymbols,
}
