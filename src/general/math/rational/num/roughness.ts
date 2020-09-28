import { isUndefined } from "../../../code"
import { NumTypeParameters } from "../../num"
import { Integer, Primes, Roughness } from "../types"
import { isRoughRationalMonzo } from "./monzo"
import { computeRationalQuotientFromRationalDecimal, isRoughRationalQuotient } from "./quotient"
import { RationalNum } from "./types"

const isRoughRationalNum = <S extends Primes, T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
    roughness: S & Roughness,
): rationalNum is RationalNum<T & { rough: S }> => {
    const { monzo, quotient, decimal } = rationalNum

    if (isUndefined(monzo) && isUndefined(quotient) && !isUndefined(decimal)) {
        return isRoughRationalQuotient(
            computeRationalQuotientFromRationalDecimal(decimal),
            roughness as S & Integer as S & Roughness,
        )
    }

    return (!isUndefined(monzo) && isRoughRationalMonzo(monzo, roughness as S & Integer as S & Roughness)) ||
        (!isUndefined(quotient) && isRoughRationalQuotient(quotient, roughness as S & Integer as S & Roughness))
}

export {
    isRoughRationalNum,
}
