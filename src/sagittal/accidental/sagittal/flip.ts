import {deepClone} from "../../../general"
import {isSagittal} from "./typeGuards"
import {NullSagittal, Sagittal} from "./types"

const flipSagittal = (sagittal: NullSagittal | Sagittal): NullSagittal | Sagittal => {
    if (!isSagittal(sagittal)) return sagittal

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
