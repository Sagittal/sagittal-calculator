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
