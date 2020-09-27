import { isUndefined } from "../../../code"
import { formatNum } from "../../../io"
import { Num, NumTypeParameters } from "../types"
import { computeDecimalFromMonzo } from "./decimalFromMonzo"
import { computeDecimalFromRatio } from "./decimalFromRatio"
import { DecimalNotDefaultingToPotentiallyIrrational } from "./types"

const computeDecimalFromNum = <T extends NumTypeParameters>(
    num: Num<T>,
): DecimalNotDefaultingToPotentiallyIrrational<T> => {
    if (!isUndefined(num.decimal)) {
        return num.decimal as DecimalNotDefaultingToPotentiallyIrrational<T>
    } else if (!isUndefined(num.ratio)) {
        return computeDecimalFromRatio(num.ratio)
    } else if (!isUndefined(num.monzo)) {
        return computeDecimalFromMonzo(num.monzo)
    }

    throw new Error(`Tried to compute decimal from num ${formatNum(num)} but no numeric representations were found.`)
}

export {
    computeDecimalFromNum,
}
