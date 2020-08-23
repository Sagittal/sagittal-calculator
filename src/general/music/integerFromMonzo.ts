import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { Monzo } from "./types"

const computeIntegerFromMonzo = (monzo: Monzo) => {
    const ratio = computeRatioFromMonzo(monzo)
    const [numerator, denominator] = ratio

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer monzo ${monzo} which equals ratio ${ratio}`)
    }

    return numerator
}

export {
    computeIntegerFromMonzo,
}
