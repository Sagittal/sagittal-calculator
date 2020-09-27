import { isUndefined } from "../../../code"
import { NumTypeParameters } from "../../num"
import { max } from "../../typedOperations"
import { computeGpf } from "../gpf"
import { Integer, Primes, Smoothness } from "../types"
import { isSmoothMonzo } from "./monzo"
import { computeRatioFromRationalDecimal, isSmoothRatio } from "./ratio"
import { RationalNum } from "./types"

const isSmoothRationalNum = <S extends Primes, T extends NumTypeParameters>(
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
    isSmoothRationalNum,
    computeRationalNumSmoothness,
}
