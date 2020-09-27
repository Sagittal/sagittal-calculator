import { formatMonzo } from "../../../../io"
import { Direction, Monzo, NumTypeParameters } from "../../../num"
import { Integer } from "../../types"
import { computeRatioFromMonzo } from "../ratio"

const computeIntegerFromMonzo = <T extends NumTypeParameters & { direction: Direction }>(
    monzo: Monzo<T>,
): Integer<T> => {
    const ratio = computeRatioFromMonzo(monzo)
    const [numerator, denominator] = ratio

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer monzo ${formatMonzo(monzo)}.`)
    }

    return numerator as Integer as Integer<T>
}

export {
    computeIntegerFromMonzo,
}
