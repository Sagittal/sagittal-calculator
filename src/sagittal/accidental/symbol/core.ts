import {FlagComboName, FLAG_COMBOS} from "../flacco"
import {Aim, Core, Shafts} from "./types"

const FLAG_COMBOS_SUPPORTED_WITH_EVEN_SHAFTS = [
    FlagComboName.LEFT_BARB,
    FlagComboName.RIGHT_ARC,
    FlagComboName.DOUBLE_LEFT_BARB,
    FlagComboName.BARB_AND_ARC,
    FlagComboName.DOUBLE_BARB,
    FlagComboName.DOUBLE_SCROLL,
    FlagComboName.BOATHOOK_AND_SCROLL,
    FlagComboName.RIGHT_BARB,
    FlagComboName.LEFT_ARC,
    FlagComboName.ARC_AND_SCROLL,
    FlagComboName.RIGHT_BOATHOOK,
    FlagComboName.LEFT_SCROLL_AND_BARB,
    FlagComboName.BARB_AND_BOATHOOK,
    FlagComboName.LEFT_SCROLL_AND_BOATHOOK,
    FlagComboName.DOUBLE_LEFT_BOATHOOK,
    FlagComboName.SCROLL_AND_BOATHOOK,
    FlagComboName.SCROLL_AND_ARC,
    FlagComboName.BOATHOOK_AND_ARC,
    FlagComboName.BOATHOOK_AND_BARB,
    FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB,
    FlagComboName.ARC_AND_BOATHOOK,
]

const getCore = (flagComboName: FlagComboName, shafts: Shafts = Shafts.SINGLE, aim: Aim = Aim.UP): Core => {
    if (
        (shafts === Shafts.DOUBLE || shafts === Shafts.EX)
        && !FLAG_COMBOS_SUPPORTED_WITH_EVEN_SHAFTS.includes(flagComboName)
    ) {
        throw new Error(`A core with flag combo ${flagComboName} does not exist for even shaft counts.`)
    }

    if (flagComboName === FlagComboName.BARE_SHAFT && shafts !== Shafts.SINGLE) {
        throw new Error(`Cannot have multiple bare shafts.`)
    }

    return { aim, shafts, ...FLAG_COMBOS[flagComboName] }
}

export {
    getCore,
}
