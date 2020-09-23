import { isUndefined } from "../../code"
import { MULTIPLICATIVE_IDENTITY } from "../constants"
import { max } from "../typedOperations"
import { SMOOTH_ROUGH_OFFSET } from "./constants"
import { computeGpf } from "./gpf"
import { computeIsSmoothMonzo } from "./monzo"
import { computeIsSmoothRatio } from "./ratio"
import { computeRoughInteger } from "./roughness"
import { Integer, Primes, Rational, RationalTypeParameters, Roughness, Smoothness } from "./types"

const computeIsSmoothInteger = (integer: Integer, smoothness: Smoothness): boolean => {
    return computeRoughInteger(integer, smoothness + SMOOTH_ROUGH_OFFSET as Roughness) === MULTIPLICATIVE_IDENTITY
}

const computeIsSmoothRational = <S extends Primes, T extends RationalTypeParameters>(
    rational: Rational<T>,
    smoothness: S & Smoothness,
): rational is Rational<T & { smooth: S }> => {
    const { monzo, ratio } = rational

    return (!isUndefined(monzo) && computeIsSmoothMonzo(monzo, smoothness as S & Integer as S & Smoothness)) ||
        (!isUndefined(ratio) && computeIsSmoothRatio(ratio, smoothness as S & Integer as S & Smoothness))
}

const computeRationalSmoothness = <S extends Primes, T extends RationalTypeParameters>(
    { monzo, ratio }: Rational<T>,
): Smoothness => {
    if (!isUndefined(monzo)) {
        return computeGpf(monzo) as Smoothness
    }

    const [numerator, denominator] = ratio

    return max(computeGpf(numerator), computeGpf(denominator)) as Smoothness
}

export {
    computeIsSmoothInteger,
    computeIsSmoothRational,
    computeRationalSmoothness,
}
