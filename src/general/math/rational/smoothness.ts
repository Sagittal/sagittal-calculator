import { isUndefined } from "../../code"
import { MULTIPLICATIVE_IDENTITY } from "../constants"
import { computeRatioFromRationalDecimal, isSmoothMonzo, isSmoothRatio, NumTypeParameters } from "../num"
import { max } from "../typedOperations"
import { SMOOTH_ROUGH_OFFSET } from "./constants"
import { computeGpf } from "./gpf"
import { computeRoughInteger } from "./roughness"
import { Integer, Primes, RationalNum, Roughness, Smoothness } from "./types"

const isSmoothInteger = (integer: Integer, smoothness: Smoothness): boolean => {
    return computeRoughInteger(integer, smoothness + SMOOTH_ROUGH_OFFSET as Roughness) === MULTIPLICATIVE_IDENTITY
}

const isSmoothRational = <S extends Primes, T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
    smoothness: S & Smoothness,
): rationalNum is RationalNum<T & { smooth: S }> => {
    let { monzo, ratio, decimal } = rationalNum

    if (isUndefined(monzo) && isUndefined(ratio) && !isUndefined(decimal)) {
        return isSmoothRatio(
            computeRatioFromRationalDecimal(decimal),
            smoothness as S & Integer as S & Smoothness,
        )
    }

    return (!isUndefined(monzo) && isSmoothMonzo(monzo, smoothness as S & Integer as S & Smoothness)) ||
        (!isUndefined(ratio) && isSmoothRatio(ratio, smoothness as S & Integer as S & Smoothness))
}

const computeRationalNumSmoothness = <S extends Primes, T extends NumTypeParameters>(
    { monzo, ratio, decimal }: RationalNum<T>,
): Smoothness => {
    if (!isUndefined(monzo)) {
        return computeGpf(monzo) as Smoothness
    }

    if (isUndefined(ratio) && !isUndefined(decimal)) {
        ratio = computeRatioFromRationalDecimal(decimal)
    }

    const [numerator, denominator] = ratio

    return max(computeGpf(numerator), computeGpf(denominator)) as Smoothness
}

export {
    isSmoothInteger,
    isSmoothRational,
    computeRationalNumSmoothness,
}
