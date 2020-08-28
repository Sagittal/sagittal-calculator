import { Cents } from "../../general"
import { getSagittalComma } from "../getComma"
import { SymbolLongAscii } from "../types"
import { getJiSymbol } from "./jiSymbol"
import { LEVELS_SYMBOL_IDS } from "./levelsJiSymbolIds"
import { computeNeighborPositionIndices } from "./neighborPositionIndices"
import { Level } from "./types"

const computeBoundedJiSymbols = (position: Cents, level: Level): [SymbolLongAscii, SymbolLongAscii] => {
    const levelSymbolIds = LEVELS_SYMBOL_IDS[ level ]
    const levelSymbols = levelSymbolIds.map(getJiSymbol)
    const levelPrimaryCommaIds = levelSymbols.map(symbol => symbol.primaryCommaId)
    const levelPrimaryCommas = levelPrimaryCommaIds.map(getSagittalComma)
    const levelSymbolPositions = levelPrimaryCommas.map(primaryComma => primaryComma.cents)
    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] =
        computeNeighborPositionIndices(position, levelSymbolPositions)

    return [
        levelSymbols[ lesserNeighborPositionIndex ] ?
            levelSymbols[ lesserNeighborPositionIndex ].ascii :
            "" as SymbolLongAscii,
        levelSymbols[ greaterNeighborPositionIndex ] ?
            levelSymbols[ greaterNeighborPositionIndex ].ascii :
            "" as SymbolLongAscii,
    ]
}

export {
    computeBoundedJiSymbols,
}