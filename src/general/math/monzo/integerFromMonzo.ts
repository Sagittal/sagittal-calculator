import { formatMonzo } from "../../io"
import { computeRatioFromMonzo } from "../ratio"
import { Direction, Integer, IntegerTypeParameters, Numeric } from "../types"
import { Monzo } from "./types"

const computeIntegerFromMonzo = <T extends IntegerTypeParameters & { direction: Direction }>(
    monzo: Monzo<T>,
): Numeric<T> => {
    const ratio = computeRatioFromMonzo(monzo)
    const [numerator, denominator] = ratio

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer monzo ${formatMonzo(monzo)}.`)
    }

    return numerator as Integer as Numeric<T>
}

export {
    computeIntegerFromMonzo,
}
