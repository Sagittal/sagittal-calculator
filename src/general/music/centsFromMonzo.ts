import { computeMonzoSlicedToPrime, computeRatioFromMonzo, Monzo, MonzoTypeParameters } from "../math"
import { computeCentsFromRatio } from "./centsFromRatio"

const computeCentsFromMonzo = <T extends MonzoTypeParameters = { noninteger: true }>(monzo: Monzo<T>) => {
    const twoSlicedMonzo: Monzo<T & { slice: 2 }> = computeMonzoSlicedToPrime(monzo, 2)

    const ratio = computeRatioFromMonzo(twoSlicedMonzo, { disableErrorBecauseExactValueNotRequired: true })

    return computeCentsFromRatio(ratio)
}

export {
    computeCentsFromMonzo,
}
