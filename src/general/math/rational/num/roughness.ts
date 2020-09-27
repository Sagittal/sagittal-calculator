import { isUndefined } from "../../../code"
import { NumTypeParameters } from "../../num"
import { Integer, Primes, Roughness } from "../types"
import { isRoughRationalMonzo } from "./monzo"
import { computeRationalRatioFromRationalDecimal, isRoughRationalRatio } from "./ratio"
import { RationalNum } from "./types"

const isRoughRationalNum = <S extends Primes, T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
    roughness: S & Roughness,
): rationalNum is RationalNum<T & { rough: S }> => {
    const { monzo, ratio, decimal } = rationalNum

    if (isUndefined(monzo) && isUndefined(ratio) && !isUndefined(decimal)) {
        return isRoughRationalRatio(
            computeRationalRatioFromRationalDecimal(decimal),
            roughness as S & Integer as S & Roughness,
        )
    }

    return (!isUndefined(monzo) && isRoughRationalMonzo(monzo, roughness as S & Integer as S & Roughness)) ||
        (!isUndefined(ratio) && isRoughRationalRatio(ratio, roughness as S & Integer as S & Roughness))
}

export {
    isRoughRationalNum,
}
