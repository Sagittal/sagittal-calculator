import {Flag, FlagCombo, Shape, Side} from "./types"

const LEFT_BARB: Flag = {shape: Shape.BARB, side: Side.LEFT}            // /|
const RIGHT_BARB: Flag = {shape: Shape.BARB, side: Side.RIGHT}          //  |\

const LEFT_SCROLL: Flag = {shape: Shape.SCROLL, side: Side.LEFT}        // )|
const RIGHT_SCROLL: Flag = {shape: Shape.SCROLL, side: Side.RIGHT}      //  |(

const LEFT_ARC: Flag = {shape: Shape.ARC, side: Side.LEFT}              // (|
const RIGHT_ARC: Flag = {shape: Shape.ARC, side: Side.RIGHT}            //  |)

const LEFT_BOATHOOK: Flag = {shape: Shape.BOATHOOK, side: Side.LEFT}    // ~|
const RIGHT_BOATHOOK: Flag = {shape: Shape.BOATHOOK, side: Side.RIGHT}  //  |~

const FLAG_COMBOS: Record<FlagCombo, Flag[]> = {
    [FlagCombo.LEFT_SCROLL]: [LEFT_SCROLL],
    [FlagCombo.RIGHT_SCROLL]: [RIGHT_SCROLL],
    [FlagCombo.LEFT_BOATHOOK]: [LEFT_BOATHOOK],
    [FlagCombo.DOUBLE_SCROLL]: [LEFT_SCROLL, RIGHT_SCROLL],
    [FlagCombo.LEFT_SCROLL_AND_BOATHOOK]: [LEFT_SCROLL, LEFT_BOATHOOK],
    [FlagCombo.LEFT_BOATHOOK_RIGHT_SCROLL]: [LEFT_BOATHOOK, RIGHT_SCROLL],
    [FlagCombo.RIGHT_BOATHOOK]: [RIGHT_BOATHOOK],
    [FlagCombo.DOUBLE_LEFT_BOATHOOK]: [LEFT_BOATHOOK, LEFT_BOATHOOK],
    [FlagCombo.LEFT_SCROLL_RIGHT_BOATHOOK]: [LEFT_SCROLL, RIGHT_BOATHOOK],
    [FlagCombo.LEFT_BARB]: [LEFT_BARB],
    [FlagCombo.LEFT_SCROLL_AND_BARB]: [LEFT_SCROLL, LEFT_BARB],
    [FlagCombo.RIGHT_ARC]: [RIGHT_ARC],
    [FlagCombo.LEFT_SCROLL_RIGHT_ARC]: [LEFT_SCROLL, RIGHT_ARC],
    [FlagCombo.RIGHT_BARB]: [RIGHT_BARB],
    [FlagCombo.LEFT_ARC]: [LEFT_ARC],
    [FlagCombo.LEFT_BOATHOOK_RIGHT_ARC]: [LEFT_BOATHOOK, RIGHT_ARC],
    [FlagCombo.LEFT_BARB_RIGHT_BOATHOOK]: [LEFT_BARB, RIGHT_BOATHOOK],
    [FlagCombo.LEFT_ARC_RIGHT_SCROLL]: [LEFT_ARC, RIGHT_SCROLL],
    [FlagCombo.LEFT_BOATHOOK_RIGHT_BARB]: [LEFT_BOATHOOK, RIGHT_BARB],
    [FlagCombo.DOUBLE_LEFT_BARB]: [LEFT_BARB, LEFT_BARB],
    [FlagCombo.LEFT_SCROLL_AND_DOUBLE_LEFT_BARB]: [LEFT_SCROLL, LEFT_BARB, LEFT_BARB],
    [FlagCombo.LEFT_BARB_RIGHT_ARC]: [LEFT_BARB, RIGHT_ARC],
    [FlagCombo.LEFT_ARC_RIGHT_BOATHOOK]: [LEFT_ARC, RIGHT_BOATHOOK],
    [FlagCombo.DOUBLE_BARB]: [LEFT_BARB, RIGHT_BARB],
    [FlagCombo.LEFT_ARC_AND_BARB]: [LEFT_ARC, LEFT_BARB],
    [FlagCombo.LEFT_SCROLL_AND_DOUBLE_BARB]: [LEFT_SCROLL, LEFT_BARB, RIGHT_BARB],
    [FlagCombo.RIGHT_BARB_AND_ARC]: [RIGHT_BARB, RIGHT_ARC],
    [FlagCombo.DOUBLE_ARC]: [LEFT_ARC, RIGHT_ARC],
    [FlagCombo.DOUBLE_RIGHT_BARB]: [RIGHT_BARB, RIGHT_BARB],
    [FlagCombo.LEFT_ARC_RIGHT_BARB]: [LEFT_ARC, RIGHT_BARB],
    [FlagCombo.LEFT_SCROLL_DOUBLE_RIGHT_BARB]: [LEFT_SCROLL, RIGHT_BARB, RIGHT_BARB],
}

export {
    LEFT_BARB,
    RIGHT_BARB,
    LEFT_SCROLL,
    RIGHT_SCROLL,
    LEFT_ARC,
    RIGHT_ARC,
    LEFT_BOATHOOK,
    RIGHT_BOATHOOK,
    FLAG_COMBOS,
}
