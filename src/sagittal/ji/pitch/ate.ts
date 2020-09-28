import {
    abs,
    Abs,
    computeRationalMonzoFromRatio,
    Exponent,
    IntegerDecimal,
    Prime,
    Ratio,
    THREE_PRIME_INDEX,
} from "../../../general"

const computeAte = (jiPitch: Ratio): Abs<IntegerDecimal & Exponent<3 & Prime>> => {
    const monzo = computeRationalMonzoFromRatio(jiPitch)

    return abs(monzo[ THREE_PRIME_INDEX ] || 0) as Abs<IntegerDecimal & Exponent<3 & Prime>>
}

export {
    computeAte,
}
