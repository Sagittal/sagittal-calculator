import { LEVELS_SYMBOLS } from "./levelsSymbols"
import { computeNeighborPositions } from "./neighborPositions"
import { Level, SagittalSymbol } from "./types"
import { Cents } from "../../utilities/types"

const computeBoundedSymbolPositions = (position: Cents, level: Level): [Cents | undefined, Cents | undefined] => {
    const levelSymbols: SagittalSymbol[] = LEVELS_SYMBOLS[ level ]

    const levelSymbolPositions = levelSymbols.map(levelSymbol => levelSymbol.primaryComma.position)

    return computeNeighborPositions(position, levelSymbolPositions)
}

export {
    computeBoundedSymbolPositions,
}
