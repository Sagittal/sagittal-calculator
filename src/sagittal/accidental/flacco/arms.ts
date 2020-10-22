import {Accent, Arm, ArmName, Orientation} from "./types"

const ARMS: Record<ArmName, Arm> = {
    [ArmName.WING_AND_TICK_AGAINST]: [
        {accent: Accent.WING, orientation: Orientation.AGAINST},
        {accent: Accent.TICK, orientation: Orientation.AGAINST},
    ],
    [ArmName.TICK_AGAINST]: [
        {accent: Accent.TICK, orientation: Orientation.AGAINST}
        ],
    [ArmName.WING_WITH_TICK_AGAINST]: [
        {accent: Accent.WING, orientation: Orientation.WITH},
        {accent: Accent.TICK, orientation: Orientation.AGAINST},
    ],
    [ArmName.BIRD_AGAINST]: [
        {accent: Accent.BIRD, orientation: Orientation.AGAINST},
    ],
    [ArmName.WING_AGAINST]: [
        {accent: Accent.WING, orientation: Orientation.AGAINST},
    ],
    [ArmName.WING_WITH]: [
        {accent: Accent.WING, orientation: Orientation.WITH},
    ],
    [ArmName.BIRD_WITH]: [
        {accent: Accent.BIRD, orientation: Orientation.WITH},
    ],
    [ArmName.WING_AGAINST_TICK_WITH]: [
        {accent: Accent.WING, orientation: Orientation.AGAINST},
        {accent: Accent.TICK, orientation: Orientation.WITH},
    ],
    [ArmName.TICK_WITH]: [
        {accent: Accent.TICK, orientation: Orientation.WITH},
    ],
    [ArmName.WING_AND_TICK_WITH]: [
        {accent: Accent.WING, orientation: Orientation.WITH},
        {accent: Accent.TICK, orientation: Orientation.WITH},
    ],
}

export {
    ARMS,
}
