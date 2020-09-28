import { MAX_JAVASCRIPT_INTEGER_VALUE } from "../../../code"
import { formatMonzo } from "../../../io"
import { Prime, PRIMES, RationalMonzo, RationalRatio } from "../../rational"
import { Exponent } from "../../types"
import { Monzo } from "../monzo"
import { NumTypeParameters } from "../types"
import { Denominator, Numerator, Ratio } from "./types"

const computeRatioFromMonzo: {
    <T extends NumTypeParameters>(
        rationalMonzo: RationalMonzo<T>,
        { disableErrorBecauseExactValueNotRequired }?: { disableErrorBecauseExactValueNotRequired?: boolean },
    ): RationalRatio<T>,
    <T extends NumTypeParameters>(
        monzo: Monzo<T>,
        { disableErrorBecauseExactValueNotRequired }?: { disableErrorBecauseExactValueNotRequired?: boolean },
    ): Ratio<T>,
} = <T extends NumTypeParameters>(
    monzo: Monzo<T>,
    { disableErrorBecauseExactValueNotRequired }: { disableErrorBecauseExactValueNotRequired?: boolean } = {},
): Ratio<T> => {
    let numerator: Numerator<T> = 1 as Numerator<T>
    let denominator: Denominator<T> = 1 as Denominator<T>

    monzo.forEach((primeExponent: Exponent<Prime>, index: number): void => {
        if (primeExponent > 0) {
            numerator = numerator * PRIMES[ index ] ** primeExponent as Numerator<T>
        }
        if (primeExponent < 0) {
            denominator = denominator * PRIMES[ index ] ** -primeExponent as Denominator<T>
        }
    })

    if (
        !disableErrorBecauseExactValueNotRequired &&
        (numerator > MAX_JAVASCRIPT_INTEGER_VALUE || denominator > MAX_JAVASCRIPT_INTEGER_VALUE)
    ) {
        throw new Error(`Tried to convert a monzo to a ratio where a fractional part would exceed JavaScript's maximum safe integer value. ${formatMonzo(monzo)}`)
    }

    return [numerator, denominator] as Ratio<T>
}

export {
    computeRatioFromMonzo,
}