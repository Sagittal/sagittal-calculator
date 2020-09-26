import {
    abs,
    Abs,
    computeMonzoFromRationalNum,
    Exponent,
    Integer,
    Prime,
    RationalNum,
    THREE_PRIME_INDEX,
} from "../../../general"

const computeAte = (jiPitch: RationalNum): Abs<Integer & Exponent<3 & Prime>> => {
    const monzo = computeMonzoFromRationalNum(jiPitch)

    return abs(monzo[ THREE_PRIME_INDEX ] || 0) as Abs<Integer & Exponent<3 & Prime>>
}

export {
    computeAte,
}
