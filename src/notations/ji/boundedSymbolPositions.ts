import { Cents } from "../../general"
import { LEVELS_SYMBOLS } from "./levelsSymbols"
import { computeNeighborPositions } from "./neighborPositions"
import { Level, SagittalSymbol } from "./types"

const computeBoundedSymbolPositions = (position: Cents, level: Level): [Cents | undefined, Cents | undefined] => {
    const levelSymbols: SagittalSymbol[] = LEVELS_SYMBOLS[ level ]

    const levelSymbolPositions = levelSymbols.map(levelSymbol => levelSymbol.primaryComma.cents)

    return computeNeighborPositions(position, levelSymbolPositions)
}

export {
    computeBoundedSymbolPositions,
}
