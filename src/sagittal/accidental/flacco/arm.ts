import {reorient} from "./reorient"
import {Accent, Arm, ArmId, Orientation} from "./types"

const getArm = (armId: ArmId, orientation: Orientation = Orientation.WITH): Arm => {
    switch (armId) {
        case ArmId.WING:
            return [
                {accent: Accent.WING, orientation},                                     //  `|
            ]
        case ArmId.BIRD:
            return [
                {accent: Accent.BIRD, orientation},                                     // ``|
            ]
        // Yes, it's slightly discomforting that we're using "from" here for what is basically a meta-orientation; i.e.
        // The tick is oriented relative to the core as per normal, however the wing is oriented relative to the tick.
        case ArmId.WING_FROM_TICK:
            return [
                {accent: Accent.WING, orientation: reorient(orientation)},              // ,'|
                {accent: Accent.TICK, orientation},
            ]
        case ArmId.TICK:
            return [
                {accent: Accent.TICK, orientation},                                     //  '|
            ]
        case ArmId.WING_AND_TICK:
            return [
                {accent: Accent.WING, orientation},                                     // `'|
                {accent: Accent.TICK, orientation},
            ]
    }
}

export {
    getArm,
}
