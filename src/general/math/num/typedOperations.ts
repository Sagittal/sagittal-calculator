import { divide, subtract } from "../typedOperations"
import { computeDecimalFromNum, Decimal } from "./decimal"
import { NumParameter, NumTypeParameters } from "./types"

// TODO: this is basically "computeInterval", but in that case, I think you'd want to switch the order of the params
//  And that could live in the music/ module I suppose

const divideNums = <T extends NumTypeParameters>(
    dividend: NumParameter<T>,
    divisor: NumParameter<T>,
): Decimal<T> => {
    return divide(computeDecimalFromNum(dividend), computeDecimalFromNum(divisor))
}

// TODO: You might also want to add a divideRatios which could actually do what my original ambition was for this
//  Which is to return a Ratio with the same representation (monzo, quotient, or decimal) as the *dividend*
//  And convert the representation of the divisor as necessary to that form
//  So that you can do nice things like sum inverted monzos and whatnot to maintain a clean representation of the Num
//  Which is exactly what you'd want for a comma mean... no wait, that's going to be sum monzos then use the sqrt helper

const subtractNums = <T extends NumTypeParameters>(
    dividend: NumParameter<T>,
    divisor: NumParameter<T>,
): Decimal<T> => {
    return subtract(computeDecimalFromNum(dividend), computeDecimalFromNum(divisor))
}

export {
    divideNums,
    subtractNums,
}
