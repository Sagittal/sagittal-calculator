import { finalElement, Id, sort } from "../../../general"
import { SymbolClass } from "../types"
import { JiNotationLevel } from "./types"

const MEDIUM_LEVEL_SYMBOL_CLASS_IDS = [
    0, 12, 20, 30, 44, 58, 70, 85, 93, 105, 115, 132, 142
] as Array<Id<SymbolClass>>

const HIGH_LEVEL_SYMBOL_CLASS_IDS = sort([
    ...MEDIUM_LEVEL_SYMBOL_CLASS_IDS,
    7, 18, 25, 34, 36, 41, 52, 65,
    // 65 is an exception; all other symbol classes introduced in the Athenian symbol subset are in the Medium level
    67, 76, 82, 87, 100, 107, 118, 123, 129, 140, 147,
]) as Array<Id<SymbolClass>>

const ULTRA_LEVEL_SYMBOL_CLASS_IDS = sort([
    ...HIGH_LEVEL_SYMBOL_CLASS_IDS,
    3, 4, 14, 16, 24, 26, 40, 47, 48, 54, 62, 66,
    74, 80, 81, 89, 97, 109, 111, 120, 127, 136, 138,
]) as Array<Id<SymbolClass>>

const EXTREME_LEVEL_SYMBOL_CLASS_IDS = sort([
    ...ULTRA_LEVEL_SYMBOL_CLASS_IDS,
    1, 2, 5, 6, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 23,
    27, 28, 29, 31, 32, 33, 35, 37, 38, 39, 42, 43, 45, 46,
    49, 50, 51, 53, 55, 56, 57, 59, 60, 61, 63, 64, 68, 69,
    71, 72, 73, 75, 77, 79, 83, 84, 86, 88, 90, 91, 92, 94,
    95, 96, 98, 99, 101, 102, 103, 104, 106, 108, 110, 112,
    113, 114, 116, 117, 119, 121, 122, 124, 125, 126, 128,
    130, 131, 133, 134, 135, 137, 139, 141, 143, 144, 145,
    146, 148, 149,
]) as Array<Id<SymbolClass>>

const INSANE_LEVEL_SYMBOL_CLASS_IDS = sort([
    ...EXTREME_LEVEL_SYMBOL_CLASS_IDS,
]) as Array<Id<SymbolClass>>

const JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS: Record<JiNotationLevel, Array<Id<SymbolClass>>> = {
    [ JiNotationLevel.MEDIUM ]: MEDIUM_LEVEL_SYMBOL_CLASS_IDS,
    [ JiNotationLevel.HIGH ]: HIGH_LEVEL_SYMBOL_CLASS_IDS,
    [ JiNotationLevel.ULTRA ]: ULTRA_LEVEL_SYMBOL_CLASS_IDS,
    [ JiNotationLevel.EXTREME ]: EXTREME_LEVEL_SYMBOL_CLASS_IDS,
    [ JiNotationLevel.INSANE ]: INSANE_LEVEL_SYMBOL_CLASS_IDS,
}

const JI_NOTATION = finalElement(Object.values(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS))

export {
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
    JI_NOTATION,
}
