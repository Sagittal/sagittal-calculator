import {computeCentsFromPitch, halveScamon} from "@sagittal/general"
import {TINA} from "@sagittal/system"

const SEMITINA = halveScamon(TINA)
const SEMITINA_CENTS = computeCentsFromPitch(SEMITINA)      // ~0.070262¢

export {
    SEMITINA,
    SEMITINA_CENTS,
}
