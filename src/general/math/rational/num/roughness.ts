import { isUndefined } from "../../../code"
import { computeNumFromNumParameter, NumTypeParameters } from "../../num"
import { Primes, Roughness } from "../types"
import { IntegerDecimal } from "./decimal"
import { isRoughRationalMonzo } from "./monzo"
import { computeRationalQuotientFromRationalDecimal, isRoughRationalQuotient } from "./quotient"
import { RationalParameter } from "./types"

const isRoughRatio = <S extends Primes, T extends NumTypeParameters>(
    rationalParameter: RationalParameter<T>,
    roughness: S & Roughness,
): rationalParameter is RationalParameter<T & { rough: S }> => {
    const { monzo, quotient, decimal } = computeNumFromNumParameter(rationalParameter)

    if (isUndefined(monzo) && isUndefined(quotient) && !isUndefined(decimal)) {
        return isRoughRationalQuotient(
            computeRationalQuotientFromRationalDecimal(decimal),
            roughness as S & IntegerDecimal as S & Roughness,
        )
    }

    return (!isUndefined(monzo) && isRoughRationalMonzo(monzo, roughness as S & IntegerDecimal as S & Roughness)) ||
        (!isUndefined(quotient) && isRoughRationalQuotient(quotient, roughness as S & IntegerDecimal as S & Roughness))
}

export {
    isRoughRatio,
}
