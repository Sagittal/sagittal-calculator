import { Decimal } from "../math"
import { computeCentsFromPitch, Pitch } from "./pitch"

const computePitchProportion = (partPitch: Pitch, wholePitch: Pitch): Decimal<{ rational: false }> =>
    computeCentsFromPitch(partPitch) / computeCentsFromPitch(wholePitch) as Decimal<{ rational: false }>

export {
    computePitchProportion,
}
