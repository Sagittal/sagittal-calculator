import {
    ACCURACY_THRESHOLD,
    Basis,
    Cents,
    computeCentsFromPitch,
    computePx,
    Pitch,
    Px,
    round,
} from "../../../../general"
import { MARGIN, X_SCALE } from "./sizes"

const computeX = (pitch: Pitch): Px =>
    round(computePx(MARGIN + computeCentsFromPitch(pitch) as Basis<Cents>, X_SCALE), ACCURACY_THRESHOLD)

export {
    computeX,
}
