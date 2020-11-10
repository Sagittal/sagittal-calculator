import {Comma, NumericProperties, Scamon} from "../../general"
import {FlaccoId} from "../accidental"

// State of the art plans described here: http://forum.sagittal.org/viewtopic.php?p=2492#p2492
interface Notation {
    boundClassIds: BoundClassId[],
    symbolClassIds: SymbolClassId[],
}

interface CaptureZone {
    boundClassId: BoundClassId,
    symbolClassId: SymbolClassId,
    section: Section,
}

interface Section {
    negated: boolean,               // Below natural
    shifted: boolean,               // Greater than 1 apotome away from natural
    mirrored: boolean,              // Between 0.5 and 1, or 1.5 and 2, apotomes away from the natural
}

enum BoundClassId {
    MINA_0 = "mina0",
    MINA_1 = "mina1",
    MINA_2 = "mina2",
    MINA_3 = "mina3",
    MINA_4 = "mina4",
    MINA_5 = "mina5",
    MINA_6 = "mina6",
    MINA_7 = "mina7",
    MINA_8 = "mina8",
    MINA_9 = "mina9",
    MINA_10 = "mina10",
    MINA_11 = "mina11",
    MINA_12 = "mina12",
    MINA_13 = "mina13",
    MINA_14 = "mina14",
    MINA_15 = "mina15",
    MINA_16 = "mina16",
    MINA_17 = "mina17",
    MINA_18 = "mina18",
    MINA_19 = "mina19",
    MINA_20 = "mina20",
    MINA_21 = "mina21",
    MINA_22 = "mina22",
    MINA_23 = "mina23",
    MINA_24 = "mina24",
    MINA_25 = "mina25",
    MINA_26 = "mina26",
    MINA_27 = "mina27",
    MINA_28 = "mina28",
    MINA_29 = "mina29",
    MINA_30 = "mina30",
    MINA_31 = "mina31",
    MINA_32 = "mina32",
    MINA_33 = "mina33",
    MINA_34 = "mina34",
    MINA_35 = "mina35",
    MINA_36 = "mina36",
    MINA_37 = "mina37",
    MINA_38 = "mina38",
    MINA_39 = "mina39",
    MINA_40 = "mina40",
    MINA_41 = "mina41",
    MINA_42 = "mina42",
    MINA_43 = "mina43",
    MINA_44 = "mina44",
    MINA_45 = "mina45",
    MINA_46 = "mina46",
    MINA_47 = "mina47",
    MINA_48 = "mina48",
    MINA_49 = "mina49",
    MINA_49_SPLIT = "mina49Split",
    MINA_50 = "mina50",
    MINA_51 = "mina51",
    MINA_51_SPLIT = "mina51Split",
    MINA_52 = "mina52",
    MINA_53 = "mina53",
    MINA_54 = "mina54",
    MINA_55 = "mina55",
    MINA_56 = "mina56",
    MINA_57 = "mina57",
    MINA_58 = "mina58",
    MINA_59 = "mina59",
    MINA_60 = "mina60",
    MINA_61 = "mina61",
    MINA_62 = "mina62",
    MINA_63 = "mina63",
    MINA_64 = "mina64",
    MINA_65 = "mina65",
    MINA_66 = "mina66",
    MINA_67 = "mina67",
    MINA_68 = "mina68",
    MINA_69 = "mina69",
    MINA_70 = "mina70",
    MINA_71 = "mina71",
    MINA_72 = "mina72",
    MINA_72_SPLIT = "mina72Split",
    MINA_73 = "mina73",
    MINA_74 = "mina74",
    MINA_75 = "mina75",
    MINA_76 = "mina76",
    MINA_77 = "mina77",
    MINA_78 = "mina78",
    MINA_78_SPLIT = "mina78Split",
    MINA_79 = "mina79",
    MINA_80 = "mina80",
    MINA_81 = "mina81",
    MINA_82 = "mina82",
    MINA_83 = "mina83",
    MINA_84 = "mina84",
    MINA_85 = "mina85",
    MINA_86 = "mina86",
    MINA_87 = "mina87",
    MINA_88 = "mina88",
    MINA_89 = "mina89",
    MINA_90 = "mina90",
    MINA_91 = "mina91",
    MINA_92 = "mina92",
    MINA_93 = "mina93",
    MINA_94 = "mina94",
    MINA_95 = "mina95",
    MINA_96 = "mina96",
    MINA_97 = "mina97",
    MINA_98 = "mina98",
    MINA_99 = "mina99",
    MINA_100 = "mina100",
    MINA_101 = "mina101",
    MINA_102 = "mina102",
    MINA_103 = "mina103",
    MINA_104 = "mina104",
    MINA_105 = "mina105",
    MINA_105_SPLIT = "mina105Split",
    MINA_106 = "mina106",
    MINA_107 = "mina107",
    MINA_108 = "mina108",
    MINA_109 = "mina109",
    MINA_110 = "mina110",
    MINA_111 = "mina111",
    MINA_112 = "mina112",
    MINA_113 = "mina113",
    MINA_113_SPLIT = "mina113Split",
    MINA_114 = "mina114",
    MINA_115 = "mina115",
    MINA_116 = "mina116",
}

type BoundClass<T extends NumericProperties = {}> = {
    pitch: Scamon<T & {rational: false}>,
}

enum CommaClassId {
    _1_u = "_1_u",                              // 1u
    _1_V_5_7_13_n = "_1_V_5_7_13_n",            // 1/(5⋅7⋅13)n
    _65_V_77_n = "_65_V_77_n",                  // 65/77n
    _19_V_5_n = "_19_V_5_n",                    // 19/5n
    _5_s = "_5_s",                              // 5s
    _1_V_7_13_s = "_1_V_7_13_s",                // 1/(7⋅13)s
    _19_V_5_P_4_7_s = "_19_V_5_P_4_7_s",        // 19/(5⁴⋅7)s
    _19_s = "_19_s",                            // 19s
    _49_V_55_s = "_49_V_55_s",                  // 49/55s
    _5_7_11_k = "_5_7_11_k",                    // 5⋅7⋅11k
    _11_V_13_k = "_11_V_13_k",                  // 11/13k
    _31_V_11_k = "_31_V_11_k",                  // 31/11k
    _5_V_7_k = "_5_V_7_k",                      // 5/7k
    _7_P_3_V_5_k = "_7_P_3_V_5_k",              // 7³/5k
    _1_V_5_17_k = "_1_V_5_17_k",                // 1/(5⋅17)k
    _1_V_5_P_2_7_P_2_k = "_1_V_5_P_2_7_P_2_k",  // 1/(5²⋅7²)k
    _25_V_7_k = "_25_V_7_k",                    // 25/7k
    _7_P_3_k = "_7_P_3_k",                      // 7³k
    _1_V_17_k = "_1_V_17_k",                    // 1/17k
    _11_P_4_k = "_11_P_4_k",                    // 11⁴k
    _7_V_11_k = "_7_V_11_k",                    // 7/11k
    _5_P_2_11_k = "_5_P_2_11_k",                // 5²⋅11k
    _49_V_13_k = "_49_V_13_k",                  // 49/13k
    _1_V_5_P_2_7_P_3_k = "_1_V_5_P_2_7_P_3_k",  // 1/(5²⋅7³)k
    _35_V_11_k = "_35_V_11_k",                  // 35/11k
    _1_V_143_C = "_1_V_143_C",                  // 1/143C
    _17_V_5_C = "_17_V_5_C",                    // 17/5C
    _11_V_23_C = "_11_V_23_C",                  // 11/23C
    _7_V_125_C = "_7_V_125_C",                  // 7/125C
    _5_7_P_2_C = "_5_7_P_2_C",                  // 5⋅7²C
    _17_C = "_17_C",                            // 17C
    _143_V_7_C = "_143_V_7_C",                  // 143/7C
    _7_V_25_C = "_7_V_25_C",                    // 7/25C
    _5_P_2_7_P_2_C = "_5_P_2_7_P_2_C",          // 5²⋅7²C
    _23_C = "_23_C",                            // 23C
    _1_V_13_P_2_C = "_1_V_13_P_2_C",            // 1/13²C
    _11_V_49_C = "_11_V_49_C",                  // 11/49C
    _11_V_31_C = "_11_V_31_C",                  // 11/31C
    _17_V_7_C = "_17_V_7_C",                    // 17/7C
    _7_13_V_5_C = "_7_13_V_5_C",                // 7⋅13/5C
    _1_V_25_C = "_1_V_25_C",                    // 1/25C
    _1_V_19_C = "_1_V_19_C",                    // 1/19C
    _1_V_11_23_C = "_1_V_11_23_C",              // 1/(11⋅23)C
    _7_13_C = "_7_13_C",                        // 7⋅13C
    _1_V_5_C = "_1_V_5_C",                      // 1/5C
    _5_P_3_7_C = "_5_P_3_7_C",                  // 5³⋅7C
    _25_V_13_C = "_25_V_13_C",                  // 25/13C
    _19_V_25_C = "_19_V_25_C",                  // 19/25C
    _3_C = "_3_C",                              // 3C
    _5_P_4_7_C = "_5_P_4_7_C",                  // 5⁴⋅7C
    _77_V_5_C = "_77_V_5_C",                    // 77/5C
    _125_V_13_C = "_125_V_13_C",                // 125/13C
    _19_V_5_C = "_19_V_5_C",                    // 19/5C
    _13_C = "_13_C",                            // 13C
    _1_V_35_C = "_1_V_35_C",                    // 1/35C
    _77_C = "_77_C",                            // 77C
    _11_V_65_C = "_11_V_65_C",                  // 11/65C
    _65_C = "_65_C",                            // 65C
    _1_V_7_C = "_1_V_7_C",                      // 1/7C
    _5_P_4_C = "_5_P_4_C",                      // 5⁴C
    _11_V_13_C = "_11_V_13_C",                  // 11/13C
    _5_P_2_13_C = "_5_P_2_13_C",                // 5²⋅13C
    _5_V_7_C = "_5_V_7_C",                      // 5/7C
    _5_P_5_C = "_5_P_5_C",                      // 5⁵C
    _5_17_V_11_C = "_5_17_V_11_C",              // 5⋅17/11C
    _19_V_7_C = "_19_V_7_C",                    // 19/7C
    _7_V_55_C = "_7_V_55_C",                    // 7/55C
    _55_C = "_55_C",                            // 55C
    _11_V_7_13_C = "_11_V_7_13_C",              // 11/(7⋅13)C
    _125_V_23_C = "_125_V_23_C",                // 125/23C
    _7_V_11_C = "_7_V_11_C",                    // 7/11C
    _13_V_17_S = "_13_V_17_S",                  // 13/17S
    _17_V_25_S = "_17_V_25_S",                  // 17/25S
    _7_V_13_19_S = "_7_V_13_19_S",              // 7/(13⋅19)S
    _25_V_49_S = "_25_V_49_S",                  // 25/49S
    _31_S = "_31_S",                            // 31S
    _49_S = "_49_S",                            // 49S
    _17_V_5_S = "_17_V_5_S",                    // 17/5S
    _11_V_23_S = "_11_V_23_S",                  // 11/23S
    _1_V_11_S = "_1_V_11_S",                    // 1/11S
    _5_7_P_2_S = "_5_7_P_2_S",                  // 5⋅7²S
    _23_V_5_S = "_23_V_5_S",                    // 23/5S
    _7_V_13_S = "_7_V_13_S",                    // 7/13S
    _11_V_17_S = "_11_V_17_S",                  // 11/17S
    _5_V_11_S = "_5_V_11_S",                    // 5/11S
    _1_V_7_11_13_S = "_1_V_7_11_13_S",          // 1/(7⋅11⋅13)S
    _23_S = "_23_S",                            // 23S
    _7_13_V_25_S = "_7_13_V_25_S",              // 7⋅13/25S
    _1_V_125_S = "_1_V_125_S",                  // 1/125S
    _35_S = "_35_S",                            // 35S
    _17_V_7_S = "_17_V_7_S",                    // 17/7S
    _7_13_V_5_S = "_7_13_V_5_S",                // 7⋅13/5S
    _1_V_25_S = "_1_V_25_S",                    // 1/25S
    _5_P_2_7_S = "_5_P_2_7_S",                  // 5²⋅7S
    _5_V_13_S = "_5_V_13_S",                    // 5/13S
    _49_V_17_S = "_49_V_17_S",                  // 49/17S
    _13_V_19_S = "_13_V_19_S",                  // 13/19S
    _77_V_25_M = "_77_V_25_M",                  // 77/25M
    _25_V_13_M = "_25_V_13_M",                  // 25/13M
    _13_V_5_M = "_13_V_5_M",                    // 13/5M
    _1_V_5_P_2_7_M = "_1_V_5_P_2_7_M",          // 1/(5²⋅7)M
    _37_M = "_37_M",                            // 37M
    _11_V_5_P_2_13_M = "_11_V_5_P_2_13_M",      // 11/(5²⋅13)M
    _13_M = "_13_M",                            // 13M
    _1_V_35_M = "_1_V_35_M",                    // 1/35M
    _125_M = "_125_M",                          // 125M
    _11_V_19_M = "_11_V_19_M",                  // 11/19M
    _65_M = "_65_M",                            // 65M
    _1_V_7_M = "_1_V_7_M",                      // 1/7M
    _5_P_4_M = "_5_P_4_M",                      // 5⁴M
    _11_V_5_M = "_11_V_5_M",                    // 11/5M
    _17_V_11_M = "_17_V_11_M",                  // 17/11M
    _5_V_23_M = "_5_V_23_M",                    // 5/23M
    _7_V_5_P_2_11_M = "_7_V_5_P_2_11_M",        // 7/(5²⋅11)M
    _11_M = "_11_M",                            // 11M
    _5_17_V_11_M = "_5_17_V_11_M",              // 5⋅17/11M
    _65_V_7_M = "_65_V_7_M",                    // 65/7M
    _1_V_49_M = "_1_V_49_M",                    // 1/49M
    _1_V_31_M = "_1_V_31_M",                    // 1/31M
    _55_M = "_55_M",                            // 55M
    _11_V_7_13_M = "_11_V_7_13_M",              // 11/(7⋅13)M
    _5_7_17_M = "_5_7_17_M",                    // 5⋅7⋅17M
    _5_V_49_M = "_5_V_49_M",                    // 5/49M
}

// Apotome-inversion comma class (repeats in a mirrored pattern at the half apotome)
interface CommaClass {
    pitch: Comma,
    representativeSymbolClassId: SymbolClassId,
}

const {
    WING_LEFT_SCROLL_AND_DOUBLE_BARB,
    BIRD_LEFT_SCROLL_AND_DOUBLE_BARB,
    ANTIWING_ANTITICK_AND_DOUBLE_ARC,
    ANTITICK_AND_DOUBLE_ARC,
    ANTIWING_AND_RIGHT_BARB_AND_ARC,
    RIGHT_BARB_AND_ARC,
    WING_AND_RIGHT_BARB_AND_ARC,
    ANTIWING_AND_DOUBLE_ARC,
    DOUBLE_ARC,
    WING_AND_DOUBLE_ARC,
    BIRD_AND_DOUBLE_ARC,
    ANTIWING_TICK_AND_DOUBLE_ARC,
    TICK_AND_DOUBLE_ARC,
    ANTIWING_ANTITICK_ARC_AND_BARB,
    ANTITICK_ARC_AND_BARB,
    WING_ANTITICK_ARC_AND_BARB,
    DOUBLE_RIGHT_BARB,
    ANTIWING_ARC_AND_BARB,
    ARC_AND_BARB,
    WING_ARC_AND_BARB,
    BIRD_ARC_AND_BARB,
    ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    ANTIWING_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    WING_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    BIRD_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB,
    ...SymbolClassId
} = FlaccoId

type flaccosBeyondHalfApotome =
    | typeof WING_LEFT_SCROLL_AND_DOUBLE_BARB
    | typeof BIRD_LEFT_SCROLL_AND_DOUBLE_BARB
    | typeof ANTIWING_ANTITICK_AND_DOUBLE_ARC
    | typeof ANTITICK_AND_DOUBLE_ARC
    | typeof ANTIWING_AND_RIGHT_BARB_AND_ARC
    | typeof RIGHT_BARB_AND_ARC
    | typeof WING_AND_RIGHT_BARB_AND_ARC
    | typeof ANTIWING_AND_DOUBLE_ARC
    | typeof DOUBLE_ARC
    | typeof WING_AND_DOUBLE_ARC
    | typeof BIRD_AND_DOUBLE_ARC
    | typeof ANTIWING_TICK_AND_DOUBLE_ARC
    | typeof TICK_AND_DOUBLE_ARC
    | typeof ANTIWING_ANTITICK_ARC_AND_BARB
    | typeof ANTITICK_ARC_AND_BARB
    | typeof WING_ANTITICK_ARC_AND_BARB
    | typeof DOUBLE_RIGHT_BARB
    | typeof ANTIWING_ARC_AND_BARB
    | typeof ARC_AND_BARB
    | typeof WING_ARC_AND_BARB
    | typeof BIRD_ARC_AND_BARB
    | typeof ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB
    | typeof ANTIWING_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB
    | typeof LEFT_SCROLL_DOUBLE_RIGHT_BARB
    | typeof WING_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB
    | typeof BIRD_AND_LEFT_SCROLL_DOUBLE_RIGHT_BARB
type SymbolClassId = Exclude<FlaccoId, flaccosBeyondHalfApotome>

// TODO: POST-NOTATION-GENERATION: SYMBOL VS SAGITTAL; GLYPH TYPES
//  We way want to replace getRepresentativeSagittal called off a comma class with
//  The places which have a comma class might actually want a symbol class in the first place?
interface SymbolClass {
    flaccoId: FlaccoId,
    commaClassId: CommaClassId,
}

// TODO: POST-NOTATION-GENERATION: TRULY SYMBOL SUBSETS, NOT JUST SYMBOL CLASS SUBSETS
//  So I made this into SymbolSubsetId which I think is right but there's not literally a SymbolSubset type yet
//  Which would be an array of SymbolClassIds I suppose?
enum SymbolSubsetId {
    COMPATIBLE = "compatible",
    SPARTAN = "spartan",
    ATHENIAN = "athenian",
    PROMETHEAN = "promethean",
    HERCULEAN = "herculean",
    OLYMPIAN = "olympian",
    MAGRATHEAN = "magrathean",
    TROJAN = "trojan",
}

export {
    Notation,
    CaptureZone,
    Section,
    BoundClass,
    BoundClassId,
    CommaClass,
    CommaClassId,
    SymbolClass,
    SymbolClassId,
    SymbolSubsetId,
}
