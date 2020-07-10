import {X_SCALE, MARGIN} from "./sizes"

const computeX = position => {
    return X_SCALE * (MARGIN + position)
}

export {
    computeX,
}
