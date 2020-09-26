import { isUndefined } from "../../code"
import { MULTIPLICATIVE_IDENTITY } from "../constants"
import { computeIsSmoothMonzo, computeIsSmoothRatio, computeRatioFromRationalDecimal } from "../num"
import { max } from "../typedOperations"
import { SMOOTH_ROUGH_OFFSET } from "./constants"
import { computeGpf } from "./gpf"
import { computeRoughInteger } from "./roughness"
import { Integer, Primes, RationalNum, RationalNumTypeParameters, Roughness, Smoothness } from "./types"

const computeIsSmoothInteger = (integer: Integer, smoothness: Smoothness): boolean => {
    return computeRoughInteger(integer, smoothness + SMOOTH_ROUGH_OFFSET as Roughness) === MULTIPLICATIVE_IDENTITY
}

const computeIsSmoothRational = <S extends Primes, T extends RationalNumTypeParameters>(
    rationalNum: RationalNum<T>,
    smoothness: S & Smoothness,
): rationalNum is RationalNum<T & { smooth: S }> => {
    let { monzo, ratio, decimal } = rationalNum

    if (isUndefined(monzo) && isUndefined(ratio) && !isUndefined(decimal)) {
        return computeIsSmoothRatio(
            computeRatioFromRationalDecimal(decimal),
            smoothness as S & Integer as S & Smoothness,
        )
    }

    return (!isUndefined(monzo) && computeIsSmoothMonzo(monzo, smoothness as S & Integer as S & Smoothness)) ||
        (!isUndefined(ratio) && computeIsSmoothRatio(ratio, smoothness as S & Integer as S & Smoothness))
}

const computeRationalNumSmoothness = <S extends Primes, T extends RationalNumTypeParameters>(
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
    computeIsSmoothInteger,
    computeIsSmoothRational,
    computeRationalNumSmoothness,
}
