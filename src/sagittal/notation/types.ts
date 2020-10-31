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
    _1_u = "_1_u",
    _1_455_n = "_1_455_n",
    _65_77_n = "_65_77_n",
    _19_5_n = "_19_5_n",
    _5_s = "_5_s",
    _1_91_s = "_1_91_s",
    _19_4375_s = "_19_4375_s",
    _19_s = "_19_s",
    _49_55_s = "_49_55_s",
    _385_k = "_385_k",
    _11_13_k = "_11_13_k",
    _31_11_k = "_31_11_k",
    _5_7_k = "_5_7_k",
    _5_343_k = "_5_343_k",
    _1_85_k = "_1_85_k",
    _1_1225_k = "_1_1225_k",
    _25_7_k = "_25_7_k",
    _343_k = "_343_k",
    _1_17_k = "_1_17_k",
    _14641_k = "_14641_k",
    _7_11_k = "_7_11_k",
    _275_k = "_275_k",
    _49_13_k = "_49_13_k",
    _1_8575_k = "_1_8575_k",
    _35_11_k = "_35_11_k",
    _1_143_C = "_1_143_C",
    _17_5_C = "_17_5_C",
    _11_23_C = "_11_23_C",
    _7_125_C = "_7_125_C",
    _245_C = "_245_C",
    _17_C = "_17_C",
    _143_7_C = "_143_7_C",
    _7_25_C = "_7_25_C",
    _1225_C = "_1225_C",
    _23_C = "_23_C",
    _1_169_C = "_1_169_C",
    _11_49_C = "_11_49_C",
    _11_31_C = "_11_31_C",
    _17_7_C = "_17_7_C",
    _91_5_C = "_91_5_C",
    _1_25_C = "_1_25_C",
    _1_19_C = "_1_19_C",
    _1_253_C = "_1_253_C",
    _91_C = "_91_C",
    _1_5_C = "_1_5_C",
    _875_C = "_875_C",
    _25_13_C = "_25_13_C",
    _19_25_C = "_19_25_C",
    _3_C = "_3_C",
    _4375_C = "_4375_C",
    _77_5_C = "_77_5_C",
    _125_13_C = "_125_13_C",
    _19_5_C = "_19_5_C",
    _13_C = "_13_C",
    _1_35_C = "_1_35_C",
    _77_C = "_77_C",
    _11_65_C = "_11_65_C",
    _65_C = "_65_C",
    _1_7_C = "_1_7_C",
    _625_C = "_625_C",
    _11_13_C = "_11_13_C",
    _325_C = "_325_C",
    _5_7_C = "_5_7_C",
    _3125_C = "_3125_C",
    _85_11_C = "_85_11_C",
    _19_7_C = "_19_7_C",
    _7_55_C = "_7_55_C",
    _55_C = "_55_C",
    _11_91_C = "_11_91_C",
    _125_23_C = "_125_23_C",
    _7_11_C = "_7_11_C",
    _13_17_S = "_13_17_S",
    _17_25_S = "_17_25_S",
    _7_247_S = "_7_247_S",
    _25_49_S = "_25_49_S",
    _31_S = "_31_S",
    _49_S = "_49_S",
    _17_5_S = "_17_5_S",
    _11_23_S = "_11_23_S",
    _1_11_S = "_1_11_S",
    _245_S = "_245_S",
    _23_5_S = "_23_5_S",
    _7_13_S = "_7_13_S",
    _11_17_S = "_11_17_S",
    _5_11_S = "_5_11_S",
    _1_1001_S = "_1_1001_S",
    _23_S = "_23_S",
    _91_25_S = "_91_25_S",
    _1_125_S = "_1_125_S",
    _35_S = "_35_S",
    _17_7_S = "_17_7_S",
    _91_5_S = "_91_5_S",
    _1_25_S = "_1_25_S",
    _175_S = "_175_S",
    _5_13_S = "_5_13_S",
    _49_17_S = "_49_17_S",
    _13_19_S = "_13_19_S",
    _77_25_M = "_77_25_M",
    _25_13_M = "_25_13_M",
    _13_5_M = "_13_5_M",
    _1_175_M = "_1_175_M",
    _37_M = "_37_M",
    _11_325_M = "_11_325_M",
    _13_M = "_13_M",
    _1_35_M = "_1_35_M",
    _125_M = "_125_M",
    _11_19_M = "_11_19_M",
    _65_M = "_65_M",
    _1_7_M = "_1_7_M",
    _625_M = "_625_M",
    _11_5_M = "_11_5_M",
    _17_11_M = "_17_11_M",
    _5_23_M = "_5_23_M",
    _7_275_M = "_7_275_M",
    _11_M = "_11_M",
    _85_11_M = "_85_11_M",
    _65_7_M = "_65_7_M",
    _1_49_M = "_1_49_M",
    _1_31_M = "_1_31_M",
    _55_M = "_55_M",
    _11_91_M = "_11_91_M",
    _595_M = "_595_M",
    _5_49_M = "_5_49_M",
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
