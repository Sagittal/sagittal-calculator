import {computeKeyPath, finalElement, Index, sort} from "@sagittal/general"
import {CommaClassId} from "../../notation"
import {JiNotationLevelId} from "./types"

// TODO: POST-NOTATION-GENERATION: JI NOTATION CLEAN-UP
//  So... this whole module should be supplanted once the notation generation is mature? Or it could become a test?
//  And I wonder what else in here would go that direction...
//  Really I guess in the end all that should be defined here is fancy stuff that needs to operate *across* the
//  JI notations, like secondary comma zone, introducing level, etc.

const SAGITTAL_COMPATIBLE_COMMA_CLASS_IDS: Array<[Index<CommaClassId>, CommaClassId]> = [
    [0 as Index<CommaClassId>, CommaClassId._1_u],
]

const MEDIUM_LEVEL_COMMA_CLASS_IDS: Array<[Index<CommaClassId>, CommaClassId]> = [
    ...SAGITTAL_COMPATIBLE_COMMA_CLASS_IDS,
    [12 as Index<CommaClassId>, CommaClassId._5_V_7_k],
    [20 as Index<CommaClassId>, CommaClassId._7_V_11_k],
    [30 as Index<CommaClassId>, CommaClassId._17_C],
    [44 as Index<CommaClassId>, CommaClassId._1_V_5_C],
    [58 as Index<CommaClassId>, CommaClassId._1_V_7_C],
    [70 as Index<CommaClassId>, CommaClassId._7_V_11_C],
    [84 as Index<CommaClassId>, CommaClassId._5_V_11_S],
    [92 as Index<CommaClassId>, CommaClassId._1_V_25_S],
    [104 as Index<CommaClassId>, CommaClassId._1_V_35_M],
    [114 as Index<CommaClassId>, CommaClassId._11_M],
]

const HIGH_LEVEL_COMMA_CLASS_IDS: Array<[Index<CommaClassId>, CommaClassId]> = [
    ...MEDIUM_LEVEL_COMMA_CLASS_IDS,
    [7 as Index<CommaClassId>, CommaClassId._19_s],
    [18 as Index<CommaClassId>, CommaClassId._1_V_17_k],
    [25 as Index<CommaClassId>, CommaClassId._1_V_143_C],
    [34 as Index<CommaClassId>, CommaClassId._23_C],
    [36 as Index<CommaClassId>, CommaClassId._11_V_49_C],
    [41 as Index<CommaClassId>, CommaClassId._1_V_19_C],
    [52 as Index<CommaClassId>, CommaClassId._19_V_5_C],
    [65 as Index<CommaClassId>, CommaClassId._19_V_7_C],
    // 67 is an exception; all other comma classes whose representative symbol is introduced in the
    // Athenian symbol subset are in the Medium level
    [67 as Index<CommaClassId>, CommaClassId._55_C],
    [76 as Index<CommaClassId>, CommaClassId._49_S],
    [81 as Index<CommaClassId>, CommaClassId._23_V_5_S],
    [86 as Index<CommaClassId>, CommaClassId._23_S],
    [99 as Index<CommaClassId>, CommaClassId._13_V_5_M],
    [106 as Index<CommaClassId>, CommaClassId._11_V_19_M],
    [117 as Index<CommaClassId>, CommaClassId._1_V_49_M],
    [122 as Index<CommaClassId>, CommaClassId._5_V_49_M],
]

const ULTRA_LEVEL_COMMA_CLASS_IDS: Array<[Index<CommaClassId>, CommaClassId]> = [
    ...HIGH_LEVEL_COMMA_CLASS_IDS,
    [3 as Index<CommaClassId>, CommaClassId._19_V_5_n],
    [4 as Index<CommaClassId>, CommaClassId._5_s],
    [14 as Index<CommaClassId>, CommaClassId._1_V_5_17_k],
    [16 as Index<CommaClassId>, CommaClassId._25_V_7_k],
    [24 as Index<CommaClassId>, CommaClassId._35_V_11_k],
    [26 as Index<CommaClassId>, CommaClassId._17_V_5_C],
    [40 as Index<CommaClassId>, CommaClassId._1_V_25_C],
    [47 as Index<CommaClassId>, CommaClassId._19_V_25_C],
    [48 as Index<CommaClassId>, CommaClassId._3_C],
    [54 as Index<CommaClassId>, CommaClassId._1_V_35_C],
    [62 as Index<CommaClassId>, CommaClassId._5_V_7_C],
    [66 as Index<CommaClassId>, CommaClassId._7_V_55_C],
    [74 as Index<CommaClassId>, CommaClassId._25_V_49_S],
    [79 as Index<CommaClassId>, CommaClassId._1_V_11_S],
    [80 as Index<CommaClassId>, CommaClassId._5_7_P_2_S],
    [88 as Index<CommaClassId>, CommaClassId._1_V_125_S],
    [96 as Index<CommaClassId>, CommaClassId._13_V_19_S],
    [108 as Index<CommaClassId>, CommaClassId._1_V_7_M],
    [110 as Index<CommaClassId>, CommaClassId._11_V_5_M],
    [119 as Index<CommaClassId>, CommaClassId._55_M],
]

const EXTREME_LEVEL_COMMA_CLASS_IDS: Array<[Index<CommaClassId>, CommaClassId]> = [
    ...ULTRA_LEVEL_COMMA_CLASS_IDS,
    [1 as Index<CommaClassId>, CommaClassId._1_V_5_7_13_n],
    [2 as Index<CommaClassId>, CommaClassId._65_V_77_n],
    [5 as Index<CommaClassId>, CommaClassId._1_V_7_13_s],
    [6 as Index<CommaClassId>, CommaClassId._19_V_5_P_4_7_s],
    [8 as Index<CommaClassId>, CommaClassId._49_V_55_s],
    [9 as Index<CommaClassId>, CommaClassId._5_7_11_k],
    [10 as Index<CommaClassId>, CommaClassId._11_V_13_k],
    [11 as Index<CommaClassId>, CommaClassId._31_V_11_k],
    [13 as Index<CommaClassId>, CommaClassId._7_P_3_V_5_k],
    [15 as Index<CommaClassId>, CommaClassId._1_V_5_P_2_7_P_2_k],
    [17 as Index<CommaClassId>, CommaClassId._7_P_3_k],
    [19 as Index<CommaClassId>, CommaClassId._11_P_4_k],
    [21 as Index<CommaClassId>, CommaClassId._5_P_2_11_k],
    [22 as Index<CommaClassId>, CommaClassId._49_V_13_k],
    [23 as Index<CommaClassId>, CommaClassId._1_V_5_P_2_7_P_3_k],
    [27 as Index<CommaClassId>, CommaClassId._11_V_23_C],
    [28 as Index<CommaClassId>, CommaClassId._7_V_125_C],
    [29 as Index<CommaClassId>, CommaClassId._5_7_P_2_C],
    [31 as Index<CommaClassId>, CommaClassId._143_V_7_C],
    [32 as Index<CommaClassId>, CommaClassId._7_V_25_C],
    [33 as Index<CommaClassId>, CommaClassId._5_P_2_7_P_2_C],
    [35 as Index<CommaClassId>, CommaClassId._1_V_13_P_2_C],
    [37 as Index<CommaClassId>, CommaClassId._11_V_31_C],
    [38 as Index<CommaClassId>, CommaClassId._17_V_7_C],
    [39 as Index<CommaClassId>, CommaClassId._7_13_V_5_C],
    [42 as Index<CommaClassId>, CommaClassId._1_V_11_23_C],
    [43 as Index<CommaClassId>, CommaClassId._7_13_C],
    [45 as Index<CommaClassId>, CommaClassId._5_P_3_7_C],
    [46 as Index<CommaClassId>, CommaClassId._25_V_13_C],
    [49 as Index<CommaClassId>, CommaClassId._5_P_4_7_C],
    [50 as Index<CommaClassId>, CommaClassId._77_V_5_C],
    [51 as Index<CommaClassId>, CommaClassId._125_V_13_C],
    [53 as Index<CommaClassId>, CommaClassId._13_C],
    [55 as Index<CommaClassId>, CommaClassId._77_C],
    [56 as Index<CommaClassId>, CommaClassId._11_V_65_C],
    [57 as Index<CommaClassId>, CommaClassId._65_C],
    [59 as Index<CommaClassId>, CommaClassId._5_P_4_C],
    [60 as Index<CommaClassId>, CommaClassId._11_V_13_C],
    [61 as Index<CommaClassId>, CommaClassId._5_P_2_13_C],
    [63 as Index<CommaClassId>, CommaClassId._5_P_5_C],
    [64 as Index<CommaClassId>, CommaClassId._5_17_V_11_C],
    [68 as Index<CommaClassId>, CommaClassId._11_V_7_13_C],
    [69 as Index<CommaClassId>, CommaClassId._125_V_23_C],
    [71 as Index<CommaClassId>, CommaClassId._13_V_17_S],
    [72 as Index<CommaClassId>, CommaClassId._17_V_25_S],
    [73 as Index<CommaClassId>, CommaClassId._7_V_13_19_S],
    [75 as Index<CommaClassId>, CommaClassId._31_S],
    [77 as Index<CommaClassId>, CommaClassId._17_V_5_S],
    [78 as Index<CommaClassId>, CommaClassId._11_V_23_S],
    [82 as Index<CommaClassId>, CommaClassId._7_V_13_S],
    [83 as Index<CommaClassId>, CommaClassId._11_V_17_S],
    [85 as Index<CommaClassId>, CommaClassId._1_V_7_11_13_S],
    [87 as Index<CommaClassId>, CommaClassId._7_13_V_25_S],
    [89 as Index<CommaClassId>, CommaClassId._35_S],
    [90 as Index<CommaClassId>, CommaClassId._17_V_7_S],
    [91 as Index<CommaClassId>, CommaClassId._7_13_V_5_S],
    [93 as Index<CommaClassId>, CommaClassId._5_P_2_7_S],
    [94 as Index<CommaClassId>, CommaClassId._5_V_13_S],
    [95 as Index<CommaClassId>, CommaClassId._49_V_17_S],
    [97 as Index<CommaClassId>, CommaClassId._77_V_25_M],
    [98 as Index<CommaClassId>, CommaClassId._25_V_13_M],
    [100 as Index<CommaClassId>, CommaClassId._1_V_5_P_2_7_M],
    [101 as Index<CommaClassId>, CommaClassId._37_M],
    [102 as Index<CommaClassId>, CommaClassId._11_V_5_P_2_13_M],
    [103 as Index<CommaClassId>, CommaClassId._13_M],
    [105 as Index<CommaClassId>, CommaClassId._125_M],
    [107 as Index<CommaClassId>, CommaClassId._65_M],
    [109 as Index<CommaClassId>, CommaClassId._5_P_4_M],
    [111 as Index<CommaClassId>, CommaClassId._17_V_11_M],
    [112 as Index<CommaClassId>, CommaClassId._5_V_23_M],
    [113 as Index<CommaClassId>, CommaClassId._7_V_5_P_2_11_M],
    [115 as Index<CommaClassId>, CommaClassId._5_17_V_11_M],
    [116 as Index<CommaClassId>, CommaClassId._65_V_7_M],
    [118 as Index<CommaClassId>, CommaClassId._1_V_31_M],
    [120 as Index<CommaClassId>, CommaClassId._11_V_7_13_M],
    [121 as Index<CommaClassId>, CommaClassId._5_7_17_M],
]

const INSANE_LEVEL_COMMA_CLASS_IDS = sort([
    ...EXTREME_LEVEL_COMMA_CLASS_IDS,
], {by: computeKeyPath(0)})

const shapeUpIds = (ids: Array<[Index<CommaClassId>, CommaClassId]>): CommaClassId[] =>
    sort(ids, {by: computeKeyPath(0)}).map(([_, id]: [Index<CommaClassId>, CommaClassId]): CommaClassId => id)

const JI_NOTATION_LEVELS_COMMA_CLASS_IDS: Record<JiNotationLevelId, CommaClassId[]> = {
    [JiNotationLevelId.MEDIUM]: shapeUpIds(MEDIUM_LEVEL_COMMA_CLASS_IDS),
    [JiNotationLevelId.HIGH]: shapeUpIds(HIGH_LEVEL_COMMA_CLASS_IDS),
    [JiNotationLevelId.ULTRA]: shapeUpIds(ULTRA_LEVEL_COMMA_CLASS_IDS),
    [JiNotationLevelId.EXTREME]: shapeUpIds(EXTREME_LEVEL_COMMA_CLASS_IDS),
    [JiNotationLevelId.INSANE]: shapeUpIds(INSANE_LEVEL_COMMA_CLASS_IDS),
}

const JI_NOTATION = finalElement(Object.values(JI_NOTATION_LEVELS_COMMA_CLASS_IDS))

export {
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
    JI_NOTATION,
}
