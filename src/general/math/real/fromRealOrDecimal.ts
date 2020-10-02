import { isNumber } from "../../code"
import { IntegerDecimal, RationalDecimal, RealDecimal } from "../index"
import { Integer, Rational } from "../rational"
import { computeRealFromRealDecimal } from "./fromDecimal"
import { NumericProperties, Real } from "./types"

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  All such functions should be overloaded with all three layers like this, not just rational as many still are
//  (or some don't have anything other than plain, that is)
//  Though I do wish that could just happen kind of automatically...

const computeRealFromRealOrRealDecimal: {
    <T extends NumericProperties>(integerOrIntegerDecimal: Integer<T> | IntegerDecimal<T>): Integer<T>
    <T extends NumericProperties>(rationalOrRationalDecimal: Rational<T> | RationalDecimal<T>): Rational<T>
    <T extends NumericProperties>(realOrRealDecimal: Real<T> | RealDecimal<T>): Real<T>
} = <T extends NumericProperties>(realOrRealDecimal: Real<T> | RealDecimal<T>): any => {
    if (isNumber(realOrRealDecimal)) {
        return computeRealFromRealDecimal(realOrRealDecimal)
    }

    return realOrRealDecimal
}

export {
    computeRealFromRealOrRealDecimal,
}
