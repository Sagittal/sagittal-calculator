import { MAX_JAVASCRIPT_INTEGER_VALUE } from "../../../code"
import { formatMonzo } from "../../../io"
import { Prime, PRIMES, RationalMonzo, RationalQuotient } from "../../rational"
import { Exponent } from "../../types"
import { Monzo } from "../monzo"
import { NumericProperties } from "../types"
import { Denominator, Numerator, Quotient } from "./types"

const computeQuotientFromMonzo: {
    <T extends NumericProperties>(
        rationalMonzo: RationalMonzo<T>,
        options?: { disableErrorBecauseExactValueNotRequired?: boolean },
    ): RationalQuotient<T>,
    <T extends NumericProperties>(
        monzo: Monzo<T>,
        options?: { disableErrorBecauseExactValueNotRequired?: boolean },
    ): Quotient<T>,
} = <T extends NumericProperties>(
    monzo: Monzo<T>,
    { disableErrorBecauseExactValueNotRequired }: { disableErrorBecauseExactValueNotRequired?: boolean } = {},
): any => {
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
        throw new Error(`Tried to convert a monzo to a quotient where a fractional part would exceed JavaScript's maximum safe integer value. ${formatMonzo(monzo)}`)
    }

    return [numerator, denominator] as Quotient<T>
}

export {
    computeQuotientFromMonzo,
}
