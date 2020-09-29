import { divideNums, divideRatios, isRatio, NumOrDecimal, NumTypeParameters, RatioOrRationalDecimal } from "../math"

// TODO: instead of "NumTypeParameters" something more like "NumProps" or "NumQuals"?

// TODO: maybe Pitch should be a branded Num, and Interval another branded Num
//  So would that make a JiPitch a Ratio & Pitch?

const computeInterval: {
    <T extends NumTypeParameters>(
        fromPitch: RatioOrRationalDecimal<T>,
        toPitch: RatioOrRationalDecimal<T>,
    ): RatioOrRationalDecimal<T>,
    <T extends NumTypeParameters>(
        fromPitch: NumOrDecimal<T>,
        toPitch: NumOrDecimal<T>,
    ): NumOrDecimal<T>,
} = <T extends NumTypeParameters>(fromPitch: NumOrDecimal<T>, toPitch: NumOrDecimal<T>): any => {
    if (isRatio(fromPitch) && isRatio(toPitch)) {
        return divideRatios(toPitch, fromPitch)
    }

    return divideNums(toPitch, fromPitch)
}

export {
    computeInterval,
}
