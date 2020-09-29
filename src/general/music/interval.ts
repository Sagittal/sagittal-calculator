import { Decimal, divideNums, divideRatios, isRatio, Num, NumTypeParameters, Ratio, RationalDecimal } from "../math"

// TODO: instead of "NumTypeParameters" something more like "NumProps" or "NumQuals"?

// TODO: maybe Pitch should be a branded Num, and Interval another branded Num
//  So would that make a JiPitch a Ratio & Pitch?

const computeInterval: {
    <T extends NumTypeParameters>(
        fromPitch: Ratio<T> | RationalDecimal<T>,
        toPitch: Ratio<T> | RationalDecimal<T>,
    ): Ratio<T> | RationalDecimal<T>,
    <T extends NumTypeParameters>(
        fromPitch: Num<T> | Decimal<T>,
        toPitch: Num<T> | Decimal<T>,
    ): Num<T> | Decimal<T>,
} = <T extends NumTypeParameters>(fromPitch: Num<T> | Decimal<T>, toPitch: Num<T> | Decimal<T>): any => {
    if (isRatio(fromPitch) && isRatio(toPitch)) {
        return divideRatios(toPitch, fromPitch)
    }

    return divideNums(toPitch, fromPitch)
}

export {
    computeInterval,
}
