import { isNumber, isUndefined } from "../../../code"
import { formatNum } from "../../../io"
import { RationalDecimal, RationalParameter } from "../../rational"
import { NumParameter, NumTypeParameters } from "../types"
import { computeDecimalFromMonzo } from "./fromMonzo"
import { computeDecimalFromQuotient } from "./fromQuotient"
import { Decimal } from "./types"

const computeDecimalFromNum: {
    <T extends NumTypeParameters>(numParameter: RationalParameter<T>): RationalDecimal<T>
    <T extends NumTypeParameters>(numParameter: NumParameter<T>): Decimal<T>,
} = <T extends NumTypeParameters>(numParameter: NumParameter<T>): Decimal<T> => {
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
