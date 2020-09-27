import { isUndefined } from "../../../code"
import { Num, NumTypeParameters } from "../../num"
import { isRationalDecimal } from "./decimal"
import { isRationalMonzo } from "./monzo"
import { isRationalRatio } from "./ratio"
import { RationalNum } from "./types"

const isRationalNum = <T extends NumTypeParameters>(num: Num<T>): num is RationalNum<T> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(monzo) && isRationalMonzo(monzo)) ||
        (!isUndefined(ratio) && isRationalRatio(ratio)) ||
        !isUndefined(decimal) && isRationalDecimal(decimal)
}

export {
    isRationalNum,
}
