import { formatMonzo } from "../../../io"
import { Integer, IntegerTypeParameters } from "../../rational"
import { Monzo } from "../monzo"
import { computeRatioFromMonzo } from "../ratio"
import { Direction } from "../types"
import { Decimal } from "./types"

const computeIntegerFromMonzo = <T extends IntegerTypeParameters & { direction: Direction }>(
    monzo: Monzo<T>,
): Decimal<T> => {
    const ratio = computeRatioFromMonzo(monzo)
    const [numerator, denominator] = ratio

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer monzo ${formatMonzo(monzo)}.`)
    }

    return numerator as Integer as Decimal<T>
}

export {
    computeIntegerFromMonzo,
}
