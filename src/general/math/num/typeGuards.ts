import { isUndefined } from "../../code"
import { RationalNum } from "../rational"
import { isRationalDecimal } from "./decimal"
import { isRationalMonzo } from "./monzo"
import { isRationalRatio } from "./ratio"
import { Num, NumTypeParameters } from "./types"

const isRationalNum = <T extends NumTypeParameters>(num: Num<T>): num is RationalNum<T> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(monzo) && isRationalMonzo(monzo)) ||
        (!isUndefined(ratio) && isRationalRatio(ratio)) ||
        !isUndefined(decimal) && isRationalDecimal(decimal)
}

export {
    isRationalNum,
}
