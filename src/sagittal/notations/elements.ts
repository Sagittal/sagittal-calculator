import { Accent, Flag, Shaft } from "./types"

const SHAFT_UP = "|" as Shaft
const SHAFT_DOWN = "!" as Shaft

const WING_UP = "`|" as Accent
const WING_DOWN = ",|" as Accent

const BIRD_UP = "``|" as Accent
const BIRD_DOWN = ",,|" as Accent

const TICK_DOWN = ".|" as Accent
const TICK_UP = "'|" as Accent

const SCROLL_LEFT = ")|" as Flag
const SCROLL_RIGHT = "|(" as Flag

const BOATHOOK_LEFT = "~|" as Flag
const BOATHOOK_RIGHT = "|~" as Flag

const ARC_RIGHT = "|)" as Flag
const ARC_LEFT = "(|" as Flag

const BARB_LEFT = "/|" as Flag
const BARB_RIGHT = "|\\" as Flag

export {
    WING_UP,
    WING_DOWN,
    BIRD_UP,
    BIRD_DOWN,
    TICK_DOWN,
    TICK_UP,
    SCROLL_LEFT,
    SCROLL_RIGHT,
    BOATHOOK_LEFT,
    BOATHOOK_RIGHT,
    ARC_RIGHT,
    ARC_LEFT,
    BARB_LEFT,
    BARB_RIGHT,
    SHAFT_UP,
    SHAFT_DOWN,
}
