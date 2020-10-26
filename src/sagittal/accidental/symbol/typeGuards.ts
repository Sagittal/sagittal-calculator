import {deepEquals} from "../../../general"
import {NULL_SAGITTAL} from "./constants"
import {NullSagittal, Sagittal} from "./types"

const isSagittal = (candidateNullSagittal: Sagittal | NullSagittal): candidateNullSagittal is Sagittal =>
    !deepEquals(candidateNullSagittal, NULL_SAGITTAL)

export {
    isSagittal,
}
