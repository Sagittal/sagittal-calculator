import {isUndefined, Maybe, shallowClone} from "@sagittal/general"
import {Sagittal} from "./types"

const flipSagittal = (sagittal: Maybe<Sagittal>): Maybe<Sagittal> => {
    if (isUndefined(sagittal)) return

    const flippedSagittal = shallowClone(sagittal)

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
