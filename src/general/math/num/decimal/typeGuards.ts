import { NumTypeParameters } from "../types"
import { Decimal, DecimalNotDefaultingToPotentiallyIrrational } from "./types"

const computeDecimalIsRational = <T extends NumTypeParameters>(
    decimal: DecimalNotDefaultingToPotentiallyIrrational,
): decimal is Decimal<T & { potentiallyIrrational: false }> => {
    return true
}

export {
    computeDecimalIsRational,
}
