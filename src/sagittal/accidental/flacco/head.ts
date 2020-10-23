import {Flag, Head, HeadName} from "./types"

const HEADS: Record<HeadName, Head> = {
    [HeadName.BARE_SHAFT]: {},                                                                         //    |
    [HeadName.RIGHT_SCROLL]: {right: [Flag.SCROLL]},                                                   //    |(
    [HeadName.LEFT_BARB]: {left: [Flag.BARB]},                                                         //   /|
    [HeadName.RIGHT_ARC]: {right: [Flag.ARC]},                                                         //    |)
    [HeadName.DOUBLE_LEFT_BARB]: {left: [Flag.BARB, Flag.BARB]},                                       //  //|
    [HeadName.BARB_AND_ARC]: {left: [Flag.BARB], right: [Flag.ARC]},                                   //   /|)
    [HeadName.DOUBLE_BARB]: {left: [Flag.BARB], right: [Flag.BARB]},                                   //   /|\
    [HeadName.DOUBLE_ARC]: {left: [Flag.ARC], right: [Flag.ARC]},                                      //   (|)
    [HeadName.ARC_AND_BARB]: {left: [Flag.ARC], right: [Flag.BARB]},                                   //   (|\
    [HeadName.DOUBLE_SCROLL]: {left: [Flag.SCROLL], right: [Flag.SCROLL]},                             //   )|(
    [HeadName.BOATHOOK_AND_SCROLL]: {left: [Flag.BOATHOOK], right: [Flag.SCROLL]},                     //   ~|(
    [HeadName.RIGHT_BARB]: {right: [Flag.BARB]},                                                       //    |\
    [HeadName.LEFT_ARC]: {left: [Flag.ARC]},                                                           //   (|
    [HeadName.ARC_AND_SCROLL]: {left: [Flag.ARC], right: [Flag.SCROLL]},                               //   (|(
    [HeadName.RIGHT_BOATHOOK]: {right: [Flag.BOATHOOK]},                                               //    |~
    [HeadName.LEFT_SCROLL_AND_BARB]: {left: [Flag.SCROLL, Flag.BARB]},                                 //  )/|
    [HeadName.BARB_AND_BOATHOOK]: {left: [Flag.BARB], right: [Flag.BOATHOOK]},                         //   /|~
    [HeadName.LEFT_SCROLL]: {left: [Flag.SCROLL]},                                                     //   )|
    [HeadName.LEFT_BOATHOOK]: {left: [Flag.BOATHOOK]},                                                 //   ~|
    [HeadName.LEFT_SCROLL_AND_BOATHOOK]: {left: [Flag.SCROLL, Flag.BOATHOOK]},                         //  )~|
    [HeadName.DOUBLE_LEFT_BOATHOOK]: {left: [Flag.BOATHOOK, Flag.BOATHOOK]},                           //  ~~|
    [HeadName.SCROLL_AND_BOATHOOK]: {left: [Flag.SCROLL], right: [Flag.BOATHOOK]},                     //   )|~
    [HeadName.SCROLL_AND_ARC]: {left: [Flag.SCROLL], right: [Flag.ARC]},                               //   )|)
    [HeadName.BOATHOOK_AND_ARC]: {left: [Flag.BOATHOOK], right: [Flag.ARC]},                           //   ~|)
    [HeadName.BOATHOOK_AND_BARB]: {left: [Flag.BOATHOOK], right: [Flag.BARB]},                         //   ~|\
    [HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB]: {left: [Flag.SCROLL, Flag.BARB, Flag.BARB]},              // )//|
    [HeadName.ARC_AND_BOATHOOK]: {left: [Flag.ARC], right: [Flag.BOATHOOK]},                           //    |
    [HeadName.LEFT_ARC_AND_BARB]: {left: [Flag.ARC, Flag.BARB]},                                       //  (/|
    [HeadName.LEFT_SCROLL_AND_DOUBLE_BARB]: {left: [Flag.SCROLL, Flag.BARB], right: [Flag.BARB]},      //  )/|\
    [HeadName.RIGHT_BARB_AND_ARC]: {right: [Flag.BARB, Flag.ARC]},                                     //    |\)
    [HeadName.DOUBLE_RIGHT_BARB]: {right: [Flag.BARB, Flag.BARB]},                                     //    |\\
    [HeadName.LEFT_SCROLL_DOUBLE_RIGHT_BARB]: {left: [Flag.SCROLL], right: [Flag.BARB, Flag.BARB]},    //   )|\\
}

const getHead = (headName: HeadName): Head =>
    HEADS[headName]

export {
    getHead,
}
