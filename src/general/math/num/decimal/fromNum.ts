import { isUndefined } from "../../../code"
import { formatNum } from "../../../io"
import { Ratio, RationalDecimal } from "../../rational"
import { Num, NumTypeParameters } from "../types"
import { computeDecimalFromMonzo } from "./fromMonzo"
import { computeDecimalFromQuotient } from "./fromQuotient"
import { Decimal } from "./types"

const computeDecimalFromNum: {
    <T extends NumTypeParameters>(num: Ratio<T>): RationalDecimal<T>
    <T extends NumTypeParameters>(num: Num<T>): Decimal<T>,
} = <T extends NumTypeParameters>(num: Num<T>): Decimal<T> => {
    if (!isUndefined(num.decimal)) {
        return num.decimal
    } else if (!isUndefined(num.quotient)) {
        return computeDecimalFromQuotient(num.quotient)
    } else if (!isUndefined(num.monzo)) {
        return computeDecimalFromMonzo(num.monzo)
    }

    throw new Error(`Tried to compute decimal from num ${formatNum(num)} but no numeric representations were found.`)
}

export {
    computeDecimalFromNum,
}