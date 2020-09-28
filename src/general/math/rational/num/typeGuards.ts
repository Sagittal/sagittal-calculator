import { isUndefined } from "../../../code"
import { Num, NumTypeParameters } from "../../num"
import { isRationalDecimal } from "./decimal"
import { isRationalMonzo } from "./monzo"
import { isRationalQuotient } from "./quotient"
import { RationalNum } from "./types"

const isRationalNum = <T extends NumTypeParameters>(
    candidateRationalNum: Num<T>,
): candidateRationalNum is RationalNum<T> => {
    const { monzo, quotient, decimal } = candidateRationalNum

    return (!isUndefined(monzo) && isRationalMonzo(monzo)) ||
        (!isUndefined(quotient) && isRationalQuotient(quotient)) ||
        !isUndefined(decimal) && isRationalDecimal(decimal)
}

export {
    isRationalNum,
}
