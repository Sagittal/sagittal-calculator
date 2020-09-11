import { computeRatioFromMonzo, Monzo } from "../math"
import { computeCentsFromRatio } from "./centsFromRatio"

const computeCentsFromMonzo = (monzo: Monzo) => {
    const ratio = computeRatioFromMonzo(monzo)

    return computeCentsFromRatio(ratio)
}

export {
    computeCentsFromMonzo,
}
