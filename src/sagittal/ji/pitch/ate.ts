import {
    abs,
    Abs,
    computeRationalMonzoFromRational,
    Exponent,
    IntegerDecimal,
    Prime,
    Rational,
    THREE_PRIME_INDEX,
} from "../../../general"

const computeAte = (jiPitch: Rational): Abs<IntegerDecimal & Exponent<3 & Prime>> => {
    const rationalMonzo = computeRationalMonzoFromRational(jiPitch)

    return abs(rationalMonzo[ THREE_PRIME_INDEX ] || 0) as Abs<IntegerDecimal & Exponent<3 & Prime>>
}

export {
    computeAte,
}
