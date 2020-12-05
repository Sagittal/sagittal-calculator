import {computeKeyPath, Index, sort} from "@sagittal/general"
import {SymbolClassId, SymbolSubsetId} from "./types"

const SIZE_SORTED_SYMBOL_SUBSET_IDS: SymbolSubsetId[] = [
    SymbolSubsetId.COMPATIBLE,
    SymbolSubsetId.SPARTAN,
    SymbolSubsetId.ATHENIAN,
    SymbolSubsetId.TROJAN,
    SymbolSubsetId.PROMETHEAN,
    SymbolSubsetId.HERCULEAN,
    SymbolSubsetId.OLYMPIAN,
    SymbolSubsetId.MAGRATHEAN,
]

const SAGITTAL_COMPATIBLE_SYMBOL_SUBSET: Array<[Index<SymbolClassId>, SymbolClassId]> = [
    [0 as Index<SymbolClassId>, SymbolClassId.NULL],
]

const SPARTAN_SYMBOL_SUBSET: Array<[Index<SymbolClassId>, SymbolClassId]> = [
    [12 as Index<SymbolClassId>, SymbolClassId.RIGHT_SCROLL],
    [44 as Index<SymbolClassId>, SymbolClassId.LEFT_BARB],
    [58 as Index<SymbolClassId>, SymbolClassId.RIGHT_ARC],
    [92 as Index<SymbolClassId>, SymbolClassId.DOUBLE_LEFT_BARB],
    [104 as Index<SymbolClassId>, SymbolClassId.BARB_AND_ARC],
    [114 as Index<SymbolClassId>, SymbolClassId.DOUBLE_BARB],
    // [131 as Index<SymbolClassId>, SymbolClassId.DOUBLE_ARC],
    // [141 as Index<SymbolClassId>, SymbolClassId.ARC_AND_BARB],
]

const ATHENIAN_SYMBOL_SUBSET: Array<[Index<SymbolClassId>, SymbolClassId]> = [
    ...SPARTAN_SYMBOL_SUBSET,
    [20 as Index<SymbolClassId>, SymbolClassId.DOUBLE_SCROLL],
    [30 as Index<SymbolClassId>, SymbolClassId.BOATHOOK_AND_SCROLL],
    [67 as Index<SymbolClassId>, SymbolClassId.RIGHT_BARB],
    [70 as Index<SymbolClassId>, SymbolClassId.LEFT_ARC],
    [84 as Index<SymbolClassId>, SymbolClassId.ARC_AND_SCROLL],
]

const PROMETHEAN_SYMBOL_SUBSET: Array<[Index<SymbolClassId>, SymbolClassId]> = [
    ...ATHENIAN_SYMBOL_SUBSET,
    [7 as Index<SymbolClassId>, SymbolClassId.LEFT_SCROLL],
    [18 as Index<SymbolClassId>, SymbolClassId.LEFT_BOATHOOK],
    [25 as Index<SymbolClassId>, SymbolClassId.LEFT_SCROLL_AND_BOATHOOK],
    [34 as Index<SymbolClassId>, SymbolClassId.RIGHT_BOATHOOK],
    [36 as Index<SymbolClassId>, SymbolClassId.DOUBLE_LEFT_BOATHOOK],
    [41 as Index<SymbolClassId>, SymbolClassId.SCROLL_AND_BOATHOOK],
    [52 as Index<SymbolClassId>, SymbolClassId.LEFT_SCROLL_AND_BARB],
    [65 as Index<SymbolClassId>, SymbolClassId.SCROLL_AND_ARC],
    [76 as Index<SymbolClassId>, SymbolClassId.BOATHOOK_AND_ARC],
    [81 as Index<SymbolClassId>, SymbolClassId.BARB_AND_BOATHOOK],
    [86 as Index<SymbolClassId>, SymbolClassId.BOATHOOK_AND_BARB],
    [99 as Index<SymbolClassId>, SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    [106 as Index<SymbolClassId>, SymbolClassId.ARC_AND_BOATHOOK],
    [117 as Index<SymbolClassId>, SymbolClassId.LEFT_ARC_AND_BARB],
    [122 as Index<SymbolClassId>, SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB],
    // [128 as Index<SymbolClassId>, SymbolClassId.RIGHT_BARB_AND_ARC],
    // [139 as Index<SymbolClassId>, SymbolClassId.DOUBLE_RIGHT_BARB],
    // [146 as Index<SymbolClassId>, SymbolClassId.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
]

// TODO: POST-NOTATION-GENERATION: TRULY SYMBOL SUBSETS, NOT JUST SYMBOL CLASS SUBSETS
//  Define subsets in terms of new accents?
//  Surely there must be some way to simplify / generate this
const HERCULEAN_SYMBOL_SUBSET: Array<[Index<SymbolClassId>, SymbolClassId]> = [
    ...PROMETHEAN_SYMBOL_SUBSET,
    [3 as Index<SymbolClassId>, SymbolClassId.ANTITICK_AND_LEFT_SCROLL],
    [4 as Index<SymbolClassId>, SymbolClassId.TICK],
    [14 as Index<SymbolClassId>, SymbolClassId.ANTITICK_AND_LEFT_BOATHOOK],
    [16 as Index<SymbolClassId>, SymbolClassId.TICK_AND_RIGHT_SCROLL],
    [24 as Index<SymbolClassId>, SymbolClassId.TICK_AND_DOUBLE_SCROLL],
    [26 as Index<SymbolClassId>, SymbolClassId.ANTITICK_BOATHOOK_AND_SCROLL],
    [40 as Index<SymbolClassId>, SymbolClassId.ANTITICK_AND_LEFT_BARB],
    [47 as Index<SymbolClassId>, SymbolClassId.ANTITICK_AND_LEFT_SCROLL_AND_BARB],
    [48 as Index<SymbolClassId>, SymbolClassId.TICK_AND_LEFT_BARB],
    [54 as Index<SymbolClassId>, SymbolClassId.ANTITICK_AND_RIGHT_ARC],
    [62 as Index<SymbolClassId>, SymbolClassId.TICK_AND_RIGHT_ARC],
    [66 as Index<SymbolClassId>, SymbolClassId.ANTITICK_AND_LEFT_ARC],
    [74 as Index<SymbolClassId>, SymbolClassId.TICK_AND_LEFT_ARC],
    [79 as Index<SymbolClassId>, SymbolClassId.ANTITICK_ARC_AND_SCROLL],
    [80 as Index<SymbolClassId>, SymbolClassId.TICK_BOATHOOK_AND_ARC],
    [88 as Index<SymbolClassId>, SymbolClassId.ANTITICK_AND_DOUBLE_LEFT_BARB],
    [96 as Index<SymbolClassId>, SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB],
    [108 as Index<SymbolClassId>, SymbolClassId.TICK_BARB_AND_ARC],
    [110 as Index<SymbolClassId>, SymbolClassId.ANTITICK_AND_DOUBLE_BARB],
    [119 as Index<SymbolClassId>, SymbolClassId.TICK_AND_DOUBLE_BARB],
    // [126 as Index<SymbolClassId>, SymbolClassId.ANTITICK_AND_DOUBLE_ARC],
    // [135 as Index<SymbolClassId>, SymbolClassId.TICK_AND_DOUBLE_ARC],
    // [137 as Index<SymbolClassId>, SymbolClassId.ANTITICK_ARC_AND_BARB],
]

const OLYMPIAN_SYMBOL_SUBSET: Array<[Index<SymbolClassId>, SymbolClassId]> = [
    ...HERCULEAN_SYMBOL_SUBSET,
    [1 as Index<SymbolClassId>, SymbolClassId.WING],
    [2 as Index<SymbolClassId>, SymbolClassId.BIRD],
    [5 as Index<SymbolClassId>, SymbolClassId.WING_AND_TICK],
    [6 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_LEFT_SCROLL],
    [8 as Index<SymbolClassId>, SymbolClassId.WING_AND_LEFT_SCROLL],
    [9 as Index<SymbolClassId>, SymbolClassId.BIRD_AND_LEFT_SCROLL],
    [10 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_AND_RIGHT_SCROLL],
    [11 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_RIGHT_SCROLL],
    [13 as Index<SymbolClassId>, SymbolClassId.WING_AND_RIGHT_SCROLL],
    [15 as Index<SymbolClassId>, SymbolClassId.ANTIWING_TICK_AND_RIGHT_SCROLL],
    [17 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_LEFT_BOATHOOK],
    [19 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_DOUBLE_SCROLL],
    [21 as Index<SymbolClassId>, SymbolClassId.WING_AND_DOUBLE_SCROLL],
    [22 as Index<SymbolClassId>, SymbolClassId.BIRD_AND_DOUBLE_SCROLL],
    [23 as Index<SymbolClassId>, SymbolClassId.ANTIWING_TICK_AND_DOUBLE_SCROLL],
    [27 as Index<SymbolClassId>, SymbolClassId.WING_ANTITICK_BOATHOOK_AND_SCROLL],
    [28 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_BOATHOOK_AND_SCROLL],
    [29 as Index<SymbolClassId>, SymbolClassId.ANTIWING_BOATHOOK_AND_SCROLL],
    [31 as Index<SymbolClassId>, SymbolClassId.WING_BOATHOOK_AND_SCROLL],
    [32 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_AND_RIGHT_BOATHOOK],
    [33 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_RIGHT_BOATHOOK],
    [35 as Index<SymbolClassId>, SymbolClassId.WING_AND_RIGHT_BOATHOOK],
    [37 as Index<SymbolClassId>, SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK],
    [38 as Index<SymbolClassId>, SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK],
    [39 as Index<SymbolClassId>, SymbolClassId.ANTIWING_ANTITICK_AND_LEFT_BARB],
    [42 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_AND_LEFT_BARB],
    [43 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_LEFT_BARB],
    [45 as Index<SymbolClassId>, SymbolClassId.WING_AND_LEFT_BARB],
    [46 as Index<SymbolClassId>, SymbolClassId.BIRD_AND_LEFT_BARB],
    [49 as Index<SymbolClassId>, SymbolClassId.WING_TICK_AND_LEFT_BARB],
    [50 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_AND_LEFT_SCROLL_AND_BARB],
    [51 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_LEFT_SCROLL_AND_BARB],
    [53 as Index<SymbolClassId>, SymbolClassId.ANTIWING_ANTITICK_AND_RIGHT_ARC],
    [55 as Index<SymbolClassId>, SymbolClassId.WING_ANTITICK_AND_RIGHT_ARC],
    [56 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_AND_RIGHT_ARC],
    [57 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_RIGHT_ARC],
    [59 as Index<SymbolClassId>, SymbolClassId.WING_AND_RIGHT_ARC],
    [60 as Index<SymbolClassId>, SymbolClassId.BIRD_AND_RIGHT_ARC],
    [61 as Index<SymbolClassId>, SymbolClassId.ANTIWING_TICK_AND_RIGHT_ARC],
    [63 as Index<SymbolClassId>, SymbolClassId.WING_TICK_AND_RIGHT_ARC],
    [64 as Index<SymbolClassId>, SymbolClassId.ANTIWING_SCROLL_AND_ARC],
    [68 as Index<SymbolClassId>, SymbolClassId.WING_AND_RIGHT_BARB],
    [69 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_LEFT_ARC],
    [71 as Index<SymbolClassId>, SymbolClassId.WING_AND_LEFT_ARC],
    [72 as Index<SymbolClassId>, SymbolClassId.BIRD_AND_LEFT_ARC],
    [73 as Index<SymbolClassId>, SymbolClassId.ANTIWING_TICK_AND_LEFT_ARC],
    [75 as Index<SymbolClassId>, SymbolClassId.ANTIWING_BOATHOOK_AND_ARC],
    [77 as Index<SymbolClassId>, SymbolClassId.WING_BOATHOOK_AND_ARC],
    [78 as Index<SymbolClassId>, SymbolClassId.ANTIWING_ANTITICK_ARC_AND_SCROLL],
    [82 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_ARC_AND_SCROLL],
    [83 as Index<SymbolClassId>, SymbolClassId.ANTIWING_ARC_AND_SCROLL],
    [85 as Index<SymbolClassId>, SymbolClassId.WING_ARC_AND_SCROLL],
    [87 as Index<SymbolClassId>, SymbolClassId.ANTIWING_ANTITICK_AND_DOUBLE_LEFT_BARB],
    [89 as Index<SymbolClassId>, SymbolClassId.WING_ANTITICK_AND_DOUBLE_LEFT_BARB],
    [90 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_AND_DOUBLE_LEFT_BARB],
    [91 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_DOUBLE_LEFT_BARB],
    [93 as Index<SymbolClassId>, SymbolClassId.WING_AND_DOUBLE_LEFT_BARB],
    [94 as Index<SymbolClassId>, SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB],
    [95 as Index<SymbolClassId>, SymbolClassId.ANTIWING_TICK_AND_DOUBLE_LEFT_BARB],
    [97 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB],
    [98 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB],
    [100 as Index<SymbolClassId>, SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB],
    [101 as Index<SymbolClassId>, SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB],
    [102 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_BARB_AND_ARC],
    [103 as Index<SymbolClassId>, SymbolClassId.ANTIWING_BARB_AND_ARC],
    [105 as Index<SymbolClassId>, SymbolClassId.WING_BARB_AND_ARC],
    [107 as Index<SymbolClassId>, SymbolClassId.ANTIWING_TICK_BARB_AND_ARC],
    [109 as Index<SymbolClassId>, SymbolClassId.WING_TICK_BARB_AND_ARC],
    [111 as Index<SymbolClassId>, SymbolClassId.WING_ANTITICK_AND_DOUBLE_BARB],
    [112 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_AND_DOUBLE_BARB],
    [113 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_DOUBLE_BARB],
    [115 as Index<SymbolClassId>, SymbolClassId.WING_AND_DOUBLE_BARB],
    [116 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_LEFT_ARC_AND_BARB],
    [118 as Index<SymbolClassId>, SymbolClassId.WING_AND_LEFT_ARC_AND_BARB],
    [120 as Index<SymbolClassId>, SymbolClassId.WING_TICK_AND_DOUBLE_BARB],
    [121 as Index<SymbolClassId>, SymbolClassId.ANTIWING_LEFT_SCROLL_AND_DOUBLE_BARB],
    // [123 as Index<SymbolClassId>, SymbolClassId.WING_LEFT_SCROLL_AND_DOUBLE_BARB],
    // [124 as Index<SymbolClassId>, SymbolClassId.BIRD_LEFT_SCROLL_AND_DOUBLE_BARB],
    // [125 as Index<SymbolClassId>, SymbolClassId.ANTIWING_ANTITICK_AND_DOUBLE_ARC],
    // [127 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_RIGHT_BARB_AND_ARC],
    // [129 as Index<SymbolClassId>, SymbolClassId.WING_AND_RIGHT_BARB_AND_ARC],
    // [130 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_DOUBLE_ARC],
    // [132 as Index<SymbolClassId>, SymbolClassId.WING_AND_DOUBLE_ARC],
    // [133 as Index<SymbolClassId>, SymbolClassId.BIRD_AND_DOUBLE_ARC],
    // [134 as Index<SymbolClassId>, SymbolClassId.ANTIWING_TICK_AND_DOUBLE_ARC],
    // [136 as Index<SymbolClassId>, SymbolClassId.ANTIWING_ANTITICK_ARC_AND_BARB],
    // [138 as Index<SymbolClassId>, SymbolClassId.WING_ANTITICK_ARC_AND_BARB],
    // [140 as Index<SymbolClassId>, SymbolClassId.ANTIWING_ARC_AND_BARB],
    // [142 as Index<SymbolClassId>, SymbolClassId.WING_ARC_AND_BARB],
    // [143 as Index<SymbolClassId>, SymbolClassId.BIRD_ARC_AND_BARB],
    // [144 as Index<SymbolClassId>, SymbolClassId.ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    // [145 as Index<SymbolClassId>, SymbolClassId.ANTIWING_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    // [147 as Index<SymbolClassId>, SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    // [148 as Index<SymbolClassId>, SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB],
]

const MAGRATHEAN_SYMBOL_SUBSET: Array<[Index<SymbolClassId>, SymbolClassId]> = [
    ...OLYMPIAN_SYMBOL_SUBSET,
]

// On an independent trajectory, as it does not contain Spartan or Athenian, though it is contained by Promethean
// See: http://forum.sagittal.org/viewtopic.php?p=885&sid=832fe7e77de7aae89234e3dbb67f8fb9#p885
const TROJAN_SYMBOL_SUBSET: Array<[Index<SymbolClassId>, SymbolClassId]> = [
    [30 as Index<SymbolClassId>, SymbolClassId.BOATHOOK_AND_SCROLL],
    [34 as Index<SymbolClassId>, SymbolClassId.RIGHT_BOATHOOK],
    [44 as Index<SymbolClassId>, SymbolClassId.LEFT_BARB],
    [52 as Index<SymbolClassId>, SymbolClassId.LEFT_SCROLL_AND_BARB],
    [58 as Index<SymbolClassId>, SymbolClassId.RIGHT_ARC],
    [67 as Index<SymbolClassId>, SymbolClassId.RIGHT_BARB],
    [70 as Index<SymbolClassId>, SymbolClassId.LEFT_ARC],
    [81 as Index<SymbolClassId>, SymbolClassId.BARB_AND_BOATHOOK],
    [104 as Index<SymbolClassId>, SymbolClassId.BARB_AND_ARC],
    [114 as Index<SymbolClassId>, SymbolClassId.DOUBLE_BARB],
    // [141 as Index<SymbolClassId>, SymbolClassId.ARC_AND_BARB],
]

// TODO: POST-NOTATION-GENERATION: IDS VS INDICES
//  Probably some way to get the indices from the enums rather than separately specifying them like here and for commas
//  And at that time probably also clean up the /*119*/ style comments in bound class, comma class, and symbol subsets
const shapeUpIds = (ids: Array<[Index<SymbolClassId>, SymbolClassId]>): SymbolClassId[] =>
    sort(ids, {by: computeKeyPath(0)}).map(([_, id]: [Index<SymbolClassId>, SymbolClassId]): SymbolClassId => id)

// TODO: POST-NOTATION-GENERATION: TRULY SYMBOL SUBSETS, NOT JUST SYMBOL CLASS SUBSETS
//  These won't truly be symbol subsets until you map across them and include every complement, shift, and negation
//  And you could separate the single-shaft ones from multi-shaft ones with filters
//  These tests are all failing until we fix that issue (don't forget to un-xdescribe them!)
const SYMBOL_SUBSETS: Record<SymbolSubsetId, SymbolClassId[]> = {
    [SymbolSubsetId.COMPATIBLE]: shapeUpIds(SAGITTAL_COMPATIBLE_SYMBOL_SUBSET),
    [SymbolSubsetId.SPARTAN]: shapeUpIds(SPARTAN_SYMBOL_SUBSET),
    [SymbolSubsetId.ATHENIAN]: shapeUpIds(ATHENIAN_SYMBOL_SUBSET),
    [SymbolSubsetId.TROJAN]: shapeUpIds(TROJAN_SYMBOL_SUBSET),
    [SymbolSubsetId.PROMETHEAN]: shapeUpIds(PROMETHEAN_SYMBOL_SUBSET),
    [SymbolSubsetId.HERCULEAN]: shapeUpIds(HERCULEAN_SYMBOL_SUBSET),
    [SymbolSubsetId.OLYMPIAN]: shapeUpIds(OLYMPIAN_SYMBOL_SUBSET),
    [SymbolSubsetId.MAGRATHEAN]: shapeUpIds(MAGRATHEAN_SYMBOL_SUBSET),
}

export {
    SYMBOL_SUBSETS,
    SIZE_SORTED_SYMBOL_SUBSET_IDS,
}
