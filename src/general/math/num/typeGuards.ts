import { isUndefined } from "../../code"
import { RationalNum } from "../rational"
import { computeDecimalIsRational } from "./decimal"
import { computeMonzoIsRational } from "./monzo"
import { computeRatioIsRational } from "./ratio"
import { Num, NumTypeParameters } from "./types"

const computeNumIsRational = <T extends NumTypeParameters>(num: Num<T>): num is RationalNum<T> => {
    const { monzo, ratio, decimal } = num

    return (!isUndefined(monzo) && computeMonzoIsRational(monzo)) ||
        (!isUndefined(ratio) && computeRatioIsRational(ratio)) ||
        !isUndefined(decimal) && computeDecimalIsRational(decimal)
}

export {
    computeNumIsRational,
}
