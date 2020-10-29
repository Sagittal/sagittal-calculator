import {deepClone, isUndefined, Maybe} from "../../../general"
import {Sagittal} from "./types"

const flipSagittal = (sagittal: Maybe<Sagittal>): Maybe<Sagittal> => {
    if (isUndefined(sagittal)) return

    const flippedSagittal = deepClone(sagittal)

    if (flippedSagittal.down) {
        delete flippedSagittal.down
    } else {
        flippedSagittal.down = true
    }

    return flippedSagittal
}

export {
    flipSagittal,
}
