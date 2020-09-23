import { isUndefined } from "../../code"
import { Numeric } from "../types"
import { computeNumberFromMonzo } from "./monzo"
import { computeNumberFromRatio } from "./ratio"
import { Rational, RationalTypeParameters } from "./types"

const computeNumberFromRational = <T extends RationalTypeParameters = { irrational: false }>(
    rational: Rational
): Numeric<T> => {
    let number
    if (!isUndefined(rational.ratio)) {
        number = computeNumberFromRatio(rational.ratio)
    } else if (!isUndefined(rational.monzo)) {
        number = computeNumberFromMonzo(rational.monzo)
    }

    return number as Numeric<T>
}

export {
    computeNumberFromRational,
}
