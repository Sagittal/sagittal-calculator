import { computeMonzoSlicedToPrime, computeRatioFromMonzo, Monzo } from "../math"
import { computeCentsFromRatio } from "./centsFromRatio"

const computeCentsFromMonzo = (monzo: Monzo<number>) => {
    const twoSlicedMonzo = computeMonzoSlicedToPrime(monzo, 2)

    const ratio = computeRatioFromMonzo(twoSlicedMonzo, { disableErrorBecauseExactValueNotRequired: true })

    return computeCentsFromRatio(ratio)
}

export {
    computeCentsFromMonzo,
}
