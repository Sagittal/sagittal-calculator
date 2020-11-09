import {computeCentsFromPitch, halveScamon} from "../../../general"
import {TINA} from "../../../sagittal"

const SEMITINA = halveScamon(TINA)
const SEMITINA_CENTS = computeCentsFromPitch(SEMITINA)

export {
    SEMITINA,
    SEMITINA_CENTS,
}
