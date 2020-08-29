import { analyzeComma } from "./comma"
import { getSagittalComma } from "./getSagittalComma"
import { MAX_SINGLE_SHAFT_CENTS } from "./intervals"
import {
    Bound,
    BoundedSymbolIdWithDistances,
    BoundedSymbolIdWithDistancesPair,
    BoundedSymbolPositions,
    BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel,
    BOUNDS,
    computeBoundedJiSymbolPositions,
    computeInaDistance,
    computeInaMidpoints,
    computeLevelCommaMeans,
    computeNotatingJiSymbolIds,
    computeSizeCategoryBoundsWithinMaximumPosition,
    getJiSymbol,
    JI_SYMBOLS,
    JiSymbol,
    Level,
    LEVEL_BOUNDED_SYMBOLS,
    LEVEL_EDAS,
    LEVELS,
    LEVELS_BOUNDS,
    LEVELS_SYMBOL_IDS,
    Mina,
    Tina,
    TINA,
    unicodeFromAscii,
} from "./ji"
import { computeSmileyFromAscii } from "./smiley"
import { SYMBOL_SETS } from "./symbolSets"
import { SagittalComma, SymbolLongAscii } from "./types"

// TODO: okay here's what you need to do: you've thought about this before, but I now think it is right
//  you gotta rename "notations" to "sagittal" and then nest notations underneath it
//  and then have as a sibling to notations, "N2D3P9", and "commaName", and "apotomeSlope" at top level

export {
    BOUNDS,
    Bound,
    Level,
    LEVELS,
    TINA,
    computeInaDistance,
    computeBoundedJiSymbolPositions,
    MAX_SINGLE_SHAFT_CENTS,
    LEVEL_BOUNDED_SYMBOLS,
    BoundedSymbolIdWithDistances,
    BoundIdWithBoundedSymbolIdWithDistancesPairsByLevel,
    SymbolLongAscii,
    Mina,
    LEVELS_BOUNDS,
    LEVEL_EDAS,
    LEVELS_SYMBOL_IDS,
    JiSymbol,
    unicodeFromAscii,
    computeInaMidpoints,
    computeLevelCommaMeans,
    computeSizeCategoryBoundsWithinMaximumPosition,
    JI_SYMBOLS,
    computeSmileyFromAscii,
    computeNotatingJiSymbolIds,
    getJiSymbol,
    BoundedSymbolIdWithDistancesPair,
    SYMBOL_SETS,
    BoundedSymbolPositions,
    Tina,
    SagittalComma,
    analyzeComma,
    getSagittalComma,
}
