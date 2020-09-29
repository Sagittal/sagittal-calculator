import { isNumber } from "../../code"
import { Decimal, IntegerDecimal, RationalDecimal } from "../index"
import { Integer, Ratio } from "../rational"
import { computeNumFromDecimal } from "./fromDecimal"
import { Num, NumTypeParameters } from "./types"

// TODO: all such functions should be overloaded with all three layers like this, not just rational as many still are
//  (or some don't have anything other than plain, that is)

// TODO: right, so I'm pretty sure a goal should be to have "decimal" not really occur outside of general/math
//  Because all IntegerDecimal usages should just use Integer, and all RationalDecimal (not htat there are many)
//  Should use Ratio (though maybe we should call it "Rational" since I do find myself getting confused often between
//  Quotient and Ratio. and then all places that use "number" should be able to use "Num"
//  Or perhaps we go the other way, bring back the | type, and call that Num, Rational, or Integer
//  And call the underlying things IntegerNum, IntegerDecimal; RationalNum, RationalDecimal; oh! RealNum, RealDecimal
//  At which point do we maybe just go back to Number, since Num is awkward?

const computeNumFromNumOrDecimal: {
    <T extends NumTypeParameters>(integerOrIntegerDecimal: Integer<T> | IntegerDecimal<T>): Integer<T>
    <T extends NumTypeParameters>(ratioOrRationalDecimal: Ratio<T> | RationalDecimal<T>): Ratio<T>
    <T extends NumTypeParameters>(numOrDecimal: Num<T> | Decimal<T>): Num<T>
} = <T extends NumTypeParameters>(numOrDecimal: Num<T> | Decimal<T>): any => {
    if (isNumber(numOrDecimal)) {
        return computeNumFromDecimal(numOrDecimal)
    }

    return numOrDecimal
}

export {
    computeNumFromNumOrDecimal,
}
