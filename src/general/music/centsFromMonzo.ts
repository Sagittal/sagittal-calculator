import { computeRatioFromMonzo, Monzo, NumericTypeParameters } from "../math"
import { computeCentsFromRatio } from "./centsFromRatio"

const computeCentsFromMonzo = <T extends NumericTypeParameters = { irrational: true }>(monzo: Monzo<T>) => {
    const ratio = computeRatioFromMonzo(monzo, { disableErrorBecauseExactValueNotRequired: true })

    return computeCentsFromRatio(ratio)
}

export {
    computeCentsFromMonzo,
}
