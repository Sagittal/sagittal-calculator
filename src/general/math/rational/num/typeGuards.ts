import { isUndefined } from "../../../code"
import { Num, NumTypeParameters } from "../../num"
import { isRationalDecimal } from "./decimal"
import { isRationalMonzo } from "./monzo"
import { isRationalQuotient } from "./quotient"
import { Ratio } from "./types"

const isRatio = <T extends NumTypeParameters>(
    candidateRatio: Num<T>,
): candidateRatio is Ratio<T> => {
    const { monzo, quotient, decimal } = candidateRatio

    return (!isUndefined(monzo) && isRationalMonzo(monzo)) ||
        (!isUndefined(quotient) && isRationalQuotient(quotient)) ||
        !isUndefined(decimal) && isRationalDecimal(decimal)
}

export {
    isRatio,
}
