import { Decimal, DecimalNotDefaultingToPotentiallyIrrational, NumTypeParameters } from "../../../num"

const isRationalDecimal = <T extends NumTypeParameters>(
    decimal: DecimalNotDefaultingToPotentiallyIrrational,
): decimal is Decimal<T & { potentiallyIrrational: false }> => {
    return true
}

export {
    isRationalDecimal,
}
