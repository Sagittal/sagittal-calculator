import { computeRatioFromMonzo, Monzo } from "../math"
import { computeCentsFromRatio } from "./centsFromRatio"
import { Cents } from "./types"

const computeCentsFromMonzo = (monzo: Monzo): Cents => {
    // TODO: regarding the "where a fractional part would exceed JavaScript's maximum safe integer value" error
    //  what if you had a try-catch here, and if it failed, you could try each 3 = 701.955 cents, and just
    //  repeatedly add/subtract
    const ratio = computeRatioFromMonzo(monzo)

    return computeCentsFromRatio(ratio)
}

export {
    computeCentsFromMonzo,
}
