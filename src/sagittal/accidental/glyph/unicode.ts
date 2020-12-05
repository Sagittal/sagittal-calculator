import {deepEquals, isUndefined, join, Maybe, stringify, sumTexts} from "@sagittal/general"
import {Accent, AccentId, Arm, HeadId} from "../flacco"
import {Accidental, Compatible, Flavor} from "../flavor"
import {Core, getCore, Sagittal, Shafts} from "../sagittal"
import {BLANK_UNICODE, PARENTHETICAL_NATURAL_UNICODE} from "./constants"
import {Unicode} from "./types"

const CORE_UNICODE_EQUIVALENTS: Array<{core: Core, unicode: Unicode}> = [
    {core: getCore(HeadId.BARE_SHAFT), unicode: "" as Unicode},
    {core: getCore(HeadId.BARE_SHAFT, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_SCROLL), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_SCROLL), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_SCROLL), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_ARC), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_ARC), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_ARC), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_SCROLL), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_ARC), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BOATHOOK), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC_AND_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_ARC), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB_AND_ARC), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_RIGHT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_SCROLL, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BOATHOOK, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_SCROLL, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_SCROLL, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BOATHOOK, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BOATHOOK, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_BOATHOOK, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_ARC, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_ARC, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_ARC, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_SCROLL, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_BOATHOOK, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_ARC, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BOATHOOK, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC_AND_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_ARC, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB_AND_ARC, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_RIGHT_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB, {down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_BARB, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BOATHOOK, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_ARC, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BARB, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_BARB, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_SCROLL, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_BOATHOOK, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_ARC, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_ARC, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_ARC, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BARB, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_BOATHOOK, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BARB, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BOATHOOK, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_SCROLL, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BOATHOOK, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_SCROLL, {shafts: Shafts.DOUBLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_BARB, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BOATHOOK, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_ARC, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BARB, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_BARB, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_SCROLL, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_BOATHOOK, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_ARC, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_ARC, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_ARC, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BARB, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_BOATHOOK, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BARB, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BOATHOOK, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_SCROLL, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BOATHOOK, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_SCROLL, {shafts: Shafts.DOUBLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_SCROLL, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BOATHOOK, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_SCROLL, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_SCROLL, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BOATHOOK, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BOATHOOK, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_BOATHOOK, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_ARC, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_ARC, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_ARC, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_SCROLL, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_BOATHOOK, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_ARC, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BOATHOOK, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC_AND_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_ARC, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB_AND_ARC, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_RIGHT_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB, {shafts: Shafts.TRIPLE}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_SCROLL, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BOATHOOK, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_SCROLL, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_SCROLL, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BOATHOOK, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BOATHOOK, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_BOATHOOK, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_ARC, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_ARC, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_ARC, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_SCROLL, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_BOATHOOK, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_ARC, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BOATHOOK, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC_AND_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_ARC, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB_AND_ARC, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_RIGHT_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB, {shafts: Shafts.TRIPLE, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_BARB, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BOATHOOK, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_ARC, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BARB, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_BARB, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_SCROLL, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_BOATHOOK, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_ARC, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_ARC, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_ARC, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BARB, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_BOATHOOK, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BARB, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BOATHOOK, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_SCROLL, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BOATHOOK, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_SCROLL, {shafts: Shafts.EX}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_BARB, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_BOATHOOK, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_ARC, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BARB, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_BARB, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.ARC_AND_SCROLL, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BARB_AND_BOATHOOK, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_ARC, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BARB, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_ARC, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_ARC, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_ARC, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BARB, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.SCROLL_AND_BOATHOOK, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_BARB, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_LEFT_BOATHOOK, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.BOATHOOK_AND_SCROLL, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.RIGHT_BOATHOOK, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.LEFT_SCROLL_AND_BOATHOOK, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
    {core: getCore(HeadId.DOUBLE_SCROLL, {shafts: Shafts.EX, down: true}), unicode: "" as Unicode},
]

const ACCENT_TO_UNICODE_MAP: Record<AccentId, Unicode> = {
    [AccentId.TICK]: "" as Unicode,
    [AccentId.WING]: "" as Unicode,
    [AccentId.BIRD]: "" as Unicode,
    [AccentId.HORN]: "" as Unicode,
    [AccentId.WEDGE]: "" as Unicode,
    [AccentId.HORNWING]: "" as Unicode,
    [AccentId.WEDGEWING]: "" as Unicode,
    [AccentId.HORNBIRD]: "" as Unicode,
    [AccentId.WEDGEBIRD]: "" as Unicode,
    [AccentId.WINGBIRD]: "" as Unicode,
    [AccentId.DOT]: "" as Unicode,
}

const DOWN_ACCENT_TO_UNICODE_MAP: Record<AccentId, Unicode> = {
    [AccentId.TICK]: "" as Unicode,
    [AccentId.WING]: "" as Unicode,
    [AccentId.BIRD]: "" as Unicode,
    [AccentId.HORN]: "" as Unicode,
    [AccentId.WEDGE]: "" as Unicode,
    [AccentId.HORNWING]: "" as Unicode,
    [AccentId.WEDGEWING]: "" as Unicode,
    [AccentId.HORNBIRD]: "" as Unicode,
    [AccentId.WEDGEBIRD]: "" as Unicode,
    [AccentId.WINGBIRD]: "" as Unicode,
    [AccentId.DOT]: "" as Unicode,
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

const computeAccentUnicode = ({id, anti}: Accent, down?: boolean): Unicode =>
    anti ?
        down ?
            ACCENT_TO_UNICODE_MAP[id] :
            DOWN_ACCENT_TO_UNICODE_MAP[id] :
        down ?
            DOWN_ACCENT_TO_UNICODE_MAP[id] :
            ACCENT_TO_UNICODE_MAP[id]

const computeSagittalUnicode = (sagittal: Maybe<Sagittal>): Unicode => {
    if (isUndefined(sagittal)) return PARENTHETICAL_NATURAL_UNICODE
    const {arm, ...core} = sagittal

    const armUnicode = isUndefined(arm) ? BLANK_UNICODE : computeArmUnicode(arm, core.down)
    const coreUnicode = computeCoreUnicode(core)

    return sumTexts(armUnicode, coreUnicode)
}

const computeArmUnicode = (arm: Arm, down?: boolean): Unicode =>
    join(
        arm.map((accent: Accent): Unicode => computeAccentUnicode(accent, down)),
        BLANK_UNICODE,
    )

const computeAccidentalUnicode = <T extends Maybe<Flavor> = undefined>(
    accidental: Accidental<T>,
): Unicode<T> => {
    if (isUndefined(accidental)) return PARENTHETICAL_NATURAL_UNICODE as Unicode<T>
    const {arm, compatible, ...core} = accidental

    const armUnicode = isUndefined(arm) ?
        BLANK_UNICODE :
        computeArmUnicode(arm, core.down)

    const coreUnicode = deepEquals(core, {} as Core) ?
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
    computeAccentUnicode,
    ACCENT_TO_UNICODE_MAP,
    DOWN_ACCENT_TO_UNICODE_MAP,
    COMPATIBLE_TO_UNICODE_MAP,
    CORE_UNICODE_EQUIVALENTS,
}
