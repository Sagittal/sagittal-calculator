import { isUndefined } from "../../code"
import { computeNumFromNumParameter, Num, NumOrDecimal } from "../../math"
import { stringify } from "../stringify"
import { formatDecimal } from "./decimal"
import { formatMonzo } from "./monzo"
import { formatQuotient } from "./quotient"
import { Formatted } from "./types"

const formatNum = (numParameter: NumOrDecimal, options: { align?: boolean } = {}): Formatted<Num> => {
    const { quotient, monzo, decimal } = computeNumFromNumParameter(numParameter)

    if (!isUndefined(quotient)) {
        return formatQuotient(quotient) as Formatted as Formatted<Num>
    } else if (!isUndefined(monzo)) {
        return formatMonzo(monzo) as Formatted as Formatted<Num>
    } else if (!isUndefined(decimal)) {
        return formatDecimal(decimal, options) as Formatted as Formatted<Num>
    }

    throw new Error(`Tried to format num ${stringify(numParameter)} but it had no numeric members.`)
}

export {
    formatNum,
}
