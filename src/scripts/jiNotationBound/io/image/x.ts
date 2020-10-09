import {
    Basis,
    Cents,
    computeCentsFromPitch,
    computePx,
    DEFAULT_PRECISION,
    Pitch,
    Px,
    round,
} from "../../../../general"
import { MARGIN, X_SCALE } from "./sizes"

const computeX = (pitch: Pitch): Px =>
    round(computePx(MARGIN + computeCentsFromPitch(pitch) as Basis<Cents>, X_SCALE), DEFAULT_PRECISION)

export {
    computeX,
}
