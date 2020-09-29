import { ACCURACY_THRESHOLD, Basis, Cents, computePx, Px, round } from "../../../../general"
import { MARGIN, X_SCALE } from "./sizes"

const computeX = (cents: Cents): Px =>
    round(computePx(MARGIN + cents as Basis<Cents>, X_SCALE), ACCURACY_THRESHOLD)

export {
    computeX,
}
