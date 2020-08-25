import { computeCentsFromRatio } from "./centsFromRatio"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { Monzo } from "./types"

const computeCentsFromMonzo = (monzo: Monzo) => {
    const ratio = computeRatioFromMonzo(monzo)

    return computeCentsFromRatio(ratio)
}

export {
    computeCentsFromMonzo,
}
