import {deepClone, isUndefined} from "../../../general"
import {Aim, Sagittal} from "./types"

const flipSagittal = (sagittal: Sagittal): Sagittal => {
    const flippedSagittal = deepClone(sagittal)

    if (!isUndefined(flippedSagittal.core)) {
        flippedSagittal.core.aim = flippedSagittal.core.aim === Aim.UP ? Aim.DOWN : Aim.UP
    }

    return flippedSagittal
}

export {
    flipSagittal,
}
