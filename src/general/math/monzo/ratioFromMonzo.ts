import { PRIMES } from "../primes"
import { Denominator, Numerator, Ratio } from "../types"
import { Monzo, MonzoTypeParameters } from "./types"

const computeRatioFromMonzo = <T extends MonzoTypeParameters>(
    monzo: Monzo<T>,
    { disableErrorBecauseExactValueNotRequired }: { disableErrorBecauseExactValueNotRequired?: boolean } = {},
): Ratio => {
    let numerator: Numerator = 1 as Numerator
    let denominator: Denominator = 1 as Denominator

    monzo.forEach((primeExponent, index) => {
        if (primeExponent > 0) {
            numerator = numerator * PRIMES[ index ] ** primeExponent as Numerator
        }
        if (primeExponent < 0) {
            denominator = denominator * PRIMES[ index ] ** -primeExponent as Denominator
        }
    })

    // TODO: clean up this double if... I just can't think straight right now
    //  - also I need to temporarily turn this off since it's breaking things and I think we need to do the refactor
    //  around minimal representations of pitches as just monzos soon
    // if (!disableErrorBecauseExactValueNotRequired) {
    //     if (numerator > MAX_JAVASCRIPT_INTEGER_VALUE || denominator > MAX_JAVASCRIPT_INTEGER_VALUE) {
    // tslint:disable-next-line max-line-length
    //         throw new Error(`Tried to convert a monzo to a ratio where a fractional part would exceed JavaScript's maximum safe integer value. ${formatMonzo(monzo)}`)
    //     }
    // }

    return [numerator, denominator]
}

export {
    computeRatioFromMonzo,
}
