import { isUndefined } from "../code"
import { formatNum } from "../io"
import { computeDecimalFromMonzo, computeDecimalFromRatio, Monzo, Ratio } from "./rational"
import { DecimalNotDefaultingToPotentiallyIrrational, Num, NumTypeParameters } from "./types"

const computeDecimalFromNum = <T extends NumTypeParameters>(
    num: Num<T>,
): DecimalNotDefaultingToPotentiallyIrrational<T> => {
    if (!isUndefined(num.decimal)) {
        return num.decimal as DecimalNotDefaultingToPotentiallyIrrational<T>
    } else if (!isUndefined(num.ratio)) {
        // TODO: not sure why these two type assertions are necessary...
        return computeDecimalFromRatio(num.ratio as Ratio<T>)
    } else if (!isUndefined(num.monzo)) {
        return computeDecimalFromMonzo(num.monzo as Monzo<T>)
    }

    throw new Error(`Tried to compute decimal from num ${formatNum(num, { align: false })} but no numeric representations were found.`)
}

export {
    computeDecimalFromNum,
}
