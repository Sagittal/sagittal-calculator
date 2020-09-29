import { isUndefined } from "../../../code"
import { computeNumFromNumOrDecimal, NumTypeParameters } from "../../num"
import { Primes, Roughness } from "../types"
import { IntegerDecimal, RationalDecimal } from "./decimal"
import { isRoughRationalMonzo } from "./monzo"
import { computeRationalQuotientFromRationalDecimal, isRoughRationalQuotient } from "./quotient"
import { Ratio } from "./types"

const isRoughRatio = <S extends Primes, T extends NumTypeParameters>(
    ratioOrRationalDecimal: Ratio<T> | RationalDecimal<T>,
    roughness: S & Roughness,
): ratioOrRationalDecimal is Ratio<T & { rough: S }> | RationalDecimal<T & { rough: S }> => {
    const { monzo, quotient, decimal } = computeNumFromNumOrDecimal(ratioOrRationalDecimal)

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
