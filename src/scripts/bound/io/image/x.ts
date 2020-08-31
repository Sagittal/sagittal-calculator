import { Basis, Cents, computePx, Px } from "../../../../general"
import { MARGIN, X_SCALE } from "./sizes"

const computeX = (cents: Cents): Px =>
    computePx(MARGIN + cents as Basis<Cents>, X_SCALE)

export {
    computeX,
}
