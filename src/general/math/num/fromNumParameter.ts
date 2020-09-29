import { isNumber } from "../../code"
import { Integer, IntegerOrIntegerDecimal, Ratio, RatioOrRationalDecimal } from "../rational"
import { computeNumFromDecimal } from "./fromDecimal"
import { Num, NumOrDecimal, NumTypeParameters } from "./types"

const computeNumFromNumParameter: {
    <T extends NumTypeParameters>(integerOrIntegerDecimal: IntegerOrIntegerDecimal<T>): Integer<T>
    <T extends NumTypeParameters>(ratioOrRationalDecimal: RatioOrRationalDecimal<T>): Ratio<T>
    <T extends NumTypeParameters>(numOrDecimal: NumOrDecimal<T>): Num<T>
} = <T extends NumTypeParameters>(numOrDecimal: NumOrDecimal<T>): any => {
    if (isNumber(numOrDecimal)) {
        return computeNumFromDecimal(numOrDecimal)
    }

    return numOrDecimal
}

export {
    computeNumFromNumParameter,
}
