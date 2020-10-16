import { finalElement, Id, sort } from "../../../general"
import { CommaClass } from "../types"
import { JiNotationLevel } from "./types"

const SAGITTAL_COMPATIBLE_COMMA_CLASS_IDS: Array<Id<CommaClass>> = [
    0,
] as Array<Id<CommaClass>>

const MEDIUM_LEVEL_COMMA_CLASS_IDS = [
    ...SAGITTAL_COMPATIBLE_COMMA_CLASS_IDS,
    12, 20, 30, 44, 58, 70, 84, 92, 104, 114,
] as Array<Id<CommaClass>>

const HIGH_LEVEL_COMMA_CLASS_IDS = sort([
    ...MEDIUM_LEVEL_COMMA_CLASS_IDS,
    7, 18, 25, 34, 36, 41, 52, 65,
    // 67 is an exception; all other comma classes whose representative flacco is introduced in the 
    // Athenian flacco subset are in the Medium level
    67, 76, 81, 86, 99, 106, 117, 122,
]) as Array<Id<CommaClass>>

const ULTRA_LEVEL_COMMA_CLASS_IDS = sort([
    ...HIGH_LEVEL_COMMA_CLASS_IDS,
    3, 4, 14, 16, 24, 26, 40, 47, 48, 54, 62, 66,
    74, 79, 80, 88, 96, 108, 110, 119,
]) as Array<Id<CommaClass>>

const EXTREME_LEVEL_COMMA_CLASS_IDS = sort([
    ...ULTRA_LEVEL_COMMA_CLASS_IDS,
    1, 2, 5, 6, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 23,
    27, 28, 29, 31, 32, 33, 35, 37, 38, 39, 42, 43, 45, 46,
    49, 50, 51, 53, 55, 56, 57, 59, 60, 61, 63, 64, 68, 69,
    71, 72, 73, 75, 77, 78, 82, 83, 85, 87, 89, 90, 91, 93,
    94, 95, 97, 98, 100, 101, 102, 103, 105, 107, 109, 111,
    112, 113, 115, 116, 118, 120, 121,
]) as Array<Id<CommaClass>>

const INSANE_LEVEL_COMMA_CLASS_IDS = sort([
    ...EXTREME_LEVEL_COMMA_CLASS_IDS,
]) as Array<Id<CommaClass>>

const JI_NOTATION_LEVELS_COMMA_CLASS_IDS: Record<JiNotationLevel, Array<Id<CommaClass>>> = {
    [ JiNotationLevel.MEDIUM ]: MEDIUM_LEVEL_COMMA_CLASS_IDS,
    [ JiNotationLevel.HIGH ]: HIGH_LEVEL_COMMA_CLASS_IDS,
    [ JiNotationLevel.ULTRA ]: ULTRA_LEVEL_COMMA_CLASS_IDS,
    [ JiNotationLevel.EXTREME ]: EXTREME_LEVEL_COMMA_CLASS_IDS,
    [ JiNotationLevel.INSANE ]: INSANE_LEVEL_COMMA_CLASS_IDS,
}

const JI_NOTATION = finalElement(Object.values(JI_NOTATION_LEVELS_COMMA_CLASS_IDS))

export {
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
    JI_NOTATION,
}
