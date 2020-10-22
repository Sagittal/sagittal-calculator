import {FlagComboName, FLAG_COMBOS} from "../flacco"
import {Aim, Core, CoreName, Shafts} from "./types"

// Todo: FLACOMBO, SECTION, NOTATION GENERATION
//  These could be generated / tested, from the flaccos + apotome complement
//  Er, well, at least it seems like they could, except for the fact that the enum keys are totally unique
//  Unless you had some way to assemble those... and maybe you wouldn't want to even if you could.
const CORES: Record<CoreName, Core> = {
    [CoreName.RIGHT_SCROLL_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_SCROLL],
    },
    [CoreName.RIGHT_SCROLL_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_SCROLL],
    },
    [CoreName.LEFT_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    [CoreName.LEFT_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    [CoreName.RIGHT_ARC_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    [CoreName.RIGHT_ARC_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    [CoreName.DOUBLE_LEFT_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    [CoreName.DOUBLE_LEFT_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    [CoreName.BARB_AND_ARC_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    [CoreName.BARB_AND_ARC_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    [CoreName.DOUBLE_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    [CoreName.DOUBLE_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    [CoreName.DOUBLE_ARC_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    [CoreName.DOUBLE_ARC_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    [CoreName.ARC_AND_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    [CoreName.ARC_AND_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    [CoreName.DOUBLE_SCROLL_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    [CoreName.DOUBLE_SCROLL_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    [CoreName.RIGHT_ARC_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    [CoreName.RIGHT_ARC_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    [CoreName.RIGHT_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB],
    },
    [CoreName.RIGHT_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB],
    },
    [CoreName.BARB_AND_ARC_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    [CoreName.BARB_AND_ARC_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    [CoreName.DOUBLE_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    [CoreName.DOUBLE_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    [CoreName.RIGHT_SCROLL_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_SCROLL],
    },
    [CoreName.RIGHT_SCROLL_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_SCROLL],
    },
    [CoreName.LEFT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    [CoreName.LEFT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    [CoreName.RIGHT_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    [CoreName.RIGHT_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    [CoreName.DOUBLE_LEFT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    [CoreName.DOUBLE_LEFT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    [CoreName.BARB_AND_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    [CoreName.BARB_AND_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    [CoreName.DOUBLE_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    [CoreName.DOUBLE_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    [CoreName.DOUBLE_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    [CoreName.DOUBLE_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_ARC],
    },
    [CoreName.ARC_AND_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    [CoreName.ARC_AND_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BARB],
    },
    [CoreName.DOUBLE_SCROLL_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    [CoreName.DOUBLE_SCROLL_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    [CoreName.RIGHT_ARC_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    [CoreName.RIGHT_ARC_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.RIGHT_ARC],
    },
    [CoreName.RIGHT_BARB_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB],
    },
    [CoreName.RIGHT_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB],
    },
    [CoreName.BARB_AND_ARC_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    [CoreName.BARB_AND_ARC_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_ARC],
    },
    [CoreName.DOUBLE_BARB_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    [CoreName.DOUBLE_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_BARB],
    },
    [CoreName.DOUBLE_SCROLL_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    [CoreName.DOUBLE_SCROLL_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    [CoreName.BOATHOOK_AND_SCROLL_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    [CoreName.BOATHOOK_AND_SCROLL_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    [CoreName.RIGHT_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB],
    },
    [CoreName.RIGHT_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB],
    },
    [CoreName.LEFT_ARC_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    [CoreName.LEFT_ARC_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    [CoreName.ARC_AND_SCROLL_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    [CoreName.ARC_AND_SCROLL_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    [CoreName.BOATHOOK_AND_SCROLL_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    [CoreName.BOATHOOK_AND_SCROLL_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    [CoreName.SCROLL_AND_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_BOATHOOK],
    },
    [CoreName.SCROLL_AND_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_BOATHOOK],
    },
    [CoreName.LEFT_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    [CoreName.LEFT_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    [CoreName.ARC_AND_SCROLL_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    [CoreName.ARC_AND_SCROLL_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    [CoreName.DOUBLE_LEFT_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    [CoreName.DOUBLE_LEFT_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    [CoreName.DOUBLE_SCROLL_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    [CoreName.DOUBLE_SCROLL_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_SCROLL],
    },
    [CoreName.BOATHOOK_AND_SCROLL_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    [CoreName.BOATHOOK_AND_SCROLL_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    [CoreName.RIGHT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB],
    },
    [CoreName.RIGHT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB],
    },
    [CoreName.LEFT_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    [CoreName.LEFT_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    [CoreName.ARC_AND_SCROLL_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    [CoreName.ARC_AND_SCROLL_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    [CoreName.BOATHOOK_AND_SCROLL_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    [CoreName.BOATHOOK_AND_SCROLL_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_SCROLL],
    },
    [CoreName.SCROLL_AND_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_BOATHOOK],
    },
    [CoreName.SCROLL_AND_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_BOATHOOK],
    },
    [CoreName.LEFT_BARB_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    [CoreName.LEFT_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.LEFT_BARB],
    },
    [CoreName.ARC_AND_SCROLL_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    [CoreName.ARC_AND_SCROLL_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_SCROLL],
    },
    [CoreName.DOUBLE_LEFT_BARB_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    [CoreName.DOUBLE_LEFT_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BARB],
    },
    [CoreName.RIGHT_BOATHOOK_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    [CoreName.RIGHT_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_AND_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    [CoreName.LEFT_SCROLL_AND_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    [CoreName.BARB_AND_BOATHOOK_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_BOATHOOK],
    },
    [CoreName.BARB_AND_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_BOATHOOK],
    },
    [CoreName.RIGHT_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    [CoreName.RIGHT_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    [CoreName.SCROLL_AND_ARC_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_ARC],
    },
    [CoreName.SCROLL_AND_ARC_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_ARC],
    },
    [CoreName.BARB_AND_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_BOATHOOK],
    },
    [CoreName.BARB_AND_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_BOATHOOK],
    },
    [CoreName.RIGHT_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    [CoreName.RIGHT_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_AND_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    [CoreName.LEFT_SCROLL_AND_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    [CoreName.BARB_AND_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_BOATHOOK],
    },
    [CoreName.BARB_AND_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_BOATHOOK],
    },
    [CoreName.RIGHT_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    [CoreName.RIGHT_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BOATHOOK],
    },
    [CoreName.SCROLL_AND_ARC_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_ARC],
    },
    [CoreName.SCROLL_AND_ARC_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_ARC],
    },
    [CoreName.BARB_AND_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_BOATHOOK],
    },
    [CoreName.BARB_AND_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.BARB_AND_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL],
    },
    [CoreName.LEFT_SCROLL_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL],
    },
    [CoreName.LEFT_BOATHOOK_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_BOATHOOK],
    },
    [CoreName.LEFT_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BOATHOOK],
    },
    [CoreName.DOUBLE_LEFT_BOATHOOK_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    [CoreName.DOUBLE_LEFT_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    [CoreName.SCROLL_AND_BOATHOOK_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_BOATHOOK],
    },
    [CoreName.SCROLL_AND_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_BOATHOOK],
    },
    [CoreName.SCROLL_AND_ARC_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_ARC],
    },
    [CoreName.SCROLL_AND_ARC_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_ARC],
    },
    [CoreName.BOATHOOK_AND_ARC_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    [CoreName.BOATHOOK_AND_ARC_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    [CoreName.BOATHOOK_AND_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_BARB],
    },
    [CoreName.BOATHOOK_AND_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    [CoreName.ARC_AND_BOATHOOK_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BOATHOOK],
    },
    [CoreName.ARC_AND_BOATHOOK_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BOATHOOK],
    },
    [CoreName.LEFT_ARC_AND_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC_AND_BARB],
    },
    [CoreName.LEFT_ARC_AND_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC_AND_BARB],
    },
    [CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB],
    },
    [CoreName.LEFT_SCROLL_AND_DOUBLE_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB],
    },
    [CoreName.RIGHT_BARB_AND_ARC_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB_AND_ARC],
    },
    [CoreName.RIGHT_BARB_AND_ARC_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB_AND_ARC],
    },
    [CoreName.DOUBLE_RIGHT_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_RIGHT_BARB],
    },
    [CoreName.DOUBLE_RIGHT_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_RIGHT_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    },
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BOATHOOK],
    },
    [CoreName.DOUBLE_LEFT_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    [CoreName.DOUBLE_LEFT_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_AND_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    [CoreName.LEFT_SCROLL_AND_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    [CoreName.LEFT_ARC_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    [CoreName.LEFT_ARC_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    [CoreName.BOATHOOK_AND_ARC_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    [CoreName.BOATHOOK_AND_ARC_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    [CoreName.BOATHOOK_AND_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_BARB],
    },
    [CoreName.BOATHOOK_AND_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    [CoreName.ARC_AND_BOATHOOK_DOUBLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BOATHOOK],
    },
    [CoreName.ARC_AND_BOATHOOK_DOUBLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.DOUBLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL],
    },
    [CoreName.LEFT_SCROLL_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL],
    },
    [CoreName.LEFT_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_BOATHOOK],
    },
    [CoreName.LEFT_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BOATHOOK],
    },
    [CoreName.DOUBLE_LEFT_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    [CoreName.DOUBLE_LEFT_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    [CoreName.SCROLL_AND_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_BOATHOOK],
    },
    [CoreName.SCROLL_AND_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_BOATHOOK],
    },
    [CoreName.SCROLL_AND_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_ARC],
    },
    [CoreName.SCROLL_AND_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.SCROLL_AND_ARC],
    },
    [CoreName.BOATHOOK_AND_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    [CoreName.BOATHOOK_AND_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    [CoreName.BOATHOOK_AND_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_BARB],
    },
    [CoreName.BOATHOOK_AND_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    [CoreName.ARC_AND_BOATHOOK_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BOATHOOK],
    },
    [CoreName.ARC_AND_BOATHOOK_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BOATHOOK],
    },
    [CoreName.LEFT_ARC_AND_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC_AND_BARB],
    },
    [CoreName.LEFT_ARC_AND_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC_AND_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_DOUBLE_BARB],
    },
    [CoreName.RIGHT_BARB_AND_ARC_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB_AND_ARC],
    },
    [CoreName.RIGHT_BARB_AND_ARC_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.RIGHT_BARB_AND_ARC],
    },
    [CoreName.DOUBLE_RIGHT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_RIGHT_BARB],
    },
    [CoreName.DOUBLE_RIGHT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_RIGHT_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_UP]: {
        aim: Aim.UP,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_RIGHT_BARB_TRIPLE_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.TRIPLE,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_RIGHT_BARB],
    },
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_AND_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BOATHOOK],
    },
    [CoreName.DOUBLE_LEFT_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    [CoreName.DOUBLE_LEFT_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.DOUBLE_LEFT_BOATHOOK],
    },
    [CoreName.LEFT_SCROLL_AND_BARB_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    [CoreName.LEFT_SCROLL_AND_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_AND_BARB],
    },
    [CoreName.LEFT_ARC_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    [CoreName.LEFT_ARC_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.LEFT_ARC],
    },
    [CoreName.BOATHOOK_AND_ARC_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    [CoreName.BOATHOOK_AND_ARC_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_ARC],
    },
    [CoreName.BOATHOOK_AND_BARB_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_BARB],
    },
    [CoreName.BOATHOOK_AND_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.BOATHOOK_AND_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    [CoreName.LEFT_SCROLL_DOUBLE_LEFT_BARB_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.LEFT_SCROLL_DOUBLE_LEFT_BARB],
    },
    [CoreName.ARC_AND_BOATHOOK_EX_UP]: {
        aim: Aim.UP,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BOATHOOK],
    },
    [CoreName.ARC_AND_BOATHOOK_EX_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.EX,
        ...FLAG_COMBOS[FlagComboName.ARC_AND_BOATHOOK],
    },
    [CoreName.BARE_SHAFT_UP]: {
        aim: Aim.UP,
        shafts: Shafts.SINGLE,
    },
    [CoreName.BARE_SHAFT_DOWN]: {
        aim: Aim.DOWN,
        shafts: Shafts.SINGLE,
    },
}

export {
    CORES,
}
