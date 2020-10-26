import {finalElement, Index, KeyPath, sort} from "../../../general"
import {CommaClassId} from "../../ji"
import {JiNotationLevel} from "./types"

// TODO: JI NOTATION, AFTER NOTATION GENERATION
//  So... this whole module should be supplanted once the notation generation is mature? Or it could become a test?
//  And I wonder what else in here would go that direction...
//  Really I guess in the end all that should be defined here is fancy stuff that needs to operate *across* the
//  JI notations, like secondary comma zone, introducing level, etc.

const SAGITTAL_COMPATIBLE_COMMA_CLASS_IDS: Array<[Index<CommaClassId>, CommaClassId]> = [
    [0 as Index<CommaClassId>, CommaClassId._1_u],
]

const MEDIUM_LEVEL_COMMA_CLASS_IDS: Array<[Index<CommaClassId>, CommaClassId]> = [
    ...SAGITTAL_COMPATIBLE_COMMA_CLASS_IDS,
    [12 as Index<CommaClassId>, CommaClassId._5_7_k],
    [20 as Index<CommaClassId>, CommaClassId._7_11_k],
    [30 as Index<CommaClassId>, CommaClassId._17_C],
    [44 as Index<CommaClassId>, CommaClassId._1_5_C],
    [58 as Index<CommaClassId>, CommaClassId._1_7_C],
    [70 as Index<CommaClassId>, CommaClassId._7_11_C],
    [84 as Index<CommaClassId>, CommaClassId._5_11_S],
    [92 as Index<CommaClassId>, CommaClassId._1_25_S],
    [104 as Index<CommaClassId>, CommaClassId._1_35_M],
    [114 as Index<CommaClassId>, CommaClassId._11_M],
]

const HIGH_LEVEL_COMMA_CLASS_IDS: Array<[Index<CommaClassId>, CommaClassId]> = [
    ...MEDIUM_LEVEL_COMMA_CLASS_IDS,
    [7 as Index<CommaClassId>, CommaClassId._19_s],
    [18 as Index<CommaClassId>, CommaClassId._1_17_k],
    [25 as Index<CommaClassId>, CommaClassId._1_143_C],
    [34 as Index<CommaClassId>, CommaClassId._23_C],
    [36 as Index<CommaClassId>, CommaClassId._11_49_C],
    [41 as Index<CommaClassId>, CommaClassId._1_19_C],
    [52 as Index<CommaClassId>, CommaClassId._19_5_C],
    [65 as Index<CommaClassId>, CommaClassId._19_7_C],
    // 67 is an exception; all other comma classes whose representative flacco is introduced in the
    // Athenian flacco subset are in the Medium level
    [67 as Index<CommaClassId>, CommaClassId._55_C],
    [76 as Index<CommaClassId>, CommaClassId._49_S],
    [81 as Index<CommaClassId>, CommaClassId._23_5_S],
    [86 as Index<CommaClassId>, CommaClassId._23_S],
    [99 as Index<CommaClassId>, CommaClassId._13_5_M],
    [106 as Index<CommaClassId>, CommaClassId._11_19_M],
    [117 as Index<CommaClassId>, CommaClassId._1_49_M],
    [122 as Index<CommaClassId>, CommaClassId._5_49_M],
]

const ULTRA_LEVEL_COMMA_CLASS_IDS: Array<[Index<CommaClassId>, CommaClassId]> = [
    ...HIGH_LEVEL_COMMA_CLASS_IDS,
    [3 as Index<CommaClassId>, CommaClassId._19_5_n],
    [4 as Index<CommaClassId>, CommaClassId._5_s],
    [14 as Index<CommaClassId>, CommaClassId._1_85_k],
    [16 as Index<CommaClassId>, CommaClassId._25_7_k],
    [24 as Index<CommaClassId>, CommaClassId._35_11_k],
    [26 as Index<CommaClassId>, CommaClassId._17_5_C],
    [40 as Index<CommaClassId>, CommaClassId._1_25_C],
    [47 as Index<CommaClassId>, CommaClassId._19_25_C],
    [48 as Index<CommaClassId>, CommaClassId._1_C],
    [54 as Index<CommaClassId>, CommaClassId._1_35_C],
    [62 as Index<CommaClassId>, CommaClassId._5_7_C],
    [66 as Index<CommaClassId>, CommaClassId._7_55_C],
    [74 as Index<CommaClassId>, CommaClassId._25_49_S],
    [79 as Index<CommaClassId>, CommaClassId._1_11_S],
    [80 as Index<CommaClassId>, CommaClassId._245_S],
    [88 as Index<CommaClassId>, CommaClassId._1_125_S],
    [96 as Index<CommaClassId>, CommaClassId._13_19_S],
    [108 as Index<CommaClassId>, CommaClassId._1_7_M],
    [110 as Index<CommaClassId>, CommaClassId._11_5_M],
    [119 as Index<CommaClassId>, CommaClassId._55_M],
]

const EXTREME_LEVEL_COMMA_CLASS_IDS: Array<[Index<CommaClassId>, CommaClassId]> = [
    ...ULTRA_LEVEL_COMMA_CLASS_IDS,
    [1 as Index<CommaClassId>, CommaClassId._1_455_n],
    [2 as Index<CommaClassId>, CommaClassId._65_77_n],
    [5 as Index<CommaClassId>, CommaClassId._1_91_s],
    [6 as Index<CommaClassId>, CommaClassId._19_4375_s],
    [8 as Index<CommaClassId>, CommaClassId._49_55_s],
    [9 as Index<CommaClassId>, CommaClassId._385_k],
    [10 as Index<CommaClassId>, CommaClassId._11_13_k],
    [11 as Index<CommaClassId>, CommaClassId._31_11_k],
    [13 as Index<CommaClassId>, CommaClassId._5_343_k],
    [15 as Index<CommaClassId>, CommaClassId._1_1225_k],
    [17 as Index<CommaClassId>, CommaClassId._343_k],
    [19 as Index<CommaClassId>, CommaClassId._14641_k],
    [21 as Index<CommaClassId>, CommaClassId._275_k],
    [22 as Index<CommaClassId>, CommaClassId._49_13_k],
    [23 as Index<CommaClassId>, CommaClassId._1_8575_k],
    [27 as Index<CommaClassId>, CommaClassId._11_23_C],
    [28 as Index<CommaClassId>, CommaClassId._7_125_C],
    [29 as Index<CommaClassId>, CommaClassId._245_C],
    [31 as Index<CommaClassId>, CommaClassId._143_7_C],
    [32 as Index<CommaClassId>, CommaClassId._7_25_C],
    [33 as Index<CommaClassId>, CommaClassId._1225_C],
    [35 as Index<CommaClassId>, CommaClassId._1_169_C],
    [37 as Index<CommaClassId>, CommaClassId._11_31_C],
    [38 as Index<CommaClassId>, CommaClassId._17_7_C],
    [39 as Index<CommaClassId>, CommaClassId._91_5_C],
    [42 as Index<CommaClassId>, CommaClassId._1_253_C],
    [43 as Index<CommaClassId>, CommaClassId._91_C],
    [45 as Index<CommaClassId>, CommaClassId._875_C],
    [46 as Index<CommaClassId>, CommaClassId._25_13_C],
    [49 as Index<CommaClassId>, CommaClassId._4375_C],
    [50 as Index<CommaClassId>, CommaClassId._77_5_C],
    [51 as Index<CommaClassId>, CommaClassId._125_13_C],
    [53 as Index<CommaClassId>, CommaClassId._13_C],
    [55 as Index<CommaClassId>, CommaClassId._77_C],
    [56 as Index<CommaClassId>, CommaClassId._11_65_C],
    [57 as Index<CommaClassId>, CommaClassId._65_C],
    [59 as Index<CommaClassId>, CommaClassId._625_C],
    [60 as Index<CommaClassId>, CommaClassId._11_13_C],
    [61 as Index<CommaClassId>, CommaClassId._325_C],
    [63 as Index<CommaClassId>, CommaClassId._3125_C],
    [64 as Index<CommaClassId>, CommaClassId._85_11_C],
    [68 as Index<CommaClassId>, CommaClassId._11_91_C],
    [69 as Index<CommaClassId>, CommaClassId._125_23_C],
    [71 as Index<CommaClassId>, CommaClassId._13_17_S],
    [72 as Index<CommaClassId>, CommaClassId._17_25_S],
    [73 as Index<CommaClassId>, CommaClassId._7_247_S],
    [75 as Index<CommaClassId>, CommaClassId._31_S],
    [77 as Index<CommaClassId>, CommaClassId._17_5_S],
    [78 as Index<CommaClassId>, CommaClassId._11_23_S],
    [82 as Index<CommaClassId>, CommaClassId._7_13_S],
    [83 as Index<CommaClassId>, CommaClassId._11_17_S],
    [85 as Index<CommaClassId>, CommaClassId._1_1001_S],
    [87 as Index<CommaClassId>, CommaClassId._91_25_S],
    [89 as Index<CommaClassId>, CommaClassId._35_S],
    [90 as Index<CommaClassId>, CommaClassId._17_7_S],
    [91 as Index<CommaClassId>, CommaClassId._91_5_S],
    [93 as Index<CommaClassId>, CommaClassId._175_S],
    [94 as Index<CommaClassId>, CommaClassId._5_13_S],
    [95 as Index<CommaClassId>, CommaClassId._49_17_S],
    [97 as Index<CommaClassId>, CommaClassId._77_25_M],
    [98 as Index<CommaClassId>, CommaClassId._25_13_M],
    [100 as Index<CommaClassId>, CommaClassId._1_175_M],
    [101 as Index<CommaClassId>, CommaClassId._37_M],
    [102 as Index<CommaClassId>, CommaClassId._11_325_M],
    [103 as Index<CommaClassId>, CommaClassId._13_M],
    [105 as Index<CommaClassId>, CommaClassId._125_M],
    [107 as Index<CommaClassId>, CommaClassId._65_M],
    [109 as Index<CommaClassId>, CommaClassId._625_M],
    [111 as Index<CommaClassId>, CommaClassId._17_11_M],
    [112 as Index<CommaClassId>, CommaClassId._5_23_M],
    [113 as Index<CommaClassId>, CommaClassId._7_275_M],
    [115 as Index<CommaClassId>, CommaClassId._85_11_M],
    [116 as Index<CommaClassId>, CommaClassId._65_7_M],
    [118 as Index<CommaClassId>, CommaClassId._1_31_M],
    [120 as Index<CommaClassId>, CommaClassId._11_91_M],
    [121 as Index<CommaClassId>, CommaClassId._595_M],
]

const INSANE_LEVEL_COMMA_CLASS_IDS = sort([
    ...EXTREME_LEVEL_COMMA_CLASS_IDS,
], { by: 0 as KeyPath })

const shapeUpIds = (ids: Array<[Index<CommaClassId>, CommaClassId]>): CommaClassId[] =>
    sort(ids, {by: 0 as KeyPath}).map(([_, id]: [Index<CommaClassId>, CommaClassId]): CommaClassId => id)

const JI_NOTATION_LEVELS_COMMA_CLASS_IDS: Record<JiNotationLevel, CommaClassId[]> = {
    [JiNotationLevel.MEDIUM]: shapeUpIds(MEDIUM_LEVEL_COMMA_CLASS_IDS),
    [JiNotationLevel.HIGH]: shapeUpIds(HIGH_LEVEL_COMMA_CLASS_IDS),
    [JiNotationLevel.ULTRA]: shapeUpIds(ULTRA_LEVEL_COMMA_CLASS_IDS),
    [JiNotationLevel.EXTREME]: shapeUpIds(EXTREME_LEVEL_COMMA_CLASS_IDS),
    [JiNotationLevel.INSANE]: shapeUpIds(INSANE_LEVEL_COMMA_CLASS_IDS),
}

const JI_NOTATION = finalElement(Object.values(JI_NOTATION_LEVELS_COMMA_CLASS_IDS))

export {
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
    JI_NOTATION,
}
