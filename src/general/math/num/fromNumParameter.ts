import { isNumber } from "../../code"
import { Integer, IntegerOrIntegerDecimal, Ratio, RatioOrRationalDecimal } from "../rational"
import { computeNumFromDecimal } from "./fromDecimal"
import { Num, NumOrDecimal, NumTypeParameters } from "./types"

const computeNumFromNumParameter: {
    <T extends NumTypeParameters>(numParameter: IntegerOrIntegerDecimal<T>): Integer<T>
    <T extends NumTypeParameters>(numParameter: RatioOrRationalDecimal<T>): Ratio<T>
    <T extends NumTypeParameters>(numParameter: NumOrDecimal<T>): Num<T>
} = <T extends NumTypeParameters>(numParameter: NumOrDecimal<T>): any => {
    if (isNumber(numParameter)) {
        return computeNumFromDecimal(numParameter)
    }

    return numParameter
}

export {
    computeNumFromNumParameter,
}
