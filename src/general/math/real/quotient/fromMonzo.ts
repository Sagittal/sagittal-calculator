import { MAX_JAVASCRIPT_INTEGER_VALUE } from "../../../code"
import { formatMonzo } from "../../../io"
import { Prime, PRIMES, RationalMonzo, RationalQuotient } from "../../rational"
import { Exponent } from "../../types"
import { RealMonzo } from "../monzo"
import { NumericProperties } from "../types"
import { Denominator, Numerator, RealQuotient } from "./types"

const computeRealQuotientFromRealMonzo: {
    <T extends NumericProperties>(
        rationalMonzo: RationalMonzo<T>,
        options?: { disableErrorBecauseExactValueNotRequired?: boolean },
    ): RationalQuotient<T>,
    <T extends NumericProperties>(
        realMonzo: RealMonzo<T>,
        options?: { disableErrorBecauseExactValueNotRequired?: boolean },
    ): RealQuotient<T>,
} = <T extends NumericProperties>(
    realMonzo: RealMonzo<T>,
    { disableErrorBecauseExactValueNotRequired }: { disableErrorBecauseExactValueNotRequired?: boolean } = {},
): any => {
    let numerator: Numerator<T> = 1 as Numerator<T>
    let denominator: Denominator<T> = 1 as Denominator<T>

    realMonzo.forEach((primeExponent: Exponent<Prime>, index: number): void => {
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
        throw new Error(`Tried to convert a monzo to a quotient where a fractional part would exceed JavaScript's maximum safe integer value. ${formatMonzo(realMonzo)}`)
    }

    return [numerator, denominator] as RealQuotient<T>
}

export {
    computeRealQuotientFromRealMonzo,
}
