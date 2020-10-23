import {getHead, HeadName} from "../flacco"
import {Aim, Core, Shafts} from "./types"

const HEADS_SUPPORTED_WITH_EVEN_SHAFTS = [
    HeadName.LEFT_BARB,
    HeadName.RIGHT_ARC,
    HeadName.DOUBLE_LEFT_BARB,
    HeadName.BARB_AND_ARC,
    HeadName.DOUBLE_BARB,
    HeadName.DOUBLE_SCROLL,
    HeadName.BOATHOOK_AND_SCROLL,
    HeadName.RIGHT_BARB,
    HeadName.LEFT_ARC,
    HeadName.ARC_AND_SCROLL,
    HeadName.RIGHT_BOATHOOK,
    HeadName.LEFT_SCROLL_AND_BARB,
    HeadName.BARB_AND_BOATHOOK,
    HeadName.LEFT_SCROLL_AND_BOATHOOK,
    HeadName.DOUBLE_LEFT_BOATHOOK,
    HeadName.SCROLL_AND_BOATHOOK,
    HeadName.SCROLL_AND_ARC,
    HeadName.BOATHOOK_AND_ARC,
    HeadName.BOATHOOK_AND_BARB,
    HeadName.LEFT_SCROLL_DOUBLE_LEFT_BARB,
    HeadName.ARC_AND_BOATHOOK,
]

const getCore = (headName: HeadName, shafts: Shafts = Shafts.SINGLE, aim: Aim = Aim.UP): Core => {
    if (
        (shafts === Shafts.DOUBLE || shafts === Shafts.EX)
        && !HEADS_SUPPORTED_WITH_EVEN_SHAFTS.includes(headName)
    ) {
        throw new Error(`A core with flag combo ${headName} does not exist for even shaft counts.`)
    }

    if (headName === HeadName.BARE_SHAFT && shafts !== Shafts.SINGLE) {
        throw new Error(`Cannot have multiple bare shafts.`)
    }

    return { aim, shafts, ...getHead(headName) }
}

export {
    getCore,
}
