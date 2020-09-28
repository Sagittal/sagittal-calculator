import { isUndefined } from "../../../code"
import { NumTypeParameters } from "../../num"
import { max } from "../../typedOperations"
import { computeGpf } from "../gpf"
import { Integer, Primes, Smoothness } from "../types"
import { isSmoothRationalMonzo } from "./monzo"
import { computeRationalQuotientFromRationalDecimal, isSmoothRationalQuotient } from "./quotient"
import { RationalNum } from "./types"

const isSmoothRationalNum = <S extends Primes, T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
    smoothness: S & Smoothness,
): rationalNum is RationalNum<T & { smooth: S }> => {
    let { monzo, quotient, decimal } = rationalNum

    if (isUndefined(monzo) && isUndefined(quotient) && !isUndefined(decimal)) {
        return isSmoothRationalQuotient(
            computeRationalQuotientFromRationalDecimal(decimal),
            smoothness as S & Integer as S & Smoothness,
        )
    }

    return (!isUndefined(monzo) && isSmoothRationalMonzo(monzo, smoothness as S & Integer as S & Smoothness)) ||
        (!isUndefined(quotient) && isSmoothRationalQuotient(quotient, smoothness as S & Integer as S & Smoothness))
}

const computeRationalNumSmoothness = <S extends Primes, T extends NumTypeParameters>(
    { monzo, quotient, decimal }: RationalNum<T>,
): Smoothness => {
    if (!isUndefined(monzo)) {
        return computeGpf(monzo) as Smoothness
    }

    if (isUndefined(quotient) && !isUndefined(decimal)) {
        quotient = computeRationalQuotientFromRationalDecimal(decimal)
    }

    const [numerator, denominator] = quotient

    return max(computeGpf(numerator), computeGpf(denominator)) as Smoothness
}

export {
    isSmoothRationalNum,
    computeRationalNumSmoothness,
}
