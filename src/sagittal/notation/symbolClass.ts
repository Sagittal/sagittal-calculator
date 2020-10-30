import {isUndefined} from "../../general"
import {FlaccoId} from "../accidental"
import {CommaClassId, SymbolClass, SymbolClassId} from "./types"

const SYMBOL_CLASSES: Partial<Record<FlaccoId, SymbolClass>> = {
    [SymbolClassId.NULL]: {
        flaccoId: FlaccoId.NULL,
        commaClassId: CommaClassId._1_u,
    },
    [SymbolClassId.WING]: {
        flaccoId: FlaccoId.WING,
        commaClassId: CommaClassId._1_455_n,
    },
    [SymbolClassId.BIRD]: {
        flaccoId: FlaccoId.BIRD,
        commaClassId: CommaClassId._65_77_n,
    },
    [SymbolClassId.ANTITICK_AND_LEFT_SCROLL]: {
        flaccoId: FlaccoId.ANTITICK_AND_LEFT_SCROLL,
        commaClassId: CommaClassId._19_5_n,
    },
    [SymbolClassId.TICK]: {
        flaccoId: FlaccoId.TICK,
        commaClassId: CommaClassId._5_s,
    },
    [SymbolClassId.WING_AND_TICK]: {
        flaccoId: FlaccoId.WING_AND_TICK,
        commaClassId: CommaClassId._1_91_s,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_SCROLL]: {
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_SCROLL,
        commaClassId: CommaClassId._19_4375_s,
    },
    [SymbolClassId.LEFT_SCROLL]: {
        flaccoId: FlaccoId.LEFT_SCROLL,
        commaClassId: CommaClassId._19_s,
    },
    [SymbolClassId.WING_AND_LEFT_SCROLL]: {
        flaccoId: FlaccoId.WING_AND_LEFT_SCROLL,
        commaClassId: CommaClassId._49_55_s,
    },
    [SymbolClassId.BIRD_AND_LEFT_SCROLL]: {
        flaccoId: FlaccoId.BIRD_AND_LEFT_SCROLL,
        commaClassId: CommaClassId._385_k,
    },
    [SymbolClassId.ANTIBIRD_AND_RIGHT_SCROLL]: {
        flaccoId: FlaccoId.ANTIBIRD_AND_RIGHT_SCROLL,
        commaClassId: CommaClassId._11_13_k,
    },
    [SymbolClassId.ANTIWING_AND_RIGHT_SCROLL]: {
        flaccoId: FlaccoId.ANTIWING_AND_RIGHT_SCROLL,
        commaClassId: CommaClassId._31_11_k,
    },
    [SymbolClassId.RIGHT_SCROLL]: {
        flaccoId: FlaccoId.RIGHT_SCROLL,
        commaClassId: CommaClassId._5_7_k,
    },
    [SymbolClassId.WING_AND_RIGHT_SCROLL]: {
        flaccoId: FlaccoId.WING_AND_RIGHT_SCROLL,
        commaClassId: CommaClassId._5_343_k,
    },
    [SymbolClassId.ANTITICK_AND_LEFT_BOATHOOK]: {
        flaccoId: FlaccoId.ANTITICK_AND_LEFT_BOATHOOK,
        commaClassId: CommaClassId._1_85_k,
    },
    [SymbolClassId.ANTIWING_TICK_AND_RIGHT_SCROLL]: {
        flaccoId: FlaccoId.ANTIWING_TICK_AND_RIGHT_SCROLL,
        commaClassId: CommaClassId._1_1225_k,
    },
    [SymbolClassId.TICK_AND_RIGHT_SCROLL]: {
        flaccoId: FlaccoId.TICK_AND_RIGHT_SCROLL,
        commaClassId: CommaClassId._25_7_k,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_BOATHOOK]: {
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_BOATHOOK,
        commaClassId: CommaClassId._343_k,
    },
    [SymbolClassId.LEFT_BOATHOOK]: {
        flaccoId: FlaccoId.LEFT_BOATHOOK,
        commaClassId: CommaClassId._1_17_k,
    },
    [SymbolClassId.ANTIWING_AND_DOUBLE_SCROLL]: {
        flaccoId: FlaccoId.ANTIWING_AND_DOUBLE_SCROLL,
        commaClassId: CommaClassId._14641_k,
    },
    [SymbolClassId.DOUBLE_SCROLL]: {
        flaccoId: FlaccoId.DOUBLE_SCROLL,
        commaClassId: CommaClassId._7_11_k,
    },
    [SymbolClassId.WING_AND_DOUBLE_SCROLL]: {
        flaccoId: FlaccoId.WING_AND_DOUBLE_SCROLL,
        commaClassId: CommaClassId._275_k,
    },
    [SymbolClassId.BIRD_AND_DOUBLE_SCROLL]: {
        flaccoId: FlaccoId.BIRD_AND_DOUBLE_SCROLL,
        commaClassId: CommaClassId._49_13_k,
    },
    [SymbolClassId.ANTIWING_TICK_AND_DOUBLE_SCROLL]: {
        flaccoId: FlaccoId.ANTIWING_TICK_AND_DOUBLE_SCROLL,
        commaClassId: CommaClassId._1_8575_k,
    },
    [SymbolClassId.TICK_AND_DOUBLE_SCROLL]: {
        flaccoId: FlaccoId.TICK_AND_DOUBLE_SCROLL,
        commaClassId: CommaClassId._35_11_k,
    },
    [SymbolClassId.LEFT_SCROLL_AND_BOATHOOK]: {
        flaccoId: FlaccoId.LEFT_SCROLL_AND_BOATHOOK,
        commaClassId: CommaClassId._1_143_C,
    },
    [SymbolClassId.ANTITICK_BOATHOOK_AND_SCROLL]: {
        flaccoId: FlaccoId.ANTITICK_BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._17_5_C,
    },
    [SymbolClassId.WING_ANTITICK_BOATHOOK_AND_SCROLL]: {
        flaccoId: FlaccoId.WING_ANTITICK_BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._11_23_C,
    },
    [SymbolClassId.ANTIBIRD_BOATHOOK_AND_SCROLL]: {
        flaccoId: FlaccoId.ANTIBIRD_BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._7_125_C,
    },
    [SymbolClassId.ANTIWING_BOATHOOK_AND_SCROLL]: {
        flaccoId: FlaccoId.ANTIWING_BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._245_C,
    },
    [SymbolClassId.BOATHOOK_AND_SCROLL]: {
        flaccoId: FlaccoId.BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._17_C,
    },
    [SymbolClassId.WING_BOATHOOK_AND_SCROLL]: {
        flaccoId: FlaccoId.WING_BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._143_7_C,
    },
    [SymbolClassId.ANTIBIRD_AND_RIGHT_BOATHOOK]: {
        flaccoId: FlaccoId.ANTIBIRD_AND_RIGHT_BOATHOOK,
        commaClassId: CommaClassId._7_25_C,
    },
    [SymbolClassId.ANTIWING_AND_RIGHT_BOATHOOK]: {
        flaccoId: FlaccoId.ANTIWING_AND_RIGHT_BOATHOOK,
        commaClassId: CommaClassId._1225_C,
    },
    [SymbolClassId.RIGHT_BOATHOOK]: {
        flaccoId: FlaccoId.RIGHT_BOATHOOK,
        commaClassId: CommaClassId._23_C,
    },
    [SymbolClassId.WING_AND_RIGHT_BOATHOOK]: {
        flaccoId: FlaccoId.WING_AND_RIGHT_BOATHOOK,
        commaClassId: CommaClassId._1_169_C,
    },
    [SymbolClassId.DOUBLE_LEFT_BOATHOOK]: {
        flaccoId: FlaccoId.DOUBLE_LEFT_BOATHOOK,
        commaClassId: CommaClassId._11_49_C,
    },
    [SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK]: {
        flaccoId: FlaccoId.WING_AND_DOUBLE_LEFT_BOATHOOK,
        commaClassId: CommaClassId._11_31_C,
    },
    [SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK]: {
        flaccoId: FlaccoId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
        commaClassId: CommaClassId._17_7_C,
    },
    [SymbolClassId.ANTIWING_ANTITICK_AND_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTIWING_ANTITICK_AND_LEFT_BARB,
        commaClassId: CommaClassId._91_5_C,
    },
    [SymbolClassId.ANTITICK_AND_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTITICK_AND_LEFT_BARB,
        commaClassId: CommaClassId._1_25_C,
    },
    [SymbolClassId.SCROLL_AND_BOATHOOK]: {
        flaccoId: FlaccoId.SCROLL_AND_BOATHOOK,
        commaClassId: CommaClassId._1_19_C,
    },
    [SymbolClassId.ANTIBIRD_AND_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTIBIRD_AND_LEFT_BARB,
        commaClassId: CommaClassId._1_253_C,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_BARB,
        commaClassId: CommaClassId._91_C,
    },
    [SymbolClassId.LEFT_BARB]: {
        flaccoId: FlaccoId.LEFT_BARB,
        commaClassId: CommaClassId._1_5_C,
    },
    [SymbolClassId.WING_AND_LEFT_BARB]: {
        flaccoId: FlaccoId.WING_AND_LEFT_BARB,
        commaClassId: CommaClassId._875_C,
    },
    [SymbolClassId.BIRD_AND_LEFT_BARB]: {
        flaccoId: FlaccoId.BIRD_AND_LEFT_BARB,
        commaClassId: CommaClassId._25_13_C,
    },
    [SymbolClassId.ANTITICK_AND_LEFT_SCROLL_AND_BARB]: {
        flaccoId: FlaccoId.ANTITICK_AND_LEFT_SCROLL_AND_BARB,
        commaClassId: CommaClassId._19_25_C,
    },
    [SymbolClassId.TICK_AND_LEFT_BARB]: {
        flaccoId: FlaccoId.TICK_AND_LEFT_BARB,
        commaClassId: CommaClassId._1_C,
    },
    [SymbolClassId.WING_TICK_AND_LEFT_BARB]: {
        flaccoId: FlaccoId.WING_TICK_AND_LEFT_BARB,
        commaClassId: CommaClassId._4375_C,
    },
    [SymbolClassId.ANTIBIRD_AND_LEFT_SCROLL_AND_BARB]: {
        flaccoId: FlaccoId.ANTIBIRD_AND_LEFT_SCROLL_AND_BARB,
        commaClassId: CommaClassId._77_5_C,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_SCROLL_AND_BARB]: {
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_SCROLL_AND_BARB,
        commaClassId: CommaClassId._125_13_C,
    },
    [SymbolClassId.LEFT_SCROLL_AND_BARB]: {
        flaccoId: FlaccoId.LEFT_SCROLL_AND_BARB,
        commaClassId: CommaClassId._19_5_C,
    },
    [SymbolClassId.ANTIWING_ANTITICK_AND_RIGHT_ARC]: {
        flaccoId: FlaccoId.ANTIWING_ANTITICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._13_C,
    },
    [SymbolClassId.ANTITICK_AND_RIGHT_ARC]: {
        flaccoId: FlaccoId.ANTITICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._1_35_C,
    },
    [SymbolClassId.WING_ANTITICK_AND_RIGHT_ARC]: {
        flaccoId: FlaccoId.WING_ANTITICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._77_C,
    },
    [SymbolClassId.ANTIBIRD_AND_RIGHT_ARC]: {
        flaccoId: FlaccoId.ANTIBIRD_AND_RIGHT_ARC,
        commaClassId: CommaClassId._11_65_C,
    },
    [SymbolClassId.ANTIWING_AND_RIGHT_ARC]: {
        flaccoId: FlaccoId.ANTIWING_AND_RIGHT_ARC,
        commaClassId: CommaClassId._65_C,
    },
    [SymbolClassId.RIGHT_ARC]: {
        flaccoId: FlaccoId.RIGHT_ARC,
        commaClassId: CommaClassId._1_7_C,
    },
    [SymbolClassId.WING_AND_RIGHT_ARC]: {
        flaccoId: FlaccoId.WING_AND_RIGHT_ARC,
        commaClassId: CommaClassId._625_C,
    },
    [SymbolClassId.BIRD_AND_RIGHT_ARC]: {
        flaccoId: FlaccoId.BIRD_AND_RIGHT_ARC,
        commaClassId: CommaClassId._11_13_C,
    },
    [SymbolClassId.ANTIWING_TICK_AND_RIGHT_ARC]: {
        flaccoId: FlaccoId.ANTIWING_TICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._325_C,
    },
    [SymbolClassId.TICK_AND_RIGHT_ARC]: {
        flaccoId: FlaccoId.TICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._5_7_C,
    },
    [SymbolClassId.WING_TICK_AND_RIGHT_ARC]: {
        flaccoId: FlaccoId.WING_TICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._3125_C,
    },
    [SymbolClassId.ANTIWING_SCROLL_AND_ARC]: {
        flaccoId: FlaccoId.ANTIWING_SCROLL_AND_ARC,
        commaClassId: CommaClassId._85_11_C,
    },
    [SymbolClassId.SCROLL_AND_ARC]: {
        flaccoId: FlaccoId.SCROLL_AND_ARC,
        commaClassId: CommaClassId._19_7_C,
    },
    [SymbolClassId.ANTITICK_AND_LEFT_ARC]: {
        flaccoId: FlaccoId.ANTITICK_AND_LEFT_ARC,
        commaClassId: CommaClassId._7_55_C,
    },
    [SymbolClassId.RIGHT_BARB]: {
        flaccoId: FlaccoId.RIGHT_BARB,
        commaClassId: CommaClassId._55_C,
    },
    [SymbolClassId.WING_AND_RIGHT_BARB]: {
        flaccoId: FlaccoId.WING_AND_RIGHT_BARB,
        commaClassId: CommaClassId._11_91_C,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_ARC]: {
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_ARC,
        commaClassId: CommaClassId._125_23_C,
    },
    [SymbolClassId.LEFT_ARC]: {
        flaccoId: FlaccoId.LEFT_ARC,
        commaClassId: CommaClassId._7_11_C,
    },
    [SymbolClassId.WING_AND_LEFT_ARC]: {
        flaccoId: FlaccoId.WING_AND_LEFT_ARC,
        commaClassId: CommaClassId._13_17_S,
    },
    [SymbolClassId.BIRD_AND_LEFT_ARC]: {
        flaccoId: FlaccoId.BIRD_AND_LEFT_ARC,
        commaClassId: CommaClassId._17_25_S,
    },
    [SymbolClassId.ANTIWING_TICK_AND_LEFT_ARC]: {
        flaccoId: FlaccoId.ANTIWING_TICK_AND_LEFT_ARC,
        commaClassId: CommaClassId._7_247_S,
    },
    [SymbolClassId.TICK_AND_LEFT_ARC]: {
        flaccoId: FlaccoId.TICK_AND_LEFT_ARC,
        commaClassId: CommaClassId._25_49_S,
    },
    [SymbolClassId.ANTIWING_BOATHOOK_AND_ARC]: {
        flaccoId: FlaccoId.ANTIWING_BOATHOOK_AND_ARC,
        commaClassId: CommaClassId._31_S,
    },
    [SymbolClassId.BOATHOOK_AND_ARC]: {
        flaccoId: FlaccoId.BOATHOOK_AND_ARC,
        commaClassId: CommaClassId._49_S,
    },
    [SymbolClassId.WING_BOATHOOK_AND_ARC]: {
        flaccoId: FlaccoId.WING_BOATHOOK_AND_ARC,
        commaClassId: CommaClassId._17_5_S,
    },
    [SymbolClassId.ANTIWING_ANTITICK_ARC_AND_SCROLL]: {
        flaccoId: FlaccoId.ANTIWING_ANTITICK_ARC_AND_SCROLL,
        commaClassId: CommaClassId._11_23_S,
    },
    [SymbolClassId.ANTITICK_ARC_AND_SCROLL]: {
        flaccoId: FlaccoId.ANTITICK_ARC_AND_SCROLL,
        commaClassId: CommaClassId._1_11_S,
    },
    [SymbolClassId.TICK_BOATHOOK_AND_ARC]: {
        flaccoId: FlaccoId.TICK_BOATHOOK_AND_ARC,
        commaClassId: CommaClassId._245_S,
    },
    [SymbolClassId.BARB_AND_BOATHOOK]: {
        flaccoId: FlaccoId.BARB_AND_BOATHOOK,
        commaClassId: CommaClassId._23_5_S,
    },
    [SymbolClassId.ANTIBIRD_ARC_AND_SCROLL]: {
        flaccoId: FlaccoId.ANTIBIRD_ARC_AND_SCROLL,
        commaClassId: CommaClassId._7_13_S,
    },
    [SymbolClassId.ANTIWING_ARC_AND_SCROLL]: {
        flaccoId: FlaccoId.ANTIWING_ARC_AND_SCROLL,
        commaClassId: CommaClassId._11_17_S,
    },
    [SymbolClassId.ARC_AND_SCROLL]: {
        flaccoId: FlaccoId.ARC_AND_SCROLL,
        commaClassId: CommaClassId._5_11_S,
    },
    [SymbolClassId.WING_ARC_AND_SCROLL]: {
        flaccoId: FlaccoId.WING_ARC_AND_SCROLL,
        commaClassId: CommaClassId._1_1001_S,
    },
    [SymbolClassId.BOATHOOK_AND_BARB]: {
        flaccoId: FlaccoId.BOATHOOK_AND_BARB,
        commaClassId: CommaClassId._23_S,
    },
    [SymbolClassId.ANTIWING_ANTITICK_AND_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTIWING_ANTITICK_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._91_25_S,
    },
    [SymbolClassId.ANTITICK_AND_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTITICK_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._1_125_S,
    },
    [SymbolClassId.WING_ANTITICK_AND_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.WING_ANTITICK_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._35_S,
    },
    [SymbolClassId.ANTIBIRD_AND_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTIBIRD_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._17_7_S,
    },
    [SymbolClassId.ANTIWING_AND_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTIWING_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._91_5_S,
    },
    [SymbolClassId.DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._1_25_S,
    },
    [SymbolClassId.WING_AND_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.WING_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._175_S,
    },
    [SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.BIRD_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._5_13_S,
    },
    [SymbolClassId.ANTIWING_TICK_AND_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTIWING_TICK_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._49_17_S,
    },
    [SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.TICK_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._13_19_S,
    },
    [SymbolClassId.ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._77_25_M,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._25_13_M,
    },
    [SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._13_5_M,
    },
    [SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._1_175_M,
    },
    [SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {
        flaccoId: FlaccoId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._37_M,
    },
    [SymbolClassId.ANTIBIRD_BARB_AND_ARC]: {
        flaccoId: FlaccoId.ANTIBIRD_BARB_AND_ARC,
        commaClassId: CommaClassId._11_325_M,
    },
    [SymbolClassId.ANTIWING_BARB_AND_ARC]: {
        flaccoId: FlaccoId.ANTIWING_BARB_AND_ARC,
        commaClassId: CommaClassId._13_M,
    },
    [SymbolClassId.BARB_AND_ARC]: {
        flaccoId: FlaccoId.BARB_AND_ARC,
        commaClassId: CommaClassId._1_35_M,
    },
    [SymbolClassId.WING_BARB_AND_ARC]: {
        flaccoId: FlaccoId.WING_BARB_AND_ARC,
        commaClassId: CommaClassId._125_M,
    },
    [SymbolClassId.ARC_AND_BOATHOOK]: {
        flaccoId: FlaccoId.ARC_AND_BOATHOOK,
        commaClassId: CommaClassId._11_19_M,
    },
    [SymbolClassId.ANTIWING_TICK_BARB_AND_ARC]: {
        flaccoId: FlaccoId.ANTIWING_TICK_BARB_AND_ARC,
        commaClassId: CommaClassId._65_M,
    },
    [SymbolClassId.TICK_BARB_AND_ARC]: {
        flaccoId: FlaccoId.TICK_BARB_AND_ARC,
        commaClassId: CommaClassId._1_7_M,
    },
    [SymbolClassId.WING_TICK_BARB_AND_ARC]: {
        flaccoId: FlaccoId.WING_TICK_BARB_AND_ARC,
        commaClassId: CommaClassId._625_M,
    },
    [SymbolClassId.ANTITICK_AND_DOUBLE_BARB]: {
        flaccoId: FlaccoId.ANTITICK_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._11_5_M,
    },
    [SymbolClassId.WING_ANTITICK_AND_DOUBLE_BARB]: {
        flaccoId: FlaccoId.WING_ANTITICK_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._17_11_M,
    },
    [SymbolClassId.ANTIBIRD_AND_DOUBLE_BARB]: {
        flaccoId: FlaccoId.ANTIBIRD_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._5_23_M,
    },
    [SymbolClassId.ANTIWING_AND_DOUBLE_BARB]: {
        flaccoId: FlaccoId.ANTIWING_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._7_275_M,
    },
    [SymbolClassId.DOUBLE_BARB]: {
        flaccoId: FlaccoId.DOUBLE_BARB,
        commaClassId: CommaClassId._11_M,
    },
    [SymbolClassId.WING_AND_DOUBLE_BARB]: {
        flaccoId: FlaccoId.WING_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._85_11_M,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_ARC_AND_BARB]: {
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_ARC_AND_BARB,
        commaClassId: CommaClassId._65_7_M,
    },
    [SymbolClassId.LEFT_ARC_AND_BARB]: {
        flaccoId: FlaccoId.LEFT_ARC_AND_BARB,
        commaClassId: CommaClassId._1_49_M,
    },
    [SymbolClassId.WING_AND_LEFT_ARC_AND_BARB]: {
        flaccoId: FlaccoId.WING_AND_LEFT_ARC_AND_BARB,
        commaClassId: CommaClassId._1_31_M,
    },
    [SymbolClassId.TICK_AND_DOUBLE_BARB]: {
        flaccoId: FlaccoId.TICK_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._55_M,
    },
    [SymbolClassId.WING_TICK_AND_DOUBLE_BARB]: {
        flaccoId: FlaccoId.WING_TICK_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._11_91_M,
    },
    [SymbolClassId.ANTIWING_LEFT_SCROLL_AND_DOUBLE_BARB]: {
        flaccoId: FlaccoId.ANTIWING_LEFT_SCROLL_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._595_M,
    },
    [SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB]: {
        flaccoId: FlaccoId.LEFT_SCROLL_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._5_49_M,
    },
}

const getSymbolClass = (symbolClassId: SymbolClassId): SymbolClass => {
    const maybeSymbolClass = SYMBOL_CLASSES[symbolClassId]

    if (isUndefined(maybeSymbolClass)) {
        throw new Error(`This flacco ID is not defined as a symbol class. It is probably one of the convenience flaccos defined with a value greater than a half-apotome.`)
    }

    return maybeSymbolClass
}

export {
    getSymbolClass,
}
