import { isNumber, isUndefined } from "../../../code"
import { formatNum } from "../../../io"
import { Ratio, RationalDecimal } from "../../rational"
import { Num, NumTypeParameters } from "../types"
import { computeDecimalFromMonzo } from "./fromMonzo"
import { computeDecimalFromQuotient } from "./fromQuotient"
import { Decimal } from "./types"

const computeDecimalFromNum: {
    <T extends NumTypeParameters>(numOrDecimal: Ratio<T> | RationalDecimal<T>): RationalDecimal<T>
    <T extends NumTypeParameters>(numOrDecimal: Num<T> | Decimal<T>): Decimal<T>,
} = <T extends NumTypeParameters>(numOrDecimal: Num<T> | Decimal<T>): Decimal<T> => {
    if (isNumber(numOrDecimal)) {
        return numOrDecimal
    }

    if (!isUndefined(numOrDecimal.decimal)) {
        return numOrDecimal.decimal
    } else if (!isUndefined(numOrDecimal.quotient)) {
        return computeDecimalFromQuotient(numOrDecimal.quotient)
    } else if (!isUndefined(numOrDecimal.monzo)) {
        return computeDecimalFromMonzo(numOrDecimal.monzo)
    }

    throw new Error(`Tried to compute decimal from num ${formatNum(numOrDecimal)} but no numeric representations were found.`)
}

export {
    computeDecimalFromNum,
}
