import { isUndefined } from "../../../code"
import { NumTypeParameters } from "../../num"
import { Integer, Primes, Roughness } from "../types"
import { isRoughMonzo } from "./monzo"
import { computeRatioFromRationalDecimal, isRoughRatio } from "./ratio"
import { RationalNum } from "./types"

const isRoughRationalNum = <S extends Primes, T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
    roughness: S & Roughness,
): rationalNum is RationalNum<T & { rough: S }> => {
    const { monzo, ratio, decimal } = rationalNum

    if (isUndefined(monzo) && isUndefined(ratio) && !isUndefined(decimal)) {
        return isRoughRatio(
            computeRatioFromRationalDecimal(decimal),
            roughness as S & Integer as S & Roughness,
        )
    }

    return (!isUndefined(monzo) && isRoughMonzo(monzo, roughness as S & Integer as S & Roughness)) ||
        (!isUndefined(ratio) && isRoughRatio(ratio, roughness as S & Integer as S & Roughness))
}

export {
    isRoughRationalNum,
}
