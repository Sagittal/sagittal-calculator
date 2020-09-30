import {
    divideRationals,
    divideReals,
    isRational,
    NumericProperties,
    Rational,
    RationalDecimal,
    Real,
    RealDecimal,
} from "../math"

const computeInterval: {
    <T extends NumericProperties>(
        fromPitch: Rational<T> | RationalDecimal<T>,
        toPitch: Rational<T> | RationalDecimal<T>,
    ): Rational<T> | RationalDecimal<T>,
    <T extends NumericProperties>(
        fromPitch: Real<T> | RealDecimal<T>,
        toPitch: Real<T> | RealDecimal<T>,
    ): Real<T> | RealDecimal<T>,
} = <T extends NumericProperties>(fromPitch: Real<T> | RealDecimal<T>, toPitch: Real<T> | RealDecimal<T>): any => {
    if (isRational(fromPitch) && isRational(toPitch)) {
        return divideRationals(toPitch, fromPitch)
    }

    return divideReals(toPitch, fromPitch)
}

export {
    computeInterval,
}
