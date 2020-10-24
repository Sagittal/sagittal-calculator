import {reorient} from "./reorient"
import {Accent, Arm, ArmName, Orientation} from "./types"

const getArm = (armName: ArmName, orientation: Orientation = Orientation.WITH): Arm => {
    switch (armName) {
        case ArmName.WING:
            return [
                {accent: Accent.WING, orientation},
            ]
        case ArmName.BIRD:
            return [
                {accent: Accent.BIRD, orientation},
            ]
        // Yes, it's slightly discomforting that we're using "from" here for what is basically a meta-orientation; i.e.
        // The tick is oriented relative to the core as per normal, however the wing is oriented relative to the tick.
        case ArmName.WING_FROM_TICK:
            return [
                {accent: Accent.WING, orientation: reorient(orientation)},
                {accent: Accent.TICK, orientation},
            ]
        case ArmName.TICK:
            return [
                {accent: Accent.TICK, orientation},
            ]
        case ArmName.WING_AND_TICK:
            return [
                {accent: Accent.WING, orientation},
                {accent: Accent.TICK, orientation},
            ]
    }
}

export {
    getArm,
}
