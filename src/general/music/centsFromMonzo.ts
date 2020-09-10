import { computeRatioFromMonzo, Monzo, MonzoTypeParameters } from "../math"
import { computeCentsFromRatio } from "./centsFromRatio"

const computeCentsFromMonzo = <T extends MonzoTypeParameters = { irrational: true }>(monzo: Monzo<T>) => {
    const ratio = computeRatioFromMonzo(monzo, { disableErrorBecauseExactValueNotRequired: true })

    return computeCentsFromRatio(ratio)
}

export {
    computeCentsFromMonzo,
}
