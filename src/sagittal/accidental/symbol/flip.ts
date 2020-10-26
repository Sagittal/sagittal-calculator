import {deepClone, isUndefined} from "../../../general"
import {isSagittal} from "./typeGuards"
import {Aim, NullSagittal, Sagittal} from "./types"

const flipSagittal = (sagittal: NullSagittal | Sagittal): NullSagittal | Sagittal => {
    if (!isSagittal(sagittal)) return sagittal

    const flippedSagittal = deepClone(sagittal)

    if (!isUndefined(flippedSagittal.aim)) {
        flippedSagittal.aim = flippedSagittal.aim === Aim.UP ? Aim.DOWN : Aim.UP
    }

    return flippedSagittal
}

export {
    flipSagittal,
}
