import { Cents } from "../../../general"
import { MARGIN, X_SCALE } from "./sizes"

const computeX = (cents: Cents) =>
    X_SCALE * (MARGIN + cents)

export {
    computeX,
}
