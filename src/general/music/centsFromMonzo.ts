import { computeMonzoSlicedToPrime, computeRatioFromMonzo, Monzo } from "../math"
import { computeCentsFromRatio } from "./centsFromRatio"

const computeCentsFromMonzo = (monzo: Monzo) => {
    const twoSlicedMonzo: Monzo<{ slice: 2 }> = computeMonzoSlicedToPrime(monzo, 2)

    const ratio = computeRatioFromMonzo(twoSlicedMonzo, { disableErrorBecauseExactValueNotRequired: true })

    return computeCentsFromRatio(ratio)
}

export {
    computeCentsFromMonzo,
}
