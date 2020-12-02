import {MAX_JS_INTEGER_VALUE} from "../../../code"
import {formatMonzo, formatQuotient, LogTarget, saveLog} from "../../../io"
import {Prime, PRIMES} from "../../rational"
import {Exponent} from "../../types"
import {Monzo} from "../monzo"
import {NumericProperties} from "../types"
import {Denominator, Numerator, Quotient} from "./types"

const computeQuotientFromMonzo = <T extends NumericProperties>(monzo: Monzo<T>): Quotient<T> => {
    let numerator = 1 as Numerator
    let denominator = 1 as Denominator

    monzo.forEach((primeExponent: Exponent<Prime>, index: number): void => {
        if (primeExponent > 0) {
            numerator = numerator * PRIMES[index] ** primeExponent as Numerator
        }
        if (primeExponent < 0) {
            denominator = denominator * PRIMES[index] ** -primeExponent as Denominator
        }
    })

    const quotient = [numerator, denominator] as Quotient<T>

    if (numerator > MAX_JS_INTEGER_VALUE || denominator > MAX_JS_INTEGER_VALUE) {
        saveLog(`Converted a monzo to a quotient where a fractional part exceeds JavaScript's maximum safe integer value. Accuracy has been compromised: ${formatMonzo(monzo)} -> ${formatQuotient(quotient)}`, LogTarget.ERROR)
    }

    return quotient
}

export {
    computeQuotientFromMonzo,
}
