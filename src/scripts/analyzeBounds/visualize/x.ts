import { MARGIN, X_SCALE } from "./sizes"
import { Cents } from "../../../utilities/types"

const computeX = (position: Cents) => {
    return X_SCALE * (MARGIN + position)
}

export {
    computeX,
}
