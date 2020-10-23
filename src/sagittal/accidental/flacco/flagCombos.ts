import {Flag, FlagCombo, FlagComboName} from "./types"

const FLAG_COMBOS: Record<FlagComboName, FlagCombo> = {
    [FlagComboName.BARE_SHAFT]: {},                                                                         //    |
    [FlagComboName.RIGHT_SCROLL]: {right: [Flag.SCROLL]},                                                   //    |(
    [FlagComboName.LEFT_BARB]: {left: [Flag.BARB]},                                                         //   /|
    [FlagComboName.RIGHT_ARC]: {right: [Flag.ARC]},                                                         //    |)
    [FlagComboName.DOUBLE_LEFT_BARB]: {left: [Flag.BARB, Flag.BARB]},                                       //  //|
    [FlagComboName.BARB_AND_ARC]: {left: [Flag.BARB], right: [Flag.ARC]},                                   //   /|)
    [FlagComboName.DOUBLE_BARB]: {left: [Flag.BARB], right: [Flag.BARB]},                                   //   /|\
    [FlagComboName.DOUBLE_ARC]: {left: [Flag.ARC], right: [Flag.ARC]},                                      //   (|)
    [FlagComboName.ARC_AND_BARB]: {left: [Flag.ARC], right: [Flag.BARB]},                                   //   (|\
    [FlagComboName.DOUBLE_SCROLL]: {left: [Flag.SCROLL], right: [Flag.SCROLL]},                             //   )|(
    [FlagComboName.BOATHOOK_AND_SCROLL]: {left: [Flag.BOATHOOK], right: [Flag.SCROLL]},                     //   ~|(
    [FlagComboName.RIGHT_BARB]: {right: [Flag.BARB]},                                                       //    |\
    [FlagComboName.LEFT_ARC]: {left: [Flag.ARC]},                                                           //   (|
    [FlagComboName.ARC_AND_SCROLL]: {left: [Flag.ARC], right: [Flag.SCROLL]},                               //   (|(
    [FlagComboName.RIGHT_BOATHOOK]: {right: [Flag.BOATHOOK]},                                               //    |~
    [FlagComboName.LEFT_SCROLL_AND_BARB]: {left: [Flag.SCROLL, Flag.BARB]},                                 //  )/|
    [FlagComboName.BARB_AND_BOATHOOK]: {left: [Flag.BARB], right: [Flag.BOATHOOK]},                         //   /|~
    [FlagComboName.LEFT_SCROLL]: {left: [Flag.SCROLL]},                                                     //   )|
    [FlagComboName.LEFT_BOATHOOK]: {left: [Flag.BOATHOOK]},                                                 //   ~|
    [FlagComboName.LEFT_SCROLL_AND_BOATHOOK]: {left: [Flag.SCROLL, Flag.BOATHOOK]},                         //  )~|
    [FlagComboName.DOUBLE_LEFT_BOATHOOK]: {left: [Flag.BOATHOOK, Flag.BOATHOOK]},                           //  ~~|
    [FlagComboName.SCROLL_AND_BOATHOOK]: {left: [Flag.SCROLL], right: [Flag.BOATHOOK]},                     //   )|~
    [FlagComboName.SCROLL_AND_ARC]: {left: [Flag.SCROLL], right: [Flag.ARC]},                               //   )|)
    [FlagComboName.BOATHOOK_AND_ARC]: {left: [Flag.BOATHOOK], right: [Flag.ARC]},                           //   ~|)
    [FlagComboName.BOATHOOK_AND_BARB]: {left: [Flag.BOATHOOK], right: [Flag.BARB]},                         //   ~|\
    [FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB]: {left: [Flag.SCROLL, Flag.BARB, Flag.BARB]},              // )//|
    [FlagComboName.ARC_AND_BOATHOOK]: {left: [Flag.ARC], right: [Flag.BOATHOOK]},                           //    |
    [FlagComboName.LEFT_ARC_AND_BARB]: {left: [Flag.ARC, Flag.BARB]},                                       //  (/|
    [FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB]: {left: [Flag.SCROLL, Flag.BARB], right: [Flag.BARB]},      //  )/|\
    [FlagComboName.RIGHT_BARB_AND_ARC]: {right: [Flag.BARB, Flag.ARC]},                                     //    |\)
    [FlagComboName.DOUBLE_RIGHT_BARB]: {right: [Flag.BARB, Flag.BARB]},                                     //    |\\
    [FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB]: {left: [Flag.SCROLL], right: [Flag.BARB, Flag.BARB]},    //   )|\\
}

export {
    FLAG_COMBOS,
}
