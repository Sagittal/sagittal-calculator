import {FlagId, Head, HeadId} from "./types"

const HEADS: Record<HeadId, Head> = {
    [HeadId.BARE_SHAFT]: {},                                                                               //    |
    [HeadId.RIGHT_SCROLL]: {right: [FlagId.SCROLL]},                                                       //    |(
    [HeadId.LEFT_BARB]: {left: [FlagId.BARB]},                                                             //   /|
    [HeadId.RIGHT_ARC]: {right: [FlagId.ARC]},                                                             //    |)
    [HeadId.DOUBLE_LEFT_BARB]: {left: [FlagId.BARB, FlagId.BARB]},                                         //  //|
    [HeadId.BARB_AND_ARC]: {left: [FlagId.BARB], right: [FlagId.ARC]},                                     //   /|)
    [HeadId.DOUBLE_BARB]: {left: [FlagId.BARB], right: [FlagId.BARB]},                                     //   /|\
    [HeadId.DOUBLE_ARC]: {left: [FlagId.ARC], right: [FlagId.ARC]},                                        //   (|)
    [HeadId.ARC_AND_BARB]: {left: [FlagId.ARC], right: [FlagId.BARB]},                                     //   (|\
    [HeadId.DOUBLE_SCROLL]: {left: [FlagId.SCROLL], right: [FlagId.SCROLL]},                               //   )|(
    [HeadId.BOATHOOK_AND_SCROLL]: {left: [FlagId.BOATHOOK], right: [FlagId.SCROLL]},                       //   ~|(
    [HeadId.RIGHT_BARB]: {right: [FlagId.BARB]},                                                           //    |\
    [HeadId.LEFT_ARC]: {left: [FlagId.ARC]},                                                               //   (|
    [HeadId.ARC_AND_SCROLL]: {left: [FlagId.ARC], right: [FlagId.SCROLL]},                                 //   (|(
    [HeadId.RIGHT_BOATHOOK]: {right: [FlagId.BOATHOOK]},                                                   //    |~
    [HeadId.LEFT_SCROLL_AND_BARB]: {left: [FlagId.SCROLL, FlagId.BARB]},                                   //  )/|
    [HeadId.BARB_AND_BOATHOOK]: {left: [FlagId.BARB], right: [FlagId.BOATHOOK]},                           //   /|~
    [HeadId.LEFT_SCROLL]: {left: [FlagId.SCROLL]},                                                         //   )|
    [HeadId.LEFT_BOATHOOK]: {left: [FlagId.BOATHOOK]},                                                     //   ~|
    [HeadId.LEFT_SCROLL_AND_BOATHOOK]: {left: [FlagId.SCROLL, FlagId.BOATHOOK]},                           //  )~|
    [HeadId.DOUBLE_LEFT_BOATHOOK]: {left: [FlagId.BOATHOOK, FlagId.BOATHOOK]},                             //  ~~|
    [HeadId.SCROLL_AND_BOATHOOK]: {left: [FlagId.SCROLL], right: [FlagId.BOATHOOK]},                       //   )|~
    [HeadId.SCROLL_AND_ARC]: {left: [FlagId.SCROLL], right: [FlagId.ARC]},                                 //   )|)
    [HeadId.BOATHOOK_AND_ARC]: {left: [FlagId.BOATHOOK], right: [FlagId.ARC]},                             //   ~|)
    [HeadId.BOATHOOK_AND_BARB]: {left: [FlagId.BOATHOOK], right: [FlagId.BARB]},                           //   ~|\
    [HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB]: {left: [FlagId.SCROLL, FlagId.BARB, FlagId.BARB]},              // )//|
    [HeadId.ARC_AND_BOATHOOK]: {left: [FlagId.ARC], right: [FlagId.BOATHOOK]},                             //    |
    [HeadId.LEFT_ARC_AND_BARB]: {left: [FlagId.ARC, FlagId.BARB]},                                         //  (/|
    [HeadId.LEFT_SCROLL_AND_DOUBLE_BARB]: {left: [FlagId.SCROLL, FlagId.BARB], right: [FlagId.BARB]},      //  )/|\
    [HeadId.RIGHT_BARB_AND_ARC]: {right: [FlagId.BARB, FlagId.ARC]},                                       //    |\)
    [HeadId.DOUBLE_RIGHT_BARB]: {right: [FlagId.BARB, FlagId.BARB]},                                       //    |\\
    [HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB]: {left: [FlagId.SCROLL], right: [FlagId.BARB, FlagId.BARB]},    //   )|\\
}

const getHead = (headId: HeadId): Head =>
    HEADS[headId]

export {
    getHead,
}
