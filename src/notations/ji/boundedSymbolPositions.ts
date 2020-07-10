import {LEVELS_SYMBOLS} from "./levelsSymbols"
import {computeNeighborPositions} from "./neighborPositions"

const computeBoundedSymbolPositions = (position, level): any => {
    const levelSymbols = LEVELS_SYMBOLS[level]

    const levelSymbolPositions = levelSymbols.map(levelSymbol => levelSymbol.primaryComma.position)

    return computeNeighborPositions(position, levelSymbolPositions)
}

export {
    computeBoundedSymbolPositions,
}
