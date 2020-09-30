import { isUndefined } from "../../code"
import { computeRealFromRealOrDecimal, Real, RealDecimal } from "../../math"
import { stringify } from "../stringify"
import { formatDecimal } from "./decimal"
import { formatMonzo } from "./monzo"
import { formatQuotient } from "./quotient"
import { Formatted } from "./types"

const formatReal = (realOrRealDecimal: Real | RealDecimal, options: { align?: boolean } = {}): Formatted<Real> => {
    const { quotient, monzo, decimal } = computeRealFromRealOrDecimal(realOrRealDecimal)

    if (!isUndefined(quotient)) {
        return formatQuotient(quotient) as Formatted as Formatted<Real>
    } else if (!isUndefined(monzo)) {
        return formatMonzo(monzo) as Formatted as Formatted<Real>
    } else if (!isUndefined(decimal)) {
        return formatDecimal(decimal, options) as Formatted as Formatted<Real>
    }

    throw new Error(`Tried to format real ${stringify(realOrRealDecimal)} but it had no numeric members.`)
}

export {
    formatReal,
}
