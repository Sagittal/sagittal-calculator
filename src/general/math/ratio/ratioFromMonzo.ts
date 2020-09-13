import { MAX_JAVASCRIPT_INTEGER_VALUE } from "../../code"
import { formatMonzo } from "../../io"
import { PotentiallyIrrationalMonzoParameter } from "../monzo"
import { PRIMES } from "../primes"
import { Exponent, NumericTypeParameters, Prime } from "../types"
import { Denominator, Numerator, Ratio } from "./types"

const computeRatioFromMonzo = <T extends NumericTypeParameters>(
    monzo: PotentiallyIrrationalMonzoParameter<T>,
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
