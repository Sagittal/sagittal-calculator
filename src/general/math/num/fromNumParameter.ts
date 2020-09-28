import { isNumber } from "../../code"
import { Integer, IntegerParameter, Ratio, RationalParameter } from "../rational"
import { computeNumFromDecimal } from "./fromDecimal"
import { Num, NumParameter, NumTypeParameters } from "./types"

const computeNumFromNumParameter: {
    <T extends NumTypeParameters>(numParameter: IntegerParameter<T>): Integer<T>
    <T extends NumTypeParameters>(numParameter: RationalParameter<T>): Ratio<T>
    <T extends NumTypeParameters>(numParameter: NumParameter<T>): Num<T>
} = <T extends NumTypeParameters>(numParameter: NumParameter<T>): any => {
    if (isNumber(numParameter)) {
        return computeNumFromDecimal(numParameter)
    }

    return numParameter
}

export {
    computeNumFromNumParameter,
}
