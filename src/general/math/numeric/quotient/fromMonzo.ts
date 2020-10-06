import { MAX_JS_INTEGER_VALUE } from "../../../code"
import { formatMonzo } from "../../../io"
import { Prime, PRIMES } from "../../rational"
import { Exponent } from "../../types"
import { Monzo } from "../monzo"
import { NumericProperties } from "../types"
import { Denominator, Numerator, Quotient } from "./types"

const computeQuotientFromMonzo = <T extends NumericProperties>(
    monzo: Monzo<T>,
    { disableErrorBecauseExactValueNotRequired }: { disableErrorBecauseExactValueNotRequired?: boolean } = {},
): Quotient<T> => {
    let numerator = 1 as Numerator
    let denominator = 1 as Denominator

    monzo.forEach((primeExponent: Exponent<Prime>, index: number): void => {
        if (primeExponent > 0) {
            numerator = numerator * PRIMES[ index ] ** primeExponent as Numerator
        }
        if (primeExponent < 0) {
            denominator = denominator * PRIMES[ index ] ** -primeExponent as Denominator
        }
    })

    if (
        !disableErrorBecauseExactValueNotRequired &&
        (numerator > MAX_JS_INTEGER_VALUE || denominator > MAX_JS_INTEGER_VALUE)
    ) {
        throw new Error(`Tried to convert a monzo to a quotient where a fractional part would exceed JavaScript's maximum safe integer value. ${formatMonzo(monzo)}`)
    }

    return [numerator, denominator] as Quotient<T>
}

export {
    computeQuotientFromMonzo,
}
