import {Basis, Cents, computeCentsFromPitch, computePx, DEFAULT_PRECISION, Px, round, Scamon} from "@sagittal/general"
import {MARGIN, X_SCALE} from "./sizes"

const computeX = (pitch: Scamon): Px =>
    round(computePx(MARGIN + computeCentsFromPitch(pitch) as Basis<Cents>, X_SCALE), DEFAULT_PRECISION)

export {
    computeX,
}
