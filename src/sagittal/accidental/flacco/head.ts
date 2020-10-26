import {Flag, Head, HeadId} from "./types"

const HEADS: Record<HeadId, Head> = {
    [HeadId.BARE_SHAFT]: {},                                                                         //    |
    [HeadId.RIGHT_SCROLL]: {right: [Flag.SCROLL]},                                                   //    |(
    [HeadId.LEFT_BARB]: {left: [Flag.BARB]},                                                         //   /|
    [HeadId.RIGHT_ARC]: {right: [Flag.ARC]},                                                         //    |)
    [HeadId.DOUBLE_LEFT_BARB]: {left: [Flag.BARB, Flag.BARB]},                                       //  //|
    [HeadId.BARB_AND_ARC]: {left: [Flag.BARB], right: [Flag.ARC]},                                   //   /|)
    [HeadId.DOUBLE_BARB]: {left: [Flag.BARB], right: [Flag.BARB]},                                   //   /|\
    [HeadId.DOUBLE_ARC]: {left: [Flag.ARC], right: [Flag.ARC]},                                      //   (|)
    [HeadId.ARC_AND_BARB]: {left: [Flag.ARC], right: [Flag.BARB]},                                   //   (|\
    [HeadId.DOUBLE_SCROLL]: {left: [Flag.SCROLL], right: [Flag.SCROLL]},                             //   )|(
    [HeadId.BOATHOOK_AND_SCROLL]: {left: [Flag.BOATHOOK], right: [Flag.SCROLL]},                     //   ~|(
    [HeadId.RIGHT_BARB]: {right: [Flag.BARB]},                                                       //    |\
    [HeadId.LEFT_ARC]: {left: [Flag.ARC]},                                                           //   (|
    [HeadId.ARC_AND_SCROLL]: {left: [Flag.ARC], right: [Flag.SCROLL]},                               //   (|(
    [HeadId.RIGHT_BOATHOOK]: {right: [Flag.BOATHOOK]},                                               //    |~
    [HeadId.LEFT_SCROLL_AND_BARB]: {left: [Flag.SCROLL, Flag.BARB]},                                 //  )/|
    [HeadId.BARB_AND_BOATHOOK]: {left: [Flag.BARB], right: [Flag.BOATHOOK]},                         //   /|~
    [HeadId.LEFT_SCROLL]: {left: [Flag.SCROLL]},                                                     //   )|
    [HeadId.LEFT_BOATHOOK]: {left: [Flag.BOATHOOK]},                                                 //   ~|
    [HeadId.LEFT_SCROLL_AND_BOATHOOK]: {left: [Flag.SCROLL, Flag.BOATHOOK]},                         //  )~|
    [HeadId.DOUBLE_LEFT_BOATHOOK]: {left: [Flag.BOATHOOK, Flag.BOATHOOK]},                           //  ~~|
    [HeadId.SCROLL_AND_BOATHOOK]: {left: [Flag.SCROLL], right: [Flag.BOATHOOK]},                     //   )|~
    [HeadId.SCROLL_AND_ARC]: {left: [Flag.SCROLL], right: [Flag.ARC]},                               //   )|)
    [HeadId.BOATHOOK_AND_ARC]: {left: [Flag.BOATHOOK], right: [Flag.ARC]},                           //   ~|)
    [HeadId.BOATHOOK_AND_BARB]: {left: [Flag.BOATHOOK], right: [Flag.BARB]},                         //   ~|\
    [HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB]: {left: [Flag.SCROLL, Flag.BARB, Flag.BARB]},              // )//|
    [HeadId.ARC_AND_BOATHOOK]: {left: [Flag.ARC], right: [Flag.BOATHOOK]},                           //    |
    [HeadId.LEFT_ARC_AND_BARB]: {left: [Flag.ARC, Flag.BARB]},                                       //  (/|
    [HeadId.LEFT_SCROLL_AND_DOUBLE_BARB]: {left: [Flag.SCROLL, Flag.BARB], right: [Flag.BARB]},      //  )/|\
    [HeadId.RIGHT_BARB_AND_ARC]: {right: [Flag.BARB, Flag.ARC]},                                     //    |\)
    [HeadId.DOUBLE_RIGHT_BARB]: {right: [Flag.BARB, Flag.BARB]},                                     //    |\\
    [HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB]: {left: [Flag.SCROLL], right: [Flag.BARB, Flag.BARB]},    //   )|\\
}

const getHead = (headName: HeadId): Head =>
    HEADS[headName]

export {
    getHead,
}
