import { isNumber, isUndefined } from "../../../code"
import { formatReal } from "../../../io"
import { Rational, RationalDecimal } from "../../rational"
import { NumericProperties, Real } from "../types"
import { computeDecimalFromMonzo } from "./fromMonzo"
import { computeDecimalFromQuotient } from "./fromQuotient"
import { RealDecimal } from "./types"

const computeDecimalFromReal: {
    <T extends NumericProperties>(realOrRealDecimal: Rational<T> | RationalDecimal<T>): RationalDecimal<T>
    <T extends NumericProperties>(realOrRealDecimal: Real<T> | RealDecimal<T>): RealDecimal<T>,
} = <T extends NumericProperties>(realOrRealDecimal: Real<T> | RealDecimal<T>): RealDecimal<T> => {
    if (isNumber(realOrRealDecimal)) {
        return realOrRealDecimal
    }

    if (!isUndefined(realOrRealDecimal.decimal)) {
        return realOrRealDecimal.decimal
    } else if (!isUndefined(realOrRealDecimal.quotient)) {
        return computeDecimalFromQuotient(realOrRealDecimal.quotient)
    } else if (!isUndefined(realOrRealDecimal.monzo)) {
        return computeDecimalFromMonzo(realOrRealDecimal.monzo)
    }

    throw new Error(`Tried to compute decimal from real ${formatReal(realOrRealDecimal)} but no numeric representations were found.`)
}

export {
    computeDecimalFromReal,
}
