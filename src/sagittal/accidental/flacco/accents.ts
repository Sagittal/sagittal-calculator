import {Accent, AccentCombo, Orientation, Shape} from "./types"

const WING_WITH: Accent = {shape: Shape.WING, orientation: Orientation.WITH}        //  `|
const WING_AGAINST: Accent = {shape: Shape.WING, orientation: Orientation.AGAINST}  //  ,|

const BIRD_WITH: Accent = {shape: Shape.BIRD, orientation: Orientation.WITH}        // ``|
const BIRD_AGAINST: Accent = {shape: Shape.BIRD, orientation: Orientation.AGAINST}  // ,,|

const TICK_WITH: Accent = {shape: Shape.TICK, orientation: Orientation.WITH}        //  .|
const TICK_AGAINST: Accent = {shape: Shape.TICK, orientation: Orientation.AGAINST}  //  '|

const ACCENT_COMBOS = {
    [AccentCombo.TICK_AND_WING_AGAINST]: [WING_AGAINST, TICK_AGAINST],              // 5 minas against
    [AccentCombo.TICK_AGAINST]: [TICK_AGAINST],                                     // 4 minas against
    [AccentCombo.TICK_AGAINST_WING_WITH]: [WING_WITH, TICK_AGAINST],                // 3 minas against
    [AccentCombo.BIRD_AGAINST]: [BIRD_AGAINST],                                     // 2 minas against
    [AccentCombo.WING_AGAINST]: [WING_AGAINST],                                     // 1 mina against
    [AccentCombo.WING_WITH]: [WING_WITH],                                           // 1 mina with
    [AccentCombo.BIRD_WITH]: [BIRD_WITH],                                           // 2 minas with
    [AccentCombo.TICK_WITH_WING_AGAINST]: [WING_AGAINST,TICK_WITH],                 // 3 minas with
    [AccentCombo.TICK_WITH]: [TICK_WITH],                                           // 4 minas with
    [AccentCombo.TICK_AND_WING_WITH]: [WING_WITH,TICK_WITH],                        // 5 minas with
}

export {
    ACCENT_COMBOS,
    WING_WITH,
    WING_AGAINST,
    BIRD_WITH,
    BIRD_AGAINST,
    TICK_WITH,
    TICK_AGAINST,
}
