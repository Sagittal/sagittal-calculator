import { computeRatioFromMonzo } from "../ratio"
import { Direction, Integer, Numeric, RationalTypeParameters } from "../types"
import { Monzo } from "./types"

const computeIntegerFromMonzo = <T extends RationalTypeParameters & { direction: Direction }>(
    monzo: Monzo<T>
): Numeric<T> => {
    const ratio = computeRatioFromMonzo(monzo)
    const [numerator, denominator] = ratio

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer monzo ${monzo} which equals ratio ${ratio}`)
    }

    return numerator as Integer as Numeric<T>
}

export {
    computeIntegerFromMonzo,
}
