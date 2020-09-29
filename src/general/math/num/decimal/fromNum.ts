import { isNumber, isUndefined } from "../../../code"
import { formatNum } from "../../../io"
import { RationalDecimal, RatioOrRationalDecimal } from "../../rational"
import { NumOrDecimal, NumTypeParameters } from "../types"
import { computeDecimalFromMonzo } from "./fromMonzo"
import { computeDecimalFromQuotient } from "./fromQuotient"
import { Decimal } from "./types"

const computeDecimalFromNum: {
    <T extends NumTypeParameters>(numParameter: RatioOrRationalDecimal<T>): RationalDecimal<T>
    <T extends NumTypeParameters>(numParameter: NumOrDecimal<T>): Decimal<T>,
} = <T extends NumTypeParameters>(numParameter: NumOrDecimal<T>): Decimal<T> => {
    if (isNumber(numParameter)) {
        return numParameter
    }

    if (!isUndefined(numParameter.decimal)) {
        return numParameter.decimal
    } else if (!isUndefined(numParameter.quotient)) {
        return computeDecimalFromQuotient(numParameter.quotient)
    } else if (!isUndefined(numParameter.monzo)) {
        return computeDecimalFromMonzo(numParameter.monzo)
    }

    throw new Error(`Tried to compute decimal from num ${formatNum(numParameter)} but no numeric representations were found.`)
}

export {
    computeDecimalFromNum,
}
