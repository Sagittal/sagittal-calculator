import {deepEquals, isUndefined, join, stringify, sumTexts} from "../../../general"
import {Accent, Arm, HeadName, Orientation, OrientedAccent} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Aim, Core, getCore, Sagittal, Shafts} from "../symbol"
import {BLANK_UNICODE, PARENTHETICAL_NATURAL_UNICODE} from "./constants"
import {Unicode} from "./types"

const CORE_UNICODE_EQUIVALENTS: Array<{core: Core, unicode: Unicode}> = [
    {core: getCore(HeadName.BARE_SHAFT), unicode: "" as Unicode},
    {core: getCore(HeadName.BARE_SHAFT, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_SCROLL), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_SCROLL), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_SCROLL), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_ARC), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_ARC), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_ARC), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_SCROLL), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_ARC), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC_AND_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_DOUBLE_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_ARC), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB_AND_ARC), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_RIGHT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_RIGHT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_SCROLL, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BOATHOOK, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_SCROLL, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_SCROLL, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BOATHOOK, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BOATHOOK, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_BOATHOOK, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_ARC, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_ARC, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_ARC, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_SCROLL, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_BOATHOOK, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_ARC, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BOATHOOK, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC_AND_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_DOUBLE_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_ARC, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB_AND_ARC, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_RIGHT_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_RIGHT_BARB, Shafts.SINGLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_BARB, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BOATHOOK, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_ARC, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BARB, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_BARB, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_SCROLL, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_BOATHOOK, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_ARC, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_ARC, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_ARC, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BARB, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_BOATHOOK, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BARB, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BOATHOOK, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_SCROLL, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BOATHOOK, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_SCROLL, Shafts.DOUBLE), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_BARB, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BOATHOOK, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_ARC, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BARB, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_BARB, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_SCROLL, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_BOATHOOK, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_ARC, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_ARC, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_ARC, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BARB, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_BOATHOOK, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BARB, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BOATHOOK, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_SCROLL, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BOATHOOK, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_SCROLL, Shafts.DOUBLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_SCROLL, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BOATHOOK, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_SCROLL, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_SCROLL, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BOATHOOK, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BOATHOOK, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_BOATHOOK, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_ARC, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_ARC, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_ARC, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_SCROLL, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_BOATHOOK, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_ARC, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BOATHOOK, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC_AND_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_DOUBLE_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_ARC, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB_AND_ARC, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_RIGHT_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_RIGHT_BARB, Shafts.TRIPLE), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_SCROLL, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BOATHOOK, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_SCROLL, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_SCROLL, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BOATHOOK, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BOATHOOK, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_BOATHOOK, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_ARC, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_ARC, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_ARC, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_SCROLL, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_BOATHOOK, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_ARC, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BOATHOOK, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC_AND_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_DOUBLE_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_ARC, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB_AND_ARC, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_RIGHT_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_RIGHT_BARB, Shafts.TRIPLE, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_BARB, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BOATHOOK, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_ARC, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BARB, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_BARB, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_SCROLL, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_BOATHOOK, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_ARC, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_ARC, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_ARC, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BARB, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_BOATHOOK, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BARB, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BOATHOOK, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_SCROLL, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BOATHOOK, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_SCROLL, Shafts.EX), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_BARB, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_BOATHOOK, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_ARC, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BARB, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_BARB, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.ARC_AND_SCROLL, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BARB_AND_BOATHOOK, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_ARC, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BARB, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_ARC, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_ARC, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_ARC, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BARB, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.SCROLL_AND_BOATHOOK, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_BARB, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_LEFT_BOATHOOK, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.BOATHOOK_AND_SCROLL, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.RIGHT_BOATHOOK, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.LEFT_SCROLL_AND_BOATHOOK, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
    {core: getCore(HeadName.DOUBLE_SCROLL, Shafts.EX, Aim.DOWN), unicode: "" as Unicode},
]

const ACCENT_TO_ORIENTATION_TO_AIM_TO_UNICODE_MAP: Record<Accent, Record<Orientation, Record<Aim, Unicode>>> = {
    [Accent.TICK]: {
        [Orientation.WITH]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
        [Orientation.AGAINST]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
    },
    [Accent.WING]: {
        [Orientation.WITH]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
        [Orientation.AGAINST]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
    },
    [Accent.BIRD]: {
        [Orientation.WITH]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
        [Orientation.AGAINST]: {[Aim.UP]: "" as Unicode, [Aim.DOWN]: "" as Unicode},
    },
}

const COMPATIBLE_TO_UNICODE_MAP: Record<Compatible, Unicode> = {
    [Compatible.STEIN_SEMISHARP]: "" as Unicode,
    [Compatible.STEIN_SEMIFLAT]: "" as Unicode,
    [Compatible.STEIN_SESQUISHARP]: "" as Unicode,
    [Compatible.ZIMMERMANN_SESQUIFLAT]: "" as Unicode,
    [Compatible.WILSON_PLUS]: "" as Unicode,
    [Compatible.WILSON_MINUS]: "" as Unicode,
    [Compatible.NATURAL]: "" as Unicode,
    [Compatible.SHARP]: "" as Unicode,
    [Compatible.FLAT]: "" as Unicode,
    [Compatible.DOUBLE_SHARP]: "" as Unicode,
    [Compatible.DOUBLE_FLAT]: "" as Unicode,
}

const computeCoreUnicode = (core: Core): Unicode => {
    const maybeEquivalent = CORE_UNICODE_EQUIVALENTS
        .find((equivalent: {core: Core}): boolean => deepEquals(equivalent.core, core))

    if (isUndefined(maybeEquivalent)) {
        throw new Error(`Could not find unicode for core ${stringify(core, {multiline: true})}`)
    }

    return maybeEquivalent.unicode
}

const computeCompatibleUnicode = (compatible: Compatible): Unicode =>
    COMPATIBLE_TO_UNICODE_MAP[compatible]

const computeOrientedAccentUnicode = ({accent, orientation}: OrientedAccent, aim: Aim): Unicode =>
    ACCENT_TO_ORIENTATION_TO_AIM_TO_UNICODE_MAP[accent][orientation][aim]

// Todo: FLAVOR / SYMBOL / SAGITTAL
//  I feel like these methods should take the Flavor parameter and pass it on, just in case
//  Although then, if Sagittal receives a Flavor, then the Flavor type moves out of the flavor/ module
const computeSagittalUnicode = ({arm, core}: Sagittal): Unicode => {
    const armUnicode = isUndefined(arm) ?
        BLANK_UNICODE :
        computeArmUnicode(arm, core?.aim as Aim)

    const coreUnicode = isUndefined(core) ?
        PARENTHETICAL_NATURAL_UNICODE :
        computeCoreUnicode(core)

    return sumTexts(armUnicode, coreUnicode)
}

const computeArmUnicode = (arm: Arm, aim: Aim): Unicode =>
    join(
        arm.map((orientedAccent: OrientedAccent): Unicode => computeOrientedAccentUnicode(orientedAccent, aim)),
        BLANK_UNICODE,
    )

const computeAccidentalUnicode = <T extends Flavor>({arm, core, compatible}: Accidental<T>): Unicode<T> => {
    const armUnicode = isUndefined(arm) ?
        BLANK_UNICODE :
        computeArmUnicode(arm, core?.aim as Aim)

    const coreUnicode = isUndefined(core) ?
        isUndefined(compatible) ? PARENTHETICAL_NATURAL_UNICODE : BLANK_UNICODE :
        computeCoreUnicode(core)

    const compatibleUnicode = isUndefined(compatible) ?
        BLANK_UNICODE :
        computeCompatibleUnicode(compatible)

    return sumTexts(armUnicode, coreUnicode, compatibleUnicode) as Unicode<T>
}

export {
    computeCoreUnicode,
    computeAccidentalUnicode,
    computeCompatibleUnicode,
    computeSagittalUnicode,
    computeOrientedAccentUnicode,
}
