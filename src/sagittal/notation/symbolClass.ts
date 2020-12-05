import {isUndefined} from "@sagittal/general"
import {FlaccoId} from "../accidental"
import {CommaClassId, SymbolClass, SymbolClassId} from "./types"

const SYMBOL_CLASSES: Record<SymbolClassId, SymbolClass> = {
    [SymbolClassId.NULL]: {                                                 //  (|//|)
        flaccoId: FlaccoId.NULL,
        commaClassId: CommaClassId._1_u,
    },
    [SymbolClassId.WING]: {                                                 //     `|
        flaccoId: FlaccoId.WING,
        commaClassId: CommaClassId._1_V_5_7_13_n,
    },
    [SymbolClassId.BIRD]: {                                                 //    ``|
        flaccoId: FlaccoId.BIRD,
        commaClassId: CommaClassId._65_V_77_n,
    },
    [SymbolClassId.ANTITICK_AND_LEFT_SCROLL]: {                             //    .)|
        flaccoId: FlaccoId.ANTITICK_AND_LEFT_SCROLL,
        commaClassId: CommaClassId._19_V_5_n,
    },
    [SymbolClassId.TICK]: {                                                 //     '|
        flaccoId: FlaccoId.TICK,
        commaClassId: CommaClassId._5_s,
    },
    [SymbolClassId.WING_AND_TICK]: {                                        //    `'|
        flaccoId: FlaccoId.WING_AND_TICK,
        commaClassId: CommaClassId._1_V_7_13_s,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_SCROLL]: {                             //    ,)|
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_SCROLL,
        commaClassId: CommaClassId._19_V_5_P_4_7_s,
    },
    [SymbolClassId.LEFT_SCROLL]: {                                          //     )|
        flaccoId: FlaccoId.LEFT_SCROLL,
        commaClassId: CommaClassId._19_s,
    },
    [SymbolClassId.WING_AND_LEFT_SCROLL]: {                                 //    `)|
        flaccoId: FlaccoId.WING_AND_LEFT_SCROLL,
        commaClassId: CommaClassId._49_V_55_s,
    },
    [SymbolClassId.BIRD_AND_LEFT_SCROLL]: {                                 //   ``)|
        flaccoId: FlaccoId.BIRD_AND_LEFT_SCROLL,
        commaClassId: CommaClassId._5_7_11_k,
    },
    [SymbolClassId.ANTIBIRD_AND_RIGHT_SCROLL]: {                            //    ,,|(
        flaccoId: FlaccoId.ANTIBIRD_AND_RIGHT_SCROLL,
        commaClassId: CommaClassId._11_V_13_k,
    },
    [SymbolClassId.ANTIWING_AND_RIGHT_SCROLL]: {                            //     ,|(
        flaccoId: FlaccoId.ANTIWING_AND_RIGHT_SCROLL,
        commaClassId: CommaClassId._31_V_11_k,
    },
    [SymbolClassId.RIGHT_SCROLL]: {                                         //      |(
        flaccoId: FlaccoId.RIGHT_SCROLL,
        commaClassId: CommaClassId._5_V_7_k,
    },
    [SymbolClassId.WING_AND_RIGHT_SCROLL]: {                                //     `|(
        flaccoId: FlaccoId.WING_AND_RIGHT_SCROLL,
        commaClassId: CommaClassId._7_P_3_V_5_k,
    },
    [SymbolClassId.ANTITICK_AND_LEFT_BOATHOOK]: {                           //    .~|
        flaccoId: FlaccoId.ANTITICK_AND_LEFT_BOATHOOK,
        commaClassId: CommaClassId._1_V_5_17_k,
    },
    [SymbolClassId.ANTIWING_TICK_AND_RIGHT_SCROLL]: {                       //    ,'|(
        flaccoId: FlaccoId.ANTIWING_TICK_AND_RIGHT_SCROLL,
        commaClassId: CommaClassId._1_V_5_P_2_7_P_2_k,
    },
    [SymbolClassId.TICK_AND_RIGHT_SCROLL]: {                                //     '|(
        flaccoId: FlaccoId.TICK_AND_RIGHT_SCROLL,
        commaClassId: CommaClassId._25_V_7_k,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_BOATHOOK]: {                           //    ,~|
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_BOATHOOK,
        commaClassId: CommaClassId._7_P_3_k,
    },
    [SymbolClassId.LEFT_BOATHOOK]: {                                        //     ~|
        flaccoId: FlaccoId.LEFT_BOATHOOK,
        commaClassId: CommaClassId._1_V_17_k,
    },
    [SymbolClassId.ANTIWING_AND_DOUBLE_SCROLL]: {                           //    ,)|(
        flaccoId: FlaccoId.ANTIWING_AND_DOUBLE_SCROLL,
        commaClassId: CommaClassId._11_P_4_k,
    },
    [SymbolClassId.DOUBLE_SCROLL]: {                                        //     )|(
        flaccoId: FlaccoId.DOUBLE_SCROLL,
        commaClassId: CommaClassId._7_V_11_k,
    },
    [SymbolClassId.WING_AND_DOUBLE_SCROLL]: {                               //    `)|(
        flaccoId: FlaccoId.WING_AND_DOUBLE_SCROLL,
        commaClassId: CommaClassId._5_P_2_11_k,
    },
    [SymbolClassId.BIRD_AND_DOUBLE_SCROLL]: {                               //   ``)|(
        flaccoId: FlaccoId.BIRD_AND_DOUBLE_SCROLL,
        commaClassId: CommaClassId._49_V_13_k,
    },
    [SymbolClassId.ANTIWING_TICK_AND_DOUBLE_SCROLL]: {                      //   ,')|(
        flaccoId: FlaccoId.ANTIWING_TICK_AND_DOUBLE_SCROLL,
        commaClassId: CommaClassId._1_V_5_P_2_7_P_3_k,
    },
    [SymbolClassId.TICK_AND_DOUBLE_SCROLL]: {                               //    ')|(
        flaccoId: FlaccoId.TICK_AND_DOUBLE_SCROLL,
        commaClassId: CommaClassId._35_V_11_k,
    },
    [SymbolClassId.LEFT_SCROLL_AND_BOATHOOK]: {                             //    )~|
        flaccoId: FlaccoId.LEFT_SCROLL_AND_BOATHOOK,
        commaClassId: CommaClassId._1_V_143_C,
    },
    [SymbolClassId.ANTITICK_BOATHOOK_AND_SCROLL]: {                         //    .~|(
        flaccoId: FlaccoId.ANTITICK_BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._17_V_5_C,
    },
    [SymbolClassId.WING_ANTITICK_BOATHOOK_AND_SCROLL]: {                    //   `.~|(
        flaccoId: FlaccoId.WING_ANTITICK_BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._11_V_23_C,
    },
    [SymbolClassId.ANTIBIRD_BOATHOOK_AND_SCROLL]: {                         //   ,,~|(
        flaccoId: FlaccoId.ANTIBIRD_BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._7_V_125_C,
    },
    [SymbolClassId.ANTIWING_BOATHOOK_AND_SCROLL]: {                         //    ,~|(
        flaccoId: FlaccoId.ANTIWING_BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._5_7_P_2_C,
    },
    [SymbolClassId.BOATHOOK_AND_SCROLL]: {                                  //     ~|(
        flaccoId: FlaccoId.BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._17_C,
    },
    [SymbolClassId.WING_BOATHOOK_AND_SCROLL]: {                             //    `~|(
        flaccoId: FlaccoId.WING_BOATHOOK_AND_SCROLL,
        commaClassId: CommaClassId._143_V_7_C,
    },
    [SymbolClassId.ANTIBIRD_AND_RIGHT_BOATHOOK]: {                          //    ,,|~
        flaccoId: FlaccoId.ANTIBIRD_AND_RIGHT_BOATHOOK,
        commaClassId: CommaClassId._7_V_25_C,
    },
    [SymbolClassId.ANTIWING_AND_RIGHT_BOATHOOK]: {                          //     ,|~
        flaccoId: FlaccoId.ANTIWING_AND_RIGHT_BOATHOOK,
        commaClassId: CommaClassId._5_P_2_7_P_2_C,
    },
    [SymbolClassId.RIGHT_BOATHOOK]: {                                       //      |~
        flaccoId: FlaccoId.RIGHT_BOATHOOK,
        commaClassId: CommaClassId._23_C,
    },
    [SymbolClassId.WING_AND_RIGHT_BOATHOOK]: {                              //     `|~
        flaccoId: FlaccoId.WING_AND_RIGHT_BOATHOOK,
        commaClassId: CommaClassId._1_V_13_P_2_C,
    },
    [SymbolClassId.DOUBLE_LEFT_BOATHOOK]: {                                 //    ~~|
        flaccoId: FlaccoId.DOUBLE_LEFT_BOATHOOK,
        commaClassId: CommaClassId._11_V_49_C,
    },
    [SymbolClassId.WING_AND_DOUBLE_LEFT_BOATHOOK]: {                        //   `~~|
        flaccoId: FlaccoId.WING_AND_DOUBLE_LEFT_BOATHOOK,
        commaClassId: CommaClassId._11_V_31_C,
    },
    [SymbolClassId.BIRD_AND_DOUBLE_LEFT_BOATHOOK]: {                        //  ``~~|
        flaccoId: FlaccoId.BIRD_AND_DOUBLE_LEFT_BOATHOOK,
        commaClassId: CommaClassId._17_V_7_C,
    },
    [SymbolClassId.ANTIWING_ANTITICK_AND_LEFT_BARB]: {                      //   ,./|
        flaccoId: FlaccoId.ANTIWING_ANTITICK_AND_LEFT_BARB,
        commaClassId: CommaClassId._7_13_V_5_C,
    },
    [SymbolClassId.ANTITICK_AND_LEFT_BARB]: {                               //    ./|
        flaccoId: FlaccoId.ANTITICK_AND_LEFT_BARB,
        commaClassId: CommaClassId._1_V_25_C,
    },
    [SymbolClassId.SCROLL_AND_BOATHOOK]: {                                  //     )|~
        flaccoId: FlaccoId.SCROLL_AND_BOATHOOK,
        commaClassId: CommaClassId._1_V_19_C,
    },
    [SymbolClassId.ANTIBIRD_AND_LEFT_BARB]: {                               //   ,,/|
        flaccoId: FlaccoId.ANTIBIRD_AND_LEFT_BARB,
        commaClassId: CommaClassId._1_V_11_23_C,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_BARB]: {                               //    ,/|
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_BARB,
        commaClassId: CommaClassId._7_13_C,
    },
    [SymbolClassId.LEFT_BARB]: {                                            //     /|
        flaccoId: FlaccoId.LEFT_BARB,
        commaClassId: CommaClassId._1_V_5_C,
    },
    [SymbolClassId.WING_AND_LEFT_BARB]: {                                   //    `/|
        flaccoId: FlaccoId.WING_AND_LEFT_BARB,
        commaClassId: CommaClassId._5_P_3_7_C,
    },
    [SymbolClassId.BIRD_AND_LEFT_BARB]: {                                   //   ``/|
        flaccoId: FlaccoId.BIRD_AND_LEFT_BARB,
        commaClassId: CommaClassId._25_V_13_C,
    },
    [SymbolClassId.ANTITICK_AND_LEFT_SCROLL_AND_BARB]: {                    //   .)/|
        flaccoId: FlaccoId.ANTITICK_AND_LEFT_SCROLL_AND_BARB,
        commaClassId: CommaClassId._19_V_25_C,
    },
    [SymbolClassId.TICK_AND_LEFT_BARB]: {                                   //    '/|
        flaccoId: FlaccoId.TICK_AND_LEFT_BARB,
        commaClassId: CommaClassId._3_C,
    },
    [SymbolClassId.WING_TICK_AND_LEFT_BARB]: {                              //   `'/|
        flaccoId: FlaccoId.WING_TICK_AND_LEFT_BARB,
        commaClassId: CommaClassId._5_P_4_7_C,
    },
    [SymbolClassId.ANTIBIRD_AND_LEFT_SCROLL_AND_BARB]: {                    //  ,,)/|
        flaccoId: FlaccoId.ANTIBIRD_AND_LEFT_SCROLL_AND_BARB,
        commaClassId: CommaClassId._77_V_5_C,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_SCROLL_AND_BARB]: {                    //   ,)/|
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_SCROLL_AND_BARB,
        commaClassId: CommaClassId._125_V_13_C,
    },
    [SymbolClassId.LEFT_SCROLL_AND_BARB]: {                                 //    )/|
        flaccoId: FlaccoId.LEFT_SCROLL_AND_BARB,
        commaClassId: CommaClassId._19_V_5_C,
    },
    [SymbolClassId.ANTIWING_ANTITICK_AND_RIGHT_ARC]: {                      //    ,.|)
        flaccoId: FlaccoId.ANTIWING_ANTITICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._13_C,
    },
    [SymbolClassId.ANTITICK_AND_RIGHT_ARC]: {                               //     .|)
        flaccoId: FlaccoId.ANTITICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._1_V_35_C,
    },
    [SymbolClassId.WING_ANTITICK_AND_RIGHT_ARC]: {                          //    `.|)
        flaccoId: FlaccoId.WING_ANTITICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._77_C,
    },
    [SymbolClassId.ANTIBIRD_AND_RIGHT_ARC]: {                               //    ,,|)
        flaccoId: FlaccoId.ANTIBIRD_AND_RIGHT_ARC,
        commaClassId: CommaClassId._11_V_65_C,
    },
    [SymbolClassId.ANTIWING_AND_RIGHT_ARC]: {                               //     ,|)
        flaccoId: FlaccoId.ANTIWING_AND_RIGHT_ARC,
        commaClassId: CommaClassId._65_C,
    },
    [SymbolClassId.RIGHT_ARC]: {                                            //      |)
        flaccoId: FlaccoId.RIGHT_ARC,
        commaClassId: CommaClassId._1_V_7_C,
    },
    [SymbolClassId.WING_AND_RIGHT_ARC]: {                                   //     `|)
        flaccoId: FlaccoId.WING_AND_RIGHT_ARC,
        commaClassId: CommaClassId._5_P_4_C,
    },
    [SymbolClassId.BIRD_AND_RIGHT_ARC]: {                                   //    ``|)
        flaccoId: FlaccoId.BIRD_AND_RIGHT_ARC,
        commaClassId: CommaClassId._11_V_13_C,
    },
    [SymbolClassId.ANTIWING_TICK_AND_RIGHT_ARC]: {                          //    ,'|)
        flaccoId: FlaccoId.ANTIWING_TICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._5_P_2_13_C,
    },
    [SymbolClassId.TICK_AND_RIGHT_ARC]: {                                   //     '|)
        flaccoId: FlaccoId.TICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._5_V_7_C,
    },
    [SymbolClassId.WING_TICK_AND_RIGHT_ARC]: {                              //    `'|)
        flaccoId: FlaccoId.WING_TICK_AND_RIGHT_ARC,
        commaClassId: CommaClassId._5_P_5_C,
    },
    [SymbolClassId.ANTIWING_SCROLL_AND_ARC]: {                              //    ,)|)
        flaccoId: FlaccoId.ANTIWING_SCROLL_AND_ARC,
        commaClassId: CommaClassId._5_17_V_11_C,
    },
    [SymbolClassId.SCROLL_AND_ARC]: {                                       //     )|)
        flaccoId: FlaccoId.SCROLL_AND_ARC,
        commaClassId: CommaClassId._19_V_7_C,
    },
    [SymbolClassId.ANTITICK_AND_LEFT_ARC]: {                                //    .(|
        flaccoId: FlaccoId.ANTITICK_AND_LEFT_ARC,
        commaClassId: CommaClassId._7_V_55_C,
    },
    [SymbolClassId.RIGHT_BARB]: {                                           //      |\
        flaccoId: FlaccoId.RIGHT_BARB,
        commaClassId: CommaClassId._55_C,
    },
    [SymbolClassId.WING_AND_RIGHT_BARB]: {                                  //     `|\
        flaccoId: FlaccoId.WING_AND_RIGHT_BARB,
        commaClassId: CommaClassId._11_V_7_13_C,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_ARC]: {                                //    ,(|
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_ARC,
        commaClassId: CommaClassId._125_V_23_C,
    },
    [SymbolClassId.LEFT_ARC]: {                                             //     (|
        flaccoId: FlaccoId.LEFT_ARC,
        commaClassId: CommaClassId._7_V_11_C,
    },
    [SymbolClassId.WING_AND_LEFT_ARC]: {                                    //    `(|
        flaccoId: FlaccoId.WING_AND_LEFT_ARC,
        commaClassId: CommaClassId._13_V_17_S,
    },
    [SymbolClassId.BIRD_AND_LEFT_ARC]: {                                    //   ``(|
        flaccoId: FlaccoId.BIRD_AND_LEFT_ARC,
        commaClassId: CommaClassId._17_V_25_S,
    },
    [SymbolClassId.ANTIWING_TICK_AND_LEFT_ARC]: {                           //   ,'(|
        flaccoId: FlaccoId.ANTIWING_TICK_AND_LEFT_ARC,
        commaClassId: CommaClassId._7_V_13_19_S,
    },
    [SymbolClassId.TICK_AND_LEFT_ARC]: {                                    //    '(|
        flaccoId: FlaccoId.TICK_AND_LEFT_ARC,
        commaClassId: CommaClassId._25_V_49_S,
    },
    [SymbolClassId.ANTIWING_BOATHOOK_AND_ARC]: {                            //    ,~|)
        flaccoId: FlaccoId.ANTIWING_BOATHOOK_AND_ARC,
        commaClassId: CommaClassId._31_S,
    },
    [SymbolClassId.BOATHOOK_AND_ARC]: {                                     //     ~|)
        flaccoId: FlaccoId.BOATHOOK_AND_ARC,
        commaClassId: CommaClassId._49_S,
    },
    [SymbolClassId.WING_BOATHOOK_AND_ARC]: {                                //    `~|)
        flaccoId: FlaccoId.WING_BOATHOOK_AND_ARC,
        commaClassId: CommaClassId._17_V_5_S,
    },
    [SymbolClassId.ANTIWING_ANTITICK_ARC_AND_SCROLL]: {                     //   ,.(|(
        flaccoId: FlaccoId.ANTIWING_ANTITICK_ARC_AND_SCROLL,
        commaClassId: CommaClassId._11_V_23_S,
    },
    [SymbolClassId.ANTITICK_ARC_AND_SCROLL]: {                              //    .(|(
        flaccoId: FlaccoId.ANTITICK_ARC_AND_SCROLL,
        commaClassId: CommaClassId._1_V_11_S,
    },
    [SymbolClassId.TICK_BOATHOOK_AND_ARC]: {                                //    '~|)
        flaccoId: FlaccoId.TICK_BOATHOOK_AND_ARC,
        commaClassId: CommaClassId._5_7_P_2_S,
    },
    [SymbolClassId.BARB_AND_BOATHOOK]: {                                    //     /|~
        flaccoId: FlaccoId.BARB_AND_BOATHOOK,
        commaClassId: CommaClassId._23_V_5_S,
    },
    [SymbolClassId.ANTIBIRD_ARC_AND_SCROLL]: {                              //   ,,(|(
        flaccoId: FlaccoId.ANTIBIRD_ARC_AND_SCROLL,
        commaClassId: CommaClassId._7_V_13_S,
    },
    [SymbolClassId.ANTIWING_ARC_AND_SCROLL]: {                              //    ,(|(
        flaccoId: FlaccoId.ANTIWING_ARC_AND_SCROLL,
        commaClassId: CommaClassId._11_V_17_S,
    },
    [SymbolClassId.ARC_AND_SCROLL]: {                                       //     (|(
        flaccoId: FlaccoId.ARC_AND_SCROLL,
        commaClassId: CommaClassId._5_V_11_S,
    },
    [SymbolClassId.WING_ARC_AND_SCROLL]: {                                  //    `(|(
        flaccoId: FlaccoId.WING_ARC_AND_SCROLL,
        commaClassId: CommaClassId._1_V_7_11_13_S,
    },
    [SymbolClassId.BOATHOOK_AND_BARB]: {                                    //     ~|\
        flaccoId: FlaccoId.BOATHOOK_AND_BARB,
        commaClassId: CommaClassId._23_S,
    },
    [SymbolClassId.ANTIWING_ANTITICK_AND_DOUBLE_LEFT_BARB]: {               //  ,.//|
        flaccoId: FlaccoId.ANTIWING_ANTITICK_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._7_13_V_25_S,
    },
    [SymbolClassId.ANTITICK_AND_DOUBLE_LEFT_BARB]: {                        //   .//|
        flaccoId: FlaccoId.ANTITICK_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._1_V_125_S,
    },
    [SymbolClassId.WING_ANTITICK_AND_DOUBLE_LEFT_BARB]: {                   //  `.//|
        flaccoId: FlaccoId.WING_ANTITICK_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._35_S,
    },
    [SymbolClassId.ANTIBIRD_AND_DOUBLE_LEFT_BARB]: {                        //  ,,//|
        flaccoId: FlaccoId.ANTIBIRD_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._17_V_7_S,
    },
    [SymbolClassId.ANTIWING_AND_DOUBLE_LEFT_BARB]: {                        //   ,//|
        flaccoId: FlaccoId.ANTIWING_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._7_13_V_5_S,
    },
    [SymbolClassId.DOUBLE_LEFT_BARB]: {                                     //    //|
        flaccoId: FlaccoId.DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._1_V_25_S,
    },
    [SymbolClassId.WING_AND_DOUBLE_LEFT_BARB]: {                            //   `//|
        flaccoId: FlaccoId.WING_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._5_P_2_7_S,
    },
    [SymbolClassId.BIRD_AND_DOUBLE_LEFT_BARB]: {                            //  ``//|
        flaccoId: FlaccoId.BIRD_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._5_V_13_S,
    },
    [SymbolClassId.ANTIWING_TICK_AND_DOUBLE_LEFT_BARB]: {                   //  ,'//|
        flaccoId: FlaccoId.ANTIWING_TICK_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._49_V_17_S,
    },
    [SymbolClassId.TICK_AND_DOUBLE_LEFT_BARB]: {                            //   '//|
        flaccoId: FlaccoId.TICK_AND_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._13_V_19_S,
    },
    [SymbolClassId.ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {            // ,,)//|
        flaccoId: FlaccoId.ANTIBIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._77_V_25_M,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {            //  ,)//|
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._25_V_13_M,
    },
    [SymbolClassId.LEFT_SCROLL_DOUBLE_LEFT_BARB]: {                         //   )//|
        flaccoId: FlaccoId.LEFT_SCROLL_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._13_V_5_M,
    },
    [SymbolClassId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {                //  `)//|
        flaccoId: FlaccoId.WING_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._1_V_5_P_2_7_M,
    },
    [SymbolClassId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB]: {                // ``)//|
        flaccoId: FlaccoId.BIRD_AND_LEFT_SCROLL_DOUBLE_LEFT_BARB,
        commaClassId: CommaClassId._37_M,
    },
    [SymbolClassId.ANTIBIRD_BARB_AND_ARC]: {                                //   ,,/|)
        flaccoId: FlaccoId.ANTIBIRD_BARB_AND_ARC,
        commaClassId: CommaClassId._11_V_5_P_2_13_M,
    },
    [SymbolClassId.ANTIWING_BARB_AND_ARC]: {                                //    ,/|)
        flaccoId: FlaccoId.ANTIWING_BARB_AND_ARC,
        commaClassId: CommaClassId._13_M,
    },
    [SymbolClassId.BARB_AND_ARC]: {                                         //     /|)
        flaccoId: FlaccoId.BARB_AND_ARC,
        commaClassId: CommaClassId._1_V_35_M,
    },
    [SymbolClassId.WING_BARB_AND_ARC]: {                                    //    `/|)
        flaccoId: FlaccoId.WING_BARB_AND_ARC,
        commaClassId: CommaClassId._125_M,
    },
    [SymbolClassId.ARC_AND_BOATHOOK]: {                                     //     (|~
        flaccoId: FlaccoId.ARC_AND_BOATHOOK,
        commaClassId: CommaClassId._11_V_19_M,
    },
    [SymbolClassId.ANTIWING_TICK_BARB_AND_ARC]: {                           //   ,'/|)
        flaccoId: FlaccoId.ANTIWING_TICK_BARB_AND_ARC,
        commaClassId: CommaClassId._65_M,
    },
    [SymbolClassId.TICK_BARB_AND_ARC]: {                                    //    '/|)
        flaccoId: FlaccoId.TICK_BARB_AND_ARC,
        commaClassId: CommaClassId._1_V_7_M,
    },
    [SymbolClassId.WING_TICK_BARB_AND_ARC]: {                               //   `'/|)
        flaccoId: FlaccoId.WING_TICK_BARB_AND_ARC,
        commaClassId: CommaClassId._5_P_4_M,
    },
    [SymbolClassId.ANTITICK_AND_DOUBLE_BARB]: {                             //    ./|\
        flaccoId: FlaccoId.ANTITICK_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._11_V_5_M,
    },
    [SymbolClassId.WING_ANTITICK_AND_DOUBLE_BARB]: {                        //   `./|\
        flaccoId: FlaccoId.WING_ANTITICK_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._17_V_11_M,
    },
    [SymbolClassId.ANTIBIRD_AND_DOUBLE_BARB]: {                             //   ,,/|\
        flaccoId: FlaccoId.ANTIBIRD_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._5_V_23_M,
    },
    [SymbolClassId.ANTIWING_AND_DOUBLE_BARB]: {                             //    ,/|\
        flaccoId: FlaccoId.ANTIWING_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._7_V_5_P_2_11_M,
    },
    [SymbolClassId.DOUBLE_BARB]: {                                          //     /|\
        flaccoId: FlaccoId.DOUBLE_BARB,
        commaClassId: CommaClassId._11_M,
    },
    [SymbolClassId.WING_AND_DOUBLE_BARB]: {                                 //    `/|\
        flaccoId: FlaccoId.WING_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._5_17_V_11_M,
    },
    [SymbolClassId.ANTIWING_AND_LEFT_ARC_AND_BARB]: {                       //   ,(/|
        flaccoId: FlaccoId.ANTIWING_AND_LEFT_ARC_AND_BARB,
        commaClassId: CommaClassId._65_V_7_M,
    },
    [SymbolClassId.LEFT_ARC_AND_BARB]: {                                    //    (/|
        flaccoId: FlaccoId.LEFT_ARC_AND_BARB,
        commaClassId: CommaClassId._1_V_49_M,
    },
    [SymbolClassId.WING_AND_LEFT_ARC_AND_BARB]: {                           //   `(/|
        flaccoId: FlaccoId.WING_AND_LEFT_ARC_AND_BARB,
        commaClassId: CommaClassId._1_V_31_M,
    },
    [SymbolClassId.TICK_AND_DOUBLE_BARB]: {                                 //    '/|\
        flaccoId: FlaccoId.TICK_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._55_M,
    },
    [SymbolClassId.WING_TICK_AND_DOUBLE_BARB]: {                            //   `'/|\
        flaccoId: FlaccoId.WING_TICK_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._11_V_7_13_M,
    },
    [SymbolClassId.ANTIWING_LEFT_SCROLL_AND_DOUBLE_BARB]: {                 //   ,)/|\
        flaccoId: FlaccoId.ANTIWING_LEFT_SCROLL_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._5_7_17_M,
    },
    [SymbolClassId.LEFT_SCROLL_AND_DOUBLE_BARB]: {                          //    )/|\
        flaccoId: FlaccoId.LEFT_SCROLL_AND_DOUBLE_BARB,
        commaClassId: CommaClassId._5_V_49_M,
    },
}

const getSymbolClass = (symbolClassId: SymbolClassId): SymbolClass => {
    const maybeSymbolClass = SYMBOL_CLASSES[symbolClassId]

    if (isUndefined(maybeSymbolClass)) {
        throw new Error(`This flacco ID is not defined as a symbol class. It is probably one of the convenience flaccos defined with a value greater than a half apotome.`)
    }

    return maybeSymbolClass
}

export {
    getSymbolClass,
    SYMBOL_CLASSES,
}
