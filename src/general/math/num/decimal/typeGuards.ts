import { NumTypeParameters } from "../types"
import { Decimal, DecimalNotDefaultingToPotentiallyIrrational } from "./types"

const isRationalDecimal = <T extends NumTypeParameters>(
    decimal: DecimalNotDefaultingToPotentiallyIrrational,
): decimal is Decimal<T & { potentiallyIrrational: false }> => {
    return true
}

export {
    isRationalDecimal,
}
